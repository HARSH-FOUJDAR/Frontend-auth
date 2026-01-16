import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { data } = await axios.post(
        "https://auth-backend-zlre.vercel.app/auth/forgotpassword",
        { email },
        { withCredentials: true }
      );

      toast.success(data.message);
      setEmail("");
    } catch (err) {
      toast.error(err.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-50 dark:from-black dark:to-gray-900 text-gray-800 dark:text-gray-200">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
        {/* Header */}
        <div className="border-b px-6 py-4">
          <h2 className="text-xl font-semibold text-gray-100">
            Forgot Password
          </h2>
          <p className="text-sm text-gray-100 mt-1">
            Enter your registered email address
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="px-6 py-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-100 mb-1">
              Email address
            </label>
            <input
              type="email"
              placeholder="example@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-2 rounded-md font-medium text-white ${
              loading
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-orange-600 cursor-pointer"
            } `}
          >
            {loading ? "Sending..." : "Send Reset Link"}
          </button>
        </form>

        {/* Footer */}
        <div className="border-t px-6 py-4 text-sm text-center text-gray-100">
          We’ll send you a link to reset your password
        </div>
      </div>
    </main>
  );
};

export default ForgetPassword;
