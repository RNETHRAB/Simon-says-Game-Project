let gameSeq =[];
let userSeq =[];

let btns = ["red","yellow","purple","green"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

console.log("script loaded");

document.addEventListener("keypress", function (){
    if(started == false) {
        console.log("game is started");
        started = true;  
        levelup();
    }
    //levelup();
});

function gameflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    }, 250);
}

function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    }, 250);
}

function levelup() {
    userSeq=[];
    level++;
    h2.innerText = `Level ${level}`;


    let randIdx = Math.floor(Math.random()*4);
    let randcolor = btns[randIdx];
    let randbtn = document.querySelector(`.${randcolor}`);
    gameSeq.push(randcolor);
    console.log(gameSeq);
    gameflash(randbtn)

}

function checkAns(idx){
   // console.log("current level:", level);
   //let idx = level - 1;
   if (userSeq[idx] == gameSeq[idx]){
    if (userSeq.length == gameSeq.length){
        setTimeout(levelup,1000);
    }
   } else {
    h2.innerHTML = `Game over! your score was <b>${level} </b> <br> press any key to start.`; 
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(function(){
         document.querySelector("body").style.backgroundColor = "white";
    },150);
    reset();
   }

}

function btnPress(){
   let btn = this;
   userflash(btn);

   usercolor = btn.getAttribute("id")
   userSeq.push(usercolor);

   checkAns(userSeq.length-1);
}



let allbtns = document.querySelectorAll(".btn")
for(btn of allbtns){
    btn.addEventListener("click",btnPress);
}

function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}