$(document).ready(function(){
    $('.modal').modal();

    $("#submitRoutine").on("click", function(event) {
        event.preventDefault();
        var routineName = $("#routineName").val().trim();
        var sets = parseInt($("#sets").val());
        var exercise1 = $("#exercise1").val().trim();
        var repCount1 = parseInt($("#repCount1").val());
        var exercise2 = $("#exercise2").val().trim();
        var repCount2 = parseInt($("#repCount2").val());
        var exercise3 = $("#exercise3").val().trim();
        var repCount3 = parseInt($("#repCount3").val());
        
        var myRoutine = ` <div class="modal-content">
                            <p>My Routine name is <b>${routineName}</b> and I am doing <b>${sets}</b> sets. </p>
                                <p>My first exercise is <b>${exercise1}</b> and I am doing <b>${repCount1}</b> reps. </p>
                                <p>My second exercise is <b>${exercise2}</b> and I am doing <b>${repCount2}</b> reps. </p>
                                <p>My third exercise is <b>${exercise3}</b> and I am doing <b>${repCount3}</b> reps. </p>
                            </div> 
                            <div class="modal-footer">
                                <a href="#!" class="modal-close waves-effect waves-green btn--flat">Let's Do It!</a>
                            </div>`

        $("#myRoutine").append(myRoutine);
        
        let newRoutine = {
            routineName: routineName,
            sets: sets,
            exerciseOne: exercise1,
            repOne: repCount1,
            exerciseTwo: exercise2,
            repTwo: repCount2,
            exerciseThree: exercise3,
            repThree: repCount3
        }
        submit(newRoutine);
    });

    function submit(data) {
        $.post("/api/pr", data, function() {
          window.location.href = "/userRoutines";
        });
      }
    
});