console.log('I haz js');

$(document).ready(onReady);

function onReady() {
  console.log('so ready');

  const h1 = $('h1');
  console.log('h1', h1);

  const li = $('Li');
  console.log('li', li);
  // make it blue
  li.css('background-color', 'teal');

  // $('h1').css('background-color', 'green');
  // OR:
  $('h1').addClass('froggy');
  // can .toggleClass to turn it off and on with clicks
}
