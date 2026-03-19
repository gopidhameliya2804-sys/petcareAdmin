import Cookies from "js-cookie";

function Logout() {
  try {
    Cookies.remove("token");
    alert("Logout Successful");
    window.location.href = "/#/login";
  } catch (e) {
    console.log(e);
  }
}

function LogoutWithoutNotification() {
  try {
    Cookies.remove("token");
    window.location.href = "/login";
  } catch (e) {
    console.log(e);
  }
}

export default Logout;
export { LogoutWithoutNotification };