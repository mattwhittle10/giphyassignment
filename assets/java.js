//
var gifs = [];
console.log(gifs)
var tvShows;



function renderButtons() {
  $("#buttons").empty();
  for (var i = 0; i < gifs.length; i++){
    var a = $("<button>");
    a.addClass("addedGif");
    a.attr("data-person", gifs[i]);
    a.text(gifs[i]);
    //console.log(gifs[i]);
    $("#buttons").append(a);
  }
}

$("#add-gif").click(function(event) {
event.preventDefault();
var tvShowArray = $("#gif-input").val().trim();
gifs.push(tvShowArray);
renderButtons();
});
renderButtons();

$("body").on("click", ".addedGif", function() {
    tvShow = $(this).attr("data-person");
    console.log(tvShow);
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        tvShow + "&api_key=JNNrN9vGKOJ2ko1XaUFxMLuZy4M8qTrs&q=tvshows&limit=10&offset=0&rating=G&lang=en";

  $.ajax({
    url: queryURL,
    method: "GET"
  })
    .then(function(response) {
      var results = response.data;
      console.log(response);

      for (var i = 0; i < results.length; i++) {
        var newDiv = $("<div>");
        var rating = results[i].rating;
        var p = $("<p>").text("Rating: " + rating);
        var tvShowImage = $("<img>");
        tvShowImage.attr("src", results[i].images.fixed_height.url);
        newDiv.prepend(p);
        newDiv.prpend(tvShowImage);
        $("#gifs").prepend(newDiv);
        console.log(results);
      }  
  });
});





    
  