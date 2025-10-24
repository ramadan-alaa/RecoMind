import { Outlet, NavLink } from "react-router-dom";

const MasterLayout = () => {
  return (
    <div className="flex bg-[var(--Primary)]">
      {/* Header */}
      <header className="flex flex-col items-center py-4 border-b border-[rgba(255,255,255,0.1)]">
        <h1 className="text-2xl font-bold text-[var(--Secondary)]">RecoMind</h1>
        <nav className="flex items-center flex-col gap-6">
          <NavLink
            to="/home"
            className={({ isActive }) =>
              `hover:text-[var(--Secondary)] transition-all ${
                isActive ? "text-[var(--Secondary)] font-semibold" : ""
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/profile"
            className={({ isActive }) =>
              `hover:text-[var(--Secondary)] transition-all ${
                isActive ? "text-[var(--Secondary)] font-semibold" : ""
              }`
            }
          >
            Profile
          </NavLink>
          <NavLink
            to="/settings"
            className={({ isActive }) =>
              `hover:text-[var(--Secondary)] transition-all ${
                isActive ? "text-[var(--Secondary)] font-semibold" : ""
              }`
            }
          >
            Settings
          </NavLink>
        </nav>
      </header>

      {/* Main Content */}
      <main className="min-h-screen">
        <Outlet />
      </main>
    </div>
  );
};

export default MasterLayout;
