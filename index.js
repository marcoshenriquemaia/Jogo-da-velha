const $buttomJogar = document.querySelector(".wrap-button-jogar");
const $board = document.querySelector(".wrap-board");
const $campo1 = document.querySelector(".campo1-board");
const $campo2 = document.querySelector(".campo2-board");
const $campo3 = document.querySelector(".campo3-board");
const $campo4 = document.querySelector(".campo4-board");
const $campo5 = document.querySelector(".campo5-board");
const $campo6 = document.querySelector(".campo6-board");
const $campo7 = document.querySelector(".campo7-board");
const $campo8 = document.querySelector(".campo8-board");
const $campo9 = document.querySelector(".campo9-board");
const $placarJogador1 = document.querySelector(".placar-jogador-1");
const $placarJogador2 = document.querySelector(".placar-jogador-2");
const $buttonMD = document.querySelector(".button-md");
const $buttonStateMD = document.querySelector(".button-md-state");
const $buttonBot = document.querySelector(".button-bot");
const $buttonStateBot = document.querySelector(".button-bot-state");
const pontuacaoJogador1 = parseInt($placarJogador1.textContent);
const pontuacaoJogador2 = parseInt($placarJogador2.textContent);
const inputJogador1 = document.querySelector(".input-jogador1");
const inputJogador2 = document.querySelector(".input-jogador2");
const boxHistorico = document.querySelector(".container-historico");
const boxCenarioVencedor = document.querySelector(".wrap-cenario-vencedor");
const textCenario = document.querySelector(".text-cenario");
const $containerHistorico = document.querySelector(".container-historico");

let board = ["", "", "", "", "", "", "", "", ""];

let numero = 0;
let vencedor = "";
let vencedorMelhorDeTres = 0;
let fimDeJogo = true;
let velha;
let jogada = true;
let vezDoBot = false;
let primeiraJogada = true;
let jogadorAtual = "";
let local = "";
let localJogado = null;

function resetarVelha() {
  if (checarVelha()) {
    setTimeout(limparMD, 2000);
    fimDeJogo = true;
  }
}

function pintarVelha() {
  if (checarVelha() && vencedor == "") {
    $campo1.classList.add("campos2");
    $campo2.classList.add("campos2");
    $campo3.classList.add("campos2");
    $campo4.classList.add("campos2");
    $campo5.classList.add("campos2");
    $campo6.classList.add("campos2");
    $campo7.classList.add("campos2");
    $campo8.classList.add("campos2");
    $campo9.classList.add("campos2");
  }
  resetarVelha();
}

function checarVelha() {
  for (letras of board) {
    if (letras == "") {
      return false;
    }
  }
  fimDeJogo = true;
  return true;
}

function testarLinha(linha) {
  for (letras of linha) {
    if (letras == saberJogador()) {
    } else {
      return;
    }
  }
  vencedor = saberJogador();
  if (vencedor == "X") {
    setTimeout(limparMD, 2000);
    $placarJogador1.innerHTML = parseInt($placarJogador1.textContent) + 1;
  } else if (vencedor == "O") {
    setTimeout(limparMD, 2000);
    $placarJogador2.innerHTML = parseInt($placarJogador2.textContent) + 1;
  }
  fimDeJogo = true;
  pintarVencedor();
}

// Detector do vencedor
function checarVencedor() {
  const linha789 = [board[0], board[1], board[2]];
  const linha456 = [board[3], board[4], board[5]];
  const linha123 = [board[6], board[7], board[8]];
  const coluna741 = [board[0], board[3], board[6]];
  const coluna852 = [board[1], board[4], board[7]];
  const coluna963 = [board[2], board[5], board[8]];
  const diagonal753 = [board[0], board[4], board[8]];
  const diagonal951 = [board[2], board[4], board[6]];

  const linhas = [
    linha789,
    linha456,
    linha123,
    coluna741,
    coluna852,
    coluna963,
    diagonal753,
    diagonal951
  ];
  for (linha of linhas) {
    testarLinha(linha);
  }
}

function saberJogador() {
  if (jogada) {
    jogadorAtual = "X";
    return "X";
  } else {
    jogadorAtual = "O";
    return "O";
  }
}

// Detector de click

