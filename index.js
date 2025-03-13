var NotPlayedYet = true;

document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        if (NotPlayedYet) {
            Play();
            NotPlayedYet = false; // Update flag
        } else {
            setTimeout(Play, 1500); // Pass function reference (without `()`)
        }
    }
});


function Play(){
    // player 1
    let imgDice = document.querySelectorAll("img");

    const Player1Dice = Math.round(Math.random() * 5) + 1;
    const Player2Dice = Math.round(Math.random() * 5) + 1;
    
    var imgDice1 = new ThrowDice(Player1Dice);
    var imgDice2 = new ThrowDice(Player2Dice);
        
    function ThrowDice(DiceNumber, draw){
        this.DiceNumber = (DiceNumber == 1) ? "diceImage/d1.png" : 
        (DiceNumber == 2) ? "diceImage/d2.png" : 
        (DiceNumber == 3) ? "diceImage/d3.png" :
        (DiceNumber == 4) ? "diceImage/d4.png" :
        (DiceNumber == 5) ? "diceImage/d5.png" :
        "diceImage/d6.png";

        imgDice[0].classList.add("spin-active1");
        imgDice[1].classList.add("spin-active2");
        new Audio((Player1Dice == Player2Dice) ? "sounds/draw.mp3" : "sounds/victory_6.mp3").play();
        setTimeout(RemoveAni, 2000);

        function RemoveAni(){
            imgDice[0].classList.remove("spin-active1");
            imgDice[1].classList.remove("spin-active2");
        }
    }
    
    document.querySelector("h1").style.color = "white";
    document.querySelector("h1").textContent = 
        (Player1Dice > Player2Dice) ? "🚩 Player 1 Wins" : 
        (Player2Dice > Player1Dice) ? "Player 2 Wins 🚩"  : "Draw";
    
    
    imgDice[0].src = imgDice1.DiceNumber;
    imgDice[1].src = imgDice2.DiceNumber;

    
   document.querySelector("h3").textContent = "Hit Enter to Play Again"
}