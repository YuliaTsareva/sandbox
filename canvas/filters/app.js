'use strict';

(function () {
  window.FiltersApp = {
    filter: {
      contrast: 0,
      brightness: 0,
      isGrayscale: false,
      enabled: true
    }
  };

  $(function () {
    $('#grayscaleChckBox').click(function () {
      FiltersApp.filter.isGrayscale = !FiltersApp.filter.isGrayscale;
      FiltersApp.renderImage();
    });

    var contrastSlider = $("#contrastSlider").ionRangeSlider(
      {
        min: -100,
        max: 100,
        from: 0,
        onChange: function (data) {
          FiltersApp.filter.contrast = data.from;
          FiltersApp.renderImage();
        }
      }
    );

    var brightnessSlider = $("#brightnessSlider").ionRangeSlider(
      {
        type: 'single',
        min: -100,
        max: 100,
        from: 0,
        onChange: function (data) {
          FiltersApp.filter.brightness = data.from;
          FiltersApp.renderImage();
        }
      }
    );

    $('#resetBtn').click(function () {
      $('#grayscaleChckBox').prop('checked', false);
      contrastSlider.data('ionRangeSlider').update({from: 0});
      brightnessSlider.data('ionRangeSlider').update({from: 0});

      FiltersApp.filter.contrast = 0;
      FiltersApp.filter.brightness = 0;
      FiltersApp.filter.isGrayscale = false;

      FiltersApp.renderImage();
    });

    $('#canvas')
      .mousedown(function () {
        FiltersApp.filter.enabled = false;
        FiltersApp.renderImage();
      }).mouseup(function () {
        FiltersApp.filter.enabled = true;
        FiltersApp.renderImage();
      });
  });
}());
