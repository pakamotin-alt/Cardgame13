/* ==========================================
        TRUMP CARD GAME
        DEBUG.JS FINAL CLEAN VERSION

        Test Controller
========================================== */


export class DebugSystem {



constructor(game){


this.game=game;


}








run(){



console.log(
"====== CARD GAME DEBUG ======"
);



this.checkPlayers();


this.checkDeck();


this.checkHTML();



console.log(
"============================"
);



}








checkPlayers(){



console.log(

"Players:",

this.game.players.length

);



}








checkDeck(){



console.log(

"Cards Left:",

this.game.deck.remaining()

);



}








checkHTML(){



const ids=[


"playerCards",

"scoreA",

"scoreB",

"trumpSuit",

"messageBox"



];





ids.forEach(id=>{


if(
document.getElementById(id)
){


console.log(
"OK:",
id
);



}

else{


console.warn(
"Missing:",
id
);



}



});



}



}
