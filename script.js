// console.log('welcome to Sportify')

// Initialize the Variable 
let songIndex = 0;
let audioElement = new Audio('music/4.m4a');
let masterPlay = document.getElementById('masterPlay');
let mypgbar = document.getElementById('pg-bar');
let mastersongName = document.getElementById('mastersongName');
let songItems = Array.from(document.getElementsByClassName('songitem'));
// document.getElementById('image').width = "100";
// document.getElementById('image').height = "100";

let songs = [
    {songName:"Baarish lete aana",filepath:"music/1.m4a",coverpath:"./cover/cover.jpg"},
    {songName:"Main to chalya ",filepath:"music/2.m4a",coverpath:"./cover/cover1.jpg"},
    {songName:"Tore sang lagi aisi akhiyan",filepath:"music/3.m4a",coverpath:"./cover/cover2.jpg"},
    {songName:"Deewani - Sachet,",filepath:"music/4.m4a",coverpath:"./cover/cover3.jpg"},
    {songName:"Mere mahiya jinna sona",filepath:"music/5.m4a",coverpath:"./cover/cover4.jpg"},
    {songName:"Sitarey - Tigerstyle ",filepath:"music/6.m4a",coverpath:"./cover/cover5.jpg"},
    {songName:"Tanha - Harjas ",filepath:"music/7.m4a",coverpath:"./cover/cover6.jpg"},
    {songName:"Mere mahiya jinna repeat",filepath:"music/8.m4a",coverpath:"./cover/cover7.jpg"},
]

songItems.forEach((element,i)=>{
    console.log(element,i);
    element.getElementsByTagName("img")[0].src = songs[i].coverpath;
    element.getElementsByClassName("songname")[0].innerText = songs[i].songName;

})
// audioElement.pay();

// play / pause click 

masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
     audioElement.play();
     masterPlay.classList.remove('ri-play-circle-fill');
     masterPlay.classList.add('ri-pause-circle-fill');
     
    }

    else{
    audioElement.pause();
    masterPlay.classList.remove('ri-pause-circle-fill');
    masterPlay.classList.add('ri-play-circle-fill');
    }
})

// Listern to Events
// mypgbar.addEventListener('timeupdate', ()=>{
audioElement.addEventListener('timeupdate', ()=>{
    // console.log('timeupdate');
    progress = parseInt( (audioElement.currentTime/audioElement.duration)* 100);
    // console.log(progress);
    mypgbar.value = progress;
});

mypgbar.addEventListener('change',()=>{
    audioElement.currentTime = mypgbar.value * audioElement.duration/100;

})

// make all play function 

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
        
        element.classList.remove('ri-pause-circle-fill');
        element.classList.add('ri-play-circle-fill');

    })


}

Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        // console.log(e.target);
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('ri-play-circle-fill');
        e.target.classList.add('ri-pause-circle-fill');
        audioElement.src = `/music/${songIndex+1}.m4a`;
        mastersongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('ri-play-circle-fill');
        masterPlay.classList.add('ri-pause-circle-fill');
    })

})

document.getElementById('next').addEventListener('click', ()=>{

    if(songIndex >= 8){
        songIndex - 0 
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `/music/${songIndex+1}.m4a`;
    mastersongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('ri-play-circle-fill');
    masterPlay.classList.add('ri-pause-circle-fill');
});


document.getElementById('previous').addEventListener('click', ()=>{

    if(songIndex <= 0){
        songIndex  = 0 
    }
    else{
        songIndex -=1;
    }
    audioElement.src = `/music/${songIndex+1}.m4a`;
    mastersongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('ri-play-circle-fill');
    masterPlay.classList.add('ri-pause-circle-fill');
});

