import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="min-h-[] bg-[var(--BG_gradient)]">
      <Outlet />
    </div>
  );
};

export default Layout;
