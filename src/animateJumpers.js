import ScrollMagic from 'scrollmagic/scrollmagic/minified/ScrollMagic.min';

function runScene() {
  const controller = new ScrollMagic.Controller();

  new ScrollMagic.Scene({
    offset: '500%',  // start this scene after scrolling for 50%
  })
  .setPin("#jumpers", {pushfollowers: false})
  .addTo(controller);
  
  // When #jumpers reach the #deliciousFood apply css animation class
  new ScrollMagic.Scene({
    triggerElement: '#deliciousFood',
    triggerHook: 0.39
  })
  .setClassToggle('#jumpers', 'faded')
  .addTo(controller);
  
  // If user scrolls past the #deliciousFood apply hidden class
  // b/c if they are scrolling to fast the animation wont be done and 
  // everything will look like shite.
  new ScrollMagic.Scene({
    triggerElement: '#deliciousFood',
    triggerHook: 0.26
  })
  .setClassToggle('#jumpers', 'hidden')
  .addTo(controller);
}

export default () => {
  document.addEventListener("DOMContentLoaded", () => runScene() );
}
