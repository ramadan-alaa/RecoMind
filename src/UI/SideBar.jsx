import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Home, LayoutDashboard, Bot, Menu, X } from "lucide-react";
import LogoR from "../assets/images/LogoR.png";
import user from "../assets/images/user.png";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { id: "home", icon: Home, label: "Home", path: "/home" },
    {
      id: "dashboard",
      icon: LayoutDashboard,
      label: "Dashboard",
      path: "/home/dashboard",
    },
    { id: "chatbot", icon: Bot, label: "Chatbot", path: "/home/chatbot" },
    {
      id: "profile",
      icon: null,
      label: "Profile",
      path: "/home/profile",
      image: user,
    },
  ];

  return (
    <>
      {/* Burger button (mobile only) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`md:hidden fixed top-4 right-4 z-[60] p-2 rounded-md transition-all duration-300
          ${
            isOpen
              ? "bg-[var(--Secondary)] text-[var(--Primary)]"
              : "bg-[var(--Primary)] text-white border border-[var(--Secondary)]"
          }`}
      >
        {isOpen ? <X size={22} /> : <Menu size={22} />}
      </button>

      {/* Sidebar container */}
      <div className="flex">
        <aside
          className={`bg-[var(--Primary)] border-r border-[#EFEFEF]/10 flex flex-col items-center py-6 px-4 gap-8
                      w-[134px] md:w-[134px] min-h-full md:min-h-screen
                      fixed md:sticky top-0 left-0
                      transition-transform duration-300 ease-in-out
                      ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 z-50`}
          style={{
            boxShadow: "4px 0px 4px 0px rgba(186, 186, 186, 0.05)",
          }}
        >
          <div className="w-12 h-12 flex items-center justify-center">
            <img
              src={LogoR}
              alt="Logo"
              className="w-full h-full object-contain"
            />
          </div>

          <nav className="flex flex-col items-center gap-8 flex-1 mt-6">
            {menuItems.map((item) => (
              <NavLink
                key={item.id}
                to={item.path}
                end
                onClick={() => setIsOpen(false)}
                className="flex flex-col items-center justify-center text-center transition-all"
              >
                {({ isActive }) => (
                  <>
                    <div
                      className={`w-14 h-14 md:w-12 md:h-12 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center transition-all duration-300
                        ${
                          item.image
                            ? "bg-transparent"
                            : isActive
                            ? "bg-[var(--Secondary)]"
                            : "bg-transparent hover:bg-[#0f1629]"
                        }`}
                    >
                      {item.image ? (
                        <img
                          src={item.image}
                          alt={item.label}
                          className={`w-10 h-10 rounded-full object-cover transition-all duration-300
                            ${
                              isActive
                                ? "border-2 border-[var(--Secondary)]"
                                : "border-2 border-transparent"
                            }`}
                        />
                      ) : (
                        <item.icon
                          size={30}
                          strokeWidth={1.7}
                          className={`transition-all duration-300 ${
                            isActive ? "text-[var(--Primary)]" : "text-white"
                          }`}
                        />
                      )}
                    </div>
                    <span className="text-[var(--font_primary)] text-xs md:text-[12px] mt-1">
                      {item.label}
                    </span>
                  </>
                )}
              </NavLink>
            ))}
          </nav>
        </aside>

        {/* Overlay for mobile */}
        {isOpen && (
          <div
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/40 z-[40] md:hidden transition-opacity duration-300"
          />
        )}
      </div>
    </>
  );
};

export default Sidebar;


// Burger Menu

// import { NavLink } from "react-router-dom";
// import { Home, LayoutDashboard, Bot } from "lucide-react";
// import LogoR from "../assets/images/LogoR.png";
// import user from "../assets/images/user.png";

// const Sidebar = () => {
//   const menuItems = [
//     { id: "home", icon: Home, label: "Home", path: "/home" },
//     { id: "dashboard", icon: LayoutDashboard, label: "Dashboard", path: "/home/dashboard" },
//     { id: "chatbot", icon: Bot, label: "Chatbot", path: "/home/chatbot" },
//     { id: "profile", icon: null, label: "Profile", path: "/home/profile", image: user },
//   ];

//   return (
//     <aside
//       className="bg-[var(--Primary)] border-t md:border-r border-[#EFEFEF]/10 flex
//                  md:flex-col items-center justify-between w-full md:w-[134px]
//                  py-2 md:py-6 md:h-screen fixed md:static bottom-0 md:top-0 z-50 transition-all duration-300"
//       style={{
//         boxShadow: "4px 0px 4px 0px rgba(186, 186, 186, 0.05)",
//       }}
//     >
//       {/* Logo */}
//       <div className="hidden md:flex w-12 h-12 items-center justify-center">
//         <img src={LogoR} alt="Logo" className="w-full h-full object-contain" />
//       </div>

//       {/* Navigation */}
//       <nav className="flex md:flex-col items-center justify-around flex-1 w-full md:mt-6">
//         {menuItems.map((item) => (
//           <NavLink
//             key={item.id}
//             to={item.path}
//             end
//             className="flex flex-col items-center justify-center text-center transition-all"
//           >
//             {({ isActive }) => (
//               <>
//                 <div
//                   className={`w-14 h-14 md:w-12 md:h-12 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center transition-all duration-300
//                     ${
//                       item.image
//                         ? "bg-transparent"
//                         : isActive
//                         ? "bg-[var(--Secondary)]"
//                         : "bg-transparent hover:bg-[#0f1629]"
//                     }`}
//                 >
//                   {item.image ? (
//                     <img
//                       src={item.image}
//                       alt={item.label}
//                       className={`w-10 h-10 rounded-full object-cover transition-all duration-300
//                         ${
//                           isActive
//                             ? "border-2 border-[var(--Secondary)]"
//                             : "border-2 border-transparent"
//                         }`}
//                     />
//                   ) : (
//                     <item.icon
//                       size={30}
//                       strokeWidth={1.7}
//                       className={`transition-all duration-300 ${
//                         isActive ? "text-[var(--Primary)]" : "text-white"
//                       }`}
//                     />
//                   )}
//                 </div>
//                 <span className="text-[var(--font_primary)] text-xs md:text-[12px] mt-1">
//                   {item.label}
//                 </span>
//               </>
//             )}
//           </NavLink>
//         ))}
//       </nav>
//     </aside>
//   );
// };

// export default Sidebar;
