/* ==========================================
        TRUMP CARD GAME
        MOBILE.JS FINAL CLEAN VERSION

        Mobile Support
========================================== */


export class MobileController {



constructor(){


this.started=false;


}








init(){



if(this.started)
return;



this.started=true;



this.preventZoom();


this.fixHeight();



}








preventZoom(){



document.addEventListener(

"gesturestart",

event=>{


event.preventDefault();


},

{

passive:false

}

);



}








fixHeight(){



const setHeight=()=>{


document.documentElement
.style
.setProperty(

"--vh",

window.innerHeight*0.01+"px"

);



};



setHeight();



window.addEventListener(
"resize",
setHeight
);



}



}
