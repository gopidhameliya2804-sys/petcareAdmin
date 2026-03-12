import CheckToken from "./CheckToken";

function ProtectPages( { children }){
    if (!CheckToken()){
        alert("Kindly login first");
        window.location.href = "/login"
    }
    return children;
}

export default ProtectPages;