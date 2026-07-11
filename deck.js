/* ==========================================
        TRUMP CARD GAME
        DECK.JS FINAL CLEAN VERSION

        52 Card Management
========================================== */


export class Deck {



constructor(){


this.cards=[];

this.create();

this.shuffle();


}







create(){


this.cards=[];


const suits=[

"♠",
"♥",
"♦",
"♣"

];


const ranks=[

["2",2],
["3",3],
["4",4],
["5",5],
["6",6],
["7",7],
["8",8],
["9",9],
["10",10],
["J",11],
["Q",12],
["K",13],
["A",14]

];




for(let suit of suits){


for(let rank of ranks){


this.cards.push({

suit:suit,

rank:rank[0],

value:rank[1]

});


}


}


}








shuffle(){



for(
let i=this.cards.length-1;
i>0;
i--
){


let j=
Math.floor(
Math.random()*(i+1)
);



[
this.cards[i],
this.cards[j]

]=

[
this.cards[j],
this.cards[i]

];



}



}








reset(){



this.create();

this.shuffle();



}








deal(players,count){



for(
let i=0;
i<count;
i++
){



players.forEach(player=>{


if(this.cards.length){


player.hand.push(
this.cards.pop()
);


}



});



}



}








remaining(){


return this.cards.length;


}



}
