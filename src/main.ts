window.addEventListener('keydown', keyPress);

function keyPress(e: KeyboardEvent) {
    const audio: HTMLAudioElement | null = document.querySelector(`audio[data-key="${e.keyCode}"]`)

    if(!audio) return;

    audio.play();
}