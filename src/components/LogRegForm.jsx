import { useState } from "react";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import googleIcon from "../assets/images/google.png";
import microsoftIcon from "../assets/images/microsoft.png";
import Ai from "../assets/images/Ai.png";
import Logo from "../assets/images/Logo.png";
import { Link } from "react-router-dom";

const LogRegForm = ({ title }) => {
  const [showPassword, setShowPassword] = useState(false);

  const isSignUp = title.toLowerCase().includes("sign");

  return (
    <div className="container min-h-screen flex flex-col md:flex-row items-center justify-center gap-12 p-6 md:p-8 mx-auto">
      {/* Left Section (Logo & Illustration) */}
      <div className="flex-1 flex flex-col items-center md:items-start justify-center w-full">
        <img
          src={Logo}
          alt="RecoMind Logo"
          className="w-[110px] md:w-[133px] h-auto mb-6 md:mb-0"
        />

        <img
          src={Ai}
          alt="RecoMind Illustration"
          className="w-[300px] sm:w-[400px] md:w-[500px] lg:w-[547px] h-auto md:ml-12"
        />
      </div>

      {/* Right Section (Form) */}
      <div className="flex-1 flex flex-col gap-4 w-full max-w-[550px] bg-[var(--Primary)] p-6 sm:p-10 md:p-[74px] rounded-lg shadow-lg">
        <h1 className="text-4xl md:text-5xl font-normal mb-4 text-center text-[var(--Secondary)]">
          {title}
        </h1>

        {/* Social Buttons */}
        <div className="flex flex-col gap-3">
          <button
            className="flex items-center justify-center gap-2 rounded-md py-2 hover:bg-[rgba(126,227,255,0.1)] transition-all relative"
            style={{ border: "1px solid var(--Secondary)" }}
          >
            <img
              src={googleIcon}
              alt="Google"
              className="w-5 h-5 absolute left-4"
            />
            {title} with Google
          </button>

          <button
            className="flex items-center justify-center gap-2 rounded-md py-2 hover:bg-[rgba(126,227,255,0.1)] transition-all relative"
            style={{ border: "1px solid var(--Secondary)" }}
          >
            <img
              src={microsoftIcon}
              alt="Microsoft"
              className="w-5 h-5 absolute left-4"
            />
            {title} with Microsoft
          </button>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-3 text-[var(--font_secondary)] text-sm mt-4 mb-4 w-full">
          <div className="flex-1 h-px bg-[var(--font_secondary)] opacity-40"></div>
          <span className="whitespace-nowrap">Or You Can {title} With</span>
          <div className="flex-1 h-px bg-[var(--font_secondary)] opacity-40"></div>
        </div>

        {/* Email Input */}
        <div className="relative">
          <Mail className="absolute left-3 top-3 text-[var(--font_secondary)] w-5 h-5" />
          <input
            type="email"
            placeholder="Enter Your Email"
            className="w-full bg-transparent border border-[var(--font_tertiary)] rounded-md py-2 pl-10 pr-3 focus:outline-none focus:border-[var(--Secondary)] transition-all"
          />
        </div>

        {/* Password Input */}
        <div className="relative">
          <Lock className="absolute left-3 top-3 text-[var(--font_secondary)] w-5 h-5" />
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter Your Password"
            className="w-full bg-transparent border border-[var(--font_tertiary)] rounded-md py-2 pl-10 pr-10 focus:outline-none focus:border-[var(--Secondary)] transition-all"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-3 text-[var(--font_secondary)]"
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>

        {/* Remember & Forgot */}
        {!isSignUp && (
          <div className="flex items-center justify-between text-sm text-[var(--font_secondary)] flex-wrap gap-2">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="accent-[var(--Secondary)]" />
              Remember me
            </label>
            <a href="#" className="hover:text-[var(--Secondary)]">
              Forgot Password?
            </a>
          </div>
        )}

        {/* Submit Button */}
        <button className="mt-2 w-full bg-[var(--Secondary)] text-[var(--Primary)] rounded-md py-2 font-semibold hover:opacity-80 transition-all">
          {title}
        </button>

        {/* Switch Between Log In / Sign Up */}
        <div className="text-center text-sm mt-3 text-[var(--font_secondary)]">
          {isSignUp ? (
            <>
              Already have an account?{" "}
              <Link to="/" className="text-[var(--Secondary)] hover:underline">
                Log In
              </Link>
            </>
          ) : (
            <>
              Don’t have an account?{" "}
              <Link
                to="/signup"
                className="text-[var(--Secondary)] hover:underline"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default LogRegForm;
