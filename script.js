function getComputerChoice(){
    let puterChoice = Math.floor(Math.random()*3);
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
        console.log("Computer won! Paper beats rock") ;
        return false;
    }
    else if (uc==="rock"&&strC==="scissor"){
        console.log( `You win rock beats scissor`);
        return true;
    }
    else if (uc==="paper"&&strC==="scissor"){
        console.log("You lose! Scissor beats paper!");
        return false;
    }
    else if (uc==="paper"&&strC==="rock"){
        console.log ("You win! paper beats rock!");
        return true;
    }
    else if (uc==="scissor"&&strC==="paper"){
        console.log( "You win! scissor beats paper");
        return true;
    }
    else if (uc==="scissor"&&strC==="rock"){
        console.log ("You lose! rock beats scissor");
        return false;
    }
}


function game(){
    
    let uCount=0, cCount=0;
    for (i =0;i<5;++i){
        let cc=getComputerChoice();
        let uc = prompt("Enter your choice");
        uc = uc.toLowerCase();
        if (cc===uc){
            console.log("IT was a tie.");
            uCount++;
            cCount++;
        }
        else{
            let x = console.log(playRound(cc,uc));
            if (x)
                uCount++;
            else
                cCount++;
        }
    }
    if (uCount>cCount)
        console.log("YOU WON THE GAME");
    else
        console.log("YOU LOST THE GAME");
}

game();