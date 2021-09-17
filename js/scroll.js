$(document).ready(function() {

    // create controller
    var controller = new ScrollMagic.Controller();
  
    // pin headerimg scene
    var scene1 = new ScrollMagic.Scene({
        duration: 480
    })
    .setPin('#bill')
    .addTo(controller)
    //.addIndicators({name: "1 (duration: 480)"});

    //swipe "theater" section
    var controllerSwipe = new ScrollMagic.Controller({
        globalSceneOptions: {
            triggerHook: 'onLeave',
            duration: "70%"
        }
    });

    new ScrollMagic.Scene({
        triggerElement: '#panel'
    })
    .setPin('#movie', {pushFollowers: false})
    //.addIndicators() // add indicators (requires plugin)
    .addTo(controllerSwipe);

    //pin bill graphic
    var scene2 = new ScrollMagic.Scene({
        triggerElement: '#billGraphic',
        triggerHook: "onLeave",
        duration: "80%"
    })
    .setPin('#billGraphic')
    .addTo(controller)
    //.addIndicators({name: "2 (duration: 80%)"});

});