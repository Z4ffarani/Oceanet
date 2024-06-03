document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("botao-registrar").addEventListener("click", redirect);
    document.getElementById("botao-login").addEventListener("click", redirect);
    

    function redirect() {
        window.location.href = "../Login/login.html";
    }
});
