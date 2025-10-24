import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="min-h-screen bg-[var(--BG_gradient)]">
      <Outlet />
    </div>
  );
};

export default Layout;
