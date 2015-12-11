// ==UserScript==
// @name         Enable WattPad Selection on Desktop Application
// @namespace    http://cestdoncvrai.fr/
// @version      0.1
// @author       Alinoee
// @match        https://www.wattpad.com/*
// @grant        none
// ==/UserScript==

var bw_is_fiction_page = false;
var bw_ignore_event = false;
var select_fiction_init = function init(m, ob) {
  m.forEach(function (mutation) {
      bw_listen_mutation = bw_is_listened_mutation(mutation);
        bw_is_fiction_page = bw_hasClass(document.getElementsByTagName('body')[0], 'route-storyReading');
  });
  if (bw_listen_mutation && bw_is_fiction_page) {
      var elements = document.getElementsByClassName('panel-reading');
      for (var i = 0; i < elements.length; i++) {
        elements[i].style.MozUserSelect = 'text';
        elements[i].style.WebkitUserSelect = 'text';
        elements[i].style.MsUserSelect = 'text';
      }
  }
};

/*
 Launch observer
*/
new MutationObserver(select_fiction_init).observe(document.body, {
  attributes: true,
  childList:true,
  attributeFilter: [
    'class'
  ]
});
/* UTILS FUNCTIONS */

function bw_is_listened_mutation(m) {
  var listen_element_mutation = "HTML BODY";
  if(m.target.className.indexOf("advertisement skyscraper") > -1)
    return true
  if(listen_element_mutation.indexOf(m.target.nodeName) > -1)
    return true;
  return false;
}
function bw_hasClass(element, cls) {
  return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > - 1;
}
