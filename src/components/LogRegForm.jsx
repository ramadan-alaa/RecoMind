import { useState } from "react";
import { Mail, Eye, EyeOff, AlertCircle, CheckCircle } from "lucide-react";
import googleIcon from "../assets/images/google.png";
import microsoftIcon from "../assets/images/microsoft.png";
import Ai from "../assets/images/Ai.png";
import Logo from "../assets/images/Logo.png";
import password from "../assets/images/password.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const LogRegForm = ({ title }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [passwordValue, setPasswordValue] = useState("");

  const isSignUp = title.toLowerCase().includes("sign");

  const navigate = useNavigate();

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
      <div className="container flex flex-col md:flex-row items-start justify-center gap-12 md:mt-12 mx-auto h-[90vh]">
        {/* Left Section */}
        <div className="flex-1 flex flex-col items-center md:items-start justify-center w-full gap-12">
          <svg
            width="140"
            height="40"
            viewBox="0 0 299 105"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M94.8489 87.672C86.7369 87.672 81.1689 82.248 81.1689 74.376C81.1689 66.552 86.7849 61.128 94.9449 61.128C103.585 61.128 109.057 67.272 108.625 76.488H88.4169C89.0889 79.944 91.6809 81.816 94.9929 81.816C97.3929 81.816 99.5529 80.856 100.753 79.176H108.145C105.937 84.504 101.041 87.672 94.8489 87.672ZM88.4649 71.88H101.569C100.753 68.808 98.3529 66.936 94.9929 66.936C91.7769 66.936 89.2809 68.808 88.4649 71.88ZM126.117 87.672C118.005 87.672 112.341 82.152 112.341 74.376C112.341 66.648 118.053 61.128 126.117 61.128C133.125 61.128 138.501 65.208 139.653 71.448H132.645C131.445 68.904 129.093 67.368 126.213 67.368C122.277 67.368 119.541 70.248 119.541 74.376C119.541 78.504 122.277 81.384 126.213 81.384C129.285 81.384 131.781 79.608 132.789 76.872H139.893C138.549 83.496 133.221 87.672 126.117 87.672ZM157.72 87.672C149.32 87.672 143.56 82.248 143.56 74.376C143.56 66.552 149.32 61.128 157.72 61.128C166.072 61.128 171.832 66.552 171.832 74.376C171.832 82.248 166.072 87.672 157.72 87.672ZM150.76 74.376C150.76 78.504 153.64 81.384 157.72 81.384C161.8 81.384 164.632 78.504 164.632 74.376C164.632 70.248 161.8 67.368 157.72 67.368C153.64 67.368 150.76 70.248 150.76 74.376Z"
              fill="#F6F3F3"
            />
            <path
              d="M177.524 87V53.4H184.004L195.956 70.824L207.86 53.4H214.292V87H206.708V66.792L198.548 78.696H193.268L185.108 66.744V87H177.524ZM221.953 87V61.8H229.249V87H221.953ZM220.897 53.64C220.897 50.952 222.817 49.08 225.601 49.08C228.385 49.08 230.305 50.952 230.305 53.64C230.305 56.328 228.385 58.2 225.601 58.2C222.817 58.2 220.897 56.328 220.897 53.64ZM236.531 87V61.8H241.955L242.723 64.632C244.739 62.28 247.763 61.128 251.123 61.128C257.699 61.128 261.683 65.544 261.683 72.504V87H254.387V73.272C254.387 69.576 252.515 67.368 249.395 67.368C246.035 67.368 243.827 69.816 243.827 73.8V87H236.531ZM279.54 87.672C272.052 87.672 266.724 82.2 266.724 74.376C266.724 66.648 272.052 61.128 279.54 61.128C282.66 61.128 285.396 62.088 287.556 63.768V51.48H294.852V87H289.428L288.564 84.12C286.308 86.376 283.188 87.672 279.54 87.672ZM273.924 74.376C273.924 78.504 276.756 81.384 280.884 81.384C284.964 81.384 287.796 78.504 287.796 74.376C287.796 70.296 284.964 67.368 280.884 67.368C276.756 67.368 273.924 70.296 273.924 74.376Z"
              fill="#7EE3FF"
            />
            <path
              d="M41.6999 52.7002L45.7001 37.2002L36.7001 38.8002L28.2001 40.2002L30.2001 41.2002L33.2001 42.7002C33.2001 42.7002 27.8726 46.1619 24.6999 48.7002C22.2001 50.7002 20.2001 52.4002 18.7001 53.7002C15.7712 56.6291 13.8057 58.4802 11.2001 61.7002C7.89289 65.7873 6.61557 68.3039 4.70013 73.2002C3.16448 77.1256 2.55095 79.4997 2.19994 83.7002C2.00481 86.0352 2.2002 89.7002 2.2002 89.7002L9.70013 89.6002L17.4201 89.5002V88.7002L17.4901 87.2002L17.7001 84.7002C17.7001 84.7002 17.9072 81.9439 18.2001 80.2002C18.6683 77.4137 19.0684 76.2376 20.0301 73.2002C21.5592 68.371 25.5335 62.7002 26.2001 61.7002C27.2001 60.2002 30.2049 56.4949 33.2001 53.2002C35.0577 51.1569 38.7001 47.7002 38.7001 47.7002L41.6999 52.7002Z"
              fill="#ECF5FA"
            />
            <path
              d="M19.2002 9.2005V14.7005H30.2002L36.7002 14.7007C36.7002 14.7007 40.7002 14.7002 43.2002 14.7002C45.7002 14.7002 47.8196 14.9132 49.7002 15.7002C50.9085 16.2059 53.2002 17.7002 53.2002 17.7002C53.2002 17.7002 55.2719 19.3442 56.2002 21.2007C57.2002 23.2007 58 25 58 28C58 30.9549 57.4279 33.5042 56.0002 35.7007C54.7002 37.7007 53.6782 38.4511 51.2002 39.7007C49.5462 40.5348 46.7002 41.2007 46.7002 41.2007L44.2002 50.2005L42.2002 57.7005L40.2002 54.2005L38.2002 51.7005H37.7002L36.7002 52.7005L33.7002 55.7005H35.2002L35.7002 56.7005L45.7002 70.2005L57.7002 86.2005L60.2002 89.7005H62.7002H72.2002H78.7002L70.7002 78.7007L62.2002 67.2007L55.7002 58.7007L52.2002 54.2007C52.2002 54.2007 54.2002 54.2007 55.7002 53.7007C57.8605 52.9806 59.7771 52.4201 61.7002 51.2007C63.4839 50.0697 64.7067 49.1942 66.2002 47.7007C66.897 47.0038 68.3653 44.8565 69.4002 43.2007C70.2002 41.9207 70.9942 40.2663 71.7002 38.2005C72.2824 36.497 72.506 35.4767 72.8002 33.7007C73.0892 31.9563 73.1648 30.9683 73.2002 29.2005C73.2433 27.0442 73.0447 24.8297 72.7002 22.7007C72.4126 20.9236 72.3795 20.4359 71.9002 18.7007C71.407 16.9151 71.4066 16.7044 70.5002 14.7007C69.5938 12.697 68.4292 11.0692 66.7002 9.2005C64.6035 6.93433 63.4181 6.16522 60.7002 4.70068C57.9231 3.20427 55.7513 2.50168 52.7002 1.7005C48.7162 0.654355 42.2002 0.700499 42.2002 0.700499H33.2002H22.7002H17.7002C17.7002 0.700499 18.2002 1.70087 18.2002 2.20068C18.2002 2.7005 17.7002 3.7005 17.7002 3.7005C17.7002 3.7005 18.0055 3.68552 18.2002 3.7005C18.8159 3.74787 19.7002 4.20068 19.7002 4.20068C19.7002 4.20068 19.9037 4.23456 20.2002 4.7005C20.6324 5.37972 20.7619 5.89778 20.7002 6.7005C20.6528 7.31615 20.5317 7.67956 20.2002 8.2005C19.9037 8.66644 19.2002 8.64821 19.2002 9.2005Z"
              fill="url(#paint0_linear_2764_16232)"
            />
            <circle
              cx="17.9502"
              cy="49.9502"
              r="1.25"
              fill="#060B1B"
              stroke="#ECF5FA"
            />
            <path
              d="M2.19925 24.7002L2.19972 34.7002C2.19972 34.7002 2.19972 35.6144 2.19972 36.2002C2.19972 36.5907 2.11962 37.818 2.20007 38.2002C2.3451 38.8891 3.20007 39.7002 3.20007 39.7002C3.20007 39.7002 3.61457 40.1144 4.20044 40.7002C4.98144 41.4811 6.69996 42.6479 6.70007 43.2002C6.70044 45.2002 6.70007 49.7002 6.70007 49.7002C6.70007 48.7002 6.70007 48.2002 6.70007 54.2002C6.70007 60.2002 6.70007 62.7002 6.70007 63.2002C6.70007 63.7002 6.20007 63.7002 6.20007 63.7002"
              stroke="#ECF5FA"
            />
            <path
              d="M2.2002 3.2002V16.2002C2.2002 16.2002 3.4002 17.2002 4.4002 18.2002C4.85002 18.65 6.7002 20.2002 6.7002 20.7002C6.7002 21.2002 4.2002 22.6093 4.2002 23.2002C4.2002 25.7002 4.2002 32.7002 4.2002 32.7002"
              stroke="url(#paint1_linear_2764_16232)"
            />
            <path
              d="M7.7002 3.7002V12.7002"
              stroke="url(#paint2_linear_2764_16232)"
            />
            <path
              d="M6.2002 14.2002C6.2002 14.2002 9.2002 16.9934 9.2002 17.7002C9.2002 18.407 6.7002 20.7002 6.7002 20.7002"
              stroke="url(#paint3_linear_2764_16232)"
            />
            <path
              d="M10.7002 9.2002V20.2002"
              stroke="url(#paint4_linear_2764_16232)"
            />
            <path
              d="M11.2002 22.7002L6.7002 27.7002V32.7002"
              stroke="#ECF5FA"
            />
            <path
              d="M14.2002 2.7002V13.7002"
              stroke="url(#paint5_linear_2764_16232)"
            />
            <path
              d="M17.7003 6.2002V16.7002L15.4282 18.9723C14.9714 19.4291 14.7666 20.0779 14.8342 20.7204C14.9358 21.6865 15.0111 23.0791 14.7003 23.7002C14.2 24.7002 9.20061 28.7002 9.20032 29.2002C9.20003 29.7002 9.20032 34.7002 9.20032 34.7002L9.7002 35.2002"
              stroke="url(#paint6_linear_2764_16232)"
            />
            <path
              d="M17.7002 23.7002L12.2002 29.2002L11.7002 30.7002V36.2002"
              stroke="#ECF5FA"
            />
            <path
              d="M6.2002 37.2002V39.2002L8.7002 41.7002V46.7002V60.7002"
              stroke="#ECF5FA"
            />
            <path
              d="M11.7002 37.7002V42.2002L8.7002 45.2002"
              stroke="#ECF5FA"
            />
            <path
              d="M2.7002 45.2002V62.7002V70.7002L2.2002 72.2002"
              stroke="#ECF5FA"
            />
            <path d="M4.7002 51.7002V65.7002L4.2002 67.2002" stroke="#ECF5FA" />
            <path
              d="M15.2002 32.7002V41.7002L11.2002 45.7002L11.7002 56.7002L11.2002 58.2002"
              stroke="#ECF5FA"
            />
            <path
              d="M18.7002 31.2002V41.7002L18.2002 43.7002L15.7002 45.7002L13.7002 47.7002V54.7002L13.2002 55.7002"
              stroke="#ECF5FA"
            />
            <circle
              cx="1.75"
              cy="23.1504"
              r="1.25"
              fill="#060B1B"
              stroke="#ECF5FA"
            />
            <circle
              cx="6.15039"
              cy="12.9502"
              r="1.25"
              fill="#060B1B"
              stroke="#7EE3FF"
            />
            <circle
              cx="7.75"
              cy="2.75"
              r="1.25"
              fill="#060B1B"
              stroke="#7EE3FF"
            />
            <circle
              cx="2.4502"
              cy="1.8501"
              r="1.25"
              fill="#060B1B"
              stroke="#7EE3FF"
            />
            <circle
              cx="14.4502"
              cy="1.75"
              r="1.25"
              fill="#060B1B"
              stroke="#7EE3FF"
            />
            <circle
              cx="13.9502"
              cy="15.0503"
              r="1.25"
              fill="#060B1B"
              stroke="#7EE3FF"
            />
            <circle
              cx="17.8506"
              cy="5.8501"
              r="1.25"
              fill="#060B1B"
              stroke="#7EE3FF"
            />
            <circle
              cx="17.8506"
              cy="23.0503"
              r="1.25"
              fill="#060B1B"
              stroke="#ECF5FA"
            />
            <circle
              cx="10.9502"
              cy="21.75"
              r="1.25"
              fill="#060B1B"
              stroke="#ECF5FA"
            />
            <circle
              cx="11.6504"
              cy="37.4502"
              r="1.25"
              fill="#060B1B"
              stroke="#ECF5FA"
            />
            <circle
              cx="6.15039"
              cy="36.4502"
              r="1.25"
              fill="#060B1B"
              stroke="#ECF5FA"
            />
            <circle
              cx="2.4502"
              cy="44.8501"
              r="1.25"
              fill="#060B1B"
              stroke="#ECF5FA"
            />
            <circle
              cx="18.25"
              cy="30.4502"
              r="1.25"
              fill="#060B1B"
              stroke="#ECF5FA"
            />
            <circle
              cx="14.8506"
              cy="32.0503"
              r="1.25"
              fill="#060B1B"
              stroke="#ECF5FA"
            />
            <circle
              cx="4.75"
              cy="51.4502"
              r="1.25"
              fill="#060B1B"
              stroke="#ECF5FA"
            />
            <circle
              cx="10.75"
              cy="8.4502"
              r="1.25"
              fill="#060B1B"
              stroke="#7EE3FF"
            />
            <defs>
              <linearGradient
                id="paint0_linear_2764_16232"
                x1="48.001"
                y1="11.2998"
                x2="71.2275"
                y2="89.6772"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#59CEFC" />
                <stop offset="1" stopColor="#E7E7E7" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_2764_16232"
                x1="3.05916"
                y1="3.21023"
                x2="17.6741"
                y2="11.2996"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#59CEFC" />
                <stop offset="1" stopColor="#E7E7E7" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_2764_16232"
                x1="7.89108"
                y1="3.70326"
                x2="11.5406"
                y2="5.17463"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#59CEFC" />
                <stop offset="1" stopColor="#E7E7E7" />
              </linearGradient>
              <linearGradient
                id="paint3_linear_2764_16232"
                x1="6.77284"
                y1="14.2024"
                x2="10.1183"
                y2="19.8051"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#59CEFC" />
                <stop offset="1" stopColor="#E7E7E7" />
              </linearGradient>
              <linearGradient
                id="paint4_linear_2764_16232"
                x1="10.8911"
                y1="9.20394"
                x2="14.7175"
                y2="10.4661"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#59CEFC" />
                <stop offset="1" stopColor="#E7E7E7" />
              </linearGradient>
              <linearGradient
                id="paint5_linear_2764_16232"
                x1="14.3911"
                y1="2.70394"
                x2="18.2175"
                y2="3.96613"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#59CEFC" />
                <stop offset="1" stopColor="#E7E7E7" />
              </linearGradient>
              <linearGradient
                id="paint6_linear_2764_16232"
                x1="10.8227"
                y1="6.21006"
                x2="27.7453"
                y2="24.2079"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#59CEFC" />
                <stop offset="1" stopColor="#E7E7E7" />
              </linearGradient>
            </defs>
          </svg>

          <img
            src={Ai}
            alt="RecoMind Illustration"
            className="w-[300px] sm:w-[400px] md:w-[500px] lg:w-[547px] h-auto md:ml-12"
          />
        </div>

        {/* Right Section (Form) */}
        <div className="flex-1 flex flex-col gap-4 w-full max-w-[550px] bg-[var(--Primary)] p-6 sm:p-10 md:px-[74px] md:py-[34px] rounded-3xl shadow-2xl">
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
                className={`flex items-center gap-2 mt-2 text-xs ${
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
              <span
                onClick={() => navigate("/forgotpassword")}
                className="text-[var(--Secondary)] font-normal text-base cursor-pointer hover:underline"
              >
                Forgot Password?
              </span>
            </div>
          )}

          {/* Submit Button */}
          <button className="mt-4 w-full bg-[var(--Secondary)] text-[var(--Primary)] rounded-lg py-2 font-medium text-[22px] hover:opacity-80 transition-all">
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
