var Playing = false;
var MusicPlaying = true;
let imgHand = document.querySelectorAll("img");
let whosVictor = document.querySelector(".jnp");
let playAgain = document.querySelector("h3");
let pl1score = document.getElementById("pl1");
let pl2score = document.getElementById("pl2");
let playAgainBtn = document.querySelector(".playagain");
var Player1Score = 0;
var Player2Score = 0;

//play background music
const bgMusic = new Audio("public/sounds/MFCC.mp3");
bgMusic.loop = true;
bgMusic.volume = 0.5;
bgMusic.play();

whosVictor.textContent = window.matchMedia("(min-width: 1024px)").matches ? "Press Enter To Play" : "Jack N Poy!";
whosVictor.classList.add("!text-yellow-500");

function Play(){
    Playing = true;
    playAgain.classList.add("opacity-0");
    playAgainBtn.classList.add("opacity-0")
    whosVictor.classList.remove("!text-yellow-500");


    imgHand[0].src = "public/images/left/rock.png";
    imgHand[1].src = "public/images/right/rock.png";
    whosVictor.textContent = "Jack N Poy!"

    const Player1Hand = Math.round(Math.random() * 2) + 1;
    const Player2Hand = Math.round(Math.random() * 2) + 1;

    imgHand[0].classList.add("jackn-poy-anim");
    imgHand[1].classList.add("jackn-poy-anim");

    setTimeout(() =>{
        var imgHand1 = new ThrowHand(Player1Hand, "public/images/left");
        var imgHand2 = new ThrowHand(Player2Hand, "public/images/right");    

        function ThrowHand(HandNumber, path){
            this.HandNumber = (HandNumber == 1) ? `${path}/rock.png` : 
            (HandNumber == 2) ? `${path}/paper.png` : 
            `${path}/scissor.png`;
    
            const winsfx = new Audio(Player1Hand == Player2Hand ? "public/sounds/draw.wav" : "public/sounds/win.wav");
            winsfx.volume = 0.2; 
            winsfx.play();
        }
        
        whosVictor.style.color = "white";
        (Player1Hand == 1 && Player2Hand == 3) ? (whosVictor.textContent = "🚩 Player 1 Wins", Player1Score+=1) : 
        (Player1Hand == 1 && Player2Hand == 2) ? (whosVictor.textContent = "Player 2 Wins 🚩", Player2Score+=1) : 
        (Player1Hand == 2 && Player2Hand == 1) ? (whosVictor.textContent = "🚩 Player 1 Wins", Player1Score+=1): 
        (Player1Hand == 2 && Player2Hand == 3) ? (whosVictor.textContent = "Player 2 Wins 🚩", Player2Score+=1): 
        (Player1Hand == 3 && Player2Hand == 1) ? (whosVictor.textContent = "Player 2 Wins 🚩", Player2Score+=1) : 
        (Player1Hand == 3 && Player2Hand == 2) ? (whosVictor.textContent = "🚩 Player 1 Wins", Player1Score+=1) : 
        whosVictor.textContent = "Draw";
                
        imgHand[0].src = imgHand1.HandNumber;
        imgHand[1].src = imgHand2.HandNumber;

        console.log(Player1Score, ", ", Player2Score);
    
        (window.matchMedia("(min-width: 1024px)").matches) ? (playAgain.classList.remove("opacity-0")) : (playAgainBtn.classList.remove("hidden", "opacity-0"), playAgainBtn.classList.add("text-yellow-500"),playAgainBtn.textContent = "Play Again");

        playAgain.style.color = "white";
        pl1score.textContent = "Player 1: " + Player1Score;
        pl2score.textContent = "Player 2: " + Player2Score;
        
        imgHand[0].classList.remove("jackn-poy-anim");
        imgHand[1].classList.remove("jackn-poy-anim");
        
        Playing = false;
    }, 500);
}