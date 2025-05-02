import axios from 'axios';

const api = axios.create({
  baseURL: '/api', // Replace with your API base URL
  withCredentials: true, // Send cookies with requests
});

// Request interceptor
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;

    // If the error status is 401 and there is no originalRequest._retry flag,
    // it means the token has expired and we need to refresh it
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        // Call refresh token API
        const rs = await api.post('/refresh'); // Replace with your refresh API endpoint

        // If refresh token call is successful, update the access token
        if (rs.status === 200) {
          localStorage.setItem('accessToken', rs.data.accessToken);
          // Retry the original request with the new token
          api.defaults.headers.common['Authorization'] = `Bearer ${rs.data.accessToken}`;
          return api(originalRequest);
        }
      } catch (err) {
        // Handle refresh error (e.g., redirect to login)
        console.error('Refresh token error:', err);
        localStorage.removeItem('accessToken');
        //window.location.href = '/login'; // Redirect to login page
        return Promise.reject(err);

      }
    }
    return Promise.reject(error);
  }
);


const get = (url, queryParams = {}, config = {}) => {
  const queryString = Object.keys(queryParams)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(queryParams[key])}`)
    .join('&');    
    const fullUrl = queryString ? `${url}?${queryString}` : url;
        
    const controller = new AbortController();
    const signal = controller.signal;
    const request = api.get(fullUrl, {...config,signal});
    const cancel = () => controller.abort();
    const promise = new Promise((resolve, reject) => {
        request
            .then((response) => resolve(response))
            .catch((error) => {
                if (axios.isCancel(error)) {
                  console.log("Request canceled:", error.message);
                } else {
                  reject(error);
                }
              });
      });
    return { promise, cancel };
};

const post = (url, data, config = {}) => {
    const controller = new AbortController();
    const signal = controller.signal;
    const request = api.post(url, data, { ...config,signal});
    const cancel = () => controller.abort();
    const promise = new Promise((resolve, reject) => {
        request
            .then((response) => resolve(response))
            .catch((error) => {
                if (axios.isCancel(error)) {
                  console.log("Request canceled:", error.message);
                } else {
                  reject(error);
                }
              });
      });
      return { promise, cancel };
};

export { get, post };