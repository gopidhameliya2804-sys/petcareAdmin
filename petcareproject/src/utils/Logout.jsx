import cookie from "js-cookie";
import { useNavigate } from "react-router-dom";

function Logout () {
    const navigate = useNavigate();
    try{
        cookie.remove("token");
        alert("Logout Successful")
        navigate("/login");
    } catch (e) {
        console.log(e);
    }
}

function LogoutWithoutNotification() {
    const navigate = useNavigate();
    try{
        cookie.remove("token");
        navigate("/login");
    } catch (e) {
        console.log(e);
    }
}

export default Logout;
export { LogoutWithoutNotification };