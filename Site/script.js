document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("botao-registrar").addEventListener("click", redirectToRegister);
    document.getElementById("botao-login").addEventListener("click", redirectToLogin);
    
    function redirectToRegister() {
        window.location.href = "../Register/register.html";
    }

    function redirectToLogin() {
        window.location.href = "../Login/login.html";
    }

    // programação carrossel //
    const carrossel = document.getElementById("carrossel");
    const slides = document.querySelectorAll(".slide");
    const totalSlides = slides.length;
    let slideAtual = 0

    document.getElementById("proxBtn").addEventListener("click", function(){
        if (slideAtual < totalSlides - 1){
            slideAtual = slideAtual + 1;
            atualizarCarrossel()
        }
        else{
            slideAtual = 0;
            atualizarCarrossel();
        }
    });

    document.getElementById("voltBtn").addEventListener("click", function(){
        if (slideAtual > 0 ){
            slideAtual = slideAtual - 1;
            atualizarCarrossel()
        }
        else{
            slideAtual = totalSlides - 1;
            atualizarCarrossel();
        }
});

function atualizarCarrossel(){
    const troca = -slideAtual * 500;
    carrossel.style.transform='translateX(' + troca + 'px)';
}
});

// programação gaveta //
function alternarGaveta(){
    var menuGaveta = document.getElementById("menuGaveta");
    menuGaveta.classList.toggle("aberto");
}