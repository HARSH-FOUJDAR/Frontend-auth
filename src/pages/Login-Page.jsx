import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { BiSolidShow } from "react-icons/bi";
import { FaEyeSlash } from "react-icons/fa6";
import Footer from "../components/Footer";
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
        "https://auth-backend-zlre.vercel.app/auth/Login",
        {
          email,
          password,
        },
        { withCredentials: true }
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
      <main className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-50 dark:from-black dark:to-gray-900 text-gray-800 dark:text-gray-200">
        <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
          <form
            onSubmit={handleSubmit}
            className="w-full  max-w-md bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 p-8 w-full"
          >
            <h2 className="text-2xl font-bold text-center text-gray-800">
              Login your account
            </h2>
            <div>
              <label className="block text-sm font-medium text-gray-100 mb-1">
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
              <label className="block text-sm font-medium text-gray-100 mb-1">
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
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-gray-100">
                <input type="checkbox" className="rounded border-gray-300" />
                Remember me
              </label>

              <a
                href="/forgotpassword"
                className="text-blue-600  hover:underline"
              >
                <Link to="/forgotpassword">Forgot Password?</Link>
              </a>
            </div>
            <br />
            <button
              type="submit"
              className={`w-full py-2 rounded-md font-medium text-white ${
                loading
                  ? "bg-gray-300 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-500 cursor-pointer"
              } transition-all duration-200 `}
            >
              {loading ? "Loading... " : "Login"}
            </button>
            <div className="flex items-center my-6">
              <div className="flex-grow border-t"></div>
              <span className="mx-3 text-sm text-gray-300">
                Or continue with
              </span>
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
      </main>
    </>
  );
};

export default Login;
