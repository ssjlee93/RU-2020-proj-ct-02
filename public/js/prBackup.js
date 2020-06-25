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



// this was on a separate file

$(document).ready(function(){
    $('.modal').modal();
    function renderExercises() {
        for (var i=0; i < len; i++) {
            var exercise = $("<h2>" + results.exerc)
        }
    }

    function renderRoutines() {
        for (var i=0; i < len; i++) {
            var mainDiv = $("<div class='col s12 m6'>");
            var cardDiv = $("<div class='card hoverable'>");
            var cardContent = $("<div class='card-content'>");
            var icon = $("<h2 class='center light-blue-text'><i class='material-icons'>fitness_center</i></h2>");
            var title = $("<h5 class='card-title center'>"+ results[i].routineName +"</h5>");
            for (var j=0; i < results.exercises; i++) {
                var exercise = $("<h2>" + results.exerciseName)
            }
        }

    }

    $("#editRoutine").on("click", function(event) {
        event.preventDefault();

    });

    $("#deleteRoutine").on("click", function(event) {
        event.preventDefault();

    });


});