let progress=document.querySelector(".progress-bar");
let song=document.querySelector(".song");
let play=document.querySelector(".play");
let playicn=document.querySelector(".play img");
let duration=document.querySelector(".time");
let currtime=document.querySelector(".curr-time");
let vol=document.querySelector(".control input");
let mute=document.querySelector(".mic");

song.onloadedmetadata=function(){
    progress.max=song.duration;
    progress.value=song.currentTime;
    duration.innerHTML=Math.floor(Math.round(song.duration)/60 )+":"+Math.round(song.duration)%60;
    

}
play.addEventListener("click",()=>{
    console.log(playicn.src);
    if(playicn.src=="file:///D:/Programs%20Files/rajat/js_projects/spotify/asets/player_icon3.png"){
        
        songplay();
    }else{
        songpause();
        
    }

});
progress.onchange=function(){
    
    song.currentTime=progress.value;
    songplay();
}  
function songplay(){
    
    playicn.src="./asetes/pause.jpg";
    song.play();
    var id=setInterval(()=>{
        progress.value=song.currentTime;
        currtime.innerHTML=Math.floor(Math.round(song.currentTime)/60 )+":"+Math.round(song.currentTime)%60; 
    },1000);
}
function songpause(id){
    
    playicn.src="./asets/player_icon3.png";
    song.currentTime=progress.value;
    
    song.pause();
    clearInterval(id);


}

 vol.onchange=function(){
    
    let songvol=(vol.value)/100;
    console.log(songvol);
    song.volume=songvol;
 }
 
mute.addEventListener("click",()=>{
    console.log("mic clicked");
    if(mute.classList.contains()=="fa-microphone"){
        mute.classList.remove("a-microphone");
        mute.classList.add("fa-microphone-slash");
        song.volume=0;
    }


});