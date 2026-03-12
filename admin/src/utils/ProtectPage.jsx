import { Navigate } from "react-router-dom";

const ProtectPages = ({ children }) => {
  const token = Cookies.get("token");

  if (!token) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectPages;