"use strict";
window.addEventListener('keydown', keyPress);
function keyPress(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if (!audio)
        return;
    audio.play();
}
