/* ==========================================
        TRUMP CARD GAME
        SOUND.JS FINAL CLEAN VERSION

        Audio Controller
========================================== */


export class SoundSystem {



constructor(){



this.enabled=true;


this.volume=0.6;



this.sounds={


deal:this.load(
"sounds/deal.mp3"
),


card:this.load(
"sounds/card.mp3"
),


bid:this.load(
"sounds/bid.mp3"
),


win:this.load(
"sounds/win.mp3"
),


lose:this.load(
"sounds/lose.mp3"
)



};



this.setVolume(
this.volume
);



}








load(file){



let audio=
new Audio(file);



audio.preload="auto";



return audio;



}








play(name){



if(
!this.enabled
)
return;



let audio=
this.sounds[name];



if(audio){



audio.currentTime=0;



audio.play()
.catch(()=>{});



}



}








setVolume(value){



this.volume=value;



Object.values(
this.sounds
)
.forEach(audio=>{


audio.volume=value;



});



}








toggle(){



this.enabled=
!this.enabled;



return this.enabled;



}



}
