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

  let whoIndx = Math.floor(Math.random() * who.length);
  let actionIndx = Math.floor(Math.random() * action.length);
  let whatIndx = Math.floor(Math.random() * what.length);
  let whenIndx = Math.floor(Math.random() * when.length);

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
