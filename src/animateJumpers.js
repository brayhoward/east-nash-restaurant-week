import ScrollMagic from 'scrollmagic/scrollmagic/minified/ScrollMagic.min';

function runScene() {
  const controller = new ScrollMagic.Controller();

  new ScrollMagic.Scene({
    triggerElement: '#jumpers',
    triggerHook: 0.30
  })
  .setPin("#jumpers", {pushfollowers: false})
  .addTo(controller);
  
  // When #jumpers reach the #deliciousFood apply css animation class
  new ScrollMagic.Scene({
    triggerElement: '#deliciousFood',
    triggerHook: 0.08
  })
  .setClassToggle('#jumpers', 'faded')
  .addTo(controller);
  
  // If user scrolls past the #deliciousFood apply hidden class
  // b/c if they are scrolling to fast the animation wont be done and 
  // everything will look like shite.
  new ScrollMagic.Scene({
    triggerElement: '#deliciousFood',
    triggerHook: 0.05
  })
  .setClassToggle('#jumpers', 'hidden')
  .addTo(controller);
}

export default () => {
  document.addEventListener("DOMContentLoaded", () => runScene() );
}
