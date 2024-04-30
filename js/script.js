// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Pablo Fiallos
// Created on: April 2024
// This file contains the JS functions for index.html

"use strict"

function enterClicked() {

  // input

  let ak12Checked = document.getElementById('AK12-check').checked
  let ak47Checked = document.getElementById('AK47-check').checked
  let ak74Checked = document.getElementById('AK74-check').checked
  let cost = 0
  let amountOfRounds = parseFloat(document.getElementById('rounds').value)

  // process

  if (ak12Checked == true) {
    cost = 1.13 * (500 + amountOfRounds * 0.50)
  } else if (ak47Checked == true) {
    cost = 1.13 * (1000 + amountOfRounds * 0.50)
  } else if (ak74Checked == true) {
    cost = 1.13 * (2000 + amountOfRounds * 0.50)
  } else {
    cost = 1.13 * (amountOfRounds * 0.50)
  }

  let costRounded = cost.toFixed(2)

  // output

  document.getElementById("user-info").innerHTML =
    "Cost after deductions = $" + costRounded
}