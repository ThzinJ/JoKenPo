function jogar() {
    let jogadaComp = document.getElementById("spoiler");
    
    let input = document.getElementById("escolha");
    let jogada = input.value.toLowerCase().trim();
    
    let computador = Math.floor(Math.random() * (1 * 3) + 1);
    
    let mensagem = document.getElementById("identify");
    
    // CONVERSOR
    if (computador == 1) {
        computador = 'pedra';
    }
    
    else if (computador == 2) {
        computador = 'papel';
    }
    
    else if (computador == 3) {
        computador = 'tesoura';
    }
    
    else {
        alert("Ocorreu um erro, tente novamente!")
    }
    
    // VAZIO/TEXTO ERRADO
    if (jogada === "" || (jogada !== 'pedra' && jogada !== 'papel' && jogada !== 'tesoura')) {
        alert('Jogue uma das opções válidas: pedra, papel ou tesoura')
        return; //PARA A FUNÇÃO AQUI
    }
    
    else {
        jogadaComp.textContent = computador.toUpperCase();
        jogadaComp.style.fontSize = '15px';
    }
    
    // VERIFICADOR EMPATE
    if (computador === jogada) {
        mensagem.textContent = 'EMPATE';
        mensagem.style.color = 'yellow';
    }
     // VERIFICADOR VITÓRIA 
    else if (computador == 'pedra' && jogada == 'papel') {
        mensagem.textContent = 'VITORIA';
        mensagem.style.color = 'lime';
    }
    
    else if (computador == 'papel' && jogada == 'tesoura') {
        mensagem.textContent = 'VITORIA';
        mensagem.style.color = 'lime';
    }
    
    else if (computador == 'tesoura' && jogada == 'pedra') {
        mensagem.textContent = 'VITORIA';
        mensagem.style.color = 'lime';
    }
    
    // VERIFICADOR DERROTA
    if (computador == 'pedra' && jogada == 'tesoura') {
        mensagem.textContent = 'DERROTA';
        mensagem.style.color = 'red';
    }
    
    else if (computador == 'papel' && jogada == 'pedra') {
        mensagem.textContent = 'DERROTA';
        mensagem.style.color = 'red';
    }
    
    else if (computador == 'tesoura' && jogada == 'papel') {
        mensagem.textContent = 'DERROTA';
        mensagem.style.color = 'red';
    }
    
    // LIMPAR INPUT
    input.value = "";
}
