$(document).ready(function() {
  const height = parseInt(prompt("How tall are you in inches?"));

  if (height =< 54) {
    $('#too-short').show();
  } else if (age >54 and age <72) {
    $('#medium').show();
  } else {
    $('too-tall').show();
  }
});