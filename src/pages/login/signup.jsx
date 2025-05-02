import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [showRePassword, setShowRePassword] = useState(false);
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };
  const handleToggleRePassword = () => {
    setShowRePassword(!showRePassword);
  };
  const navigate = useNavigate();


  const classes = {
    input:
      "w-full px-4 py-3 bg-gray-50 border border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-opacity-50 focus:ring-coral-500 focus:border-coral-500",
    btn: "p-1 text-gray-500 hover:text-gray-700 focus:outline-none cursor-pointer",
  };

  return (
    <div
      className="min-h-screen flex flex-col justify-center items-center py-8 px-4"
      style={{ backgroundColor: "var(--color-surface)" }}
    >
      <div className="w-full max-w-md">
        {/* Signup Card */}
        <div
          className="p-8 rounded-xl bg-white shadow-lg relative"
          style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.05)" }}
        >
          <h2 className="text-2xl text-center font-semibold text-gray-800 mb-8">
            Create account
          </h2>

          <div className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                className={classes.input}
                style={{ backgroundColor: "#f9f5f5" }}
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <label
                htmlFor="username"
                className="block mb-2 text-sm font-medium text-gray-700"
              >
                Username
              </label>
              <input
                id="username"
                type="text"
                className={classes.input}
                style={{ backgroundColor: "#f9f5f5" }}
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  className={`${classes.input} pr-20`}
                  style={{ backgroundColor: "#f9f5f5" }}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                  <button
                    type="button"
                    onClick={handleTogglePassword}
                    className={classes.btn}
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>
            </div>
            <div>
              <label
                htmlFor="repassword"
                className="block mb-2 text-sm font-medium text-gray-700"
              >
                Re-enter Password
              </label>
              <div className="relative">
                <input
                  id="repassword"
                  type={showRePassword ? "text" : "password"}
                  className={`${classes.input} pr-20`}
                  style={{ backgroundColor: "#f9f5f5" }}
                  placeholder="Re-enter your password"
                  value={rePassword}
                  onChange={(e) => setRePassword(e.target.value)}
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                  <button
                    type="button"
                    onClick={handleToggleRePassword}
                    className={classes.btn}
                  >
                    {showRePassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 px-4 mt-6 bg-coral-500 text-white font-medium rounded-lg hover:bg-coral-600 focus:outline-none focus:ring-2 focus:ring-coral-500 focus:ring-opacity-50 transition-colors cursor-pointer"
              style={{ backgroundColor: "#e76f51", borderRadius: "8px" }}
            >
              Create
            </button>

            <div className="flex justify-center items-center pt-2">
              <span className="text-sm text-gray-600">
                Already have an account?
              </span>
              <a onClick={() => navigate('/')}

                className="ml-1 text-sm text-coral-500 hover:underline cursor-pointer"
                style={{ color: "#e76f51" }}
              >

                Log in
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};