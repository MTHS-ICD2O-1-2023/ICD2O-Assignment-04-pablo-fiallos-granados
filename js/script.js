// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Pablo Fiallos
// Created on: April 2024
// This file contains the JS functions for index.html

"use strict"


function enterClicked() {
  // input
  let age = parseInt(document.getElementById('age').value)
  // output
  if (age >= 17) {
    document.getElementById("user-info").innerHTML =
      "You can see an R movie alone."
  } else if (age >= 13) {
    document.getElementById("user-info").innerHTML =
      "You can see a PG-13 movie alone."
  } else if (age >= 5) {
    document.getElementById("user-info").innerHTML =
      "You can see a G or PG movie alone."
  } else {
    document.getElementById("user-info").innerHTML =
      "You can see nothing."
  }
}