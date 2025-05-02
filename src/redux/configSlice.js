import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: null,
  status: 'idle',
};

const configSlice = createSlice({
  name: 'config',
  initialState,
  reducers: {
    setConfig: (state, action) => {
      state.data = action.payload;
      state.status = 'success';
    },
  },
});

export const { setConfig } = configSlice.actions;
export default configSlice.reducer;