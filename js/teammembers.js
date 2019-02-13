/*
Get team members for requested Twitch stream team
*/

var teamname = document.currentScript.getAttribute('team');
var teamoptions = { method: 'GET',
    url: 'https://api.twitch.tv/kraken/teams/sanitariumgaming',
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

teamcallback = function (error, response, body) {
    if (error) throw new Error(error);


    var parsedTeamData = JSON.parse(body);
};

//$(document).ready(function() {
//	var req = request(teamoptions, teamcallback);
//});

$(document).ready(function(){
    $team = $("#team-header");
    $team.append("Welcome");
});