$board.addEventListener("click", function(e) {
  if (e.target.classList.contains("jogo-da-velha")) {
  } else {
    if (e.target.textContent == "" && fimDeJogo == false && jogar) {
      if (e.target.classList.contains("campo1")) {
        if (jogada) {
          e.target.innerHTML = "X";
          board[0] = "X";
          local = "Primeiro campo";
          localJogado = 0;
          saberJogador();
          addHistorico();
        } else if (jogada == false) {
          e.target.innerHTML = "O";
          board[0] = "O";
          local = "Primeiro campo";
          localJogado = 0;
          saberJogador();
          addHistorico();
        }
      } else if (e.target.classList.contains("campo2")) {
        if (jogada) {
          e.target.innerHTML = "X";
          board[1] = "X";
          local = "Segundo campo";
          localJogado = 1;
          saberJogador();
          addHistorico();
        } else if (jogada == false) {
          e.target.innerHTML = "O";
          board[1] = "O";
          local = "Segundo campo";
          localJogado = 1;
          saberJogador();
          addHistorico();
        }
      } else if (e.target.classList.contains("campo3")) {
        if (jogada) {
          e.target.innerHTML = "X";
          board[2] = "X";
          local = "Terceiro campo";
          localJogado = 2;
          saberJogador();
          addHistorico();
        } else if (jogada == false) {
          e.target.innerHTML = "O";
          board[2] = "O";
          local = "Terceiro campo";
          localJogado = 2;
          saberJogador();
          addHistorico();
        }
      } else if (e.target.classList.contains("campo4")) {
        if (jogada) {
          e.target.innerHTML = "X";
          board[3] = "X";
          local = "Quarto campo";
          localJogado = 3;
          saberJogador();
          addHistorico();
        } else if (jogada == false) {
          e.target.innerHTML = "O";
          board[3] = "O";
          local = "Quarto campo";
          localJogado = 3;
          saberJogador();
          addHistorico();
        }
      } else if (e.target.classList.contains("campo5")) {
        if (jogada) {
          e.target.innerHTML = "X";
          board[4] = "X";
          local = "Quinto campo";
          localJogado = 4;
          saberJogador();
          addHistorico();
        } else if (jogada == false) {
          e.target.innerHTML = "O";
          board[4] = "O";
          local = "Quinto campo";
          localJogado = 4;
          saberJogador();
          addHistorico();
        }
      } else if (e.target.classList.contains("campo6")) {
        if (jogada) {
          e.target.innerHTML = "X";
          board[5] = "X";
          local = "Sexto campo";
          localJogado = 5;
          saberJogador();
          addHistorico();
        } else if (jogada == false) {
          e.target.innerHTML = "O";
          board[5] = "O";
          local = "Sexto campo";
          localJogado = 5;
          saberJogador();
          addHistorico();
        }
      } else if (e.target.classList.contains("campo7")) {
        if (jogada) {
          e.target.innerHTML = "X";
          board[6] = "X";
          local = "Sétimo campo";
          localJogado = 6;
          saberJogador();
          addHistorico();
        } else if (jogada == false) {
          e.target.innerHTML = "O";
          board[6] = "O";
          local = "Sétimo campo";
          localJogado = 6;
          saberJogador();
          addHistorico();
        }
      } else if (e.target.classList.contains("campo8")) {
        if (jogada) {
          e.target.innerHTML = "X";
          board[7] = "X";
          local = "Oitavo campo";
          localJogado = 7;
          saberJogador();
          addHistorico();
        } else if (jogada == false) {
          e.target.innerHTML = "O";
          board[7] = "O";
          local = "Oitavo campo";
          localJogado = 7;
          saberJogador();
          addHistorico();
        }
      } else if (e.target.classList.contains("campo9")) {
        if (jogada) {
          e.target.innerHTML = "X";
          board[8] = "X";
          local = "Nono campo";
          localJogado = 8;
          saberJogador();
          addHistorico();
        } else if (jogada == false) {
          e.target.innerHTML = "O";
          board[8] = "O";
          local = "Nono campo";
          localJogado = 8;
          saberJogador();
          addHistorico();
        }
      }
      checarVencedor();
      pintarVelha();
      addElementoHistoricoPartidas();
      revesar();
      random();
      criarArrayHistorico();
      melhorDeTres();
      melhorDeCinco();
      jogada = !jogada;
    }
  }
  if (jogar == false) {
    $buttomJogar.classList.add("button-jogar-vermelho");
    setTimeout(function() {
      $buttomJogar.classList.remove("button-jogar-vermelho");
    }, 250);
    setTimeout(function() {
      $buttomJogar.classList.add("button-jogar-vermelho");
    }, 500);
    setTimeout(function() {
      $buttomJogar.classList.remove("button-jogar-vermelho");
    }, 750);
    setTimeout(function() {
      $buttomJogar.classList.add("button-jogar-vermelho");
    }, 1000);
    setTimeout(function() {
      $buttomJogar.classList.remove("button-jogar-vermelho");
    }, 1250);
  }
});

