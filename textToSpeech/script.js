let speech= new SpeechSynthesisUtterance();

let voices=[];
let voiceSelect=document.querySelector("#voice-select")
let isSpeaking = false; // Track speaking state

// Cancel any ongoing speech when voice changes
voiceSelect.addEventListener('change', () => {
    if (isSpeaking) {
        window.speechSynthesis.cancel();
        isSpeaking = false;
    }
});

window.speechSynthesis.onvoiceschanged =()=>{
    voices=window.speechSynthesis.getVoices();
    speech.voice=voices[0];

    voices.forEach((voice,i)=>(voiceSelect.options[i]=new Option(voice.name,i)));
};

document.querySelector(".listen-btn").addEventListener("click",()=>{
    // Cancel any ongoing speech before starting new
    if (isSpeaking) {
        window.speechSynthesis.cancel();
    }
    
    speech.text=document.querySelector(".text").value;

    // Update the selected voice
    const selectedVoiceIndex = voiceSelect.selectedIndex;
    speech.voice = voices[selectedVoiceIndex];
    
    // Set event handlers for speech
    speech.onend = () => {
        isSpeaking = false;
    };
    speech.onerror = () => {
        isSpeaking = false;
    };
    isSpeaking = true;
    window.speechSynthesis.speak(speech);
});
