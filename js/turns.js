$(document).ready(async function () {

    $("#up").click(function () {
        var current_turn = parseInt($("#turn").html());
        $("#turn").html(current_turn + 1);
    })

    $("#down").click(function () {
        var current_turn = $("#turn").html();
        if (current_turn != 1) {
            $("#turn").html(current_turn - 1);
        }
    })

    $("#submitButton").click( function () {
        localStorage.setItem("turns", parseInt($("#turn").html()));
    });
});