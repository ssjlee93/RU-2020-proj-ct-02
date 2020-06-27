$(document).ready(function(){
    $('.modal').modal();
    let eleme;

    //Dry and working GET. DO NOT TOUCH
    $.get( "/api/pr", function( data ) {
        let routines = data.routines; 
        let length = routines.length;
        for (var i = 0; i < length; i++) {
            let newRow = $("<tr>"); 
            let values = Object.values(routines[i]);
            for (var j = 0; j < 9; j++) {
            let column = $("<td>").text(values[j]);
            newRow.append(column);
            }
            let btns = $("<td class='center-align'>").html("<a href='#editModal' data="+ routines[i].id + " class='editRoutine waves-effect waves-light btn modal-trigger'>Edit</a><button data="+ routines[i].id + " class='deleteRoutine waves-effect waves-light btn'>Delete</button>");
            newRow.append(btns);
            $("#prTable").append(newRow);
        }
      });

    $("#prTable").on("click","a", function(event) { 
        event.preventDefault();
        eleme = $(this).attr("data");
        console.log("edit btn id: "+eleme);
    });

    $(".saveRoutine").on("click", function(event) {
        event.preventDefault();
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
        $.ajax("/api/pr/" + eleme, {
            type: "PUT",
            data: editRoutine,
        }).then(function() {
            location.reload();
        })
    });

    $("#prTable").on("click","button", function(event) { 
        event.preventDefault();
        eleme = $(this).attr("data");
        console.log("DELETE BUTTON CLICKED");
        $.ajax({
            method: "DELETE",
            url: "/api/pr/" + eleme
          }).then( () => location.reload());
    });

});