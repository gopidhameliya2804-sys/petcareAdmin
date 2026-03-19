import Cookies from "js-cookie";

function Logout(navigate) {
  try {
    Cookies.remove("token");
    alert("Logout Successful");
    navigate("/login");
  } catch (e) {
    console.log(e);
  }
}

function LogoutWithoutNotification(navigate) {
  try {
    Cookies.remove("token");
    navigate("/login");
  } catch (e) {
    console.log(e);
  }
}

export default Logout;
export { LogoutWithoutNotification };