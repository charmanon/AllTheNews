
// Grab the articles as a json
$.getJSON("/articles", function(data) {
  
  // For each one
  var hbsObject = {article: data};
  res.render("index", hbsObject);

  for (var i = 0; i < data.length; i++) {
    // Display the apropos information on the page
    $("#articles").append("<p data-id='" + data[i]._id + "'>" + data[i].title + "<br />" + data[i].link + "</p>");
  }
});

$(document).on("click", "#scrape-button", function() {
  $('.modal').modal();

  $.ajax({
    method: "GET",
    url: "/scrape/"
  }).done(function(){
      $('#modal1').modal('open');
      setTimeout(function(){
          window.location = '/';
      }, 2000);   
  });
});


// $(document).on("click", "#save-article", function(){
//   var thisId = $(this).attr("data-id");
//   $.ajax({
//     method: "GET",
//     url: "/" + thisId
//   })
//     // With that done, add the note information to the page
//     .done(function(data) {
//       console.log(data);
      
//       }
//     });
// });

// Whenever someone clicks a p tag
$(document).on("click", "#add-note", function() {
  // Empty the notes from the note section
  $('.modal').modal();

  // Save the id from the p tag
  var thisId = $(this).attr("data-id");

  // Now make an ajax call for the Article
  $.ajax({
    method: "GET",
    url: "/savedarticles/" + thisId
  })
    // With that done, add the note information to the page
    .done(function(data) {
      $('#notes').modal('open');
      console.log(data);
      // The title of the article
      // $("#note").append("<h5>" + data.title + "</h5>");
      // An input to enter a new title
      // A button to submit a new note, with the id of the article saved to it
      $("#note-title").text(data.title);
      $("#savenote").attr("data-id", data._id);

      // If there's a note in the article
      if (data.note) {
        // Place the title of the note in the title input
        $("#titleinput").val(data.note.title);
        // Place the body of the note in the body textarea
        $("#bodyinput").val(data.note.body);
      }
    });
});

$('#textarea1').val(' ');
$('#textarea1').trigger('autoresize');


// When you click the savenote button
$(document).on("click", "#savenote", function() {
  // Grab the id associated with the article from the submit button
  var thisId = $(this).attr("data-id");

  // Run a POST request to change the note, using what's entered in the inputs
  $.ajax({
    method: "POST",
    url: "/savedarticles/" + thisId,
    data: {
      // Value taken from title input
      title: $("#titleinput").val(),
      // Value taken from note textarea
      body: $("#bodyinput").val()
    }
  })
    // With that done
    .done(function(data) {
      // Log the response
      console.log(data);
      // Empty the notes section
      $('#notes').modal('close');
    });

  // Also, remove the values entered in the input and textarea for note entry
  $("#titleinput").val("");
  $("#bodyinput").val("");
});