// Pinta as letras vencedoras

function resetarPlacar() {
  $placarJogador1.innerHTML = "0";
  $placarJogador2.innerHTML = "0";
}

let jogar = false;
$buttomJogar.addEventListener("click", function() {
  $buttomJogar.classList.toggle("button-reiniciar");
  jogar = !jogar;
  if (jogar) {
    fimDeJogo = false;
    $buttomJogar.textContent = "Reiniciar";
    inputJogador1.disabled = true;
    inputJogador2.disabled = true;
  } else if (jogar == false) {
    $campo1.innerHTML = "";
    $campo2.innerHTML = "";
    $campo3.innerHTML = "";
    $campo4.innerHTML = "";
    $campo5.innerHTML = "";
    $campo6.innerHTML = "";
    $campo7.innerHTML = "";
    $campo8.innerHTML = "";
    $campo9.innerHTML = "";
    $buttomJogar.textContent = "Jogar";
    $buttomJogar.classList.add("button-jogar-text");
    inputJogador1.disabled = false;
    inputJogador2.disabled = false;
    resetarPlacar();
    despintarVencedor();
    jogada = true;
    fimDeJogo = true;
    resetarBoard();
  }
});

function resetarBoard() {
  board[0] = "";
  board[1] = "";
  board[2] = "";
  board[3] = "";
  board[4] = "";
  board[5] = "";
  board[6] = "";
  board[7] = "";
  board[8] = "";
}

function pintarVencedor() {
  if (
    board[0] == saberJogador() &&
    board[1] == saberJogador() &&
    board[2] == saberJogador()
  ) {
    $campo1.classList.add("campos2");
    $campo2.classList.add("campos2");
    $campo3.classList.add("campos2");
  }
  if (
    board[3] == saberJogador() &&
    board[4] == saberJogador() &&
    board[5] == saberJogador()
  ) {
    $campo4.classList.add("campos2");
    $campo5.classList.add("campos2");
    $campo6.classList.add("campos2");
  }
  if (
    board[6] == saberJogador() &&
    board[7] == saberJogador() &&
    board[8] == saberJogador()
  ) {
    $campo7.classList.add("campos2");
    $campo8.classList.add("campos2");
    $campo9.classList.add("campos2");
  }
  if (
    board[0] == saberJogador() &&
    board[3] == saberJogador() &&
    board[6] == saberJogador()
  ) {
    $campo1.classList.add("campos2");
    $campo4.classList.add("campos2");
    $campo7.classList.add("campos2");
  }
  if (
    board[1] == saberJogador() &&
    board[4] == saberJogador() &&
    board[7] == saberJogador()
  ) {
    $campo2.classList.add("campos2");
    $campo5.classList.add("campos2");
    $campo8.classList.add("campos2");
  }
  if (
    board[2] == saberJogador() &&
    board[5] == saberJogador() &&
    board[8] == saberJogador()
  ) {
    $campo3.classList.add("campos2");
    $campo6.classList.add("campos2");
    $campo9.classList.add("campos2");
  }
  if (
    board[0] == saberJogador() &&
    board[4] == saberJogador() &&
    board[8] == saberJogador()
  ) {
    $campo1.classList.add("campos2");
    $campo5.classList.add("campos2");
    $campo9.classList.add("campos2");
  }
  if (
    board[2] == saberJogador() &&
    board[4] == saberJogador() &&
    board[6] == saberJogador()
  ) {
    $campo3.classList.add("campos2");
    $campo5.classList.add("campos2");
    $campo7.classList.add("campos2");
  }
}

function despintarVencedor() {
  if (fimDeJogo == true) {
    $campo1.classList.remove("campos2");
    $campo2.classList.remove("campos2");
    $campo3.classList.remove("campos2");
    $campo4.classList.remove("campos2");
    $campo5.classList.remove("campos2");
    $campo6.classList.remove("campos2");
    $campo7.classList.remove("campos2");
    $campo8.classList.remove("campos2");
    $campo9.classList.remove("campos2");
  }
}

