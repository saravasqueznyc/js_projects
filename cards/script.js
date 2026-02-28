"use strict";
const ORIGINAL_DECK = [
  {
    q: "What are the primitive types in JavaScript?",
    a: "string, number, boolean, null, undefined, bigint and symbol.",
  },
  {
    q: "Why does typeof null return 'object'?",
    a: "It is a historical bug in the language that remains for compatibility reasons.",
  },
  {
    q: "What does the push() method do in an array?",
    a: "It adds an element to the end of the array and returns the new length.",
  },
  {
    q: "What does the splice() method do in an array?",
    a: "It allows you to remove or insert elements at specific positions in the array.",
  },
  {
    q: "What is the includes() method used for in an array or string?",
    a: "It checks whether an element or text exists and returns true or false.",
  },
  {
    q: "What does the slice() method return?",
    a: "It returns a copy of part of an array or string without modifying the original.",
  },
  {
    q: "What does the join() method do in an array?",
    a: "It joins all elements into a string separated by a delimiter.",
  },
  {
    q: "What does the trim() method return in a string?",
    a: "It returns a copy of the text without spaces at the beginning or end.",
  },
  {
    q: "What is the difference between for, for...of and for...in?",
    a: "for uses a counter; for...of iterates over values; for...in iterates over object keys.",
  },
  {
    q: "What is the forEach() method used for?",
    a: "It executes a function for each element in the array without returning a new array.",
  },
  {
    q: "What is the difference between while and do...while?",
    a: "while evaluates the condition before executing; do...while executes at least once.",
  },
  {
    q: "What is the difference between a regular function, an anonymous function, and an arrow function?",
    a: "Regular functions have a name; anonymous functions do not; arrow functions (=>) are shorter and do not have their own this.",
  },
  {
    q: "What does it mean that JavaScript is dynamically typed?",
    a: "It means variable types can change during execution.",
  },
  {
    q: "What does it mean that JavaScript is single-threaded?",
    a: "It executes one task at a time on a single thread.",
  },
  {
    q: "What role does the call stack play in JavaScript?",
    a: "It is the stack where function calls are stored and executed in order.",
  },
  {
    q: "How are conditions evaluated in JavaScript?",
    a: "Using truthy and falsy values in structures like if, else if, else and switch.",
  },
  {
    q: "What is the spread operator (...) and what is it used for?",
    a: "It expands elements of an array or object. Example: const copy = [...original];",
  },
  {
    q: "What is the rest operator (...) and when is it used?",
    a: "It groups multiple values into a single parameter. Example: function sum(...nums){}.",
  },
  {
    q: "What does the addEventListener() method do?",
    a: "It listens for a DOM event (like clicks or key presses) and executes a function when it occurs.",
  },
  {
    q: "How do you change the text and style of an element with JavaScript?",
    a: "With element.textContent = 'New text' and element.style.color = 'red';.",
  },
];

const prevButton = document.querySelector("#btn-prev");
const nextButton = document.querySelector("#btn-next");
const shuffleButton = document.querySelector("#btn-shuffle");
const knowButton = document.querySelector("#btn-known");
const resetButton = document.querySelector("#btn-reset");
const card = document.querySelector("#card");
const cardTitle = document.querySelector("#card-title");
const cardText = document.querySelector("#card-text");
const cardStatus = document.querySelector("#card-status");
const statIndex = document.querySelector("#stat-index");
const statTotal = document.querySelector("#stat-total");
const statKnown = document.querySelector("#stat-known");
const message = document.querySelector("#message");

let showQuestion = true;
let currentIndex = 0;
let knownCards = [];
let deck = [...ORIGINAL_DECK];

function initializeApp() {
  currentIndex = 0;
  knownCards = [];
  deck = [...ORIGINAL_DECK];

  card.classList.remove("card-known");
  statIndex.innerText = currentIndex + 1;
  statTotal.innerText = deck.length;
  statKnown.innerText = knownCards.length;
  renderCard();
}

function saveKnownCard() {
  const currentCard = deck[currentIndex];

  if (!knownCards.includes(currentCard)) {
    knownCards.push(currentCard);
  } else {
    knownCards.splice(knownCards.indexOf(currentCard), 1);
  }

  statKnown.innerText = knownCards.length;
  renderCard();
}

function renderCard() {
  let index = currentIndex;
  let currentCard = deck[index];

  let type = showQuestion ? "Q" : "A";
  cardTitle.innerText = type + (index + 1);
  cardText.innerText = showQuestion ? currentCard.q : currentCard.a;

  if (knownCards.includes(currentCard) && !card.classList.contains("card-known")) {
    card.classList.add("card-known");
  } else if (!knownCards.includes(index) && card.classList.contains("card-known")) {
    card.classList.remove("card-known");
  }
}

function shuffle(cards) {
  const newCards = [...cards];
  const shuffled = [];

  while (newCards.length) {
    const i = Math.floor(Math.random() * newCards.length);
    const valueToReplace = newCards.splice(i, 1)[0];
    shuffled.push(valueToReplace);
    if (knownCards.includes(valueToReplace)) {
      knownCards[knownCards.indexOf(valueToReplace)] =
        shuffled.indexOf(valueToReplace);
    }
  }
  return shuffled;
}

function next() {
  if (currentIndex < deck.length - 1) {
    currentIndex++;
    statIndex.innerText = currentIndex + 1;
  } else {
    currentIndex = 0;
    statIndex.innerText = currentIndex + 1;
  }
  showQuestion = true;
  renderCard();
}

function previous() {
  if (currentIndex > 0) {
    currentIndex--;
    statIndex.innerText = currentIndex + 1;
  } else {
    currentIndex = deck.length - 1;
    statIndex.innerText = currentIndex + 1;
  }
  showQuestion = true;
  renderCard();
}

initializeApp();

card.addEventListener("click", () => {
  showQuestion = !showQuestion;
  renderCard();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "c" || e.key === "C") {
    showQuestion = !showQuestion;
    renderCard();
  }
});

knowButton.addEventListener("click", saveKnownCard);

document.addEventListener("keydown", (e) => {
  if (e.key === "k" || e.key === "K") {
    saveKnownCard();
  }
});

nextButton.addEventListener("click", next);

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") {
    next();
  }
});

prevButton.addEventListener("click", previous);

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft") {
    previous();
  }
});

resetButton.addEventListener("click", initializeApp);

shuffleButton.addEventListener("click", () => {
  deck = shuffle(deck);
  currentIndex = 0;
  statIndex.innerText = currentIndex + 1;
  showQuestion = true;
  renderCard();
});