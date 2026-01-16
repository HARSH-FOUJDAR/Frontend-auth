import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { BiSolidShow } from "react-icons/bi";
import { FaEyeSlash } from "react-icons/fa6";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/home");
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await axios.post(
        "https://auth-backend-xv7v.onrender.com/auth/Login",
        {
          email,
          password,
        },
       
      );
      toast.success(data.message);
      localStorage.setItem("token", data.token);

      navigate("/home");
    } catch (err) {
      console.error(err);
      toast.error("Login failed plese try again  email or password");
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-lg shadow-md w-full max-w-md"
        >
          <h2 className="text-2xl font-bold text-center text-gray-800">
            Login your account
          </h2>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email address
            </label>
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none mb-4"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none mb-4"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {showPassword ? (
              <BiSolidShow
                onClick={() => setShowPassword(false)}
                className="relative bottom-12 cursor-pointer left-88 text-lg"
              ></BiSolidShow>
            ) : (
              <FaEyeSlash
                onClick={() => setShowPassword(true)}
                className="relative bottom-12 cursor-pointer left-88 text-lg "
              ></FaEyeSlash>
            )}
          </div>
          <div class="flex items-center justify-between text-sm">
            <label class="flex items-center gap-2 text-gray-600">
              <input type="checkbox" class="rounded border-gray-300" />
              Remember me
            </label>

            <a href="/forgotpassword" class="text-blue-600 hover:underline">
              <Link to="/forgotpassword">Forgot Password?</Link>
            </a>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition mt-4 mb-2 cursor-pointer"
          >
            {loading ? "Loading... " : "Login"}
          </button>
          <div className="flex items-center my-6">
            <div className="flex-grow border-t"></div>
            <span className="mx-3 text-sm text-gray-500">Or continue with</span>
            <div className="flex-grow border-t"></div>
          </div>

          <div className="mt-4 ">
            <Link to="/signup">
              <button className="w-full py-2  rounded-lg cursor-pointer bg-orange-600 text-white">
                Sign Up
              </button>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
