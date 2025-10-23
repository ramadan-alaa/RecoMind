import { Outlet } from "react-router-dom";

const MasterLayout = () => {
  return (
    <>
      <header>
        <h1>Master Layout</h1>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <p>© 2024 RecoMind</p>
      </footer>
    </>
  );
};

export default MasterLayout;
