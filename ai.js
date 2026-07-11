/* ==========================================
        TRUMP CARD GAME
        AI.JS FINAL CLEAN VERSION

        Smart AI Player
========================================== */



export class AIPlayer {



constructor(name,team){



this.name=name;

this.team=team;

this.hand=[];

this.played=[];

this.tricks=0;

this.isHuman=false;


}








getPower(){



let power=0;



this.hand.forEach(card=>{


power+=card.value;


if(card.rank==="A")
power+=10;


});



return power;



}








makeBid(){



let power=
this.getPower();



if(power>=110)
return 10;


if(power>=90)
return 9;


if(power>=70)
return 8;


if(power>=55)
return 7;



return 0;



}








chooseTrump(){



let suits={


"♠":0,

"♥":0,

"♦":0,

"♣":0


};



this.hand.forEach(card=>{


suits[card.suit]+=card.value;


});



return Object.keys(suits)
.sort(
(a,b)=>
suits[b]-suits[a]
)[0];



}








getPlayableCards(leadSuit){



let sameSuit=
this.hand.filter(card=>

card.suit===leadSuit

);



if(
sameSuit.length
)

return sameSuit;



return [...this.hand];



}








playCard(
leadSuit,
trump,
table=[]
){



let playable=
this.getPlayableCards(
leadSuit
);





// Try winning card


playable.sort(
(a,b)=>
b.value-a.value
);





let chosen=
playable[0];




this.remove(chosen);



return chosen;



}








remove(card){



let index=
this.hand.indexOf(card);



if(index>-1){


this.hand.splice(
index,
1
);


}



this.played.push(card);



}








reset(){



this.hand=[];

this.played=[];

this.tricks=0;



}



}
