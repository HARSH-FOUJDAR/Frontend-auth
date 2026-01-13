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
        `https://auth-backend-xv7v.onrender.com/auth/resetpassword/${token}`,
        { newPassword: password }
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
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md border">
        {/* Header */}
        <div className="border-b px-6 py-4">
          <h2 className="text-xl font-semibold text-gray-800">
            Reset Password
          </h2>
          <p className="text-sm text-gray-600 mt-1">
            Create a new password for your account
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="px-6 py-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              New Password
            </label>
            <input
              type={showpassword ? "text" : "password"}
              placeholder="Minimum 6 characters"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />

            {showpassword ? (
              <BiSolidShow onClick={()=>setShowpassword(false)} className="relative bottom-8 cursor-pointer left-89 text-lg"></BiSolidShow>
            ) : (
              <FaEyeSlash onClick={()=>setShowpassword(true)} className="relative bottom-7.5 cursor-pointer left-89 text-lg"></FaEyeSlash>
            )}
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-2 rounded-md font-medium text-black ${
              loading
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-yellow-400 hover:bg-yellow-500"
            }`}
          >
            {loading ? "Resetting..." : "Reset Password"}
          </button>
        </form>

        {/* Footer */}
        <div className="border-t px-6 py-4 text-sm text-center text-gray-600">
          Your password must be at least 6 characters
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
