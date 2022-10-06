function getComputerChoice(){
    let puterChoice = Math.ceil(Math.random()*3);
    return puterChoice;
}
function playRound(cc,uc){
    let strC;
    if (cc===1)
        strC="rock";
    else if (cc===2)
        strC="paper";
    else if (cc===3)
        strC="scissor";

    if (uc==="rock"&&strC==="paper"){
        return false;
    }
    else if (uc==="rock"&&strC==="scissor"){
        return true;
    }
    else if (uc==="paper"&&strC==="scissor"){
        return false;
    }
    else if (uc==="paper"&&strC==="rock"){
        return true;
    }
    else if (uc==="scissor"&&strC==="paper"){
        return true;
    }
    else if (uc==="scissor"&&strC==="rock"){
        return false;
    }
}

const rock=document.querySelector(".rock");
const paper=document.querySelector(".paper");
const scissor=document.querySelector(".scissor");
const options=[rock,paper,scissor];

let uc="";
let cscore=0;
let uscore=0;
options.forEach((option)=>{
    option.addEventListener('click',()=>{
        const x = document.querySelector(".result");
        x.innerHTML="";
        uc = option.className;
        let cc = getComputerChoice();
        let ans = playRound(cc,uc);
        if (uscore<5&&cscore<5){
        if (ans===true){
            uscore++;
        }
        else if (ans===false){
            cscore++;
        }
        else {
            cscore++;
            uscore++;
        }
        x.textContent=`Your Score: ${uscore}  Computer Score: ${cscore}`;
    }
        if (uscore===5){
            x.textContent="YOU WON THE GAME!";
        }else if (cscore===5){
            x.textContent="OOPS YOU LOST. Try again?";
        }
    });
});