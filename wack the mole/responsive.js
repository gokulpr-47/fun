const holes = document.querySelectorAll(".mole");
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll(".mole");
let lastHole;
let timeUp = false;
let score = 0;

function popTime(min,max){
    return(Math.round(Math.random() * (max - min) + min));
}

function randomHole(holes){
    const index = Math.floor(Math.random() * holes.length);
    const hole = holes[index];
    if (hole == lastHole){
        return(randomHole(holes));
    }
    lastHole = hole;
    return hole;
}

function pop(){
    const time = popTime(500,1000);
    const hole = randomHole(holes);
    hole.classList.add('up');
    setTimeout(() => {
        hole.classList.remove('up');
        if(!timeUp){
            pop();
        }
    }, time);
}

function startGame(){
    scoreBoard.textContent = "Score:"+ 0;
    timeUp = false;
    pop();
    score = 0;
    setTimeout(() => timeUp = true, 15000);
}

function hit(e){
    score++;
    this.parentNode.classList.remove('up');
    scoreBoard.textContent = "Score:"+ score;
}

moles.forEach(mole => mole.addEventListener('click', hit))