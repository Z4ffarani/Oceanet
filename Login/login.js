document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("entrar").addEventListener("click", redirect);
    document.getElementById("registrar").addEventListener("click", redirect);

    function redirect() {
        window.location.href = "../Site/index.html";
    }
});