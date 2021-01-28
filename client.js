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

  // set the text to something new:
  $('h1').text('Changing to say THIS!');

  // use as getter:
  const h1Text = $('h1').text();
  console.log('h1Text is', h1Text);

  //Change to capital letters and add something:
  const louderText = h1Text.toUpperCase() + '!!!!';
  $('h1').text(louderText);

  //handling a click event:
  //1) Call the item you want to be clicked to start correct function
  $('#submitButton').on('click', whenIAddAHarmonica);
  //NOTE: we are NOT calling the function() since we don't have ()
  //but we are starting that function
}

function whenIAddAHarmonica() {
  //Stuff to do when we add a harmonica, triggered on click event above
  console.log('clicked the btn');

  //Grab that data
}
