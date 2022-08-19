const dt = new Date().toLocaleString();

document.getElementById("data").innerHTML = dt;

function FuncaoBotao() {

    var nome = document.getElementById("nomeId");
    var senha = document.getElementById("senhaId");
    var email = document.getElementById("emailId");
    var msg = document.getElementById("msgId");
    if (nome.value != "" & senha.value != "" & email.value != "") {
        alert('Obrigado sr(a) ' + nome.value + ' seu email ' + email.value + ' foi cadastrado com sucesso');
    } else {
        alert('Você não preencheu todos os campos obrigatórios');
    }
}

function FuncaoFormulario() {
    var nome = document.getElementById("nomeId");
    var senha = document.getElementById("senhaId");
    var email = document.getElementById("emailId");
    if (nome.value != "" & senha.value != "" & email.value != "") {
        document.getElementById("confirmacao").innerHTML = "Realize o Cadastro clicando em \"Enviar\"";
    } else {
        document.getElementById("confirmacao").innerHTML = "Complete todos os dados";
    }

}

function FuncaoAviso() {
    alert('Este é apenas um painel de avisos!');
}
