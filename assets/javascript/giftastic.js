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

// Add a form to the page that takes the value from a user input box and adds it into the topics array.

// Then create a function call that takes each topic in the array and renders the buttons on the page.



// BEGIN CODING HERE:

// This creates an array of superheroes:
var superheroes = ["Superman", "Wonder Woman", "Batman", "Aquaman", "Green Lantern", "The Flash", "Iron Man", "Thor", "Captain America", "Dr. Strange", "The Hulk", "Spiderman", "Wolverine", "X-Men", "Deadpool"];

// This creates a function to create gifs for each superhero:
function displaySuperheroGifs() {

    // This handles events:
    var superhero = $(this).attr("data-name");

    // This creates a query to giphy.com's api:
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + superhero + "&limit=12&rating=g&rating=pg&api_key=6XGYTHgYrJJWFYwVAXX2TAM5LFzeuyvw";

    // This creates an AJAX call for the specific superhero button being clicked:
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {

        // This creates a variable called "data" for the response data from the ajax call:
        var data = response.data;
        console.log(data);

        // This loops through the data array from the ajax call:
        for (var i = 0; i < data.length; i++) {

            // This creates a variable called "gif" for the response data from the ajax call: 
            var gif = response.data[i];

            // This creates a div to hold the gif and sets the column class:
            var superheroDiv = $("<div class='col-12 col-md-4'>");

            // This stores the rating data:
            var rating = data[i].rating;
            console.log(rating)

            // This creates an element to have the rating displayed:
            var p = $("<p>").text("Rating: " + rating);

            // This displays the rating:
            superheroDiv.append(p);

            // This retrieves the URL for the image:
            var imgURL = response.data.image_original_url;

            // This creates an element to hold the image:
            var image = $("<img>");

            // This maps the image's src path:
            image.attr("src", data[i].images.fixed_width_still.url);

            // This maps the image's data-still path:
            image.attr("data-still", data[i].images.fixed_width_still.url);

            // This maps the image's data-animate path:
            image.attr("data-animate", data[i].images.fixed_width.url);

            // This sets the image's data-state as "still":
            image.attr("data-state", "still");

            // This sets the image's class as "gifs":
            image.attr("class", "gifs");

            // This adds the image to the bottom of the superheroDiv:
            superheroDiv.append(image)

            // This calls superheroes-view which handles the processing of our superhero array:
            $("#superheroes-view").append(superheroDiv)
        }
    });
}

// This creates a button for each superhero:
function renderButtons() {

    // This deletes any existing superheroes prior to adding new superheroes to avoid duplicate buttons:
    $("#buttons-view").empty();

    // This loops through the superheroes array:
    for (var i = 0; i < superheroes.length; i++) {
        
        // Then it dynamically generates buttons for each superhero in the array.

        // This creates the button's beginning and end tag (<button></button>):
        var a = $("<button>");

        // This adds the class of superhero-btn to the superhero button:
        a.addClass("superhero-btn");

        // This adds a data-attribute:
        a.attr("data-name", superheroes[i]);

        // This provides the initial button text:
        a.text(superheroes[i]);

        // This adds the button to the bottom of the buttons-view div:
        $("#buttons-view").append(a);
    }
}

// This executes the renderButtons function which handles the processing of the superherooes array:
renderButtons();

// This function handles events where a superhero button is clicked:
$("#add-superhero").on("click", function (event) {

    // event.preventDefault() prevents the form from trying to refresh or submit itself.
    // Here we're using a form so that the user can press "Enter" instead of clicking the "Add Superhero" button if they want:
    event.preventDefault();

    // This line takes the input from the textbox:
    var superhero = $("#superhero-input").val().trim();

    // This adds superhero from the textbox to our array:
    superheroes.push(superhero);

    // This executes the renderButtons function which handles the processing of the superherooes array:
    renderButtons();
});

// This on-click function handles events where a superhero button is clicked:
$(document).on("click", ".superhero-btn", displaySuperheroGifs);

// This on-click function handles events where a superhero gif is clicked:
$(document).on("click", ".gifs", function () {
    //     var $this = $(this);

    // This creates a variable called "state" and then stores the image's data-state into it and then uses the .attr() method for "this."
    var state = $(this).attr("data-state");

    // This checks if the variable "state" is equal to "still":
    if (state === "still") {

        // Then it updates the src attribute of this image to its data-animate value:
        $(this).attr("src", $(this).attr("data-animate"));

        // This updates the data-state attribute to "animate":
        $(this).attr("data-state", "animate");

        // If state is equal to "animate":
    } else if (state === "animate") {

        // Then it updates the src attribute of this image to its data-still value:
        $(this).attr("src", $(this).attr("data-still"));

        // This updates the data-state attribute to "still":
        $(this).attr("data-state", "still");
    }
})