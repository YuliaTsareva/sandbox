'use strict';

var width = 300;
var height = 300;

loadImage('images/cat1.jpg', 1);
loadImage('images/cat2.jpg', 2);
loadImage('images/cat3.jpg', 3);

function loadImage(imageUrl, index) {
    var originalImageCanvas = document.getElementById('originalImage' + index);
    var transformedImageCanvas = document.getElementById('transformedImage' + index);

    var originalImageCtx = originalImageCanvas.getContext('2d');
    var transformedImageCtx = transformedImageCanvas.getContext('2d');

    var imageObj = new Image();
    imageObj.src = imageUrl;
    imageObj.onload = onLoadImage.bind(null, imageObj, originalImageCtx, transformedImageCtx);
}

function onLoadImage(imageObj, originalImageCtx, transformedImageCtx) {
    renderImage(imageObj, originalImageCtx);
    renderWhitePatch(originalImageCtx, transformedImageCtx);
}

function renderImage(imageObj, originalImageCtx) {
    originalImageCtx.drawImage(imageObj, 0, 0, imageObj.width, imageObj.height, 0, 0, width, height);
}

function renderWhitePatch(originalImageCtx, transformedImageCtx) {
    var imageData = originalImageCtx.getImageData(0, 0, width, height);
    var data = imageData.data;

    var maxR = 0;
    var maxG = 0;
    var maxB = 0;

    for (var i = 0; i < data.length; i += 4) {
        maxR = Math.max(maxR, data[i]);
        maxG = Math.max(maxG, data[i + 1]);
        maxB = Math.max(maxB, data[i + 2]);
    }

    for (var i = 0; i < data.length; i += 4) {
        data[i] = data[i] * 255 / maxR;
        data[i + 1] = data[i + 1] * 255 / maxG;
        data[i + 2] = data[i + 2] * 255 / maxB;
    }

    transformedImageCtx.putImageData(imageData, 0, 0);
}
