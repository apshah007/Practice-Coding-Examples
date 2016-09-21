//  1.)  Make sure you have a reference to jQuery from a CDN in the index.html file.

//  2.)  Use a jQuery to hide all of the answers to all the questions.
//$('.answer')

/*  3.)  Write code to show the answer when hovering over a flash card, and hide it when the mouse leaves.
    Find the approriate event on the jQuery API page to trigger an action on hover https://api.jquery.com/category/events/
    Hint: You can use "this" inside your jQuery function to reference a selected DOM node.  */
//$('.flash-card')

/*  4.) Use jQuery to find the button element on the page and have it toggle all of the answers on and off when clicked.
    Hint: jQuery has a toggle function that can toggle the visibility of a selected DOM node.
    Bonus:  Change the text of the button using jQuery when you toggle the answers on/off. */
//$()

alert ("is this working?");
var cheating = false;
$('.cheat-button').click()
  function(){
    cheating = !cheating;
    if (cheating){
      $('.answer').show();
      $(this).text('Hide all the answers');
   }
else{
  $('.answer').hide();
  $(this).text('Show all answers');
}
}
alert("is the flashcard working?");
$('flash-card').hover(
function(){                             // handler in
 $(this).children('.answer').show()
},
function(){                             // handler out
 $(this).children(.'answer').hide();
}
);

/*
$('flash-card').hover(
function(){
$(this).children('.answer').toggle();
);
*/
