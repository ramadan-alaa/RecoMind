import { Outlet } from "react-router-dom";
import Sidebar from "../UI/SideBar";

const MasterLayout = () => {
  return (
    <div className="flex bg-[var(--Primary)] min-h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Page Content */}
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
};

export default MasterLayout;
