import { Link } from "react-router-dom";
import Ways from "../components/Ways";

const Login = () => {
  return (
    <div>
      <Ways title="Login" />
      <Link to="/signup">Go to Sign Up</Link>
    </div>
  );
};

export default Login;
