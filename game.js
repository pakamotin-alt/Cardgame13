/* ==========================================
        TRUMP CARD GAME
        GAME.JS FINAL CLEAN VERSION

        Main Game Engine
========================================== */


import {Deck} from "./deck.js";
import {AIPlayer} from "./ai.js";
import {BiddingSystem} from "./bidding.js";
import {TrickSystem} from "./trick.js";
import {ScoreSystem} from "./score.js";

import {

renderPlayerCards,
showPlayedCard,
clearPlayedCards,
showTrump,
updateScore,
showMessage,
openDialog,
showWinner

} from "./ui.js";





export class CardGame {



constructor(){


this.deck=new Deck();

this.score=new ScoreSystem();

this.players=[];

this.bidSystem=null;

this.trick=null;

this.trump=null;

this.bidWinner=null;

this.call=0;

this.turn=0;

this.trickNumber=0;

this.waiting=false;



}








createPlayers(){



this.players=[


new AIPlayer(
"You",
"A"
),


new AIPlayer(
"AI Left",
"B"
),


new AIPlayer(
"AI Partner",
"A"
),


new AIPlayer(
"AI Right",
"B"
)



];



this.players[0].isHuman=true;



}








startGame(){



this.createPlayers();



this.players.forEach(player=>{


player.reset();



});



this.deck.reset();



this.deck.deal(
this.players,
5
);



renderPlayerCards(
this.players[0]
);



this.startBid();



}








startBid(){



this.bidSystem=
new BiddingSystem(
this.players
);



for(
let i=1;i<4;i++
){



let ai=
this.players[i];


this.bidSystem.placeBid(

ai,

ai.makeBid()

);



}



showMessage(
"আপনার Bid দিন"
);



}








playerBid(value){



this.bidSystem.placeBid(

this.players[0],

value

);



this.call=
this.bidSystem.getBid();



this.bidWinner=
this.bidSystem.getWinner();



if(this.bidWinner){


this.chooseTrump();



}



}








chooseTrump(){



if(
this.bidWinner.isHuman
){


openDialog(
"trumpDialog"
);



}

else{


this.trump=
this.bidWinner.chooseTrump();


this.startPlay();



}



}








setTrump(suit){



this.trump=suit;



showTrump(
suit
);



this.startPlay();



}








startPlay(){



this.deck.deal(
this.players,
8
);



this.trickNumber=0;



this.players.forEach(p=>{

p.tricks=0;

});



this.newTrick();



}








newTrick(){



clearPlayedCards();



this.trick=
new TrickSystem(

this.players,

this.trump

);



this.turn=0;



this.nextTurn();



}








nextTurn(){



let player=
this.players[this.turn];



if(player.isHuman){


this.waiting=true;


renderPlayerCards(
player
);


return;


}



this.aiMove(player);



}








aiMove(player){



let card=
player.playCard(

this.trick.leadSuit,

this.trump

);



this.trick.play(
player,
card
);



showPlayedCard(

this.getPosition(this.turn),

card

);



this.afterMove();



}








playSelectedCard(index){



if(!this.waiting)
return;



let player=
this.players[0];


let card=
player.hand[index];



if(!card)
return;



if(
!this.trick.canPlay(
player,
card
)
){


showMessage(
"এই কার্ড দেওয়া যাবে না"
);


return;


}



player.hand.splice(
index,
1
);



this.trick.play(
player,
card
);



showPlayedCard(
"bottomPlayed",
card
);



this.waiting=false;



this.afterMove();



}








afterMove(){



this.turn++;



if(
this.turn<4
){


setTimeout(

()=>this.nextTurn(),

500

);



}

else{


this.finishTrick();



}



}








finishTrick(){



let winner=
this.trick.calculateWinner();



showMessage(
winner.name+
" Trick জিতেছে"
);



this.trickNumber++;



if(
this.trickNumber>=13
){


this.finishRound();



}

else{


setTimeout(

()=>this.newTrick(),

1000

);



}



}








finishRound(){



let result=
this.score.roundResult(

this.players,

this.bidWinner,

this.call

);



updateScore(
result
);



let winner=
this.score.winner();



if(winner){


showWinner(
winner
);


}

else{


setTimeout(

()=>this.startGame(),

1500

);



}



}








getPosition(index){



return [

"bottomPlayed",

"leftPlayed",

"topPlayed",

"rightPlayed"

][index];

}



}
