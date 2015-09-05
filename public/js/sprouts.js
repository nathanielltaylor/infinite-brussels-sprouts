// YOUR CODE GOES HERE
var currentPage = 2


$('.more-sprouts').on("click", function (event) {
 event.preventDefault();
 $.get("/tweets.json?page=" + currentPage, function(data) {
   currentPage++;
   data.forEach(function(tweet) {
$(".tweets").append("<li class='tweet'><div class='body'>" + tweet.text + "</div><div class='user'>" + tweet.username + "</li>");
   });
 });
});


$(window).scroll(function() {
    if (  document.documentElement.clientHeight +
          $(document).scrollTop() >= document.body.offsetHeight )
    {   $.get("/tweets.json?page=" + currentPage, function(data) {
      currentPage++;
      data.forEach(function(tweet) {
   $(".tweets").append("<li class='tweet'><div class='body'>" + tweet.text + "</div><div class='user'>" + tweet.username + "</li>");
      });
    });
        // alert("No one needs this many Brussels Sprout tweets.");
    }
});
