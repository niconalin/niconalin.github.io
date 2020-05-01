$(document).ready(function () {
    $("#search_form").submit(function (e) {
        e.preventDefault();
        $("img").remove();
        let card_name = $("#card_name").val();
        $.ajax({
            type: "GET",
            url: "https://api.scryfall.com/cards/search?q=" + card_name,
            dataType: "json",
            success: function (response) {
                printResults(response);
            }
        });
    });

    function printResults(response) {
        var total = response["total_cards"];
        for (let i = 0; i < total; i++) {
            let url = response["data"][i]["image_uris"]["normal"];
            $(document.createElement('img')).attr({ "src": url, "id": "image_result_" + i }).appendTo('#result');
        }
    };

});