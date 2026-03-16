import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FaEnvelope, FaLock, FaCheckCircle } from "react-icons/fa";
import logo from "../assets/plantshare.png";
import api from "../api/axios";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await api.post("/auth/login", {
        email,
        password,
      });

      console.log(res.data);
      localStorage.setItem("token", res.data.token);
      navigate("/feed");
    } catch (err) {
      console.log(err);
      setError(err.response?.data?.message || "Login failed. Please try again.");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F7F9F4] flex items-center justify-center p-4">
      {/* Animated Background Elements */}
      

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-6xl grid md:grid-cols-2 gap-8 items-center">
        
        {/* Left Side - Brand Section */}
        <div className="hidden md:flex flex-col justify-center items-start text-[#2B2B2B] space-y-8 px-8">
          <div className="flex items-center space-x-3">
            <img src={logo} alt="PlantShare Logo" className="h-16 w-16 rounded-lg shadow-xl" />
            <h1 className="text-5xl font-black tracking-tighter text-[#3F7A0A]">PlantShare</h1>
          </div>
          <div className="space-y-4">
            <p className="text-2xl font-light text-[#2B2B2B] leading-relaxed">
              Connect with plant enthusiasts worldwide. Share your garden, grow your community.
            </p>
            <div className="space-y-3 pt-6">
              <div className="flex items-center space-x-3 text-[#3F7A0A]">
                <FaCheckCircle className="text-[#C8A96A] text-xl" />
                <span className="text-lg">Share your plant collections</span>
              </div>
              <div className="flex items-center space-x-3 text-[#3F7A0A]">
                <FaCheckCircle className="text-[#C8A96A] text-xl" />
                <span className="text-lg">Get care tips from experts</span>
              </div>
              <div className="flex items-center space-x-3 text-[#3F7A0A]">
                <FaCheckCircle className="text-[#C8A96A] text-xl" />
                <span className="text-lg">Join our thriving community</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Login Card */}
        <div className="w-full max-w-md mx-auto">
          <div className="bg-[#EFEDE6] border border-[#C8A96A] rounded-3xl shadow-2xl p-8 md:p-10 hover:border-[#C8A96A]/80 transition duration-300">
            
            {/* Mobile Logo */}
            <div className="md:hidden flex flex-col items-center mb-8">
              <img src={logo} alt="PlantShare Logo" className="h-16 w-16 rounded-lg shadow-xl mb-4" />
              <h1 className="text-3xl font-bold text-[#3F7A0A]">PlantShare</h1>
              <p className="text-[#2B2B2B] text-sm mt-2">Grow together, share naturally</p>
            </div>

            {/* Desktop Logo Text */}
            <div className="hidden md:block mb-8">
              <h2 className="text-3xl font-bold text-[#3F7A0A] mb-2">Welcome Back</h2>
              <p className="text-[#2B2B2B]">Login to your PlantShare account</p>
            </div>

            {/* Error Message */}
            {error && (
              <div className="mb-6 bg-red-500/20 border border-red-500/50 backdrop-blur-sm text-red-200 px-4 py-3 rounded-xl text-sm animate-pulse">
                <div className="flex items-center space-x-2">
                  <span className="text-lg">⚠️</span>
                  <span>{error}</span>
                </div>
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleLogin} className="space-y-6">
              {/* Email Field */}
              <div className="space-y-2">
                <label className="block text-white font-semibold text-sm tracking-wide">
                  Email Address
                </label>
                <div className="relative group">
                  <div className={`absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl opacity-0 group-focus-within:opacity-100 transition duration-300 blur`}></div>
                  <div className="relative bg-slate-900/50 backdrop-blur-sm border-2 border-white/20 rounded-2xl p-4 flex items-center space-x-3 group-focus-within:border-white/40 transition duration-300">
                    <FaEnvelope className="text-green-400 text-xl flex-shrink-0" />
                    <input
                      type="email"
                      placeholder="you@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      onFocus={() => setFocusedField("email")}
                      onBlur={() => setFocusedField(null)}
                      required
                      className="w-full bg-transparent text-white placeholder-gray-500 focus:outline-none text-base"
                    />
                  </div>
                </div>
              </div>

              {/* Password Field */}
              <div className="space-y-2">
                <label className="block text-white font-semibold text-sm tracking-wide">
                  Password
                </label>
                <div className="relative group">
                  <div className={`absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl opacity-0 group-focus-within:opacity-100 transition duration-300 blur`}></div>
                  <div className="relative bg-slate-900/50 backdrop-blur-sm border-2 border-white/20 rounded-2xl p-4 flex items-center space-x-3 group-focus-within:border-white/40 transition duration-300">
                    <FaLock className="text-green-400 text-xl flex-shrink-0" />
                    <input
                      type="password"
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      onFocus={() => setFocusedField("password")}
                      onBlur={() => setFocusedField(null)}
                      required
                      className="w-full bg-transparent text-white placeholder-gray-500 focus:outline-none text-base"
                    />
                  </div>
                </div>
              </div>

              {/* Login Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 text-white font-bold py-4 rounded-2xl shadow-lg hover:shadow-2xl hover:from-green-400 hover:via-emerald-400 hover:to-teal-400 transform hover:scale-105 active:scale-95 transition duration-300 disabled:opacity-60 disabled:cursor-not-allowed disabled:transform disabled:hover:scale-100 text-lg tracking-wide mt-8"
              >
                {loading ? (
                  <span className="flex items-center justify-center space-x-2">
                    <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></div>
                    <span>Logging in...</span>
                  </span>
                ) : (
                  "Login to PlantShare"
                )}
              </button>
            </form>

            {/* Divider */}
            <div className="flex items-center my-8">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
              <span className="px-4 text-gray-400 text-sm font-medium">New here?</span>
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
            </div>

            {/* Register Link */}
            <p className="text-center text-gray-300 text-base">
              Don't have an account?{" "}
              <Link
                to="/register"
                className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500 font-bold hover:from-green-300 hover:to-emerald-400 transition duration-200 cursor-pointer"
              >
                Create one now
              </Link>
            </p>

            {/* Footer */}
            <p className="text-center text-gray-500 text-xs mt-8 leading-relaxed">
              By logging in, you agree to our Terms of Service and Privacy Policy
            </p>
          </div>
        </div>
      </div>

      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
          
          body {
            font-family: 'Inter', sans-serif;
          }

          input::placeholder {
            color: rgba(209, 213, 219, 0.5);
          }

          @keyframes gradient-shift {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
          }

          .animate-gradient {
            animation: gradient-shift 6s ease infinite;
          }
        `}
      </style>
    </div>
  );
}