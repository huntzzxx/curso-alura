let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto){
        let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto! com ${tentativas} ${palavraTentativas}!`
        exibirTextoNaTela('h1', 'Você acertou!!');
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } 

    else {

        if (chute > numeroSecreto){
            exibirTextoNaTela('p', `O número secreto é menor que ${chute}`);
        } 

        else {
            exibirTextoNaTela('p', `O número secreto é maior que ${chute}`);
        }
        tentativas++;
        limparCampo();
    }
}

function gerarNAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let qtdDeElementos = listaDeNumerosSorteados.length;

    if (qtdDeElementos == numeroLimite) {
        listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNAleatorio();
    }

    else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}