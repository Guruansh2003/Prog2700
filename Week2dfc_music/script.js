function playNotewithsleep(note, duration){
    const melodyOutput = document.getElementById("melodyOutput");

    melodyOutput.innerHTML += `🎵 Play ${note}`;
        
    setTimeout( () => {
        melodyOutput.innerHTML += `💤'Sleep ${duration}s`;
    },duration * 1000 );
     //end timeouT;

    //setTimeout(stuff,time to do stuff);
   
}//close function

//Mallort's Melody
playNotewithsleep(72, 0.25);
playNotewithsleep(76, 0.25);
playNotewithsleep(76, 0.25);
playNotewithsleep(72, 0.25);
playNotewithsleep(83, 0.25);
playNotewithsleep(74, 0.25);
playNotewithsleep(83, 0.25);
playNotewithsleep(79, 0.25);
playNotewithsleep(84, 0); //Last note no sleep

function attachMp3() {
    const audioPlayer =document.querySelector("audio")
    audioPlayer.src = "https://sonic-pi.mehackit.org/assets/audio/c-major-melody.mp3";
}

attachMp3();