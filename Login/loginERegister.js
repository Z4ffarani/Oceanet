document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("entrar").addEventListener("click", redirect);
    document.getElementById("registrar").addEventListener("click", redirect);

    function redirect() {
        window.location.href = "../Site/index.html";
    }
});

function armazenarDados(){
    var email = document.getElementById("email").value
    console.log(email)
    
}