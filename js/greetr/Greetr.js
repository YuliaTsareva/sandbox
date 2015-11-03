'use strict';

(function (global, $) {

  var Greetr = function (firstName, lastName, language) {
    return new Greetr.init(firstName, lastName, language);
  };

  var supportedLangs = ['en', 'es'];

  var greetings = {
    en: 'Hello',
    es: 'Hola'
  };

  var formalGreetings = {
    en: 'Greetings',
    es: 'Saludos'
  };

  var logMessages = {
    en: 'Logged in',
    es: 'Inició sesión'
  };

  Greetr.prototype = {
    fullName: function () {
      return this.firstName + ' ' + this.lastName;
    },

    validate: function () {
      if (supportedLangs.indexOf(this.language) === -1) {
        throw 'Invalid language';
      }
    },

    informalGreeting: function () {
      return greetings[this.language] + ' ' + this.firstName + '!';
    },

    formalGreeting: function () {
      return formalGreetings[this.language] + ' ' + this.fullName();
    },

    greetings: function (formal) {
      if (formal) {
        return this.formalGreeting();
      } else {
        return this.informalGreeting();
      }
    },

    greet: function (formal) {
      var msg = this.greetings(formal);

      if (console) {
        console.log(msg);
      }

      return this;
    },

    log: function () {
      if (console) {
        console.log(logMessages[this.language] + ': ' + this.fullName());
      }

      return this;
    },

    setLang: function (language) {
      this.language = language;
      this.validate();
      return this;
    },

    greetHTML: function (selector, formal) {
      if (!$) {
        throw 'jQuery not loaded';
      }

      if (!selector) {
        throw 'Missing jQuery selector';
      }

      var msg = this.greetings(formal);
      $(selector).html(msg);

      return this;
    }
  };

  Greetr.init = function (firstName, lastName, language) {
    this.firstName = firstName || '';
    this.lastName = lastName || '';
    this.language = language || 'en';

    this.validate();
  };

  Greetr.init.prototype = Greetr.prototype;

  global.Greetr = global.G$ = Greetr;
}(window, jQuery));