$buttonBot.addEventListener("click", function() {
  $buttonStateBot.classList.toggle("button-bot-state2");
  bot = !bot;
});

let bot = false;
let md3 = true;

$buttonMD.addEventListener("click", function() {
  limparMD();
  resetarPlacar();
  $buttonStateMD.classList.toggle("button-md-state2");
  md3 = !md3;
});

function limparBoard() {
  $campo1.innerHTML = "";
  $campo2.innerHTML = "";
  $campo3.innerHTML = "";
  $campo4.innerHTML = "";
  $campo5.innerHTML = "";
  $campo6.innerHTML = "";
  $campo7.innerHTML = "";
  $campo8.innerHTML = "";
  $campo9.innerHTML = "";
}

function limparMD() {
  $campo1.innerHTML = "";
  $campo2.innerHTML = "";
  $campo3.innerHTML = "";
  $campo4.innerHTML = "";
  $campo5.innerHTML = "";
  $campo6.innerHTML = "";
  $campo7.innerHTML = "";
  $campo8.innerHTML = "";
  $campo9.innerHTML = "";
  resetaArrayHistorico();
  primeiraJogada = true;
  despintarVencedor();
  fimDeJogo = false;
  resetarBoard();
  boxHistorico.innerHTML = "";
  jogada = true;
  vencedor = "";
  numero = 0;
  if(vencedorMelhorDeTres > 0 || vencedorMelhorDeTres > 0){
    resetaHistoricoVitoria();
    vencedorMelhorDeTres = 0;
  }
}

function melhorDeTres() {
  if ($placarJogador1.innerHTML == "2" && md3) {
    vencedorMelhorDeTres = 1;
    setTimeout(limparMD, 2000);
    setTimeout(resetarPlacar, 2000);
  } else if ($placarJogador2.innerHTML == "2" && md3) {
    vencedorMelhorDeTres = 2;
    setTimeout(limparMD, 2000);
    setTimeout(resetarPlacar, 2000);
  }
}
function melhorDeCinco() {
  if ($placarJogador1.innerHTML == "3" && md3 == false) {
    vencedorMelhorDeTres = 1;
    setTimeout(resetarPlacar, 2000);
    setTimeout(limparMD, 2000);
  } else if ($placarJogador2.innerHTML == "3" && md3 == false) {
    vencedorMelhorDeTres = 2;
    setTimeout(resetarPlacar, 2000);
    setTimeout(limparMD, 2000);
  }
}

function revesar() {
  if (bot && fimDeJogo) {
    setTimeout(limparMD, 2000);
    randon();
  }
}
function random() {
  if (fimDeJogo == false) {
    const randomNumber = Math.floor(Math.random() * 9);
    botFacil(randomNumber);
  }
}

function botFacil(randomNumber) {
  if (bot) {
    primeiraJogada = false;
    if (randomNumber == 0 && board[0] == "") {
      $campo1.innerHTML = "O";
      board[0] = "O";
      local = 'Primeiro Campo';
      jogada = false;
      saberJogador();
      checarVencedor();
      addHistorico();
    } else if (randomNumber == 0 && board[0] != "") {
      random();
    }
    if (randomNumber == 1 && board[1] == "") {
      $campo2.innerHTML = "O";
      board[1] = 'O';
      local = 'Segundo Campo';
      jogada = false;
      saberJogador();
      checarVencedor();
      addHistorico();
    } else if (randomNumber == 1 && board[1] != "") {
      random();
    }
    if (randomNumber == 2 && board[2] == "") {
      $campo3.innerHTML = "O";
      board[2] = "O";
      local = 'Terceiro Campo';
      jogada = false;
      saberJogador();
      checarVencedor();
      addHistorico();
    } else if (randomNumber == 2 && board[2] != "") {
      random();
    }
    if (randomNumber == 3 && board[3] == "") {
      $campo4.innerHTML = "O";
      board[3] = "O";
      local = 'Quarto Campo';
      jogada = false;
      saberJogador();
      checarVencedor();
      addHistorico();
    } else if (randomNumber == 3 && board[3] != "") {
      random();
    }
    if (randomNumber == 4 && board[4] == "") {
      $campo5.innerHTML = "O";
      board[4] = "O";
      local = 'Quinto Campo';
      jogada = false;
      saberJogador();
      checarVencedor();
      addHistorico();
    } else if (randomNumber == 4 && board[4] != "") {
      random();
    }
    if (randomNumber == 5 && board[5] == "") {
      $campo6.innerHTML = "O";
      board[5] = "O";
      local = 'Sexto Campo';
      jogada = false;
      saberJogador();
      checarVencedor();
      addHistorico();
    } else if (randomNumber == 5 && board[5] != "") {
      random();
    }
    if (randomNumber == 6 && board[6] == "") {
      $campo7.innerHTML = "O";
      board[6] = "O";
      local = 'Sétimo Campo';
      jogada = false;
      saberJogador();
      checarVencedor();
      addHistorico();
    } else if (randomNumber == 6 && board[6] != "") {
      random();
    }
    if (randomNumber == 7 && board[7] == "") {
      $campo8.innerHTML = "O";
      board[7] = "O";
      local = 'Oitavo Campo';
      jogada = false;
      saberJogador();
      checarVencedor();
      addHistorico();
    } else if (randomNumber == 7 && board[7] != "") {
      random();
    }
    if (randomNumber == 8 && board[8] == "") {
      $campo9.innerHTML = "O";
      board[8] = "O";
      local = 'Nono Campo';
      jogada = false;
      saberJogador();
      checarVencedor();
      addHistorico();
    } else if (randomNumber == 8 && board[8] != "") {
      random();
    }
  }
}

