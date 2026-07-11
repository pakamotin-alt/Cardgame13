/* ==========================================
        TRUMP CARD GAME
        TRICK.JS FINAL CLEAN VERSION

        Trick Rule Engine
========================================== */


export class TrickSystem {



constructor(players,trump){



this.players=players;


this.trump=trump;


this.cards=[];


this.leadSuit=null;


this.winner=null;



}








start(){



this.cards=[];


this.leadSuit=null;


this.winner=null;



}








canPlay(player,card){



// প্রথম কার্ড হলে সব চলবে


if(
this.cards.length===0
){


return true;


}





// Lead suit follow


let hasLead=
player.hand.some(c=>

c.suit===this.leadSuit

);





if(hasLead){



return card.suit===this.leadSuit;



}



return true;



}








play(player,card){



if(
!this.canPlay(
player,
card
)
){


return false;


}





if(
this.cards.length===0
){


this.leadSuit=
card.suit;


}






this.cards.push({

player:player,

card:card

});



return true;



}








beats(cardA,cardB){



// Trump beats non trump


if(
cardA.suit===this.trump &&
cardB.suit!==this.trump
){


return true;


}



if(
cardA.suit!==this.trump &&
cardB.suit===this.trump
){


return false;


}







// Same suit high value


if(
cardA.suit===cardB.suit
){


return cardA.value>
cardB.value;


}







// Lead suit


if(
cardA.suit===this.leadSuit &&
cardB.suit!==this.leadSuit
){


return true;


}



return false;



}








calculateWinner(){



let result=
this.cards[0];



for(
let i=1;
i<this.cards.length;
i++
){



let current=
this.cards[i];



if(
this.beats(
current.card,
result.card
)
){


result=current;


}



}





this.winner=result.player;


this.winner.tricks++;



return this.winner;



}








complete(){



return this.cards.length===4;



}



}
