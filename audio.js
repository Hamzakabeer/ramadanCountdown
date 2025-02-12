let hasPlayed = false;
document.addEventListener('DOMContentLoaded', function() {

  window.addEventListener('click', function() {
    if (!hasPlayed) {  
      const audio = new Audio('assets/audio.mp3');  
      audio.play().catch(function(error) {
        console.log("Error playing audio: ", error);
      });
      hasPlayed = true;  
    }
  });
});
