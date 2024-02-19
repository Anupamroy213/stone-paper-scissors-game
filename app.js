let userScore=0;
let compScore=0;

const choices = document.querySelectorAll(".choice");

const msg = document.querySelector("#msg");

const usrscr = document.querySelector("#user-score");
const cmpscr = document.querySelector("#comp-score");
const myImg=document.getElementById("myimage");

const genCompChoice = () => {
    const options = ["stone","paper","scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    //    console.log("ye comp ka"+options[randIdx]);
    return options[randIdx];
    
    
};





const drawGame = () =>{
    console.log("game was draw");
    msg.innerText="game was draw";
    msg.style.backgroundColor="purple";
};


const showWinner = (userWin,userChoice,compChoice)=>{

    if(userWin){
       
        msg.innerText="you win!";
        msg.style.backgroundColor="green";
        userScore++;
        usrscr.innerText = userScore;
    }
    else{
        
        msg.innerText="you lose !!!!!";
        msg.style.backgroundColor="red";
        compScore++;
        cmpscr.innerText = compScore;
        
    }
}

const playGame = (userChoice) => {
    console.log("user choice = ", userChoice);
    const compChoice =genCompChoice();
          console.log("comp choice = ",compChoice);


          if(compChoice==="stone"){
            myImg.src= "stone.jpg";
        }
        else if(compChoice==="paper"){
              myImg.src= "paper.jpg";            
            }
            else{
              myImg.src= "scissors.jpg";
          }

           if(userChoice === compChoice){
            drawGame();
           }
           else{
            let userWin =true;
            if(userChoice === "stone"){
                userWin=compChoice === "paper" ? false:true;
            }else if(userChoice === "paper"){
                userWin= compChoice=== "scissors"? false:true;
            }else{
                userWin= compChoice=== "stone"? false:true;
                
            }
            showWinner(userWin,userChoice,compChoice);
           }
};


choices.forEach((choice) => {

    choice.addEventListener("click", () => {
        const userChoice=choice.getAttribute("id");
          playGame(userChoice);
    });
});

let btn1=document.querySelector(".refresh");

btn1.onclick = () =>{
    
    cmpscr.innerText = 0;
    usrscr.innerText = 0;
    msg.innerText="play your move";
    msg.style.backgroundColor="black";
    console.log("btn1 was clicked");
     userScore=0;
     compScore=0;
    }