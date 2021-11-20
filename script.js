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

//show image
const displayImg = document.querySelector("#img-container");
const button1 = document.querySelector("#button-1");
const button2 = document.querySelector("#button-2");
const button3 = document.querySelector("#button-3");
const button4 = document.querySelector("#button-4");
const buttonContainer = document.querySelector("#button-container");

//get random dude
let randomize = (arr) => {
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
};

//randomize students
randomize(students);

const newQuestion = () => {
  displayImg.setAttribute("src", students[0].image);

  const arrayAnswer = [students[0], students[1], students[2], students[3]];

  randomize(arrayAnswer);

  button1.setAttribute("data-user", arrayAnswer[0].name);
  button2.setAttribute("data-user", arrayAnswer[1].name);
  button3.setAttribute("data-user", arrayAnswer[2].name);
  button4.setAttribute("data-user", arrayAnswer[3].name);

  button1.innerHTML = arrayAnswer[0].name;
  button2.innerHTML = arrayAnswer[1].name;
  button3.innerHTML = arrayAnswer[2].name;
  button4.innerHTML = arrayAnswer[3].name;
};

newQuestion();

let correctAnswer = 0;
let wrongAnswer = 0;
let amountOfGuesses = 0;
const arrayOfCorrectAnswer = [];
const arrayOfWrongAnswer = [];

buttonContainer.addEventListener("click", (e) => {
  //take input from user
  amountOfGuesses++;
  console.log(e);
  console.log(e.target.dataset.user);
  if (e.target.dataset.user === students[0].name) {
    correctAnswer++;
    console.log("correct answer: " + correctAnswer + ", amounts of guesses: " + amountOfGuesses);
    arrayOfCorrectAnswer.push(students[0].name);
    console.log(arrayOfCorrectAnswer);
  } else {
    wrongAnswer++;
    console.log("not correct answer:" + wrongAnswer + ", amounts of guesses: " + amountOfGuesses);
    arrayOfWrongAnswer.push(e.target.dataset.user);
    console.log(arrayOfWrongAnswer);
  }

  randomize(students);
  newQuestion();

  if (amountOfGuesses === 20) {
    alert(
      "You Guesses " +
        amountOfGuesses +
        " time and " +
        correctAnswer +
        " was correct and " +
        wrongAnswer +
        " was wrong,  you guessed wrong on \n " +
        arrayOfWrongAnswer.join("\n")
    );
    correctAnswer = 0;
    wrongAnswer = 0;
    amountOfGuesses = 0;
  }
});
