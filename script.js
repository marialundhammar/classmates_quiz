//array of students with name and img
const students = [
  {
    name: "Adi Dzocaj",
    image: "assets/images/students/adi-dzocaj.jpg",
  },
  {
    name: "Alexander Bergquist",
    image: "assets/images/students/alexander-bergquist.jpg",
  },
  {
    name: "Alexander Kocman",
    image: "assets/images/students/alexander-kocman.jpg",
  },
  {
    name: "Benjamin Benson",
    image: "assets/images/students/benjamin-benson.jpg",
  },
  {
    name: "Benjamin Tsubarah",
    image: "assets/images/students/benjamin-tsubarah.jpg",
  },
  {
    name: "Calle Nilsson",
    image: "assets/images/students/calle-nilsson.jpg",
  },
  {
    name: "Chikage Takahashi Molander",
    image: "assets/images/students/chikage-takahashi-molander.jpg",
  },
  {
    name: "Daniel Be",
    image: "assets/images/students/daniel-be.jpg",
  },
  {
    name: "Daniel Carlsson",
    image: "assets/images/students/daniel-carlsson.jpg",
  },
  {
    name: "Elin Ahlgren",
    image: "assets/images/students/elin-ahlgren.jpg",
  },
  {
    name: "Emma Käck",
    image: "assets/images/students/emma-kack.jpg",
  },
  {
    name: "Eric Ståhl",
    image: "assets/images/students/eric-stahl.jpg",
  },
  {
    name: "Frans Gustavson Påsse",
    image: "assets/images/students/frans-gustavson-passe.jpg",
  },
  {
    name: "Glafira Veretennikova",
    image: "assets/images/students/glafira-veretennikova.jpg",
  },
  {
    name: "Gustaf Grönlund",
    image: "assets/images/students/gustaf-gronlund.jpg",
  },
  {
    name: "Hanna Håkanson",
    image: "assets/images/students/hanna-hakanson.jpg",
  },
  {
    name: "Heidi Sjöberg",
    image: "assets/images/students/heidi-sjoberg.jpg",
  },
  {
    name: "Hugo Carzborn",
    image: "assets/images/students/hugo-carzborn.jpg",
  },
  {
    name: "Jesper Kling",
    image: "assets/images/students/jesper-kling.jpg",
  },
  {
    name: "Johan Ranestam",
    image: "assets/images/students/johan-ranestam.jpg",
  },
  {
    name: "Johanna Bäckström",
    image: "assets/images/students/johanna-backstrom.jpg",
  },
  {
    name: "Johanna Jönsson",
    image: "assets/images/students/johanna-jonsson.jpg",
  },
  {
    name: "Jona Torsson",
    image: "assets/images/students/jona-torsson.jpg",
  },
  {
    name: "Josefine Ahlstedt",
    image: "assets/images/students/josefine-ahlstedt.jpg",
  },
  {
    name: "Julia Jespersdotter Högman",
    image: "assets/images/students/julia-jespersdotter-hogman.jpg",
  },
  {
    name: "Julia Nemell",
    image: "assets/images/students/julia-nemell.jpg",
  },
  {
    name: "Linus Lindberg",
    image: "assets/images/students/linus-lindberg.jpg",
  },
  {
    name: "Malin Olsson",
    image: "assets/images/students/malin-olsson.jpg",
  },
  {
    name: "Maria Haara-Lundhammar",
    image: "assets/images/students/maria-haara-lundhammar.jpg",
  },
  {
    name: "Maria Lövgren",
    image: "assets/images/students/maria-lovgren.jpg",
  },
  {
    name: "Nikola Dimitrijoski",
    image: "assets/images/students/nikola-dimitrijoski.jpg",
  },
  {
    name: "Paulina Kiendys",
    image: "assets/images/students/paulina-kiendys.jpg",
  },
  {
    name: "Raymond Lam",
    image: "assets/images/students/raymond-lam.jpg",
  },
  {
    name: "Robin Karlsson",
    image: "assets/images/students/robin-karlsson.jpg",
  },
  {
    name: "Sara Almqvist",
    image: "assets/images/students/sara-almqvist.jpg",
  },
  {
    name: "Tim Nilsson",
    image: "assets/images/students/tim-nilsson.jpg",
  },
  {
    name: "Tirapat Sukjit",
    image: "assets/images/students/tirapat-sukjit.jpg",
  },
  {
    name: "Tobias Silfverberg",
    image: "assets/images/students/tobias-silfverberg.jpg",
  },
  {
    name: "Wiktoria Dobrzewinska",
    image: "assets/images/students/wiktoria-dobrzewinska.jpg",
  },
];

