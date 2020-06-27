$(document).ready(function(){
    $('.modal').modal();

    $.get( "/api/pr", function( data ) {
        let routines = data.routines; 
        let length = routines.length;
        console.log(routines);
       
        for (var i = 0; i < length; i++) {
            let newRow = $("<tr>"); 
            newRow.data(routines[i].id);
            let id = $("<td>").text(routines[i].id);
            newRow.append(id);
           let name = $("<td>").text(routines[i].routineName);
            newRow.append(name);
           let sets =  $("<td>").text(routines[i].sets);
           newRow.append(sets);
           let exercise1 =  $("<td>").text(routines[i].exerciseOne);
           newRow.append(exercise1);
           let rep1 =  $("<td>").text(routines[i].repOne);
           newRow.append(rep1);
           let exercise2 =  $("<td>").text(routines[i].exerciseTwo);
           newRow.append(exercise2);
           let rep2 =  $("<td>").text(routines[i].repTwo);
           newRow.append(rep2);
           let exercise3 =  $("<td>").text(routines[i].exerciseThree);
           newRow.append(exercise3);
           let rep3 =  $("<td>").text(routines[i].repThree);
           newRow.append(rep3);
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