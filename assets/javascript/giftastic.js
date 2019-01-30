// PSEUDOCODING:

// Using the GIPHY API, create a dynamic web page that populates with gifs each related to a topic of interest with these parameters:

// q (query)
// limit (10)
// rating (G or PG)

// Create an AJAX call to the GIPHY API for the specific topic button being clicked:

// The app takes the topics in this array and creates buttons in the HTML.

// When the user clicks a button, the page should grab 10 static, non-animated gif images from the GIPHY API and place them on the page:

// When the user clicks one of the still GIPHY images, the gif should animate.

// When the user clicks the gif again, it should stop playing.

// Under every gif, display its rating (PG, G).

// This data is provided by the GIPHY API.
// !!!! Only once images are displaying with button presses, then move to the next step.

// Add a form to the page that takes the value from a user input box and adds it into the topics array. Then create a function call that takes each topic in the array and renders the buttons on the page.



// BEGIN CODING HERE:

// Creates an array of superheroes:
var superheroes = ["Superman", "Wonder Woman", "Batman", "Aquaman", "Green Lantern", "The Flash", "Iron Man", "Thor", "Captain America", "Dr. Strange", "The Hulk", "Spiderman", "Wolverine", "X-Men", "Deadpool", "Fantastic Four", "Guardians of the Galaxy"];

// Creates a function to create gifs for each superhero:
function displaySuperheroGifs() {

    // handles events:
    var superhero = $(this).attr("data-name");

    // sets query to giphy's api:
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + superhero + "&limit=10&rating=g&rating=pg&api_key=6XGYTHgYrJJWFYwVAXX2TAM5LFzeuyvw";

    // Creates an AJAX call for the specific superhero button being clicked:
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        var data = response.data;
        console.log(data);
        for (var i = 0; i < data.length; i++) {
            var gif = response.data[i];

            // Creates a div to hold the gif:
            var superheroDiv = $("<div class='superhero'>");

            // Stores the rating data:
            var rating = data[i].rating;
            console.log(rating)

            // Creates an element to have the rating displayed:
            var p = $("<p>").text("Rating: " + rating);

            // Displays the rating:
            superheroDiv.append(p);

            // var div = $("<div class='col-12 col-md-6'>").append(p, image);

            // Retrieves the URL for the image:
            var imgURL = response.data.image_original_url;

            // Creates an element to hold the image:
            var image = $("<img>");
            image.attr("src", data[i].images.fixed_width_still.url);
            image.attr("data-still", data[i].images.fixed_width_still.url);
            image.attr("data-animate", data[i].images.fixed_width.url);
            image.attr("data-state", "still");
            image.attr("class", "gifs");
            superheroDiv.append(image)

            // Calls renderButtons which handles the processing of our superhero array:
            $("#superheroes-view").append(superheroDiv)
        }
    });
}

// Creates a button for each superhero:
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

// This function handles events where a superhero button is clicked:
$("#add-superhero").on("click", function (event) {
    // event.preventDefault() prevents the form from trying to refresh or submit itself.
    // We're using a form so that the user can hit enter instead of clicking the button if they want:
    event.preventDefault();
    // This line grabs the input from the textbox:
    var superhero = $("#superhero-input").val().trim();

    // Adds superhero from the textbox to our array:
    superheroes.push(superhero);

    // Calls renderButtons which handles the processing of our superhero array:
    renderButtons();
});

// This function handles events where a movie button is clicked
$(document).on("click", ".superhero-btn", displaySuperheroGifs);

$(document).on("click", ".gifs", function () {
    //     var $this = $(this);

    // Make a variable named state and then store the image's data-state into it.
    // Use the .attr() method for this.
    var state = $(this).attr("data-state");

    // Check if the variable state is equal to 'still',
    if (state === "still") {

        // then update the src attribute of this image to its data-animate value:
        $(this).attr("src", $(this).attr("data-animate"));

        // then update the data-state attribute to "animate":
        $(this).attr("data-state", "animate");

        // If state is equal to 'animate':
    } else if (state === "animate") {

        // then update the src attribute of this image to its data-still value:
        $(this).attr("src", $(this).attr("data-still"));

        // and update the data-state attribute to "still":
        $(this).attr("data-state", "still");
    }
})