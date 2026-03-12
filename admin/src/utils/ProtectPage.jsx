import { Navigate } from "react-router-dom";
import cookies from "js-cookie";

const ProtectPages = ({ children }) => {
  const token = cookies.get("token");

  if (!token) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectPages;