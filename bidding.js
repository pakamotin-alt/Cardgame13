/* ==========================================
        TRUMP CARD GAME
        BIDDING.JS FINAL CLEAN VERSION

        Bid Management System
========================================== */


export class BiddingSystem {



constructor(players){


this.players=players;


this.currentBid=0;


this.winner=null;


this.history=[];


}








start(){


this.currentBid=0;


this.winner=null;


this.history=[];


}








placeBid(player,value){



if(
value>this.currentBid
){



this.currentBid=value;


this.winner=player;



this.history.push({

player:player.name,

value:value

});



}



return {

bid:this.currentBid,

winner:this.winner

};



}








getWinner(){


return this.winner;


}








getBid(){


return this.currentBid;


}








reset(){



this.currentBid=0;


this.winner=null;


this.history=[];



}



}
