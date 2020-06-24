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