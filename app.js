document.addEventListener("DOMContentLoaded", function () {
    let username = document.getElementById("name");
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    let button = document.getElementById("button");
    let submitmsg = document.getElementById("submitmsg");
    let errormsg = document.getElementById("errormsg");

    console.log(username, email, password, button, submitmsg, errormsg);  // Add this line for debugging

    button.addEventListener("click", function () {
        console.log("Button clicked!");  // Add this line for debugging

        if (username.value === "" || email.value === "" || password.value === "") {
            submitmsg.textContent = "";
            errormsg.textContent = "Please fill all details";
        } else {
            username.value = "";
            email.value = "";
            password.value = "";
            errormsg.textContent = "";
            submitmsg.textContent = "Form submitted Successfully";
        }
    });
});
