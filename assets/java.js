var gifs = [];
console.log(gifs)

$("button").on("click", function() {
    var person = $(this).attr("data-person");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
      person + "&api_key=JNNrN9vGKOJ2ko1XaUFxMLuZy4M8qTrs";
      
    $.ajax({
      url: queryURL,
      method: "GET"
    })
  });