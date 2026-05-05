import { Link } from "react-router-dom";
import { useState } from "react";
import { FaGoogle, FaGithub, FaFacebookF, FaEyeSlash } from "react-icons/fa";

function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="h-screen flex items-center justify-center relative overflow-hidden bg-[#1e2f7a]">
      

      {/* 🔹 Background Grid (optional image or pattern) */}
      <div className="absolute inset-0 opacity-20 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px]">
        <img src= "/grid.jpg"
        alt="Background" 
        className="absolute w-full h-full object-cover"/>
        
      </div>

      {/* 🔹 Outer Glass Container */}
      <div className="relative w-[900px] h-[800px] bg-white/10 backdrop-blur-2xl rounded-[40px] shadow-[10px_-10px_40px_rgba(0,0,0,0.25)] flex items-center justify-center">

        {/* 🔹 Inner Login Card */}
        <div className="w-[420px] bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/30">

          {/* Logo */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <img src="/icon.png" alt="logo" className="h-10 w-10 rounded-[5px]" /> 
            {/* 🔹 Text Section */}
            <div className="flex flex-col">

              {/* Main Title */}
              <h1 className="text-xl font-bold tracking-wide text-white">
                spendwise AI
              </h1>

            </div>
          </div>

          {/* Title */}
          <h1 className="text-5xl font-bold text-gray-900 mb-6 text-center">
            Login
          </h1>

          {/* Email */}
          <label className="text-gray-800 text-sm">Email</label>
          <input
            type="email"
            placeholder="username@gmail.com"
            className="w-full mt-2 mb-5 p-3 rounded-lg bg-white/80 outline-none"
          />

          {/* Password */}
          <label className="text-gray-800 text-sm">Password</label>
          <div className="relative mt-2 mb-2">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full p-3 rounded-lg bg-white/80 outline-none"
            />

            <FaEyeSlash
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-4 text-gray-500 cursor-pointer"
            />
          </div>

          {/* Forgot */}
          <div className="text-right mb-6">
            <a href="#" className="text-blue-700 text-sm">
              Forgot Password?
            </a>
          </div>

          {/* Button */}
          <button className="w-full py-3 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold mb-6">
            Sign in
          </button>

          {/* Divider */}
         <div className="flex items-center gap-3 mb-6">
          <div className="flex-1 h-px bg-gray-900"></div>
          <span className="text-black-500 text-sm">OR</span>
          <div className="flex-1 h-px bg-gray-900"></div>
        </div>

          {/* Socials */}
          <div className="flex justify-center gap-4 mb-8">
            <button className="w-full flex items-center justify-center gap-3 border border-gray-300 rounded-full py-3 bg-white mb-6">
              <FaGoogle  />
              Continue with Google
            </button>

            {/* <button className="bg-white rounded-full px-6 py-2 shadow">
              <FaGithub />
            </button>

            <button className="bg-white rounded-full px-6 py-2 shadow">
              <FaFacebookF className="text-blue-600" />
            </button> */}
          </div>

          {/* Bottom */}
          <p className="text-center text-gray-800 text-sm">
            Don't have an account yet?{" "}
            <a className="text-blue-700 font-semibold cursor-pointer">
              <Link to="/UserInput" >Register for free</Link>
            </a>
          </p>

        </div>
      </div>
    </div>
  );
}

export default LoginForm;