function escreverNomeJogador(textNomeJogador) {
  if (saberJogador() == "X") {
    textNomeJogador.textContent = inputJogador2.value;
  } else if (saberJogador() == "O") {
    textNomeJogador.textContent = inputJogador1.value;
  }
}

function addHistorico() {
  const historicoElement = document.querySelector(".container-historico");
  historicoElement.appendChild(criaElementoHistorico());
}

function criaElementoHistorico() {
  const boxHistorico = document.createElement("div");
  boxHistorico.classList.add("box-historico");
  boxHistorico.classList.add(`box-historico${numero}`);
  numero++;

  const letraJogador = document.createElement("div");
  letraJogador.classList.add("letra-jogador");
  letraJogador.textContent = jogadorAtual;

  const wrapJogadorLocal = document.createElement("div");
  wrapJogadorLocal.classList.add("wrap-jogador-local");

  const textNomeJogador = document.createElement("div");
  textNomeJogador.classList.add("wrap-jogador-local");
  escreverNomeJogador(textNomeJogador);

  const textLocalJogada = document.createElement("div");
  textLocalJogada.classList.add("text-local-jogada");
  textLocalJogada.textContent = local;

  boxHistorico.appendChild(letraJogador);
  boxHistorico.appendChild(wrapJogadorLocal);
  wrapJogadorLocal.appendChild(textNomeJogador);
  wrapJogadorLocal.appendChild(textLocalJogada);
  return boxHistorico;
}
function addElementoHistoricoPartidas() {
  if (fimDeJogo) {
    const boxHistoricoVencedor = document.createElement("div");
    boxHistoricoVencedor.classList.add("wrap-cenario-vencedor-miniboard");

    boxHistoricoVencedor.appendChild(criaElementoHistoricoPartidas());
    boxHistoricoVencedor.appendChild(escreverCenario());
    boxHistoricoVencedor.appendChild(criarMiniBoards());
    boxCenarioVencedor.appendChild(boxHistoricoVencedor);
  }
}

function escreverVelha(textVencedor){
  if(checarVelha()){
    textVencedor.innerHTML = "VELHA";
  }
}


function criaElementoHistoricoPartidas() {
  const boxVencedor = document.createElement("div");
  boxVencedor.classList.add("box-vencedor");

  const textVencedor = document.createElement("div");
  textVencedor.classList.add("box-vencedor-vencedor");
  textVencedor.innerHTML = "Vencedor";
  escreverVelha(textVencedor);

  const textNome = document.createElement("div");
  textNome.classList.add("box-vencedor-nome");
  escreverNomeVencedor(textNome);

  boxVencedor.appendChild(textVencedor);
  boxVencedor.appendChild(textNome);
  return boxVencedor;
}

function escreverNomeVencedor(textNome) {
  console.log(vencedor);
  if (vencedor == "X") {
    textNome.textContent = inputJogador1.value;
  } else if (vencedor == "O") {
    textNome.textContent = inputJogador2.value;
  }
}

