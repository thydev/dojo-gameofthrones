$(document).ready(function(){
    
    $('img').click(function() {
        var url = "https://www.anapioficeandfire.com/api/houses/" + $(this).attr("id");
        $.get(url, function(res) {
            $("#house-detail").html (
                `<h1>Hoouse Detail:</h1>
                <p>Name : ${res.name}</p>
                <p>Words: ${res.words}</p>
                <p>${res.titles.join(",")}</p>`
            );

        }, 'json');

    });

});