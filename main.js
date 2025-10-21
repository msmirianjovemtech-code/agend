function validarLogin(event) {
    event.preventDefault()

    const usuariovalido = "admin"
    const senhavalido = "12345"

    const usuarioInput = document.getElementById("usuario")
    const senhaInput = document.getElementById("password")
    const mensagemerro = document.getElementById("mensagem-erro")
    mensagemerro.textContent = ""


    const usuario = usuarioInput
    const senha = senhaInput

    if (usuarioInput.value == usuariovalido && senhaInput.value == senhavalido) {
        window.alert("Login realizado com sucesso! Redirecionando...")
        return window.open('agendamento.html');

    } 
    
    else {
        mensagemerro.textContent = "Credenciais Inválidas"
        usuarioInput.focus()
        usuarioInput.value = ""
        senhaInput.value = ""
        return mensagemerro;
    }
}

