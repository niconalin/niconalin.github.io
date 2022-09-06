$(document).ready(async function () {

    //Fetch players from db
    async function getPlayers() {
        return fetch('./db/players.json')
            .then((response) => response.json());
    }
    const players = await getPlayers();

    //Fetch chosen players from local storage
    const chosen_players = JSON.parse(localStorage.getItem('chosen_players'));

    //Fetch chosen tier from local storage
    const chosen_tier = JSON.parse(localStorage.getItem('tier'));

    chosen_players.forEach(chosen_player => {
        var options = [];
        players.forEach(player => {
            if (chosen_player == player.firstName) {
                var commanders = player.commanders[chosen_tier-1];
                commanders[chosen_tier].forEach(commander => {
                    const option = document.createElement('option');
                    option.value = commander
                    option.innerHTML = commander
                    options.push(option);
                });
            }
        });
        $("#players").append(
            $(document.createElement('div')).prop({
                class: 'col-12 input-group'
            }).append(
                $(document.createElement('span')).prop({
                    class: 'col-4 input-group-text',
                }).html(chosen_player)
            ).append(
                $(document.createElement('select')).prop({
                    class: 'form-select',
                }).append(options)
            )
        );
    });
});

$("#submitButton").click(function () {
    const values = Array.from(document.querySelectorAll('option:checked'))
        .map(item => item.value);
    const chosen_commanders = JSON.stringify(values);
    localStorage.setItem('chosen_commanders', chosen_commanders);
});