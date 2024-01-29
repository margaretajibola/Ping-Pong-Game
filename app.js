// Javascript code for score keeper

const resetBtn = document.querySelector('#resetbtn');
const p1Btn = document.querySelector('#p1btn');
const p2Btn = document.querySelector('#p2btn');

const p1Score = document.querySelector('#playeronescore');
const p2Score = document.querySelector('#playertwoscore');

const winningScoreDropdown = document.querySelector('#length');

let p1Display = 0;
let p2Display = 0;
let winningScore = 5;
gameOver = false;

function reset(){
    gameOver = false;
    p1Display = 0;
    p2Display = 0
    p1Score.textContent = p1Display;
    p2Score.textContent = p2Display;
    p1Score.classList.remove('has-text-success','has-text-danger')
    p2Score.classList.remove('has-text-success','has-text-danger')
}

resetBtn.addEventListener('click', reset);

p1Btn.addEventListener('click', function(){
    if(!gameOver){
        p1Display++;
        if(p1Display === winningScore){
            gameOver = true;
            p1Score.classList.add('has-text-success');
            p2Score.classList.add('has-text-danger');
        }
        p1Score.textContent = p1Display;
    }


});

p2Btn.addEventListener('click', function(){
    if(!gameOver){
        p2Display++;
        if(p2Display === winningScore){
            gameOver = true;
            p2Score.classList.add('has-text-success');
            p1Score.classList.add('has-text-danger');
        }
        p2Score.textContent = p2Display;
    }

});

winningScoreDropdown.addEventListener('change', function(){
    winningScore = parseInt(this.value);
    reset();
});

