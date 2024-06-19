// let col = document.querySelectorAll(".col");
// let displayWinner = document.querySelector(".winner");
// let message = document.querySelector(".msg-container");
// let btn = document.querySelector(".new-btn");
// let reset = document.getElementById("reset");
// let h1 = document.querySelector("h1");

// // let arr = Array.from(col);
// let turno = true;
// let winingPatern = [
//   [0, 1, 2],
//   [3, 4, 5],
//   [6, 7, 8],

//   [0, 3, 6],
//   [1, 4, 7],
//   [2, 5, 8],
//   [0, 4, 8],
//   [2, 4, 6],
// ];

// // col.forEach((cols) => {
// //   cols.addEventListener("click", (evt) => {
// //     if (turno == true) {
// //       // evt.target.innerHTML = "O";
// //       cols.innerHTML = "O";
// //       turno = false;
// //     } else {
// //       // evt.target.innerHTML = "X";
// //       cols.innerHTML = "X";
// //       turno = true;
// //     }
// //     cols.disabled = true;
// //     checkWinner();
// //   });
// // });
// // OR

// for(let cols of col)
// {
//   cols.addEventListener("click" , 
//     ()=>{
//       if(turno == true){
//         cols.innerHTML = `<span style= "color:#285cfe">O</span>`;
//         turno = false;
//       }
//       else{
//         cols.innerHTML = "X";
//         turno = true;
//       }
//       cols.disabled = true;
//       checkWinner();
//     }
//   )
// }

// let disableBox = ()=>{
//   for(let box of col){
//     box.disabled = true;
//   }
// }
// let enableBox = ()=>{
//   for(let box of col){
//     box.disabled = false;
//     box.innerHTML = "";
//   }
// }
// const checkWinner = () => {
//   for (let pattern of winingPatern) {
//     if (
//       col[pattern[0]].innerHTML != "" &&
//       col[pattern[1]].innerHTML != "" &&
//       col[pattern[2]].innerHTML != ""
//     ) {
//       if (
//         col[pattern[0]].innerHTML == col[pattern[1]].innerHTML &&
//         col[pattern[1]].innerHTML == col[pattern[2]].innerHTML
//       ) {
//         let winner = col[pattern[0]].innerHTML;
//         showWinner(winner);
//         disableBox();
//       }
//     }
//   }
// };

// let showWinner = (gameWinner) => {
//   displayWinner.innerHTML = `<span style="color:red">Congratulation</span> , WINNER is '${gameWinner}'`;
//   message.classList.remove("hide");
// };

// reset.addEventListener("click" , 
//   ()=>{
//     turno = true;
//     enableBox();
//   }
// );
// btn.addEventListener("click" , 
//   ()=>{
//     turno = true;
//     enableBox();
//     message.classList.add("hide");
//   }
// );

// -------------------

let boxes = document.querySelectorAll(".col");
let winnerElement = document.querySelector(".winner");
let msgElement = document.querySelector(".msg-container");
let newGame = document.querySelector(".new-btn");
let resetbtn = document.querySelector("#reset");
let turno = true;
let winningPattern = [
  [0 , 1 , 2] ,
  [3 , 4 , 5] ,
  [6 , 7 , 8] ,
  [0 , 3 , 6] ,
  [1 , 4 , 7] ,
  [2 , 5 , 8] ,
  [0 , 4 , 8] ,
  [2 , 4 , 6]
]


boxes.forEach(
  (box)=>{
    box.addEventListener("click" , 
      ()=>{
        if(turno == true){
          box.innerHTML = "O";
          turno = false;
          }
          else{
            box.innerHTML = "X";
            turno = true;
          }
          box.disabled = true;
          checkWinner();
      }
    );
  }
);

function disableBox(){
  for(let box of boxes){
    box.disabled = true;
  }
};

function enableBox(){
  for(let box of boxes){
    box.disabled = false;
    box.innerHTML = "";
  }
};

function checkWinner(){
  for(let pattern of winningPattern){
    let p1 =  boxes[pattern[0]].innerHTML;
    let p2 =  boxes[pattern[1]].innerHTML;
    let p3 =  boxes[pattern[2]].innerHTML;

    if(p1 != "" && p2 != "" && p3 != ""){
      if(p1 == p2 && p2 == p3){
          winnerElement.innerHTML = `<span>Congratulation</span> Winner is ${p1}`;
          msgElement.classList.remove("hide");
          disableBox();
      }
    }
  }
}

newGame.addEventListener("click" , 
  ()=>{
    turno = true;
    enableBox();
    msgElement.classList.add("hide");

  }
)

resetbtn.addEventListener("click" , 
  ()=>{
    turno = true;
    enableBox();
  }
)



