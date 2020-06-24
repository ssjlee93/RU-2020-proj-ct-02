$(document).ready(function(){
    $('.modal').modal();

    $("#submitRoutine").on("click", function(event) {
        event.preventDefault();
        location.reload();
    });


});