function escreverCenario() {
  const cenarioVencedorMiniBoard = document.createElement("div");
  const textCenario = document.createElement("span");
  cenarioVencedorMiniBoard.appendChild(textCenario);
  textCenario.classList.add("text-cenario");
  textCenario.textContent = "Cenário";
  return cenarioVencedorMiniBoard;
}

function criarMiniBoards() {
  const miniBoard = document.createElement("div");
  miniBoard.classList.add("mini-board");

  const miniCampo1 = document.createElement("div");
  miniCampo1.classList.add("mini-campos");
  miniBoard.appendChild(miniCampo1);
  miniCampo1.textContent = board[0];

  const miniCampo2 = document.createElement("div");
  miniCampo2.classList.add("mini-campos");
  miniBoard.appendChild(miniCampo2);
  miniCampo2.textContent = board[1];

  const miniCampo3 = document.createElement("div");
  miniCampo3.classList.add("mini-campos");
  miniBoard.appendChild(miniCampo3);
  miniCampo3.textContent = board[2];

  const miniCampo4 = document.createElement("div");
  miniCampo4.classList.add("mini-campos");
  miniBoard.appendChild(miniCampo4);
  miniCampo4.textContent = board[3];

  const miniCampo5 = document.createElement("div");
  miniCampo5.classList.add("mini-campos");
  miniBoard.appendChild(miniCampo5);
  miniCampo5.textContent = board[4];

  const miniCampo6 = document.createElement("div");
  miniCampo6.classList.add("mini-campos");
  miniBoard.appendChild(miniCampo6);
  miniCampo6.textContent = board[5];

  const miniCampo7 = document.createElement("div");
  miniCampo7.classList.add("mini-campos");
  miniBoard.appendChild(miniCampo7);
  miniCampo7.textContent = board[6];

  const miniCampo8 = document.createElement("div");
  miniCampo8.classList.add("mini-campos");
  miniBoard.appendChild(miniCampo8);
  miniCampo8.textContent = board[7];

  const miniCampo9 = document.createElement("div");
  miniCampo9.classList.add("mini-campos");
  miniBoard.appendChild(miniCampo9);
  miniCampo9.textContent = board[8];

  return miniBoard;
}

const arrayHistorico = [];

function criarArrayHistorico() {
  const oldBoard = []
  for( item of board){
    oldBoard.push(item)
  }
  arrayHistorico.push(oldBoard);
}
function montaBoard(array) {
  let numeroCrescente = 1;
  for (item of array) {
    document.querySelector(`.campo${numeroCrescente}`).innerHTML = item;
    numeroCrescente++;
  }
}


$containerHistorico.addEventListener("click", function(e) {
  if (e.target.classList.contains("box-historico0")) {
    limparBoard();
    montaBoard(arrayHistorico[0]);
  }
  if (e.target.classList.contains("box-historico1")) {
    limparBoard();
    montaBoard(arrayHistorico[1]);
  }
  if (e.target.classList.contains("box-historico2")) {
    limparBoard();
    montaBoard(arrayHistorico[2]);
  }
  if (e.target.classList.contains("box-historico3")) {
    limparBoard();
    montaBoard(arrayHistorico[3]);
  }
  if (e.target.classList.contains("box-historico4")) {
    limparBoard();
    montaBoard(arrayHistorico[4]);
  }
  if (e.target.classList.contains('box-historico5')){
    limparBoard();
    montaBoard(arrayHistorico[5])
  }
  if (e.target.classList.contains('box-historico6')){
    limparBoard();
    montaBoard(arrayHistorico[6])
  }
  if (e.target.classList.contains('box-historico7')){
    limparBoard();
    montaBoard(arrayHistorico[7])
  }
  if (e.target.classList.contains('box-historico8')){
    limparBoard();
    montaBoard(arrayHistorico[8]);
  }
});

function resetaArrayHistorico() {
  arrayHistorico[0] = "";
  arrayHistorico[1] = "";
  arrayHistorico[2] = "";
  arrayHistorico[3] = "";
  arrayHistorico[4] = "";
  arrayHistorico[5] = "";
  arrayHistorico[6] = "";
  arrayHistorico[7] = "";
  arrayHistorico[8] = "";
}

function resetaHistoricoVitoria(){
  document.querySelector('.wrap-cenario-vencedor').innerHTML = '';
}
