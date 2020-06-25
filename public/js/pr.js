$(document).ready(function(){
    $('.modal').modal();
    
    exerciseCount = 0;
    
    $("#addExercise").on("click", function(event) {
        event.preventDefault();
        exerciseCount++;
        var newRow = $("<div>");
        newRow.addClass("row");
        var news8Div = $("<div class='input-field col s8'>");
        var newInput = $("<input id='exercise" + exerciseCount + "' type='text' class='validate'>");
        var newLabel = $("<label for='exercise" + exerciseCount + "'>Exercise " + exerciseCount + "</label>");
        var news4Div = $("<div class='input-field col s4'>");
        var newInput2 = $("<input id=rep"+ exerciseCount +" type='text' class='validate'>");
        var newLabel2 = $("<label for='rep" + exerciseCount + "'>How many reps?</label>");

        $("#exerciseRow").append(newRow);
        newRow.append(news8Div);
        newRow.append(news4Div);
        news8Div.append(newInput, newLabel);
        news4Div.append(newInput2, newLabel2);
    });

    $("#submitRoutine").on("click", function(event) {
        event.preventDefault();
        var routineName = $("#routineName").val();
        var sets = $("#sets").val();
        var exercise1 = $("#exercise1").val();
        var repCount1 = $("#repCount1").val();
        var exercise2 = $("#exercise2").val();
        var repCount2 = $("#repCount2").val();
        var exercise3 = $("#exercise3").val();
        var repCount3 = $("#repCount3").val();
        
        var myRoutine = ` <div class="modal-content">
                            <p>My Routine name is <b>${routineName}</b> and I am doing <b>${sets}</b> sets. </p>
                                <p>My first exercise is <b>${exercise1}</b> and I am doing <b>${repCount1}</b> reps. </p>
                                <p>My first exercise is <b>${exercise2}</b> and I am doing <b>${repCount3}</b> reps. </p>
                                <p>My first exercise is <b>${exercise3}</b> and I am doing <b>${repCount3}</b> reps. </p>
                            </div> 
                            <div class="modal-footer">
                                <a href="#!" class="modal-close waves-effect waves-green btn-flat">Let's Do It!</a>
                            </div>`

        $("#myRoutine").append(myRoutine);
    });
});