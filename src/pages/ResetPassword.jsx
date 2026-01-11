import axios from "axios";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const ResetPassword = () => {
  const { token } = useParams();
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  const handelSubmit = async (e) => {
    e.preventDefault();
    setMsg("");
    setError("");
    setLoading(true);

    try {
      const { data } = await axios.post(
        `https://auth-backend-xv7v.onrender.com/auth/resetpassword/${token}`,
        { newPassword: password },
        { withCredentials: true }
      );
      toast.success(data.message);
      setTimeout(() => navigate("/"), 2000);
    } catch (error) {
      toast.error("Invelid Expiry Link");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100 px-4">
      <form
        onSubmit={handelSubmit}
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Reset Password</h2>

        <input
          type="password"
          placeholder="Enter your new password"
          className="w-full p-3 border rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button
          className={`w-full py-2 rounded-lg ${loading ? "bg-gray-400" : "bg-blue-600"} text-white`}
          disabled={loading}
        >
          {loading ? "Resetting..." : "Reset Password"}
        </button>

        {msg && <p className="text-green-600 mt-3 text-center">{msg}</p>}
        {error && <p className="text-red-600 mt-3">{error}</p>}
      </form>
    </div>
  );
};

export default ResetPassword;
