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
            let btns = $("<td class='center-align'>").html("<a href='#editModal' class='editRoutine waves-effect waves-light btn modal-trigger'>Edit</a><button  class='deleteRoutine waves-effect waves-light btn'>Delete</button>");
            newRow.append(btns);
        //   name, sets, exercise1, rep1, exercise2, rep2, exercise3, rep3);
            $("#prTable").append(newRow);
        }
      });

    $("#prTable").on("click","a", function(event) { 
        event.preventDefault();
        let eleme = $(this).parent().data();
        console.log(eleme);
        var routineName = $("#routineName").val().trim();
        var sets = parseInt($("#sets").val());
        var exercise1 = $("#exercise1").val().trim();
        var repCount1 = parseInt($("#repCount1").val());
        var exercise2 = $("#exercise2").val().trim();
        var repCount2 = parseInt($("#repCount2").val());
        var exercise3 = $("#exercise3").val().trim();
        var repCount3 = parseInt($("#repCount3").val());
        
        let editRoutine = {
            routineName: routineName,
            sets: sets,
            exerciseOne: exercise1,
            repOne: repCount1,
            exerciseTwo: exercise2,
            repTwo: repCount2,
            exerciseThree: exercise3,
            repThree: repCount3
        }

        $.ajax("/api/pr" + eleme, {
            type: "PUT",
            data: editRoutine,
            dataType: "json",
            contentType: "application/json",
        })
    });

    $(".deleteRoutine").on("click", function(event) {
        event.preventDefault();
        // let eleme = $(this).parent().data();
        console.log("DELETE BUTTON CLICKED");
    });

    // update, delete 
        // update = recreate post with id of the item 
        // jqeury data -> dynamically GENERATED 
        // it's not generated -> READ fro mthe server -> Grabbing ID from the server 
    // dry code 
    // ?? join table - continue?
    // presentation 

});