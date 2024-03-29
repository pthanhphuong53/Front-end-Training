const game = () => {
    let pScore = 0;
    let cScore = 0;
  
    //Start the Game
    const startGame = () => {
      const playBtn = document.querySelector(".intro button");
      const introScreen = document.querySelector(".intro");
      const match = document.querySelector(".match");
  
      playBtn.addEventListener("click", () => {
        introScreen.classList.add("fadeOut");
        match.classList.add("fadeIn");
      });
    };
    const playMatch = () => {
      const options = document.querySelectorAll(".options button");
      const playerHand = document.querySelector(".player-hand");
      const computerHand = document.querySelector(".computer-hand");
      const hands = document.querySelectorAll(".hands img");
      
      //Animation for each
      hands.forEach(hand => {
        hand.addEventListener("animationend", function() {
          this.style.animation = "";
        });
      });
      //Computer Options
      const computerOptions = ["rock", "paper", "scissors"];

      options.forEach(option => {
        option.addEventListener("click", function() {
          //Computer Choice
          const computerNumber = Math.floor(Math.random() * 3);
          const computerChoice = computerOptions[computerNumber];
  
          setTimeout(() => {
            //Here is where we call compare hands
            compareHands(this.textContent, computerChoice);
            //Update Images
            playerHand.src = `./img/${this.textContent}.png`;
            computerHand.src = `./img/${computerChoice}.png`;
          }, 2000);
          //Animation
          playerHand.style.animation = "shakePlayer 2s ease";
          computerHand.style.animation = "shakeComputer 2s ease";
        });
      });
    };
    //Finish the game
    const endGame = () => {
      const outtro = document.querySelector(".endGame");
      const matchScreen = document.querySelector(".match");

      matchScreen.classList.add("fadeOut");
      outtro.classList.add("fadeIn");
    }

    //Update score
    const updateScore = () => {
      const playerScore = document.querySelector(".player-score p");
      const computerScore = document.querySelector(".computer-score p");
      playerScore.textContent = pScore;
      computerScore.textContent = cScore;
      const maxScore = 2;
      const result = document.querySelector(".result");
      if (playerScore == maxScore && computerScore != maxScore) {
        endGame();
        result.textContent = "You win";
      }
      else if (computerScore == maxScore && playerScore != maxScore) {
        endGame();
        result.textContent = "You lose";
      }
    };
    const compareHands = (playerChoice, computerChoice) => {
      const winner = document.querySelector(".winner");

      //Checking for a tie
      if (playerChoice === computerChoice) {
        winner.textContent = "Tie";
        return;
      }

      //Checking for rock
      if (playerChoice === "rock") {
        if (computerChoice === "paper") {
          winner.textContent = "Computer wins";
          cScore++;
          updateScore();
        } else {
          winner.textContent = "Player wins";
          pScore++;
          updateScore();
        }
      }

      //Checking for paper
      if (playerChoice === "paper") {
        if (computerChoice === "scissors") {
          winner.textContent = "Computer wins";
          cScore++;
          updateScore();
        } else {
          winner.textContent = "Player wins";
          pScore++;
          updateScore();
        }
      }

      //Checking for scissors
      if (playerChoice === "scissors") {
        if (computerChoice === "rock") {
          winner.textContent = "Computer wins";
          cScore++;
          updateScore();
        } else {
          winner.textContent = "Player wins";
          pScore++;
          updateScore();
        }
      }
    }
    //Is call all the inner function
    startGame();
    playMatch();
};

game();