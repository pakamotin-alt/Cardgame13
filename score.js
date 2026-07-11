/* ==========================================
        TRUMP CARD GAME
        SCORE.JS FINAL CLEAN VERSION

        Score Management
========================================== */


export class ScoreSystem {



constructor(){


this.score={

A:0,

B:0

};



this.history=[];


this.target=50;



}








calculate(players){



let tricks={

A:0,

B:0

};





players.forEach(player=>{


tricks[player.team]
+=player.tricks;



});



return tricks;



}








roundResult(
players,
bidWinner,
call,
bonus=false
){



let tricks=
this.calculate(players);



let team=
bidWinner.team;



let point=0;



if(
tricks[team]>=call
){


point=call;


}

else{


point=-call;


}





this.score[team]+=point;





if(bonus){



this.score[team]+=5;



}







this.history.push({

team:team,

call:call,

tricks:tricks[team],

point:point

});





return this.getScore();



}








getScore(){



return {


teamA:this.score.A,


teamB:this.score.B


};



}








winner(){



if(
this.score.A>=this.target
)

return "Team A";




if(
this.score.B>=this.target
)

return "Team B";




return null;



}








reset(){



this.score.A=0;


this.score.B=0;


this.history=[];



}



}
