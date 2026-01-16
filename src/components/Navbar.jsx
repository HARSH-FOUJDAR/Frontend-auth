import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
const Navbar = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/");
    }
  }, [navigate]);
  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-900 dark:bg-black h-20 border-b border-gray-700 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between py-4 px-10">
        <div className="text-2xl font-bold text-white">AuthApp</div>
        <div className="flex gap-10">
          <a
            href="/"
            className="text-white mx-4 hover:text-yellow-400 transition"
          >
            Login
          </a>
          <a
            href="/signup"
            className="text-white mx-4 hover:text-yellow-400 transition"
          >
            Sign Up
          </a>
        </div>
        <button
          onClick={() => {
            localStorage.removeItem("token");
            navigate("/");
          }}
          className="flex items-center justify-center gap-2 px-6 py-2 border-2 border-white rounded-md text-white font-medium
     hover:bg-white hover:text-black transition-all duration-300 ease-in-out cursor-pointer
      active:scale-95"
        >
          Log out
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
