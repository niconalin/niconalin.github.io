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

    $('#query').on('input', function (e) {
        var query = $('#query').val().replaceAll(" ", "+");
        if (query.length < 2) return;
        $("#commanders").empty();
        const url = "https://api.scryfall.com/cards/search?order=name&q=" + query + "+is%3Acommander";
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                const result = JSON.parse(xhr.response);
                if (result.data.length > 10) return;
                for (let i in result.data) {
                    $("#commanders").append(
                        $(document.createElement('a')).prop({
                            class: 'list-group-item list-group-item-action'
                        }).html(result.data[i].name)
                    )
                }
            }
        };
        xhr.open("GET", url);
        xhr.send();
    });
});