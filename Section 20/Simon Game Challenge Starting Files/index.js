let ligths = ["red","green","yellow","blue"];
let order = [];
let answer = [];
let response = false;
let count = 0;
let inGame = true;
let i = 0;
let level = 0;

$(document).ready(function () {

    $(".btn").click(function (e) { 
        e.preventDefault();
        console.log(this.id);
        check(this.id);
        if ( response === true ){
            level++;
            $("h1").text("CURRENT LEVEL: "+level);
            gameRun();
        } else if ( inGame === false && response === false ){
            endGame();
        }
    });

    $(".start-btn").click(function (e) { 
        e.preventDefault();
        $(this).slideUp();
        $("h1").text("CURRENT LEVEL: "+level);
        setTimeout(() => {
            gameRun();
        }, 500);     
    });

});


function gameRun() {
    response = false;
    setTimeout(() => {
        blink();
    }, 300);

}

function blink() {
    if ( order.length === 0 ) { order.push(ligths[Math.round(Math.random()*3)]); }
    setTimeout(() => {
        $("."+order[i]).toggleClass("pressed");
        let sound = new Audio("./sounds/"+order[i]+".mp3");
        sound.play();
        i++;
        if ( i < order.length ) { 
            gameRun(); 
        } else {
            order.push(ligths[Math.round(Math.random()*3)]);
            i = 0;
        }
      }, 300);    
      $("."+order[i]).toggleClass("pressed");
}

function check(color) {
    if ( color === order[count] ) {
        answer.push(color);
        inGame = true;
        count++;
        if ( count === (order.length-1) ) {
            count = 0;
            response = true;
            answer = []
        }
    } else {
        response = false;
        inGame = false;
    }
    console.log(answer);
}

function endGame() { 
    let wrong = new Audio("./sounds/wrong.mp3");
    $("h1").text("FINAL SCORE: "+level);
    wrong.play();
    order = [];
    answer = [];
    response = false;
    count = 0;
    inGame = true;
    i = 0;
    level = 0;
    $(".start-btn").slideToggle();
 }