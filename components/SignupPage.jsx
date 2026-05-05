import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";

function SignupPage() {
  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 to-blue-800 relative overflow-hidden">

      {/* 🔹 Grid Background */}
      <div className="absolute inset-0 opacity-20 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px]">
        <img src= "/grid.jpg"
        alt="Background" 
        className="absolute w-full h-full object-cover"/>
      </div>

      {/* 🔹 Card */}
      <div className="relative z-10 w-[420px] bg-blue-300 backdrop-blur-2xl border border-white/30 rounded-3xl p-8 shadow-[0_0_40px_rgba(168,85,247,0.8)]">

        {/* 🔹 Back Icon */}
        <div className="absolute top-4 left-4 text-gray-600 cursor-pointer">
          <Link to="/" ><img src="/back_iicon.png" /> </Link>
        </div>

        {/* 🔹 Logo */}
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

        {/* 🔹 Title */}
        <h1 className="text-2xl font-semibold text-center text-gray-900 mb-1">
          Create an account
        </h1>

        <p className="text-center text-gray-600 text-sm mb-6">
          Already have an account?{" "}
          <span className="text-blue-700 cursor-pointer"><Link to="/" >Log in</Link></span>
        </p>

        {/* 🔹 Google Button */}
        <button className="w-full flex items-center justify-center gap-3 border border-gray-300 rounded-full py-3 bg-white mb-6">
          <FaGoogle  />
          Continue with Google
        </button>

        

        {/* 🔹 Divider */}
        <div className="flex items-center gap-3 mb-6">
          <div className="flex-1 h-px bg-gray-500"></div>
          <span className="text-gray-500 text-sm">OR</span>
          <div className="flex-1 h-px bg-gray-500"></div>
        </div>

        {/* 🔹 Info text */}
        <p className="text-gray-600 text-sm mb-4 text-center">
          Enter your email address to create an account.
        </p>

        {/* 🔹 Email */}
        <label className="text-gray-700 text-sm">Your email</label>
        <input
          type="email"
          className="w-full mt-2 mb-6 p-3 rounded-lg border border-gray-300 outline-none bg-white/80"
        />

        <label className="text-gray-700 text-sm">Password</label>
        <input
          type="password"
          className="w-full mt-2 mb-6 p-3 rounded-lg border border-gray-300 outline-none bg-white/80"
        />

        {/* 🔹 Button */}
        <button className="w-full py-3 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold">
          Create an account
        </button>

      </div>
    </div>
  );
}

export default SignupPage;

