/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const domain = document.querySelector(".alert");

window.onload = function() {
  let pronoun = ["the", "our", "that", "a"];
  let adj = ["great", "big", "little", "gorgeous"];
  let noun = ["jogger", "racoon", "dog", "rigo"];
  let extensions = ["com", "es", "us", "io"];

  function loopArray() {
    pronoun.forEach(element => {
      adj.forEach(item => {
        noun.forEach(object => {
          extensions.forEach(ext => {
            domain.innerHTML += `<p> ${element}${item}${object}.${ext} </p>`;
          });
        });
      });
    });
  }

  loopArray();
};
