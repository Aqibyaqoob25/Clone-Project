import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { LoginContext } from "./App";

function ProtectedRoutes({ children }) {
  const [isLogin, setIsLogin] = useContext(LoginContext);
  return <>{!isLogin ? <Navigate to="/" replace></Navigate> : children} </>;
}

export default ProtectedRoutes;
