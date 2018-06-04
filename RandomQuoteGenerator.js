$(document).ready(function() {

  $("#new-quote").click(function() {
    $("#new-quote").addClass("animated bounce");
    $("#new-quote").css("color", "blue");
    showQuotation();
    $(".well").addClass("animated shake");
  });
 
  var quoteBank = [
    "Learn from yesterday, live for today, hope for tomorrow. The important thing is not to stop questioning. -Albert Einstein",

    "Action is the foundational key to all success. -Pablo Picasso",

    "The Starting Point of all achievement is desire -Napoleon Hill",

    "A creative man is motivated by the desire to achieve, not by the desire to beat others. -Ayn Rand",
    "A wise man will make more opportunities than he finds.-Francis Bacon",
    "The present is theirs; the future, for which I really worked, is mine.-Nikola Tesla",
    " Pleasure in the job puts perfection in the work. -Aristole",
    "Nothing is too wonderful to be True, if it be consistent with the laws of nature. - Michael Faraday",
    "In questions of science, the authority of a thousand is not worth the humble reasoning of a single individual.-Galileo Galilei",
    "I didn't fail the test, I just found 100 ways to do it wrong. -Benjamin Franklin"
  ];

 

  function showQuotation() {
    var randomNumber = Math.floor((Math.random() * 10) + 1);
    console.log(randomNumber);
    $("#quote-here").text(quoteBank[randomNumber]);
  }

});
//end document ready
/*$("btn").onClick("animated fadeOut"); */

/*click(function(x = Math.floor((Math.random() * 10) + 1)))*/