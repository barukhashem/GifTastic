// PSEUDOCODING:

// Using the GIPHY API, create a dynamic web page that populates with gifs each related to a topic of interest with these parameters:

// q (query)
// limit (10)
// rating (G or PG)

// Create an AJAX call to the GIPHY API for the specific topic button being clicked:

// The app takes the topics in this array and creates buttons in the HTML.

// When the user clicks a button, the page should grab 10 static, non-animated gif images from the GIPHY API and place them on the page:

// When the user clicks one of the still GIPHY images, the gif should animate.

// If the user clicks the gif again, it should stop playing.

// Under every gif, display its rating (PG, G).

// This data is provided by the GIPHY API.
// !!!! Only once images are displaying with button presses, then move to the next step.

// Add a form to the page that takes the value from a user input box and adds it into the topics array. Then create a function call that takes each topic in the array and renders the buttons on the page.



// BEGIN CODING HERE:

// Creates an array of superheroes:
var superheroes = ["Superman", "Wonder Woman"];

// // Creates a button for each superhero:
function renderButtons() {

    // Deletes any existing superheroes prior to adding new superheroes to avoid duplicate buttons:
    $("#buttons-view").empty();

    // Loops through the superheroes array:
    for (var i = 0; i < superheroes.length; i++) {
        // console.log(superheroes);
        // Then dynamicaly generating buttons for each superhero in the array
        // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
        var a = $("<button>");
        // Adding a class of superhero-btn to our button:
        a.addClass("superhero-btn");
        // Adding a data-attribute:
        a.attr("data-name", superheroes[i]);
        // Providing the initial button text:
        a.text(superheroes[i]);
        // Adding the button to the buttons-view div:
        $("#buttons-view").append(a);
    }
}
renderButtons();

// This function handles events where a movie button is clicked
$(".superhero-btn").on("click", function (event) {

    var superhero = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + superhero + "&limit=10&rating=g&rating=pg&api_key=6XGYTHgYrJJWFYwVAXX2TAM5LFzeuyvw";

    // Creating an AJAX call for the specific superhero button being clicked:
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        var data = response.data;
        console.log(data);
        for (var i = 0; i < data.length; i++) {
            var gif = data[i];

            // Creating a div to hold the gif:
            var superheroDiv = $("<div class='superhero'>");

            // Storing the rating data:
            var rating = data[i].rating;
            console.log(rating)
            // Creating an element to have the rating displayed:
            var pOne = $("<p>").text("Rating: " + rating);

            // Displaying the rating:
            superheroDiv.text(pOne);

            // Retrieving the URL for the image:
            var imgURL = response.data.image_original_url;

            // Creating an element to hold the image:
            var image = $("<img>");
            image.attr("src", gif.images.original_still.url);

            // Calling renderButtons which handles the processing of our superhero array:
            $("#superheroes-view").append(image)
        }
    });
});

// This function handles events where a movie button is clicked
$("#add-superhero").on("click", function (event) {
    event.preventDefault();
    // This line grabs the input from the textbox:
    var superhero = $("#superhero-input").val().trim();

    // Adding superhero from the textbox to our array:
    superheroes.push(superhero);

    // Calling renderButtons which handles the processing of our superhero array:
    renderButtons();
});

// COPIED FROM SOLVED:

    //       // Retrieving the URL for the image
    //       var imgURL = response.Poster;

    //       // Creating an element to hold the image
    //       var image = $("<img>").attr("src", imgURL);

    //       // Appending the image
    //       movieDiv.append(image);

    //       // Putting the entire movie above the previous movies
    //       $("#movies-view").prepend(movieDiv);
    //     });

    //   }

    //   // Function for displaying movie data
    //   function renderButtons() {

    //     // Deleting the movies prior to adding new movies
    //     // (this is necessary otherwise you will have repeat buttons)
    //     $("#buttons-view").empty();

    //     // Looping through the array of movies
    //     for (var i = 0; i < movies.length; i++) {

    //       // Then dynamicaly generating buttons for each movie in the array
    //       // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
    //       var a = $("<button>");
    //       // Adding a class of movie-btn to our button
    //       a.addClass("movie-btn");
    //       // Adding a data-attribute
    //       a.attr("data-name", movies[i]);
    //       // Providing the initial button text
    //       a.text(movies[i]);
    //       // Adding the button to the buttons-view div
    //       $("#buttons-view").append(a);
    //     }
    //   }

    //   // This function handles events where a movie button is clicked
    //   $("#add-movie").on("click", function(event) {
    //     event.preventDefault();
    //     // This line grabs the input from the textbox
    //     var movie = $("#movie-input").val().trim();

    //     // Adding movie from the textbox to our array
    //     movies.push(movie);

    //     // Calling renderButtons which handles the processing of our movie array
    //     renderButtons();
    //   });

    //   // Adding a click event listener to all elements with a class of "movie-btn"
    //   $(document).on("click", ".movie-btn", displayMovieInfo);

    //   // Calling the renderButtons function to display the intial buttons
    //   renderButtons();
    // </script>