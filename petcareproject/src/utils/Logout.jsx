import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const AllLogout = () => {
  const navigate = useNavigate();

  const Logout = () => {
    Cookies.remove("token");
    alert("Logout Successful");
    navigate("/login");
  };

  return <button onClick={Logout}>Logout</button>;
};

export default AllLogout;