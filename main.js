// DRUM KIT (Modified Wes Bos JS30 Challenge)

// Listen for key events on the page
document.addEventListener("keydown", clickHandler);

// Event Function
function clickHandler(event) {
    if (event.keyCode == 65) { // "a"
        playSound('clap','A');
    } else if (event.keyCode == 83) { // "s"
        // Play S-hihat
       playSound('hihat','S');
    } else if (event.keyCode == 68) { // "d"
        // Play D-kick
        playSound('kick','D');
    } else if (event.keyCode == 70) { // "f"
        // Play F-Openhat
        playSound('openhat','F');
    } else if (event.keyCode == 71) { // "g"
        // Play G-Boom
        playSound('boom','G');
    } else if (event.keyCode == 72) { // "h"
        // Play H-Ride
        playSound('ride','H');
    } else if (event.keyCode == 74) { // "j"
        // Play J-Snare
        playSound('snare','J');
    } else if (event.keyCode == 75) { // "k"
        // Play K-Tom
        playSound('tom','K');
    } else if (event.keyCode == 76) { // "l"
        // Play L-Tink
        playSound('tink','L');
    }
}

function playSound(sound, key) {
        let audio = document.getElementById(sound);
        audio.currentTime = 0;
        audio.play();
        document.getElementById(key).classList.add("playing");
}

// Add transition end listeners
document.getElementById('A').addEventListener('transitionend', removePlaying);
document.getElementById('S').addEventListener('transitionend', removePlaying);
document.getElementById('D').addEventListener('transitionend', removePlaying);
document.getElementById('F').addEventListener('transitionend', removePlaying);
document.getElementById('G').addEventListener('transitionend', removePlaying);
document.getElementById('H').addEventListener('transitionend', removePlaying);
document.getElementById('J').addEventListener('transitionend', removePlaying);
document.getElementById('K').addEventListener('transitionend', removePlaying);
document.getElementById('L').addEventListener('transitionend', removePlaying);

// Transition End FUnction
function removePlaying(event) {
    event.target.classList.remove("playing");
}