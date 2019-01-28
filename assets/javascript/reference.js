// FROM REFERENCE:
//         // Dynamically creates a button for each superhero in the array:
//         var a = $("<button>");
//         // Adds a class of superhero-btn to the button:
//         a.addClass("superhero-btn");
//         // Adds a data-attribute:
//         a.attr("data-name", superheroes[i]);
//         // Provides the initial button text:
//         a.text(superheroes[i]);
//         // Adds the button to the superheroes-view div:
//         $("#buttons-view").append(a);
//     }
// }


// // This function re-renders the HTML to display the gifs:
// function displaySuperheroGifs() {

//     var superhero = $(this).attr("data-name");

//     // In the query URL, this switches the protocol from http to https.
//     var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + superhero + "&limit=10&rating=g&api_key=6XGYTHgYrJJWFYwVAXX2TAM5LFzeuyvw";

//     // Creates an AJAX call to the GIPHY API for the specific superhero button being clicked:

//     $.ajax({
//         url: queryURL,
//         method: "GET"
//     }).then(function (response) {
//         console.log(response);

//         // Saves results as a variable:
//         var results = response;

//         // Creates a generic div to hold the results:
//         var supeheroDiv = $("<div class='superhero'>");


//     })
// }

// // Creates a button for each superhero:
// function renderButtons() {

//     // Deletes any existing superheroes prior to adding new superheroes to avoid duplicate buttons:
//     $("#buttons-view").empty();

//     // Loops through the superheroes array:
//     for (var i = 0; i < superheroes.length; i++) {
//         // Dynamically creates a button for each superhero in the array:
//         var a = $("<button>");
//         // Adds a class of superhero-btn to the button:
//         a.addClass("superhero-btn");
//         // Adds a data-attribute:
//         a.attr("data-name", superheroes[i]);
//         // Provides the initial button text:
//         a.text(superheroes[i]);
//         // Adds the button to the superheroes-view div:
//         $("#buttons-view").append(a);
//     }
// }

// // This function handles events where a superhero button is clicked:
// $("#addSuperhero").on("click", function (event) {

//     // Temporarily prevents the button's default functioning:
//     event.preventDefault();

//     // Grabs the user's input from the textbox:
//     var superhero = $("#superhero-input").val().trim();

//     // Adds the movie from the textbox to our array:
//     superheroes.push(superhero);
//     console.log(superheroes);

//     // This function creates buttons for all the superheroes, including the user's input:
//     createButtons();

//     // Users can hit "Enter" instead of clicking Submit:
//     return false;
// })

// // This function re-renders the HTML to display the gifs:
// function displaySuperheroGifs() {

//     var superhero = $(this).attr("data-name");

//     // In the query URL, this switches the protocol from http to https.
//     var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + superhero + "&limit=10&rating=g&api_key=6XGYTHgYrJJWFYwVAXX2TAM5LFzeuyvw";

//     // Creates an AJAX call to the GIPHY API for the specific superhero button being clicked:

//     $.ajax({
//         url: queryURL,
//         method: "GET"
//     }).then(function (response) {
//         console.log(response.data);

//         // Saves results as a variable:
//         var results = response.data;

//         // Loops through each superhero gif and adds these variables:
//         for (var i = 0; i < results.length; i++) {

//             // Creates a generic div to hold the results:
//             var gifDiv = $("<div class=gifs>");

//             var superheroGif = $("<img>");

//             superheroGif.attr("src", results[i].images.fixed_height_still.url);

//             // Displays the gif rating when hovering:
//             superheroGif.attr("title", "Rating: " + results[i].rating);
//             superheroGif.attr("data-still", results[i].images.fixed_height_still.url);
//             superheroGif.attr("data-state", "still");
//             superheroGif.addClass("gif");
//             superheroGif.attr("data-animate", results[i].images.fixed_height.url);
//             // var rating = results[i].rating;
//             // var p = $("<p>"").text("Rating: " + rating);
//             gifDiv.append(superheroGif)
//             // gifDiv.append(p)
//             $("#superheroes-view").prepend(gifDiv);
//         }
//     });
// }

// // Function to animate gifs:
// $(document).on("click", ".gif", function () {
//     var state = $(this).attr("data-state");
//     if (state === "still") {
//         $(this).attr("src", $(this).data("animate"));
//         $(this).attr("data-state", "animate");
//     } else {
//         $(this).attr("src", $(this).data("still"));
//         $(this).attr("data-state", "still");
//     };
// });

// // Function to display gifs:
// $(document).on("click", ".superhero", displaySuperheroGifs);

// // Initially calls the renderButtons function:
// renderButtons();