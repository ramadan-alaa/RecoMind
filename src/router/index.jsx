import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Layout from "../layouts/Layout";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import MasterLayout from "../layouts/MasterLayout";
import Home from "../pages/Home";
import NotFound from "../components/NotFound";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* Auth Routes */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Login />}></Route>
        <Route path="signup" element={<SignUp />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Route>
      {/* Main Routes */}
      <Route path="/home" element={<MasterLayout />}>
        <Route index element={<Home />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Route>
    </>
  )
);
export default router;
