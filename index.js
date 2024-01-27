function generateUnique(max, min, used){
  let randomNumber;
  do{
     randomNumber = Math.floor(Math.random()* (max-min+1)) + min;
    }

  while (used.includes(randomNumber));
  used.push(randomNumber);
  return randomNumber;

}

  // UPPER BUTTON
  const upperButton = [];

    $(".upperButton").each( function(){
      const randomNumber = generateUnique(10,1, upperButton);
      $(this).text(randomNumber);
    });

  // LOWER BUTTON

const lowerButton = [];
$(".lowerButton").each(function(){
  const randomNumber = generateUnique(10,1,lowerButton);
  $(this).text(randomNumber);
});



// COVERING UP THE BUTTONS

setTimeout(() => {
  $("button").addClass("dark");
}, 1000);

// CHANGING THE CSS PROPERTIES OF HEADINGS
setTimeout(() => {
  $(".instruction").text("LET THE GAME BEGINS!");
  $(".title").hide();
}, 2000);

// FUNCTUON TO COMPARE THE BUTTON CLICKS 

firstClickValue = null;
$("button").on("click", function(){
  var butSound = new Audio('sounds/note.mp3');
  butSound.play();
  const exact = $(this);
  const clickValue = $(this).text();

  if (firstClickValue === null){
     
     firstClickValue = exact;
     firstClickValue.removeClass("dark");
   }

  else {

    if ( clickValue === firstClickValue.text()){
      // alert("same button");
      exact.removeClass("dark");
      firstClickValue.removeClass("dark");
    }
  
    else{
      // alert("not the same value as previous");
      firstClickValue.addClass("dark");
      }

    firstClickValue = null;
  } 
 
  setTimeout(() => {
    let but = $("button");

  if (!but.hasClass("dark")){
  // alert("CONGRATULATIONS, YOU HAVE COMPLETED THE GAME ");
  var win = new Audio('sounds/crash.mp3');
   win.play();
   $(".instruction").text("CONGRATS, YOU HAVE COMPLETED THE GAME");
  }
  }, 1000);

});






// let $firstButton = null;

// $("button").on("click", function () {
//   const $button = $(this);
//   const clickValue = $button.text();

//   if ($firstButton === null) {
//     // First button click
//     $firstButton = $button;
//     $firstButton.removeClass("dark");
//   } else {
//     // Second button click
//     if (clickValue === $firstButton.text()) {
//       // Same value, remove class from both buttons
//       $button.removeClass("dark");
//       $firstButton.removeClass("dark");
//     } else {
//       // Different value, add class back to the first button
//       $firstButton.addClass("dark");
//     }

//     // Reset for the next pair of clicks
//     $firstButton = null;
//   }
// });







