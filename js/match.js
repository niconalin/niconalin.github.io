$(document).ready(async function () {

    const chosen_players = JSON.parse(localStorage.getItem("chosen_players"));
    const chosen_commanders = localStorage.getItem("chosen_commanders");
    const winner = localStorage.getItem("winner");
    const tier = localStorage.getItem("tier");
    const turns = localStorage.getItem("turns");
    const first = localStorage.getItem("first");

    chosen_players.forEach(player => {
        if (player != winner) {
            $("#chosen_players").append(
                $(document.createElement('li')).prop({
                    class: 'list-group-item',
                    id: player
                }).html(player)
            )
        }
        else {
            $("#chosen_players").append(
                $(document.createElement('li')).prop({
                    class: 'list-group-item',
                    id: player
                }).html(player + "<span class=\"badge bg-success mx-3\">Winner</span>")
            )
        }
    });
});