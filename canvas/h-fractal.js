'use strict';

var init = (function () {
  var MAX_DEPTH = 10;
  var DELAY_MS = 0;

  var canvas, ctx, width, height;

  function init() {
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');
    width = canvas.width;
    height = canvas.height;

    var from = {x: width / 4, y: height / 2};
    var to = {x: width / 4 * 3, y: height / 2};

    drawFractal(from, to, 0);
  }

  function drawFractal(from, to, depth) {
    var color = getColor();
    var width = getWidth(depth);
    drawLine(from, to, color, width);

    if (depth > MAX_DEPTH) {
      return;
    }

    var next = getNextPoints(from, to);
    setTimeout(function () {
      drawFractal(next.from1, next.to1, depth + 1);
      drawFractal(next.from2, next.to2, depth + 1);
    }, DELAY_MS);
  }

  function getColor() {
    return '#333';
  }

  function getWidth(depth) {
    return Math.max(1, 10 - depth);
  }

  function drawLine(from, to, color, width) {
    ctx.strokeStyle = color;
    ctx.lineWidth = width;
    ctx.beginPath();
    ctx.moveTo(from.x, from.y);
    ctx.lineTo(to.x, to.y);
    ctx.stroke();
  }

  function getNextPoints(from, to) {
    var from1 = {};
    var to1 = {};
    var from2 = {};
    var to2 = {};

    var distance = Math.abs(from.x - to.x) + Math.abs(from.y - to.y);
    var nextSegmentLength = distance / Math.sqrt(2);
    var halfLength = nextSegmentLength / 2;

    if (from.x === to.x) {
      from1.x = from2.x = from.x - halfLength;
      to1.x = to2.x = to.x + halfLength;

      from1.y = to1.y = from.y;
      from2.y = to2.y = to.y;
    } else {
      from1.y = from2.y = from.y - halfLength;
      to1.y = to2.y = to.y + halfLength;

      from1.x = to1.x = from.x;
      from2.x = to2.x = to.x;
    }

    return {
      from1: from1,
      to1: to1,
      from2: from2,
      to2: to2
    };
  }

  return init;
}());
