$(document).ready(async function () {

    //Fetch chosen players from local storage
    const chosen_players = JSON.parse(localStorage.getItem('chosen_players'));

    chosen_players.forEach(chosen_player => {
        $("#players").append(
            $(document.createElement('div')).prop({
                class: 'col-6'
            }).append(
                $(document.createElement('div')).prop({
                    class: 'form-check'
                }).append(
                    $(document.createElement('input')).prop({
                        class: 'form-check-input',
                        type: 'radio',
                        value: chosen_player,
                        id: chosen_player
                    })).append(
                        $(document.createElement('label')).prop({
                            class: 'form-check-label',
                            for: chosen_player,
                        }).html(chosen_player))
            )
        );
    });

    $("#submitButton").click(function () {
        if (document.querySelectorAll('input[type=radio]:checked').length != 1) {
            alert("Tutti ultimi??")
            return;
        }
        else {
            const first = document.querySelector('input[type=radio]:checked').value;
            localStorage.setItem('first', first);
            window.location = "turns.html";
        }
    });
});