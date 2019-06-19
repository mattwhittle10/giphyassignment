var gifs = [];
console.log(gifs)

function displayGifInfo() {

    var person = $(this).attr("data-person");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        person + "&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=10"
    
    $.ajax({
      url: queryURL,
      method: "GET"
    })
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

$("#buttons").click(function(){
  var person = $(this).attr("data-person");
      var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        person + "&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=10";

  $.ajax({
    url: queryURL,
    method: "GET"
  })
  //unwrap the object
    .then(function(response) {
      //results is an array so we have to have a for loop
      var results = response.data;
      console.log(results);

      for (var i = 0; i < results.length; i++) {
        var newDiv = $("<div>");
        var rating = results [i].rating;
        var p = $("<p>").text("Rating: " + rating);
        var personImage = $("<img>");
        personImage.attr("src", results[i].images.fixed_height.url);
        newDiv.prepend(p);
        newDiv.prepend(personImage);
        $("#gifs").prepend(newDiv);
      }    
});
});




    
  