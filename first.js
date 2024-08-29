//Building Game Stone Paper Scissors
let userScore=0;  // initilization
let compScore=0;

const choices = document.querySelectorAll(".choice");    // access the values from html & css file
const msg= document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice=()=>{    // you see that always we use arrow function 
    const options=["rock", "paper", "scissors"];
    const randIdx= Math.floor(Math.random()*3);  // this is random function in math which generate numbers from 0 to 1 but in decimal so and always less than 1 means 0.99 max
    return options[randIdx];      // we multiply this with 3 and apply one more property which is floor which gets only full number not a digit
};

const drawGame=()=>{
    msg.innerText="Game was Draw Play again!!!";
    msg.style.backgroundColor="#081b31";
};

const showWinner=(userWin, userChoice, compChoice)=>{   // he function jo jinkel tya sathi tyache value update karel
    if(userWin){
        userScore++;
        userScorePara.innerText= userScore;   // innerText this property is used to change html content eith the help of js (dom)
        msg.innerText=`You Win!!! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor ="green";
    } else{
        compScore++;
        compScorePara.innerText= compScore;
        msg.innerText=`You lose !!! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor ="red";
    }
}

const playGame=(userChoice)=>{
    const compChoice= genCompChoice();

    if (userChoice===compChoice){
        drawGame();
    } else {
        let userWin=true;    // 1st value assign kele ek initilization
        if(userChoice==="rock"){
            userWin= compChoice==="paper" ? false : true;      // this line is v imp
        } else if (userChoice==="paper"){
            userWin= compChoice==="scissors" ? false : true;
        } else{
            userWin= compChoice=== "rock" ? false: true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice)=>{    // hyat pratek div var aapan event listner add kela aahe manje aappan click event access karu shakto
    choice.addEventListener("click", ()=>{   //manje click zal ki zal he sangata
        const userChoice = choice.getAttribute("id");   
        playGame(userChoice);
    });
});
