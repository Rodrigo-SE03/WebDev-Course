let btns = document.getElementsByTagName('button');
document.addEventListener("keydown", handleClick);

let audio = new Audio("./sounds/tom-1.mp3");

for ( let i = 0 ; i < btns.length ; i++) {
    btns[i].addEventListener('click',handleClick);
}

function handleClick (e) {
    let condition = this.innerHTML;
    if ( e.key != undefined ) { condition = e.key.toLowerCase(); }
    makeSound(condition);
    pressAnim(condition);
}

function makeSound (condition) {
    switch (condition) {
        case "w":
            new Audio("./sounds/tom-1.mp3").play();
            break;
        case "a":
            new Audio("./sounds/tom-2.mp3").play();
            break;
        case "s":
            new Audio("./sounds/tom-3.mp3").play();
            break;
        case "d":
            new Audio("./sounds/tom-4.mp3").play();
            break;
        case "j":
            new Audio("./sounds/snare.mp3").play();
            break;
        case "k":
            new Audio("./sounds/crash.mp3").play();
            break;
        case "l":
            new Audio("./sounds/kick-bass.mp3").play();
            break;
        default:
            break;
    }
}

function pressAnim (key) {
    document.getElementsByClassName(key)[0].classList.add('pressed');
    setTimeout(function() {
        document.getElementsByClassName(key)[0].classList.remove('pressed');
      }, 50);
}