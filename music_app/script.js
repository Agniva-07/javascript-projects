const playBtn=document.querySelector('#play-btn');
const song=document.querySelector('#song');
const progress=document.querySelector('.progressBar');
const progressContainer=document.querySelector('.progress-container');

song.onloadedmetadata = function(){
    progress.max=song.duration;
    progress.value=song.currentTime;
}

function playPause(){
    if (playBtn.classList.contains("fa-pause")){
        song.pause();
        playBtn.classList.remove("fa-pause")
        playBtn.classList.add("fa-play")
    }
    else if (playBtn.classList.contains("fa-play")){
        song.play();
        playBtn.classList.remove("fa-play")
        playBtn.classList.add("fa-pause")
        setInterval(()=>{
            progress.value=song.currentTime;
        },500)
    }
}

playBtn.addEventListener("click",playPause);


progress.onchange = function(){
    song.play();
    playBtn.classList.remove("fa-play")
    playBtn.classList.add("fa-pause")
    song.currentTime=progress.value;
}