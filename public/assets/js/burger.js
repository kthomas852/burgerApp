//Click events for the handlebars pages
$(function(){
//Creates new burger
$('#submission').on('click', function(event){
    event.preventDefault();

    let newBurger = {
        bName: $('#newBurger').val().trim(),
        eaten: 0
    }

    $.ajax("api/burger", {
        type: "POST",
        data: newBurger
    }).then(
        function() {
            console.log("created new Burger");
            // Reload the page to get the updated list
            location.reload();
          }
    );
});

//Deletes Burger upon button press for 'this'
$('.delete-burger').on('click', function(event){
    let id = $(this).data("id");
    console.log(this);
    console.log(id);
    $.ajax("api/burger/" + id, {
        type: "DELETE"
    }).then(
        function(){
            console.log("This burger"+ id +"has been deleted");
            location.reload();
        });
});

$(".change-state").on("click", function(event) {
    var id = $(this).data("id");

    var newState = {
      eaten: 1
    };

    // Send the PUT request.
    $.ajax("/api/burger/" + id, {
      type: "PUT",
      data: newState
    }).then(
      function() {
        console.log("changed");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});