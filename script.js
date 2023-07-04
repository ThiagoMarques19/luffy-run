let luffy = document.querySelector('.luffy');
let rock = document.querySelector('.rock');

function remove(){
    luffy.classList.remove('jump');
}

function jump() {
    luffy.classList.add('jump');

    setTimeout(remove, 500);
}

function loopGame() {

    let rockPosition = rock.offsetLeft;
    let luffyPositon = +window.getComputedStyle(luffy).bottom.replace('px', '');

    if (rockPosition <= 100 && rockPosition > 0 && luffyPositon < 65) {
        rock.style.animation = 'none';
        rock.style.left = `${rockPosition}px`;
        luffy.src = 'Imagens/game over.gif';
        luffy.style.width = '100px';

    }

}

let loop = setInterval(loopGame, 10);

document.addEventListener('keydown', jump);