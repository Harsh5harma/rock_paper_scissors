function getComputerChoice(){
    let puterChoice = Math.ceil(Math.random()*3);
    return puterChoice;
}
function playRound(cc,uc){
    let r = document.createElement('div');
    let strC;
    if (cc===1)
        strC="rock";
    else if (cc===2)
        strC="paper";
    else if (cc===3)
        strC="scissor";
    if (uc===strC)
        r.textContent="Tie";
    else if (uc==="rock"&&strC==="paper"){
        r.textContent="Computer won! Paper beats rock" ;
    }
    else if (uc==="rock"&&strC==="scissor"){
        r.textContent= `You win rock beats scissor`;
    }
    else if (uc==="paper"&&strC==="scissor"){
        r.textContent="You lose! Scissor beats paper!";
    }
    else if (uc==="paper"&&strC==="rock"){
        r.textContent="You win! paper beats rock!";
    }
    else if (uc==="scissor"&&strC==="paper"){
        r.textContent= "You win! scissor beats paper";
    }
    else if (uc==="scissor"&&strC==="rock"){
        r.textContent="You lose! rock beats scissor";
    }
    result = document.querySelector('.result');
    result.appendChild(r);
    
}

const options = document.querySelectorAll('button');
let uc="";
options.forEach((option)=>{
    option.addEventListener('click',()=>{
        uc = option.className;
        console.log(uc);
        let cc = getComputerChoice();
        console.log(cc);
        playRound(cc,uc);
    });
});



