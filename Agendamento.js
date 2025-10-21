function salvarcadastro(event) {

    //Evitar o envio padrão do formulário
    event.preventDefault()

    //coletar os dados do formulário
    const nome = document.getElementById("nome").value
    const email = document.getElementById("email").value
    const telefone = document.getElementById("telefone").value
    const idade = document.getElementById("idade").value
    const data = document.getElementById("data").value
    const horario = document.getElementById("horario").value
    const medico = document.getElementById("medico").value
    const sintomas = document.getElementById("sintomas").value
     const especialidade = document.getElementById("especialidade").value
    const servicosselect = document.querySelectorAll("input[name='servicos']:checked")
    const convenio = document.querySelectorAll("input[name='convenio']:checked")
    const servicos = Array.from(servicosselect).map(x => x.value)


    //criar o meu objeto
    const usuario = {
        nome,
        email,
        telefone,
        idade,
        data,
        horario,
        especialidade,
        convenio,
        servicos,
        medico,
        sintomas

    }
    //Armazenar em LocalStorage od dados do cadastro 

    localStorage.setItem("usuarioCadastro", JSON.stringify(usuario))
    alert("Cadastro Efetuado com Sucesso!")
    console.log("usuario");

}
