import ScrollMagic from 'scrollmagic/scrollmagic/minified/ScrollMagic.min';

function runScene() {
  const controller = new ScrollMagic.Controller();

  new ScrollMagic.Scene({
    // duration: '100%',    // the scene should last for a scroll distance of 100px
    offset: '500px',      // start this scene after scrolling for 50px
    // triggerHook: 0.2,
  })
  .setPin("#jumpers", {pushfollowers: false}) // pins the element for the the scene's duration
  .addTo(controller);
  
  new ScrollMagic.Scene({
    duration: 0,
    triggerElement: '#deliciousFood',
    triggerHook: 0.1
  })
  .setClassToggle('#jumpers', 'faded')
  .addTo(controller);
}

export default () => {
  document.addEventListener("DOMContentLoaded", () => runScene() );
}
