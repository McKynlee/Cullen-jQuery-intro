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

  //This won't initially work because deleteBtn doesn't exist onReady
  // $('.deleteBtn').on('click', deleteMe);

  //So we have to find an element that does exist (from HTML)
  //This style ALWAYS works: Event Delegation/ Descendent selectors
  $(document).on('click', '.deleteBtn', deleteMe);
  console.log('DeleteBtn is:', $('.deleteBtn'));
}

function deleteMe() {
  let thisThing = $(this);
  console.log('delete me!', $('.harmonica-item'));
  // $('.harmonica-item').remove(this);
  console.log('What is this?', thisThing);

  //This actually only deletes the 'Delete Me' button
  // $(this).remove();
  //To remove entire list item element access its parent:
  $(this).parent().remove();
}

function whenIAddAHarmonica(event) {
  //use event parameter and the following line to fix <form> refresh
  // and allow the data to be rendered on DOM.
  event.preventDefault();

  //Stuff to do when we add a harmonica, triggered on click event above
  console.log('clicked the btn');

  //Grab form data that user inputs
  let brand = $('#brand').val();
  console.log('brand is', brand);

  //render form data on the DOM (append, usually)
  //1) need somewhere to put it, so creating <ul>
  $('#harmonicas').append(`
  <li class="harmonica-item">
    Brand is: ${brand}
    <button class="deleteBtn">Delete Me</button>
  </li>
  `);
}
