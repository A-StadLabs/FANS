(function(document) {
  'use strict';

  document.addEventListener('polymer-ready', function() {
    // Perform some behaviour
    console.log('Polymer is ready to rock!');
  });

  document.addEventListener('route', function(e, detail, sender) {
    // Perform some behaviour
    console.log('route', e.detail.route);
    router.go(e.detail.route);
  });


// wrap document so it plays nice with other libraries
// http://www.polymer-project.org/platform/shadow-dom.html#wrappers
})(wrap(document));
