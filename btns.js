document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        if (!Playing) {
            Play();
         } 
    }
});

playAgainBtn.addEventListener("click", function() {
    if (!Playing) {
        Play();
     } 
});

document.getElementById("btnMusic").addEventListener("click", function() {
    if(MusicPlaying){
        bgMusic.pause();
        MusicPlaying = false;
        this.textContent = "Music: Off"
    } else {
        bgMusic.play();
        MusicPlaying = true;
        this.textContent = "Music: On"
    }
});
