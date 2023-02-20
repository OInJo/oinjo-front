function check_password(){

    const passwordClear = document.querySelector(".password-clear");
    const userPassword = document.querySelector("#user-password"); 

    function passwordClearFunction() {
    userPassword.value = "";
    }
    passwordClear.addEventListener("click", passwordClearFunction);