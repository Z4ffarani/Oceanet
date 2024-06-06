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

function alternarGaveta(){
    var menuGaveta = document.getElementById('menuGaveta')
    menuGaveta.classList.toggle('aberto');
}

// const carrossel = document.getElementById('carrossel')
// const slides = document.querySelectorAll(".slideCarrossel")
// const totalSlides = slides.length
// var slideAtual = 0;

// document.getElementById("subir-btn").addEventListener("click", function(){
//     if(slideAtual < totalSlides){
//         slideAtual = slideAtual + 1;
//         atualizarCarrossel()
//     }
// });

// document.getElementById("descer-btn").addEventListener("click", function(){
//     if(slideAtual > totalSlides)
//         slideAtual = slideAtual - 1;
//         atualizarCarrossel()
// })

// function atualizarCarrossel(){
//     const alternar = -slideAtual * 400;
//     carrossel.style.top = alternar + "px";
// }