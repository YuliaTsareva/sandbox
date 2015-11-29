'use strict';

(function() {
  window.App.init = function() {
    this.canvas = document.getElementById('canvas');
    this.ctx = this.canvas.getContext('2d');

    setCanvasSize(this.canvas);
    drawShapes(this.ctx, this.canvas.width, this.canvas.height);

    var that = this;

    window.onresize = function() {
      setCanvasSize(that.canvas);
      drawShapes(that.ctx, that.canvas.width, that.canvas.height);
    };
  };

  function setCanvasSize(canvas) {
    var width = document.getElementById('canvasContainer').clientWidth;
    var height = document.getElementById('canvasContainer').clientHeight - 90;

    if (width / height < App.initialWidth / App.initialHeight) {
      height = Math.round(App.initialHeight * width / App.initialWidth);
    } else {
      width = Math.round(App.initialWidth * height / App.initialHeight);
    }

    canvas.width = width;
    canvas.height = height;
  }

  function drawShapes(ctx, canvasWidth, canvasHeight) {
    window.App.shapes.forEach(function(shape) {
      shape.draw(ctx, canvasWidth, canvasHeight);
    });
  }
}());
