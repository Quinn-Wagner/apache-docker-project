function getFlag() {
    let jsonUrl = "https://flagcdn.com/en/codes.json";

    $.ajax({
        url: jsonUrl,
        type: 'GET',
        dataType: 'json',
        success: function(data) {
            let keyValuePairs = [];
            for (let key in data) {
                if (data.hasOwnProperty(key)) {
                    let pair = { key: key, value: data[key] };
                    keyValuePairs.push(pair);
                }
            }

            let randomIndex = Math.floor(Math.random() * keyValuePairs.length);
            let randomPair = keyValuePairs[randomIndex];

            let flagUrl = "https://flagcdn.com/256x192/" + randomPair.key.toLowerCase() + ".png";
            let countryName = randomPair.value;
            
            $('#flag').attr('src', flagUrl);
            
            $('#guess-input').val('');

            $('#guess-btn').off().click(function() {
                var guess = $('#guess-input').val();
                if (guess.toLowerCase() === countryName.toLowerCase()) {
                    alert("Correct! Next flag:");
                    getFlag();
                } else {
                    alert("Incorrect! Try again.");
                }
            });

            $('#new-flag-btn').off().click(function() {
                getFlag();
            });
        },
        error: function(error) {
            console.error("Error fetching JSON data:", error);
        }
    });
}

getFlag();