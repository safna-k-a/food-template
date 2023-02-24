/*author:SAFNA K A*/
function validate() {
    let nm = document.getElementById("n").value;
    let em = document.getElementById("mail").value;
    let at = document.getElementById("msg").value;
    let nregx = /^[A-Z a-z]{2,10}$/;
    let eregx =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (nm == "") {
        alert("Name field is empty");
        return false;
    } else if (!nregx.test(nm)) {
        alert("Enter correct name");
        return false;
    } else if (em == "") {
        alert("Email field is empty");
        return false;
    } else if (!eregx.test(em)) {
        alert("Enter proper email");
        return false;
    } else if (at == "") {
        alert("Message field is empty");
        return false;
    } else {
        return true;
    }
}
