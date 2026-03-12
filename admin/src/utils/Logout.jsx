import cookie from "js-cookie";

function Logout () {
    try{
        cookie.remove("token");
        alert("Logout Successful")
        window.location.href = "/login"
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