//getting elements from HTML
const displayImg = document.querySelector("#img-container");
const buttonContainer = document.querySelector("#button-container");
const startContainer = document.querySelector("#start-container");
const restartGame = document.querySelector("#restart-game");
const restartGameButton = document.querySelector("#restart-game-button");
const resultEl = document.querySelector("#result");
const highscoreEl = document.querySelector("#highscore");

//randomize function
let randomize = (arr) => {
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
};

//copy the array of students
let arrayOfImgLeft = [...students];

//create some variable
let correctName;
let selectedStudent;
let highscore = 0;

//click handler
const handleOnClick = (e) => {
  //keeping track of amount of guesses
  amountOfGuesses++;

  //adding class disabled to all buttons
  const allButtons = document.querySelectorAll(".buttonGuess");
  allButtons.forEach((button) => button.classList.add("disabled"));

  //Checking if correct button is pushed, if correct add class correctStudent, if not add class wrongStudent but also show correct student
  if (e.target.dataset.user === correctName) {
    correctAnswer++;
    e.target.classList.add("correctStudent");
  } else {
    e.target.classList.add("wrongStudent");

    allButtons.forEach((button) => {
      if (button.dataset.user === correctName) {
        button.classList.add("correctStudent");
      }
    });

    wrongAnswer++;
  }

  //slow down the next question action so we are able to see if the guesss was correct or not
  const interval = setInterval(() => {
    //if game is finished?
    if (amountOfGuesses === 10) {
      let output = "";
      //new highscore?
      if (correctAnswer > highscore) {
        highscore = correctAnswer;
        output = `🥳🥳 WIHOO, new highscore!! 🥳🥳 You guessed ${highscore} times correct`;
      } else if (correctAnswer <= highscore) {
        output = `💩 Sorry, no new highscore.... The current highscore is ${highscore}`;
      }

      //printing the result + highscore out
      resultEl.innerHTML = `This is your result:  ${correctAnswer}  / ${amountOfGuesses}!!`;

      highscoreEl.innerHTML = `${output}`;

      //adding classlist show and hide so
      restartGame.classList.add("show");
      startContainer.classList.add("hide");

      //if game is not finished, show next question
    } else {
      newQuestion();
    }
    clearInterval(interval);
  }, 500);

  randomize(arrayOfImgLeft);
};

//generating a new question
const newQuestion = () => {
  //selecting a student
  randomize(arrayOfImgLeft);
  const arrayAnswer = arrayOfImgLeft.slice(0, 4);
  randomize(arrayAnswer);
  selectedStudent = arrayAnswer[0];

  //filtring out the students that has not yet been shown
  arrayOfImgLeft = arrayOfImgLeft.filter((student) => {
    if (student.name !== selectedStudent.name) {
      return true;
    }
  });

  randomize(arrayAnswer);

  correctName = selectedStudent.name;

  //Showing image
  displayImg.setAttribute("src", selectedStudent.image);

  //creating buttons
  buttonContainer.innerHTML = "";
  buttonContainer.innerHTML += arrayAnswer
    .map((student) => `<button data-user="${student.name}" class="btn buttonGuess">${student.name}</button>`)
    .join("");
  document.querySelectorAll(".buttonGuess").forEach((button) => button.addEventListener("click", handleOnClick));
};

//reset-function
const reset = () => {
  correctAnswer = 0;
  wrongAnswer = 0;
  amountOfGuesses = 0;
};

newQuestion();
reset();

//Button that restarts the game
restartGameButton.addEventListener("click", (e) => {
  newQuestion();
  reset();
  startContainer.classList.remove("hide");
  restartGame.classList.remove("show");
});
