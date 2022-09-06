$(document).ready(async function () {

    async function getPlayers() {
        return fetch('./db/players.json')
            .then((response) => response.json());
    }
    const players = await getPlayers();

    players.forEach(player => {
        $("#players").append(
            $(document.createElement('option')).prop({
                value: player.firstName,
            }).html(player.firstName)
        )
    });
});