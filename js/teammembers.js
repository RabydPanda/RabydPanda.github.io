/*
Get team members for requested Twitch stream team
*/

var fs = require("fs");

/*
var teamoptions = { method: 'GET',
    url: 'https://api.twitch.tv/kraken/teams/',
    headers:
        { 
        	'Accept': 'application/vnd.twitchtv.v5+json',
            'Client-ID': 'uflpzu6capd5fy7q1eliihjz8dd1yd' } };

var livecheckoptions = { method: 'GET',
    url: 'https://api.twitch.tv/kraken/streams/',
    headers:
        { 
        	'Accept': 'application/vnd.twitchtv.v5+json',
            'Client-ID': 'uflpzu6capd5fy7q1eliihjz8dd1yd' } };
*/

$(document).ready(function() {
    $('#teammembers').append('<div>FAIL</div>');
    fs.readFile('../JSON/config.json', 'utf-8', function (err, data) {
        if (err) {
            $('#teamname').append('FAIL');
            return console.error(err);
        }
        else {
          var name = JSON.parse(data)
            $('#teamname').append(name.teamname);
        }
    });
});

