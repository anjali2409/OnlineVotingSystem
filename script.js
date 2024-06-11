let modeBtn = document.querySelector("#mode");
let currMode = "light";

modeBtn.addEventListener("click", () =>{
  if(currMode === "light"){
    currMode= "dark";
    // document.querySelector("body").style.backgroundColor ="black"; // now adding it through css class
    document.querySelector("body").classList.add("dark");
    document.querySelector("body").classList.remove("light");
  }else{
    currMode="light";
    // document.querySelector("body").style.backgroundColor ="white";
    document.querySelector("body").classList.add("light");
    document.querySelector("body").classList.remove("dark");
  } 
  console.log(currMode); 
});


let userScore=0;
let compScore=0;

const choices= document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const uScore= document.querySelector("#user-score");
const cScore = document.querySelector("#comp-score");

const genComp = () =>{
  const options = ["rock", "paper","scissor"];
  const idx= Math.floor(Math.random()*3);
  return options[idx];
}

const drawGame= () =>{
  msg.innerText = "Game was Draw!";
}

const showWinner = (userWin, userChoice, compChoice) =>{
  if(userWin === true){
    userScore++;
    uScore.innerText = userScore;
    msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  }else{
    compScore++;
    cScore.innerText = compScore;
    msg.innerText = `You loose! ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
}

const playGame = (userChoice) =>{
  const compChoice = genComp();
  
  if(compChoice===userChoice){
    //draw
    drawGame();
  }else{
    let userWin = true;
    if(userChoice === "rock"){
      userWin = compChoice === "paper" ? false : true;
    }else if(userChoice === "scissors"){
      userWin = compChoice=== "rock" ? false:  true;
    }else{
      userWin = compChoice === "rock" ?false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
}

choices.forEach((choice)=>{
  choice.addEventListener("click", () =>{
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
