let dicesList = ['./images/dice1.png','./images/dice2.png','./images/dice3.png','./images/dice4.png','./images/dice5.png','./images/dice6.png'];

let p1Dice = Math.round(Math.random()*5);
let p2Dice = Math.round(Math.random()*5);

console.log(p1Dice);
console.log(p2Dice);

document.getElementsByClassName("img1")[0].setAttribute("src",dicesList[p1Dice]);
document.getElementsByClassName("img2")[0].setAttribute("src",dicesList[p2Dice]);

if ( p1Dice > p2Dice ) {
    document.getElementsByTagName("h1")[0].textContent = "🚩 Player 1 Wins"
} else if ( p2Dice > p1Dice ) {
    document.getElementsByTagName("h1")[0].textContent = "Player 2 Wins 🚩"
} else {
    document.getElementsByTagName("h1")[0].textContent = "Draw"
}