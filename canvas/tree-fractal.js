'use strict';

var init = (function () {
  var MAX_DEPTH = 15;
  var MIN_BRANCH_LENGTH = 1;

  var DELAY_MS = 0;

  var canvas, ctx, width, height;

  function init() {
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');
    width = canvas.width;
    height = canvas.height;

    var zero = {x: width / 2, y: 0};
    var length = Math.random() * (120 - 80) + 80;

    drawFractal(zero, length, 0, 0);
  }

  function drawFractal(zero, length, alpha, depth) {
    var color = getColor(depth);
    var width = getWidth(depth);

    var from = getInitialSystemPoint({x: 0, y: 0}, alpha, zero);
    var to = getInitialSystemPoint({x: 0, y: length}, alpha, zero);
    drawLine(from, to, color, width);

    if (depth > MAX_DEPTH || length < MIN_BRANCH_LENGTH) {
      return;
    }

    setTimeout(function () {
      var alpha1 = alpha - getRandomAngle();
      var length1 = getRandomLength(length);
      drawFractal(to, length1, alpha1, depth + 1);

      var alpha2 = alpha + getRandomAngle();
      var length2 = getRandomLength(length);
      drawFractal(to, length2, alpha2, depth + 1);
    }, DELAY_MS);
  }

  function getColor(depth) {
    if (depth > 5) { // green
      var opacity = 1 - (depth - 6) / 10;
      return 'rgba(51, 105, 30, ' + opacity + ')';
    } else { // dark brown
      return 'rgba(62, 39, 35, 1)';
    }
  }

  function getWidth(depth) {
    return Math.max(1, 6 - depth);
  }

  function drawLine(from, to, color, width) {
    ctx.strokeStyle = color;
    ctx.lineWidth = width;
    ctx.beginPath();
    ctx.moveTo(from.x, height - from.y);
    ctx.lineTo(to.x, height - to.y);
    ctx.stroke();
  }

  function getInitialSystemPoint(point, alpha, start) {
    return {
      x: point.x * Math.cos(alpha) - point.y * Math.sin(alpha) + start.x,
      y: point.x * Math.sin(alpha) + point.y * Math.cos(alpha) + start.y
    };
  }

  function getRandomAngle() {
    return Math.random() * Math.PI / 4;
  }

  function getRandomLength(length) {
    return Math.random() * (length / 5 * 4 - length / 3 * 2) + length / 3 * 2;
  }

  return init;
}());
