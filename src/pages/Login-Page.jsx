import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
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
        { withCredentials: true }
      );

      toast.success(data.message);
      localStorage.setItem("token", data.token);

      navigate("/home");
    } catch (err) {
      console.error(err);
      toast.error("Login failed plese try again  email or password");
    }
    finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100 px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>

        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 border rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 border rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button
          type="submit"
          className="w-full py-2 rounded-lg cursor-pointer bg-blue-600 text-white"
        >
           {loading?"Loading...":"Login"}
        </button>
        <div className="mt-4 ">
          <Link to="/signup">
            <button className="w-full py-2  rounded-lg cursor-pointer bg-orange-600 text-white">
              Sign Up
            </button>
          </Link>
          <p className="mt-2 text-center text-blue-600 underline">
            <Link to="/forgotpassword">Forgot Password?</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
