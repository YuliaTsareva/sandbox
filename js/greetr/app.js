$(function () {
  $('#login').on('click', function () {
    var loginGrtr = G$('Yulia', 'T.');

    var lang = $('#lang').val();
    loginGrtr.setLang(lang).greetHTML('#greeting', true).log();
  });
});
