const textarea = document.querySelector("textarea"),
    voicelist = document.querySelector("select"),
    speechBtn = document.querySelector("button");

let synth = speechSynthesis;
function voices() {
    for (let voice of synth.getVoices()) {
        let selected = voice.name === "Google US English" ? "selected" : "";
        let option = `<option value="${voice.name}" ${selected}>${voice.name} (${voice.lang})</option>`;
        voicelist.insertAdjacentHTML("beforeend", option);
    }
}
synth.addEventListener("voiceschanged", voices);
function textToSpeech(text) {
    let utternance = new SpeechSynthesisUtterance(text);
    for (let voice of synth.getVoices()) {
        //code to make option
        if(voice.name===voicelist.value){
            utternance.voice=voice;
        }
    }
    speechSynthesis.speak(utternance);
}

speechBtn.addEventListener("click", e => {
    e.preventDefault();
    if (textarea.value !== "") {
        textToSpeech(textarea.value);
    }
});
