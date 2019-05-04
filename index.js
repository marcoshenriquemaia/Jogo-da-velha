const $board = document.querySelector('.jogo-da-velha')
const jogador1 = 'X';
const jogador2 = 'O';

let jogada = true

const linha789 = ['', '', ''];
const linha456 = ['', '', ''];
const linha123 = ['', '', ''];
const coluna741 = ['', '', ''];
const coluna852 = ['', '', ''];
const coluna963 = ['', '', ''];
const diagonal753 = ['', '', ''];
const diagonal951 = ['', '', ''];

// const primeirojeitodeganhar=['x','0','0', '0','x','0' '0','0','x']

$board.addEventListener('click', function (e) {
    vencedor();
    console.log(linha789);
    if (e.target.classList.contains('jogo-da-velha')) {

    } else if (e.target.classList.contains('campo1')) {
        if (jogada == true) {
            e.target.innerHTML = 'X';
            linha789[0] = '1';
            coluna741[0] = '1';
            diagonal753[0] = '1';
            jogada = !jogada;
        } else if (jogada == false) {
            e.target.innerHTML = 'O';
            linha789[0] = '2';
            coluna741[0] = '2';
            diagonal753[0] = '2';
            jogada = !jogada;
        }

    } else if (e.target.classList.contains('campo2')) {
        if (jogada == true) {
            e.target.innerHTML = 'X';
            linha789[1] = '1';
            coluna852[0] = '1';
            jogada = !jogada;
        } else if (jogada == false) {
            e.target.innerHTML = 'O';
            linha789[1] = '2';
            coluna852[0] = '2';
            jogada = !jogada;
        }
    } else if (e.target.classList.contains('campo3')) {
        if (jogada == true) {
            e.target.innerHTML = 'X';
            linha789[2] = '1';
            coluna963[0] = '1';
            diagonal951[0] = '1';
            jogada = !jogada;
        } else if (jogada == false) {
            e.target.innerHTML = 'O';
            linha789[2] = '2';
            coluna963[0] = '2';
            diagonal951[0] = '2';
            jogada = !jogada;
        }

    } else if (e.target.classList.contains('campo4')) {
        if (jogada == true) {
            e.target.innerHTML = 'X';
            linha456[0] = '1';
            coluna741[1] = '1';
            jogada = !jogada;
        } else if (jogada == false) {
            e.target.innerHTML = 'O';
            linha456[0] = '2';
            coluna741[1] = '2';
            jogada = !jogada;
        }
    } else if (e.target.classList.contains('campo5')) {
        if (jogada == true) {
            e.target.innerHTML = 'X';
            linha456[1] = '1';
            coluna852[1] = '1';
            diagonal951[1] = '1';
            diagonal753[1] = '1';
            jogada = !jogada;
        } else if (jogada == false) {
            e.target.innerHTML = 'O';
            linha456[1] = '2';
            coluna852[1] = '2';
            diagonal951[1] = '2';
            diagonal753[1] = '2';
            jogada = !jogada;
        }

    } else if (e.target.classList.contains('campo6')) {
        if (jogada == true) {
            e.target.innerHTML = 'X';
            linha456[2] = '1';
            coluna963[1] = '1';
            jogada = !jogada;
        } else if (jogada == false) {
            e.target.innerHTML = 'O';
            linha456[2] = '2';
            coluna963[1] = '2';
            jogada = !jogada;
        }
    } else if (e.target.classList.contains('campo7')) {
        if (jogada == true) {
            e.target.innerHTML = 'X';
            linha123[0] = '1';
            coluna741[2] = '1';
            diagonal951[2] = '1';
            jogada = !jogada;
        } else if (jogada == false) {
            e.target.innerHTML = 'O';
            linha123[0] = '2';
            coluna741[2] = '2';
            diagonal951[2] = '2';
            jogada = !jogada;
        }

    } else if (e.target.classList.contains('campo8')) {
        if (jogada == true) {
            e.target.innerHTML = 'X';
            linha123[1] = '1';
            coluna852[1] = '1';
            jogada = !jogada;
        } else if (jogada == false) {
            e.target.innerHTML = 'O';
            linha123[1] = '2';
            coluna852[1] = '2';
            jogada = !jogada;
        }
    } else if (e.target.classList.contains('campo9')) {
        if (jogada == true) {
            e.target.innerHTML = 'X';
            linha123[2] = '1';
            coluna963[2] = '1';
            diagonal753[2] = '1';
            jogada = !jogada;
        } else if (jogada == false) {
            e.target.innerHTML = 'O';
            linha123[2] = '2';
            coluna963[2] = '2';
            diagonal753[2] = '2';
            jogada = !jogada;
        }

    }
})
function vencedor() {
    if (linha789 == ['1', '1', '1'] ||
        linha456 == ['1', '1', '1'] ||
        linha123 == ['1', '1', '1'] ||
        linha789 == ['1', '1', '1'] ||
        linha456 == ['1', '1', '1'] ||
        linha123 == ['1', '1', '1'] ||
        coluna741 == ['1', '1', '1'] ||
        coluna852 == ['1', '1', '1'] ||
        coluna963 == ['1', '1', '1'] ||
        diagonal753 == ['1', '1', '1'] ||
        diagonal951 == ['1', '1', '1']){
        console.log("jogador 1 GANHOU")
    } else{
        console.log("teste");
    }
}



