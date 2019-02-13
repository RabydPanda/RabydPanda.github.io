/*
Get team members for requested Twitch stream team
*/
var fs = require("fs");

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

    $('#team-name').append('WHOOPSY');

$(document).ready(function() {
fs.readFile('../JSON/config.json', 'utf-8', function (err, data) {
    json.parse(data);
    $('#team-name').append(data.teamname);
    console.log(data);

});

