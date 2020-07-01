$(document).ready(function(){
    $('.modal').modal();

    $("#submitRoutine").on("click", function(event) {
        event.preventDefault();
        $("#myRoutine").empty();
        var routineName = $("#routineName").val().trim();
        var sets = parseInt($("#sets").val());
        var exercise1 = $("#exercise1").val().trim();
        var repCount1 = parseInt($("#repCount1").val());
        var exercise2 = $("#exercise2").val().trim();
        var repCount2 = parseInt($("#repCount2").val());
        var exercise3 = $("#exercise3").val().trim();
        var repCount3 = parseInt($("#repCount3").val());
        
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
        //   window.location.href = "/userRoutines";
        });
      }
    
});