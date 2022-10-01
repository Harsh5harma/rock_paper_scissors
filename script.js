function getComputerChoice(){
    let puterChoice = Math.floor(Math.random()*3);
    return puterChoice;
}
let cc=getComputerChoice();
let uc = prompt("Enter your choice");
uc = uc.toLowerCase();

function playRound(cc,uc){
    let strC;
    if (cc===1)
        strC="rock";
    else if (cc===2)
        strC="paper";
    else if (cc===3)
        strC="scissor";
    
    if (uc===strC)
        return "It was a tie.";
    else if (uc==="rock"&&strC==="paper")
        return "Computer won! Paper beats rock";
    else if (uc==="rock"&&strC==="scissor")
        return `You win rock beats scissor`;
    else if (uc==="paper"&&strC==="scissor")
        return "You lose! Scissor beats paper!";
    else if (uc==="paper"&&strC==="rock")
        return "You win! paper beats rock!";
    else if (uc==="scissor"&&strC==="paper")
        return "You win! scissor beats paper";
    else if (uc==="scissor"&&strC==="rock")
        return "You lose! rock beats scissor";
    
}

console.log(playRound(cc,uc));