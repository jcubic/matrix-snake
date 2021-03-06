#!/usr/bin/env node

'use strict';

var SnakeGame = require('../src/snake-game');
// creates an object that will notify our Snake
// Game whenever we want to change the direction
// of the snake.
var cbObj = new SnakeGame.CbObj();

// here we prepare the CbObj to receive, in a
// given interval of 1.5s, random directions.
setInterval(function () {
  cbObj.emitDir(['up', 'left','right', 'down'][Math.random() * 4 | 0]);
}, 1500);

function handleFruitEat (fruits) {
  console.log('Just ate a fruit!');
}

// Prepare the initial gave (5x5 matrix)
var game = SnakeGame.prepare(5,5, cbObj, handleFruitEat);

// Let the game render itself in an interval of
// .5s
setInterval(function () {
  console.log(game.next());
}, 300);
