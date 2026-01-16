import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { BiSolidShow } from "react-icons/bi";
import { Link } from "react-router-dom";
import { FaEyeSlash } from "react-icons/fa6";
const Signup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showpassword, setShowpassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { data } = await axios.post(
        "https://auth-backend-zlre.vercel.app/auth/signup",
        {
          email,
          password,
        },
        { withCredentials: true }
      );
      toast.success(data.message);
      setTimeout(() => navigate("/"), 100); // redirect after signup
    } catch (error) {
      toast.error(error.response?.data?.message || "Signup failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <main className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-50 dark:from-black dark:to-gray-900 text-gray-800 dark:text-gray-200">
        <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
          {/* <!-- Form --> */}
          <form
            onSubmit={handleSubmit}
            className="w-full  max-w-md bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 p-8 w-full"
          >
            <h2 className="text-2xl font-bold text-center text-gray-800">
              Create your account
            </h2>

            <div className="mt-4">
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
                New Password
              </label>
              <input
                type={showpassword ? "text" : "password"}
                placeholder="New Password"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none mb-4"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              {showpassword ? (
                <BiSolidShow
                  onClick={() => setShowpassword(false)}
                  className="relative bottom-12 cursor-pointer left-88 text-lg"
                ></BiSolidShow>
              ) : (
                <FaEyeSlash
                  onClick={() => setShowpassword(true)}
                  className="relative bottom-12 cursor-pointer left-88 text-lg"
                ></FaEyeSlash>
              )}
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full py-2 rounded-lg ${
                loading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600"
              } text-white  font-semibold mt-4`}
            >
              {loading ? "Signing up..." : "Sign Up"}
            </button>
            <div className="mt-4 text-center text-white  underline">
              <Link to="/">Already have an account? Login</Link>
            </div>
          </form>
        </div>
      </main>
    </>
  );
};

export default Signup;
