var gifs = [];
console.log(gifs)

function displayGifInfo() {

    var person = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
      person + "&api_key=JNNrN9vGKOJ2ko1XaUFxMLuZy4M8qTrs";
    
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      //create a new div to hold the gif
      var newDiv = $("<div>")
      .addClass = $("addedGif")
      //retrieve the rating information
      $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response){
        console.log(response.Rated);
        var pOne = $("<p>").text("Rating: " + response.Rated);
      })
    });
}

function renderButtons() {
  $("#buttons").empty();
  for (var i = 0; i < gifs.length; i++){
    var a = $("<button>");
    a.addClass("addedGif");
    a.attr("data-name", gifs[i]);
    a.text(gifs[i]);
    $("#buttons").append(a);
  }
}

$("#add-gif").click(function(event) {
event.preventDefault();
var person = $("#gif-input").val().trim();
gifs.push(person);
renderButtons();
});

$(document).click(".addedGif", displayGifInfo);
renderButtons();


    
  