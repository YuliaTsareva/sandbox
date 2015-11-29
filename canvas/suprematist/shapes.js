'use strict';

(function() {
  window.App = {};

  window.App.initialWidth = 800;
  window.App.initialHeight = 1000;

  function Shape(points, color) {
    this.points = points;
    this.color = color;
  }

  Shape.prototype.draw = function(ctx, canvasWidth, canvasHeight) {
    ctx.fillStyle = this.color;

    ctx.beginPath();
    var x = this.getX(this.points[0], canvasWidth);
    var y = this.getY(this.points[1], canvasHeight);
    ctx.moveTo(x, y);

    var pointsCount = this.points.length / 2;
    for (var i = 1; i < pointsCount; i++) {
      x = this.getX(this.points[i * 2], canvasWidth);
      y = this.getY(this.points[i * 2 + 1], canvasHeight);
      ctx.lineTo(x, y);
    }
    ctx.closePath();
    ctx.fill();
  };

  Shape.prototype.getX = function(x, canvasWidth) {
    return Math.round(x * canvasWidth / window.App.initialWidth);
  };

  Shape.prototype.getY = function(y, canvasHeight) {
    return Math.round(y * canvasHeight / window.App.initialHeight);
  };

  window.App.shapes = [
    new Shape([742, 636, 742, 537, 81, 532, 81, 636], '#1B0F17'), //black 5
    new Shape([246, 680, 617.5, 104.5, 610.2, 99.8, 239.2, 675], '#C54023'), //red 6
    new Shape([289.2, 504.6, 456.7, 249.4, 691.1, 403.4, 525.1, 659.6], '#001568'), //blue
    new Shape([90.2, 457.2, 187.4, 504.6, 382.5, 101.7, 292.4, 56.7], '#007937'), //green
    new Shape([16.7, 350.6, 49.9, 372.7, 153.4, 218.6, 121.8, 198.9], '#1B1E1E'), //black 1
    new Shape([47, 424.3, 144.7, 261.3, 151.7, 265.7, 53.7, 428.7], '#EEA016'), //yellow 1
    new Shape([85.7, 836.3, 193.7, 667.7, 143, 636.3, 35.7, 804.3], '#D94A1E'), //red 1
    new Shape([156.3, 777, 191, 721.7, 167.7, 707, 133, 762.3], '#BE3515'), //red 2
    new Shape([203, 726.8, 249.5, 725.2, 251.5, 773.8, 204.5, 775], '#CB481B'), //red 3
    new Shape([39, 929.7, 117, 811.7, 131.3, 821.3, 55.3, 941.3], '#D55124'), //red 4
    new Shape([96.2, 901.8, 121.3, 863.2, 135.2, 871.8, 110.5, 911.2], '#DBAA06'), //yellow 2
    new Shape([160.5, 880.3, 176.3, 854.5, 204.3, 871.7, 189, 897.7], '#D7A700'), //yellow 3
    new Shape([88.8, 955.8, 156.2, 846.2, 169.8, 854.5, 102.5, 963.5], '#EC9700'), //yellow 4
    new Shape([636, 888, 735.3, 798, 685.7, 755.3, 602.7, 858.7], '#E1A5B4'), //pink
    new Shape([658.5, 740.8, 661.2, 756.5, 697.3, 748.7, 695.7, 734.2], '#D4A600'), //yellow 5
    new Shape([463.5, 933.5, 506.5, 858.2, 525.5, 868.8, 481.2, 944], '#E0AF00'), //yellow 6
    new Shape([602.7, 718.8, 605, 737.7, 703.5, 722.2, 701.5, 704.5], '#D2A400'), //yellow 7
    new Shape([258.5, 678, 280.5, 643.3, 291, 649.3, 267.7, 684], '#DAAB0A'), //yellow 8
    new Shape([266, 704.7, 284, 673.7, 298, 682.3, 280.7, 714.3], '#DAAB04'), //yellow 9
    new Shape([269, 36.3, 289, 46.3, 302, 19.7, 283, 10.7], '#2A2B2C'), //black 2
    new Shape([218.7, 61.3, 236.3, 71.7, 252.3, 41.7, 235.5, 31.3], '#232727'), //black 3
    new Shape([217, 136, 269, 41, 283.3, 48.3, 232.3, 144.7], '#212426'), //black 4
    new Shape([421.3, 989.7, 511, 830.7, 488.3, 817.3, 398.8, 977], '#C13917'), //red 5
    new Shape([525, 673.7, 768, 671.3, 768, 699, 525, 704.5], '#E69F00'), //yellow 10
    new Shape([576.5, 242.5, 671.5, 95.5, 648.5, 80.5, 554, 228], '#DBAC00'), //yellow 11
    new Shape([575, 262.8, 555.2, 250.5, 533.5, 284.8, 552.8, 297.5], '#D1A500'), //yellow 12
    new Shape([588.5, 286.5, 645.8, 193.2, 629, 182.5, 570.5, 275.5], '#D2A700'), //yellow 13
    new Shape([705.5, 212.5, 718.5, 191.5, 698, 178.2, 685.8, 199.2], '#D6AB00'), //yellow 14
    new Shape([693.2, 214, 661, 194.2, 639.2, 232.2, 670.2, 251.8], '#D5A900'), //yellow 15
    new Shape([668.2, 349.5, 703.2, 292.2, 623, 242.5, 589.2, 296], '#D3A700'), //yellow 16
    new Shape([471.7, 173.3, 484.3, 156, 461.7, 138.7, 448, 156], '#002777'), //blue 2
    new Shape([490.8, 146.3, 496.8, 137.3, 451.5, 104.3, 445, 113.7], '#002B7C'), //blue 3
    new Shape([504.5, 125.3, 512.5, 113.3, 486.7, 94.8, 479, 105.7], '#232424'), //black 6
    new Shape([505.5, 52.7, 489.2, 75.3, 528, 105, 545.2, 81.5], '#E48B00'), //yellow 17
    new Shape([538.2, 64.2, 546, 54, 537.2, 47, 528.8, 57.5], '#193079'), //blue 4
    new Shape([556.5, 34.5, 553.3, 32.2, 542, 47.7, 545.2, 50], '#0E357F'), //blue 5
    new Shape([550.8, 51.9, 560.7, 40, 558.7, 38.3, 548.8, 50.4], '#223179'), //blue 6
    new Shape([126.7, 188.7, 215, 41, 196.2, 30, 107.2, 176.8], '#1D1F20'), //black 7
    new Shape([206, 16.8, 187.5, 5, 100.8, 144, 120.4, 156.1], '#202223'), //black 8
    new Shape([192.5, 897.7, 127.2, 1002.5, 207.5, 1047, 269, 944.5], '#1C1C1E'), //black 9
    new Shape([401.7, 790.7, 371.7, 773.3, 234.2, 1002.5, 269, 1020.3], '#E29100'), //yellow 18
    new Shape([429.7, 832.3, 390.6, 809.9, 279.4, 1002.3, 321, 1022.3], '#1F1F1F'), //black 10
    new Shape([429.7, 871.2, 413.1, 861.4, 332.7, 1001.9, 348.8, 1011.5], '#EF9400'), //yellow 19
    new Shape([437.5, 906.1, 416.2, 892.9, 353.6, 1001.4, 376, 1014.8], '#DBAB00'), //yellow 20
  ];
}());
