$(document).ready(function(){
    $('.modal').modal();
    let eleme;
    let editObj = [];

    //Dry and working GET. DO NOT TOUCH
    $.get( "/api/pr", function( data ) {
        let routines = data.routines; 
        let length = routines.length;
        console.log(routines);
        for (var i = 0; i < length; i++) {
            let newRow = $("<tr class='hoverable'>"); 
            let values = Object.values(routines[i]);
            editObj.push(routines[i]);
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
        for (var k = 0; k < editObj.length; k++) {
            if (editObj[k].id == eleme){
                $("#routineName").val(editObj[k].routineName);
                console.log(editObj[k].routineName);      
                $("#sets").val(editObj[k].sets);
                $("#exercise1").val(editObj[k].exerciseOne);
                parseInt($("#repCount1").val(editObj[k].repOne));
                $("#exercise2").val(editObj[k].exerciseTwo);
                parseInt($("#repCount2").val(editObj[k].repTwo));
                $("#exercise3").val(editObj[k].exerciseThree);
                parseInt($("#repCount3").val(editObj[k].repThree));
            };
        }
       
        console.log("edit btn id: "+eleme);
        console.log(editObj);
    });

    $(".saveRoutine").on("click", function(event) {
        event.preventDefault();

        $("#myRoutine").empty();
        var routineName = $("#editroutineName").val().trim();
        var sets = parseInt($("#editsets").val());
        var exercise1 = $("#editexercise1").val().trim();
        var repCount1 = parseInt($("#editrepCount1").val());
        var exercise2 = $("#editexercise2").val().trim();
        var repCount2 = parseInt($("#editrepCount2").val());
        var exercise3 = $("#editexercise3").val().trim();
        var repCount3 = parseInt($("#editrepCount3").val());
        
        if (!routineName || !sets  || !exercise1  || !exercise2  || !exercise3  || !repCount1  || !repCount2  || !repCount3 ) {
            var myRoutine = 
                `<div class="modal-content center-align">
                        <h2>Please Fill in all fields</h2>
                    </div> 
                    <div class="modal-footer">
                        <a href="#!" class="modal-close waves-effect waves-green btn-flat">Close</a>
                    </div>` 
            $("#myRoutine").append(myRoutine);
            } else {
            var myRoutine = 
                    ` <div class="modal-content center-align">
                                <p>Your routine name is <b>${routineName}</b> and it has <b>${sets}</b> sets. </p>
                                    <p>Your first exercise is <b>${repCount1}</b> <b>${exercise1}</b></p>
                                    <p>Your second exercise is <b>${repCount2}</b> <b>${exercise2}</b></p>
                                    <p>Your third exercise is <b>${repCount3}</b> <b>${exercise3}</b></p>
                                </div> 
                                <div class="modal-footer">
                                    <a href="/userRoutines" class="waves-effect waves-green btn">Lets view your routine!</a>
                                </div>` 
            $("#myRoutine").append(myRoutine);           
            }
        

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