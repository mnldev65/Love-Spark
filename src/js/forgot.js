const form = document.querySelector('.form')
const labels = document.querySelectorAll('.label-container');
const inputs = document.querySelectorAll('.input-container');

const labelEmail = labels[0];
const inputEmail = inputs[0];

const labelCodigo = labels[1];
const inputCodigo = inputs[1];

const labelSenha = labels[2];
const inputsenha = inputs[2];

const labelConfirmeSenha = labels[3];
const inputconfirmeSenha = inputs[3];

const CODIGO_CHAVE = "123456mnl";
let etapaAtual = 1;

function esconderTudo() {
    for (let i = 0; i < labels.length; i++) {
        labels[i].style.display = 'none';
        inputs[i].style.display = 'none';
    }
}

esconderTudo();
labelEmail.style.display = 'block';
inputEmail.style.display = 'block';

form.addEventListener('submit', function verificacao(event) {
    event.preventDefault();

    if (etapaAtual === 1) {
        if (inputEmail.value.trim() === "") {
            alert("Por favor, digite o seu e-mail primeiro.");
            return;
        }

        alert(`CÓDIGO: ${CODIGO_CHAVE}`);
        labelCodigo.style.display = 'block';
        inputCodigo.style.display = 'block';
        inputCodigo.focus();

        etapaAtual = 2;
    }

    else if (etapaAtual === 2) {
        if (inputCodigo.value.trim() === "") {
            alert("Por favor, insira o código que enviamos para o seu e-mail.");
            return;
        }

        if (inputCodigo.value.trim() !== CODIGO_CHAVE) {
            alert("Código incorreto. Tente novamente.");
            return;
        }
        esconderTudo();
        labelSenha.style.display = 'block';
        inputsenha.style.display = 'block';
        labelConfirmeSenha.style.display = 'block';
        inputconfirmeSenha.style.display = 'block';
        inputsenha.focus();

        etapaAtual = 3;
    }

    else if (etapaAtual === 3) {
        if (inputsenha.value.trim() === "" || inputconfirmeSenha.value.trim() === "") {
            alert("Por favor, preencha os dois campos de senha.");
            return;
        } else if (inputsenha.value !== inputconfirmeSenha.value) {
            alert("As senhas não coincidem. Tente novamente.");
            return;
        }

        alert("Senha criada com sucesso!");
        window.location.href = "index.html";
    }
})
