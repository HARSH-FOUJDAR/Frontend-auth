import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { BiSolidShow } from "react-icons/bi";
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
        "https://auth-backend-xv7v.onrender.com/auth/signup",
        {
          email,
          password,
        },
      
      );
      toast.success(data.message);
      setTimeout(() => navigate("/"), 2000); // redirect after signup
    } catch (error) {
      toast.error(error.response?.data?.message || "Signup failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
        <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg">
          {/* <!-- Form --> */}
          <form onSubmit={handleSubmit}>
            <h2 className="text-2xl font-bold text-center text-gray-800">
              Create your account
            </h2>

            <div className="mt-4">
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
              } text-white cursor-pointer font-semibold mt-4`}
            >
              {loading ? "Signing up..." : "Sign Up"}
            </button>
            <div className="mt-4 text-center text-blue-600  underline"></div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
