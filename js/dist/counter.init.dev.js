"use strict";

// ----- COUNTER ----- //
$('.counter-value').each(function () {
  var $this = $(this),
      countTo = $this.attr('data-count');
  $({
    countNum: $this.text()
  }).animate({
    countNum: countTo
  }, {
    duration: 2000,
    easing: 'swing',
    step: function step() {
      $this.text(Math.floor(this.countNum));
    },
    complete: function complete() {
      $this.text(this.countNum); //alert('finished');
    }
  });
});