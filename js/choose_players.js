$(document).ready(async function () {

    async function getPlayers() {
        return fetch('./db/players.json')
            .then((response) => response.json());
    }
    const players = await getPlayers();
    
    players.forEach(player => {
        $("#players").append(
            $(document.createElement('div')).prop({
                class: 'col-6'
            }).append(
                $(document.createElement('div')).prop({
                    class: 'form-check'
                }).append(
                    $(document.createElement('input')).prop({
                        class: 'form-check-input',
                        type: 'checkbox',
                        value: player.firstName,
                        id: player.firstName
                    })).append(
                        $(document.createElement('label')).prop({
                            class: 'form-check-label',
                            for: player.firstName,
                        }).html(player.firstName))
            )
        );
    });

    $("#submitButton").click(function () {
        const values = Array.from(document.querySelectorAll('input[type=checkbox]:checked'))
            .map(item => item.value);
        const chosen_players = JSON.stringify(values);
        localStorage.clear();
        localStorage.setItem('chosen_players', chosen_players);
    });
});

