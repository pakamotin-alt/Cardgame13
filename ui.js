/* ==========================================
        TRUMP CARD GAME
        UI.JS FINAL CLEAN VERSION

        Interface Controller
========================================== */





export function renderPlayerCards(player){



let area=
document.getElementById(
"playerCards"
);



if(!area)
return;



area.innerHTML="";




player.hand.forEach(
(card,index)=>{



let div=
document.createElement(
"div"
);



div.className="card";


div.dataset.index=index;




if(
card.suit==="♥" ||
card.suit==="♦"
){


div.classList.add(
"red"
);


}



div.innerHTML=`

<span>${card.rank}</span>

<span>${card.suit}</span>

`;



area.appendChild(div);



}



);



}








export function showPlayedCard(
id,
card
){



let box=
document.getElementById(id);



if(!box)
return;



box.innerHTML=`


<div class="card">

${card.rank}

<br>

${card.suit}

</div>


`;



}








export function clearPlayedCards(){



[

"topPlayed",

"leftPlayed",

"rightPlayed",

"bottomPlayed"

]
.forEach(id=>{


let box=
document.getElementById(id);



if(box)
box.innerHTML="";


});



}








export function showTrump(suit){



let box=
document.getElementById(
"trumpSuit"
);



if(box)
box.innerText=suit;



}








export function updateScore(score){



let a=
document.getElementById(
"scoreA"
);



let b=
document.getElementById(
"scoreB"
);



if(a)
a.innerText=
score.teamA;



if(b)
b.innerText=
score.teamB;



}








export function showMessage(text){



let box=
document.getElementById(
"messageBox"
);



if(!box)
return;



box.innerText=text;



box.style.display="block";



setTimeout(()=>{


box.style.display="none";


},1500);



}








export function openDialog(id){



let box=
document.getElementById(id);



if(box)

box.classList.remove(
"hidden"
);



}








export function closeDialog(id){



let box=
document.getElementById(id);



if(box)

box.classList.add(
"hidden"
);



}








export function showWinner(team){



let screen=
document.getElementById(
"winnerScreen"
);



let name=
document.getElementById(
"winnerName"
);



if(screen && name){



name.innerText=
team+" 🏆";



screen.classList.remove(
"hidden"
);



}



}








export function hideLoading(){



let loading=
document.getElementById(
"loadingScreen"
);



if(loading)

loading.style.display="none";



}
