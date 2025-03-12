document.addEventListener("DOMContentLoaded", function () {
    // player 1
    let imgDice = document.querySelectorAll("img");
    console.log(imgDice);

    const Player1Dice = Math.round(Math.random() * 5);;
    const Player2Dice = Math.round(Math.random() * 5);;
    console.log("Player 1: ", Player1Dice);
    console.log("Player 2: ", Player2Dice);

    imgDice[0].src = (Player1Dice == 1) ? "diceImage/d1.png" : 
                    (Player1Dice == 2) ? "diceImage/d2.png" : 
                    (Player1Dice == 3) ? "diceImage/d3.png" :
                    (Player1Dice == 4) ? "diceImage/d4.png" :
                    (Player1Dice == 5) ? "diceImage/d5.png" :
                    "diceImage/d5.png";

    imgDice[1].src = (Player2Dice == 1) ? "diceImage/d1.png" : 
                    (Player2Dice == 2) ? "diceImage/d2.png" : 
                    (Player2Dice == 3) ? "diceImage/d3.png" :
                    (Player2Dice == 4) ? "diceImage/d4.png" :
                    (Player2Dice == 5) ? "diceImage/d5.png" :
                    "diceImage/d5.png";
    
    document.querySelector("h1").textContent = (Player1Dice > Player2Dice) ? "Player 1 Wins" : (Player1Dice < Player2Dice) ? "Player 2 Wins" : "Draw";
    document.querySelector("h1").style.color = "white";

    // console.log();


});
