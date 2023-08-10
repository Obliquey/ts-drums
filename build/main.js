"use strict";
window.addEventListener('keydown', keyPress);
// KeyboardEvent type is for general purpose user-keyboard-interactions, seems
function keyPress(e) {
    // There are a lot of HTML element types available for use in TS
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if (!audio)
        return;
    audio.currentTime = 0; // resets audio to start each keypress, allowing multiple successive keypresses 
    audio.play();
    changeClassToPlaying(e);
    // changeClassToNotPlaying(e);
}
// function to toggle on the 'playing' class on the button pressed, then toggle off after set interval
const changeClassToPlaying = (e) => {
    const key = document.querySelector(`.key[data-key="${e.keyCode}"`);
    key === null || key === void 0 ? void 0 : key.classList.toggle('playing');
};
const keys = document.querySelectorAll('.key');
keys.forEach(key => { key.addEventListener('transitionend', removeTransition); });
const removeTransition = (e) => {
    console.log(e);
};
// const changeClassToNotPlaying = (e: KeyboardEvent) => {
// }
