import axios from "axios";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { BiSolidShow } from "react-icons/bi";
import { FaEyeSlash } from "react-icons/fa6";
const ResetPassword = () => {
  const { token } = useParams();
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showpassword, setShowpassword] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password.length < 6) {
      return toast.error("Password must be at least 6 characters");
    }

    setLoading(true);

    try {
      const { data } = await axios.post(
        `https://auth-backend-zlre.vercel.app/auth/reset-password/${token}`,
        { newPassword: password },
        { withCredentials: true }
      );

      toast.success(data.message);
      setTimeout(() => navigate("/"), 2000);
    } catch (error) {
      toast.error(error.response?.data?.message || "Invalid or Expired Link");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-50 dark:from-black dark:to-gray-900 text-gray-800 dark:text-gray-200">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
        {/* Header */}
        <div className="border-b border-gray-200 dark:border-gray-700 px-6 py-4 text-center">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
            Reset Password
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
            Create a new password for your account
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="px-6 py-6 space-y-6 relative">
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              New Password
            </label>
            <input
              type={showpassword ? "text" : "password"}
              placeholder="Minimum 6 characters"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
            />

            {/* Show/Hide Icon */}
            {showpassword ? (
              <BiSolidShow
                onClick={() => setShowpassword(false)}
                className="absolute top-12 bottom-10 right-3 transform -translate-y-1/2 cursor-pointer text-gray-600 dark:text-gray-300 text-lg"
              />
            ) : (
              <FaEyeSlash
                onClick={() => setShowpassword(true)}
                className="absolute top-12 bottom- right-3 transform -translate-y-1/2 cursor-pointer text-gray-600 dark:text-gray-300 text-lg"
              />
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-2 rounded-md font-medium text-black ${
              loading
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-yellow-400 hover:bg-yellow-500"
            } transition-all duration-200`}
          >
            {loading ? "Resetting..." : "Reset Password"}
          </button>
        </form>

        {/* Footer */}
        <div className="border-t border-gray-200 dark:border-gray-700 px-6 py-4 text-sm text-center text-gray-600 dark:text-gray-400">
          Your password must be at least 6 characters
        </div>
      </div>
    </main>
  );
};

export default ResetPassword;
