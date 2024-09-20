function armazenarDados(){
    var email = document.getElementById("email").value
    var senha = document.getElementById("senha").value
    var confirmarSenha = document.getElementById("confirmarSenha").value
    var nome = document.getElementById("nome").value
    if(email == false || senha == false || confirmarSenha == false || nome == false){
        alert("Preencha todos os campos!")
    }

    else if(senha != confirmarSenha){
        confSenhaCheck.style.color = "red"
    setTimeout(function(){    
        alert("Senhas não coincidem!\nTente novamente!")
    },500)
    }

    else{
        confSenhaCheck.style.color = "green"
        senhaCheck.style.color = "green"
        sessionStorage.setItem('email', document.getElementById("email").value) //armazenando dados entre paginas
        sessionStorage.setItem('senha', document.getElementById("senha").value) //armazenando dados entre paginas
        sessionStorage.setItem('nome', document.getElementById("nome").value)   //armazenando dados entre paginas
        setTimeout(function(){
            alert('Usuário Cadastrado!\nClique em "Ok" para ser redirecionado')
            window.location.href = ("../Login/login.html");
        },500)
    }
    
}

function checarDados(){
    var email = sessionStorage.getItem('email') //recuperando dados entre paginas
    var senha = sessionStorage.getItem('senha') //recuperando dados entre paginas
    var nome = sessionStorage.getItem('nome')   //recuperando dados entre paginas
    var loginEmail = document.getElementById('loginEmail').value
    var loginSenha = document.getElementById('loginSenha').value

    if(email!=loginEmail || senha!=loginSenha){
        senhaLog.style.color = "red"
        emailLog.style.color = "red"
        setTimeout(function(){
            alert("Email ou Senha incorretos\nTente Novamente")
        },500)
    }
    else if(email==loginEmail && senha==loginSenha){
        senhaLog.style.color = "green"
        emailLog.style.color = "green"
        setTimeout(function(){
            alert(`Sessão iniciada com sucesso!\nSeja bem vindo, ${nome}\nClique em "Ok" para ser redirecionado para nossa página`)
            window.location.href = "../index.html";
        },500)
    }
}

