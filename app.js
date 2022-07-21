// //  declarations
// let playSelector = document.querySelector(".playSelector");
// let rollContainer = document.querySelector(".roll-container");
// let rollContainerSingle = document.querySelector(".roll-container1");
// let rollBtn = document.querySelector(".Roll-btn");
// let rollBtnSingle = document.querySelector(".Roll-btn1");
// let startBtn = document.querySelector(".start-Btn");
// let playerOption = document.querySelector("#selections");
// let userName1 = document.querySelector(".name1");
// let userName2 = document.querySelector(".name2");
// let playing = document.querySelector(".playing");
// let score1Cont = document.querySelector(".score1");
// let score2Cont = document.querySelector(".score2");
// let message = document.querySelector(".congrat-message");
// let congratGif = document.querySelector(".congrat-img img");
// let diceContainer = document.querySelector(".dice-icon");

// let total1 = document.querySelector(".total1");
// let total2 = document.querySelector(".total2");
// let players = [];
// let player1Score = [];
// let player2Score = [];
// let playCount = 0;
// let currentPlayer = 0;
// let singleName;
// let play1Count = 0;
// const start = () => {
//   if (playerOption.value == "1") {
//     // one player starts
//     singleName = prompt("enter username"); //user name input
//     playSelector.style.display = "none";
//     rollContainerSingle.style.display = "block"; //adds the container holding one player section(mode)
//   } else {
//     // two players start
//     let name1 = "enter username";
//     let name2 = "enter username(2nd player)";
//     document.querySelector(".player-cont").style.display = "flex";
//     let user1 = prompt(name1);
//     players.push(user1);
//     userName1.innerHTML = user1;
//     let user2 = prompt(name2);
//     players.push(user2);
//     userName2.innerHTML = user2;
//     playSelector.style.display = "none";
//     rollContainer.style.display = "block";
//   }
// };
// // starting up a new set
// function setUp() {
//   startBtn.addEventListener("click", start);
//   playSelector.style.display = "block";
//   rollContainer.style.display = "none";
//   rollContainerSingle.style.display = "none";
//   userName1.innerHTML = "";
//   userName2.innerHTML = "";
// }
// setUp();

// //roll button of a single player

// rollBtnSingle.addEventListener("click", () => {
//   console.log(play1Count);
//   let randNum2 = Math.floor(Math.random() * 6 + 1); // random number that gives the score of each dice
//   let numbers2 = ["one", "two", "three", "four", "five", "six"]; // array of numbers(words) that changes the dice icon
//   let di = numbers2[randNum2 - 1];
//   diceContainer.textContent = "";
//   let diceTag = document.createElement("i");
//   diceTag.classList.add(`fas`, `fa-dice-${di}`);
//   diceContainer.appendChild(diceTag);
//   play1Count += 1;
//   document.querySelector(".player-cont").style.display = "none";
//   if ((play1Count > 4) & (randNum2 !== 6)) {
//     //if player has rolled more than four times, without a six(a win)
//     // play1Count = 0;
//     message.textContent = `Hola!  ${singleName}  lost try again`;
//     setTimeout(() => {
//       message.textContent = "";
//       play1Count = 0;
//       setUp();
//     }, 2000);
//   } else {
//     if (randNum2 == 6) {
//       congratGif.style.display = "block";
//       message.textContent = `Hola!  ${singleName} you rolled six`;
//       setTimeout(() => {
//         congratGif.style.display = "none";
//         message.textContent = "";
//         play1Count = 0;
//         setUp();
//       }, 2000);
//     }
//   }
// });

// rollBtn.addEventListener("click", () => {
//   diceContainer.textContent = "";
//   let randNum = Math.floor(Math.random() * 6 + 1);
//   let numbers = ["one", "two", "three", "four", "five", "six"];
//   let di = numbers[randNum - 1];
//   let diceTag = document.createElement("i");
//   diceTag.classList.add(`fas`, `fa-dice-${di}`);
//   diceContainer.appendChild(diceTag);
//   playCount += 1;
//   // loop
//   let score = document.createElement("li");
//   let score1 = document.createElement("li");
//   if (currentPlayer == 0) {
//     player1Score.push(randNum);
//     let play1 = player1Score;
//     for (let index = 0; index < play1.length; index++) {
//       const element = play1[index];
//       score1.textContent = element;
//     }
//     score1Cont.appendChild(score1);
//   } else {
//     player2Score.push(randNum);
//     let play = player2Score;
//     for (let index = 0; index < play.length; index++) {
//       const element = play[index];
//       score.textContent = element;
//     }
//     score2Cont.appendChild(score);
//   }
//   playing.textContent = `Player ${players[currentPlayer]} is playing `;
//   currentPlayer += 1;

//   if (currentPlayer > 1) {
//     currentPlayer = 0;
//   }

//   if (playCount > 5) {
//     let player1ScoreTotal = player1Score[0] + player1Score[1] + player1Score[2];
//     let player2ScoreTotal = player2Score[0] + player2Score[1] + player2Score[2];
//     total1.innerHTML = player1ScoreTotal;
//     total2.innerHTML = player2ScoreTotal;
//     rollBtn.disabled = true;
//     rollBtn.value = "Game ended";
//     setTimeout(() => {
//       if (player1ScoreTotal == player2ScoreTotal) {
//         message.textContent = " you played a draw ,play again";
//         playing.textContent = "";
//         rollBtn.disabled = false;
//         playCount = 0;
//         setUp();
//       }
//       if (player1ScoreTotal > player2ScoreTotal) {
//         const num = 0;
//         showMessage(num);
//       } else {
//         const num2 = 1;
//         showMessage(num2);
//       }
//     }, 2000);
//   }
//   play1Count = 0;
// });
// const showMessage = (a) => {
//   congratGif.style.display = "block";
//   message.textContent = `Congrats  ${players[a]} you won`;
//   playing.textContent = "";
//   rollBtn.disabled = false;
//   setTimeout(() => {
//     score1Cont.textContent = "";
//     score2Cont.textContent = "";
//     message.textContent = "";
//     total1.innerHTML = "";
//     total2.innerHTML = "";
//     congratGif.style.display = "none";
//     rollBtn.value = "Roll Dice";
//     playCount = 0;
//     setUp();
//   }, 2000);
// };
