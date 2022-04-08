// Sep One - controller/accepts requests
function getMessage() {
    let msg = document.getElementById("txtMessage").value;
    displayMessage(msg);
}

// Final Step - view
function displayMessage(message) {
    let msg = `${message} Stephen Foster`; 
    element = document.getElementById("results");
    element.innerHTML = msg;
}