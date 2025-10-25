import { useState } from "react";
import { Mail, Eye, EyeOff, AlertCircle, CheckCircle } from "lucide-react";
import googleIcon from "../assets/images/google.png";
import microsoftIcon from "../assets/images/microsoft.png";
import Ai from "../assets/images/Ai.png";
import Logo from "../assets/images/Logo.png";
import password from "../assets/images/password.png";
import { Link } from "react-router-dom";

const LogRegForm = ({ title }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [passwordValue, setPasswordValue] = useState("");

  const isSignUp = title.toLowerCase().includes("sign");

  const isPasswordValid = (pass) => {
    const minLength = pass.length >= 8;
    const upper = /[A-Z]/.test(pass);
    const lower = /[a-z]/.test(pass);
    const number = /[0-9]/.test(pass);
    const special = /[!@#$%^&*(),.?":{}|<>]/.test(pass);
    return minLength && upper && lower && number && special;
  };

  const passwordValid = isPasswordValid(passwordValue);

  return (
    <>
      <div className="container mx-auto p-6 md:p-8 flex justify-center md:justify-start">
        <img
          src={Logo}
          alt="RecoMind Logo"
          className="w-[110px] md:w-[133px] h-auto mb-6 md:mb-0"
        />
      </div>

      <div className="container min-h-screen flex flex-col md:flex-row items-center justify-center gap-12 p-6 md:p-8 mx-auto">
        {/* Left Section */}
        <div className="flex-1 flex flex-col items-center md:items-start justify-center w-full">
          <img
            src={Ai}
            alt="RecoMind Illustration"
            className="w-[300px] sm:w-[400px] md:w-[500px] lg:w-[547px] h-auto md:ml-12"
          />
        </div>

        {/* Right Section (Form) */}
        <div className="flex-1 flex flex-col gap-4 w-full max-w-[550px] bg-[var(--Primary)] p-6 sm:p-10 md:p-[74px] rounded-lg shadow-2xl">
          <h1 className="text-4xl md:text-5xl font-normal mb-4 text-center text-[var(--Secondary)]">
            {title}
          </h1>

          {/* Social Buttons */}
          <div className="flex flex-col gap-3">
            <button
              className="flex items-center justify-center gap-2 font-normal text-base md:text-sm lg:text-lg rounded-md py-2 hover:bg-[rgba(126,227,255,0.1)] transition-all relative"
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
              className="flex items-center justify-center gap-2 font-normal text-base md:text-sm lg:text-lg rounded-md py-2 hover:bg-[rgba(126,227,255,0.1)] transition-all relative"
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
          <div className="flex items-center gap-3 text-[var(--font_primary)] text-sm mt-4 mb-4 w-full">
            <div className="flex-1 h-px bg-[var(--font_primary)] opacity-40"></div>
            <span className="whitespace-nowrap">Or You Can {title} With</span>
            <div className="flex-1 h-px bg-[var(--font_primary)] opacity-40"></div>
          </div>

          {/* Name Input (Only for Sign Up) */}
          {isSignUp && (
            <div className="flex flex-col gap-1">
              <label className="text-sm text-[var(--font_primary)] font-medium">
                Name
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 text-[var(--border_color)] w-5 h-5" />
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  className="w-full bg-transparent border border-[var(--border_color)] rounded-md py-2 pl-10 pr-3 focus:outline-none focus:border-[var(--Secondary)] transition-all"
                />
              </div>
            </div>
          )}

          {/* Email Input */}
          <div className="flex flex-col gap-1">
            <label className="text-sm text-[var(--font_primary)] font-medium">
              Email
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 text-[var(--border_color)] w-5 h-5" />
              <input
                type="email"
                placeholder="Enter Your Email"
                className="w-full bg-transparent border border-[var(--border_color)] rounded-md py-2 pl-10 pr-3 focus:outline-none focus:border-[var(--Secondary)] transition-all"
              />
            </div>
          </div>

          {/* Password Input */}
          <div className="flex flex-col gap-1">
            <label className="text-sm text-[var(--font_primary)] font-medium">
              Password
            </label>
            <div className="relative">
              <img
                src={password}
                alt="Lock Icon"
                className="absolute left-3 top-3 w-5 h-5"
              />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter Your Password"
                value={passwordValue}
                onChange={(e) => setPasswordValue(e.target.value)}
                className="w-full bg-transparent border border-[var(--border_color)] rounded-md py-2 pl-10 pr-10 focus:outline-none focus:border-[var(--Secondary)] transition-all"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 text-[var(--font_secondary)]"
              >
                {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
              </button>
            </div>

            {/* Password Info (Only for Sign Up) */}
            {isSignUp && passwordValue && (
              <div
                className={`flex items-start gap-2 mt-2 text-xs ${
                  passwordValid
                    ? "text-[var(--success)]"
                    : "text-[var(--error)]"
                }`}
              >
                {passwordValid ? (
                  <CheckCircle size={16} className="mt-[2px]" />
                ) : (
                  <AlertCircle size={16} className="mt-[2px]" />
                )}
                <p>
                  {passwordValid
                    ? "Your password meets all requirements"
                    : "Password must be at least 8 characters, include uppercase, lowercase letters, numbers, and special characters."}
                </p>
              </div>
            )}
          </div>

          {/* Remember & Forgot (Only for Log In) */}
          {!isSignUp && (
            <div className="flex items-center justify-between text-sm text-[var(--font_primary)] flex-wrap gap-2">
              <label className="flex items-center gap-2 font-normal text-base">
                <input type="checkbox" className="accent-[var(--Secondary)]" />
                Remember me
              </label>
              <a
                href="#"
                className="text-[var(--Secondary)] font-normal text-base"
              >
                Forgot Password?
              </a>
            </div>
          )}

          {/* Submit Button */}
          <button className="mt-4 w-full bg-[var(--Secondary)] text-[var(--Primary)] rounded-md py-2 font-medium text-[22px] hover:opacity-80 transition-all">
            {title}
          </button>

          {/* Switch Between Log In / Sign Up */}
          <div className="text-center text-sm mt-3 text-[var(--font_primary)]">
            {isSignUp ? (
              <>
                Already have an account?{" "}
                <Link
                  to="/"
                  className="text-[var(--Secondary)] font-normal text-lg !underline"
                >
                  Log In
                </Link>
              </>
            ) : (
              <>
                Don’t have an account?{" "}
                <Link
                  to="/signup"
                  className="text-[var(--Secondary)] font-normal text-lg !underline"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default LogRegForm;
