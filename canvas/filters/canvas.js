'use strict';

(function () {
  var canvas, ctx;
  var width, height;
  var imageObj;

  $(function () {
    canvas = document.getElementById('canvas');
    width = canvas.width;
    height = canvas.height;
    ctx = canvas.getContext('2d');

    imageObj = new Image();
    imageObj.src = 'img/flowers.jpg';

    imageObj.onload = function () {
      renderImage();
    };
  });

  function renderImage() {
    ctx.drawImage(imageObj, 0, 0, imageObj.width, imageObj.height, 0, 0, width, height);
    applyFilters();
  }

  function applyFilters() {
    var imageData = ctx.getImageData(0, 0, width, height);
    var data = imageData.data;

    var factor = (259 * (FiltersApp.filter.contrast + 255)) / (255 * (259 - FiltersApp.filter.contrast));
    var brightness;

    for (var i = 0; i < data.length; i += 4) {
      data[i] = factor * (data[i] - 128) + 128 + FiltersApp.filter.brightness;
      data[i + 1] = factor * (data[i + 1] - 128) + 128 + FiltersApp.filter.brightness;
      data[i + 2] = factor * (data[i + 2] - 128) + 128 + FiltersApp.filter.brightness;

      if (FiltersApp.filter.isGrayscale) {
        brightness = 0.3 * data[i] + 0.59 * data[i + 1] + 0.11 * data[i + 2];
        data[i] = data[i + 1] = data[i + 2] = brightness;
      }
    }

    ctx.putImageData(imageData, 0, 0);
  }

  window.FiltersApp.renderImage = renderImage;
}());
