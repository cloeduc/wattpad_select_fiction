// ==UserScript==
// @name         Enable WattPad Selection on Desktop Application
// @namespace    http://cestdoncvrai.fr/
// @version      0.1
// @author       Alinoee
// @match        https://www.wattpad.com/*
// @grant        none
// ==/UserScript==

// @require http://code.jquery.com/jquery-2.1.4.min.js

$(document).ready(function () {
  $('body').bind('DOMNodeInserted DOMNodeRemoved', function (event) {
    $('.panel-reading').each(function () {
      $(this).css('-webkit-user-select', 'text');
      $(this).css('-moz-user-select', 'text');
      $(this).css('-ms-user-select', 'text');
      $(this).css('-k-html-user-select', 'text');
      $(this).css('user-select', 'text');
    });
  });
  var listenWord = '';
  var desired_word = '42108111118108121';
  $(document).keypress(function (e) {
    var stringtoadd = '' + e.which;
    listenWord += stringtoadd;
    if (listenWord == desired_word) {
      $('.panel-reading').each(function () {
        $(this).css('background-color', 'blue');
      });
      $('.panel.panel-reading pre').each(function () {
        $(this).css('color', 'red');
      });
    }
  });
})
