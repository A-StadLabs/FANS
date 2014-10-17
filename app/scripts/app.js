(function(document) {
  'use strict';

  var elm = document.body; // or some selection of the element you want to disable

var catcher = function(evt) {
    if (evt.touches.length < 2)
        evt.preventDefault();
};

//elm.addEventListener('touchstart', catcher, true);

  document.addEventListener('polymer-ready', function() {
    // Perform some behaviour
    console.log('Polymer is ready to rock!');
  });



  var titlecat = "";


// wrap document so it plays nice with other libraries
// http://www.polymer-project.org/platform/shadow-dom.html#wrappers
})(wrap(document));
