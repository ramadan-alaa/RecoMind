import { Outlet } from "react-router-dom";
import { SideBar } from "../UI/SideBar";
// import { useEffect, useState } from "react";

const MasterLayout = () => {
  // const {isAuthenticated} = useAuth();
  // const navigate = useNavigate();
  // useEffect(() => {
  //   if (!isAuthenticated) {
  //     navigate("/");
  //   }
  // }, [isAuthenticated]);
  return (
    <main className="flex bg-[var(--Primary)]">
      {/* Sidebar */}
      <SideBar />

      {/* Main Content */}
      <main className="min-h-screen">
        <Outlet />
      </main>
    </main>
  );
};

export default MasterLayout;
