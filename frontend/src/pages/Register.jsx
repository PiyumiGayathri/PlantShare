// src/pages/Register.jsx
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FaEnvelope, FaLock } from "react-icons/fa";
import logo from "../assets/plantshare.png";
import api from "../api/axios";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [focusedField, setFocusedField] = useState(null);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await api.post("/auth/register", { username, email, password });
      setLoading(false);
      navigate("/login");
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F7F9F4] flex items-center justify-center p-4">
      <div className="absolute left-4 top-4 md:left-10 md:top-10 flex items-center gap-3">
        <img src={logo} alt="PlantShare Logo" className="h-12 w-12 rounded-lg shadow-md" />
        <span className="text-[#3F7A0A] text-3xl font-extrabold tracking-wide" style={{fontFamily: 'Inter, sans-serif'}}>PlantShare</span>
      </div>
      <div className="relative z-10 w-full max-w-6xl grid md:grid-cols-2 gap-8 items-center">
        <div className="hidden md:flex flex-col justify-center items-start text-[#2B2B2B] space-y-8 px-8">
          <div className="flex items-center space-x-3">
            <img src={logo} alt="PlantShare Logo" className="h-16 w-16 rounded-lg shadow-xl" />
            <h1 className="text-5xl font-black tracking-tighter text-[#3F7A0A]">PlantShare</h1>
          </div>
          <div className="space-y-4">
            <p className="text-2xl font-light text-[#2B2B2B] leading-relaxed">
              Join our community and start sharing your plant journey!
            </p>
          </div>
        </div>
        <div className="w-full max-w-md mx-auto">
          <div className="bg-[#EFEDE6] border border-[#C8A96A] rounded-3xl shadow-2xl p-8 md:p-10 hover:border-[#C8A96A]/80 transition duration-300">
            <div className="md:hidden flex flex-col items-center mb-8">
              <img src={logo} alt="PlantShare Logo" className="h-16 w-16 rounded-lg shadow-xl mb-4" />
              <h1 className="text-3xl font-bold text-[#3F7A0A]">PlantShare</h1>
              <p className="text-[#2B2B2B] text-sm mt-2">Grow together, share naturally</p>
            </div>
            <div className="hidden md:block mb-8">
              <h2 className="text-3xl font-bold text-[#3F7A0A] mb-2">Create Account</h2>
              <p className="text-[#2B2B2B]">Sign up for PlantShare</p>
            </div>
            {error && (
              <div className="mb-6 bg-red-500/20 border border-red-500/50 backdrop-blur-sm text-red-200 px-4 py-3 rounded-xl text-sm animate-pulse">
                <div className="flex items-center space-x-2">
                  <span className="text-lg">⚠️</span>
                  <span>{error}</span>
                </div>
              </div>
            )}
            <form onSubmit={handleRegister} className="space-y-6">
              <div className="space-y-2">
                <label className="block text-white font-semibold text-sm tracking-wide">
                  Username
                </label>
                <div className="relative group">
                  <div className={`absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl opacity-0 group-focus-within:opacity-100 transition duration-300 blur`}></div>
                  <div className="relative bg-slate-900/50 backdrop-blur-sm border-2 border-white/20 rounded-2xl p-4 flex items-center space-x-3 group-focus-within:border-white/40 transition duration-300">
                    <input
                      type="text"
                      placeholder="Your username"
                      value={username}
                      onChange={e => setUsername(e.target.value)}
                      onFocus={() => setFocusedField("username")}
                      onBlur={() => setFocusedField(null)}
                      required
                      className="w-full bg-transparent text-white placeholder-gray-500 focus:outline-none text-base"
                    />
                  </div>
                </div>
              </div>
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
                      onChange={e => setEmail(e.target.value)}
                      onFocus={() => setFocusedField("email")}
                      onBlur={() => setFocusedField(null)}
                      required
                      className="w-full bg-transparent text-white placeholder-gray-500 focus:outline-none text-base"
                    />
                  </div>
                </div>
              </div>
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
                      onChange={e => setPassword(e.target.value)}
                      onFocus={() => setFocusedField("password")}
                      onBlur={() => setFocusedField(null)}
                      required
                      className="w-full bg-transparent text-white placeholder-gray-500 focus:outline-none text-base"
                    />
                  </div>
                </div>
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 text-white font-bold py-4 rounded-2xl shadow-lg hover:shadow-2xl hover:from-green-400 hover:via-emerald-400 hover:to-teal-400 transform hover:scale-105 active:scale-95 transition duration-300 disabled:opacity-60 disabled:cursor-not-allowed disabled:transform disabled:hover:scale-100 text-lg tracking-wide mt-8"
              >
                {loading ? (
                  <span className="flex items-center justify-center space-x-2">
                    <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></div>
                    <span>Registering...</span>
                  </span>
                ) : (
                  "Create Account"
                )}
              </button>
            </form>
            <div className="flex items-center my-8">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
              <span className="px-4 text-gray-400 text-sm font-medium">Already have an account?</span>
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
            </div>
            <p className="text-center text-gray-300 text-base">
              <Link
                to="/login"
                className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500 font-bold hover:from-green-300 hover:to-emerald-400 transition duration-200 cursor-pointer"
              >
                Login here
              </Link>
            </p>
            <p className="text-center text-gray-500 text-xs mt-8 leading-relaxed">
              By registering, you agree to our Terms of Service and Privacy Policy
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