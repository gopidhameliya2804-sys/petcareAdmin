import cookie from "js-cookie";
import { toast } from "react-toastify";

function Logout () {
    try{
        cookie.remove("token");
        toast.success("Logout Successful", {onClose: () => {window.location.href = "/login"}});
    } catch (e) {
        console.log(e);
    }
}

function LogoutWithoutNotification() {
    try{
        cookie.remove("token");
        window.location.href = "/login"
    } catch (e) {
        console.log(e);
    }
}

export default Logout;
export { LogoutWithoutNotification };