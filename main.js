"use strict";
let year = Number(prompt("write now year:"));
let res = Math.ceil(year / 100);
year > 0
  ? alert("the year you entered" + " " + res + "-" + "century")
  : alert("you made some mistake");
