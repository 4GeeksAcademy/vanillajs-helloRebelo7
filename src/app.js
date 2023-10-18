/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector("#excuse").innerHTML = generateExcuse();
};

let generateExcuse = () => {
  let who = ["The pope", "My yoga teacher", "His dinosaur", "My clone"];
  let action = ["ate", "lost", "crushed", "broke"];
  let what = ["my computer", "the keys", "the car"];
  let when = [
    "before the christmas eve",
    "when i was meditating ",
    "when I wake up",
    "during rushhour",
    "while I was doing karate"
  ];

  function randomizeSentences(escusesWords) {
    return Math.floor(Math.random() * escusesWords.length);
  }

  let whoIndx = randomizeSentences(who);
  let actionIndx = randomizeSentences(action);
  let whatIndx = randomizeSentences(what);
  let whenIndx = randomizeSentences(when);

  return (
    who[whoIndx] +
    " " +
    action[actionIndx] +
    " " +
    what[whatIndx] +
    " " +
    when[whenIndx]
  );
};
