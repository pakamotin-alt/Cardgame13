/* ==========================================
        TRUMP CARD GAME
        MAIN.JS FINAL CLEAN VERSION
========================================== */


import {CardGame}
from "./game.js";


import {SoundSystem}
from "./sound.js";


import {MobileController}
from "./mobile.js";


import {DebugSystem}
from "./debug.js";


import {
hideLoading,
closeDialog
}
from "./ui.js";






const game=
new CardGame();



const sound=
new SoundSystem();



const mobile=
new MobileController();



const debug=
new DebugSystem(game);








window.addEventListener(
"load",
()=>{


hideLoading();


game.startGame();


mobile.init();


debug.run();


events();



});








function events(){



// Bid Buttons


[
"bid7",
"bid8",
"bid9",
"bid10"

]
.forEach(id=>{


let btn=
document.getElementById(id);



if(btn){


btn.onclick=()=>{


game.playerBid(
Number(btn.innerText)
);



sound.play(
"bid"
);



};



}



});








// Trump Select


document
.querySelectorAll(".trumpBtn")
.forEach(btn=>{


btn.onclick=()=>{


game.setTrump(
btn.dataset.suit
);



closeDialog(
"trumpDialog"
);



};



});








// Cards


let cards=
document.getElementById(
"playerCards"
);



if(cards){



cards.onclick=e=>{


let card=
e.target.closest(".card");



if(card){



game.playSelectedCard(

Number(
card.dataset.index

)

);



sound.play(
"card"
);



}



};



}








// Telegram WebApp


if(
window.Telegram &&
Telegram.WebApp
){


Telegram.WebApp.ready();


Telegram.WebApp.expand();


}



window.game=game;



}
