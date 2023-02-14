function check_password(){
    var password = document.getElementById('user-password').value;
    var sp = ["!","@","#","$","%"];
    var check_sp = 0;

    if(password.length < 10){
        window.alert('비밀번호는 영문, 숫자, 특수문자 포함 10자 이상 이용 가능합니다.');
        document.getElementById('user-password').value='';
    }
    for(var i=0; i < sp.length; i++){
        if(password.indexOf(sp[i]) != -1){
            check_sp = 1;
        }
    }
    if(check_sp == 0){
        window.alert('!,@,#,$,% 의 특수문자가 들어가 있지 않습니다.')
        document.getElementById('user-password').value='';
    }
}
    const passwordClear = document.querySelector(".password-clear");
    const userPassword = document.querySelector("#user-password"); 

    function passwordClearFunction() {
    userPassword.value = "";
    }
    passwordClear.addEventListener("click", passwordClearFunction);