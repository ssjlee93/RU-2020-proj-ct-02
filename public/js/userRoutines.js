$(document).ready(function(){
    $('.modal').modal();

    $.get( "/api/pr", function( data ) {
        let routines = data.routines; 
        let length = routines.length;
        console.log(routines);
       
        for (var i = 0; i < length; i++) {
            let newRow = $("<tr>"); 
            console.log(routines[i].id);
            newRow.attr("data", routines[i].id);
            console.log(newRow.data());
            let values = Object.values(routines[i]);
            for (var j = 0; j < 9; j++) {
            let column = $("<td>").text(values[j]);
            newRow.append(column);
            }
           let btns = $("<td class='center-align'>").html("<button id='editBtn' class='waves-effect waves-light btn'>Edit</button><button id='deleteBtn' class='waves-effect waves-light btn'>Delete</button>");
           newRow.append(btns);
        //   name, sets, exercise1, rep1, exercise2, rep2, exercise3, rep3);
            $("#prTable").append(newRow);
        }

      });

    // make sure these are classes instead of ids
    $(".editRoutine").on("click", function(event) {
        event.preventDefault();
        let eleme = $(this).parent().data();
    });

     // make sure these are classes instead of ids
    $(".deleteRoutine").on("click", function(event) {
        event.preventDefault();
        let eleme = $(this).parent().data();
    });

    // update, delete 
        // update = recreate post with id of the item 
        // jqeury data -> dynamically GENERATED 
        // it's not generated -> READ fro mthe server -> Grabbing ID from the server 
    // dry code 
    // ?? join table - continue?
    // presentation 

});