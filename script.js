let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".resetBtn");
// let newBtn = document.querySelector(".reset");
let newGameBtn = document.querySelector(".newGameBtn");
let msgContainer = document.querySelector(".msgContainer");
let msg = document.querySelector(".msg")

let turnO = true; // playerX , playerY
let count = 0; //To Track Draw
 
const winPattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [2,4,6],
    [0,3,6],
    [1,4,7],
    [2,5,8],
];

const resetGame = () =>{
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
};



boxes.forEach((box) => {
    box.addEventListener("click", ()=>{
    console.log("Box Was Clicked!");
    if(turnO){
    //playerO
    box.innerText = "O";
    turnO = false; 
    }
    else{
        // playerX
        box.innerText = "X"
        turnO = true;
    }
    box.disabled = true;
    count++;
    // checkWinner();

        let isWinner = checkWinner();

    if (count === 9 && !isWinner) {
      gameDraw();
    }
    });
});

const gameDraw = () => {
  msg.innerText = `Game was a Draw.`;
  msgContainer.classList.remove("hide");
  disableBoxes();
};

const disableBoxes = () =>{
    for(const box of boxes){
        box.disabled = true;
    }
};

const enableBoxes = () =>{
    for(const box of boxes){ 
        box.disabled = false;
        box.innerText = "";
    }
};

const showWinner = (winner) =>{
    msg.innerText = `Congratulations , Winner Is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}
const checkWinner = () => {
    for(let pattern of winPattern){
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if(pos1Val != "" && pos2Val != "" && pos3Val !=""){
        if(pos1Val === pos2Val && pos2Val === pos3Val){
            console.log("winner",pos1Val);
            showWinner(pos1Val); 
        }
    }
    
    }
};

newGameBtn.addEventListener("click", resetGame); 
resetBtn.addEventListener("click", resetGame);

