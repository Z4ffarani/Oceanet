document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("botao-registrar").addEventListener("click", redirectToRegister);
    document.getElementById("botao-login").addEventListener("click", redirectToLogin);
    
    function redirectToRegister() {
        window.location.href = "../Register/register.html";
    }

    function redirectToLogin() {
        window.location.href = "../Login/login.html";
    }
});

