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
        // exerciseCount = 0;
        location.reload();
    });
});