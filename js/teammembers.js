/*
Get team members for requested Twitch stream team
*/

var teamname = document.currentScript.getAttribute('team');
var teamoptions = { method: 'GET',
    url: 'https://api.twitch.tv/kraken/teams/sanitariumgaming',
    qs: { game: 'Fortnite', offset: '0', limit: '2' },
    headers:
        { 
        	'Accept': 'application/vnd.twitchtv.v5+json',
            'Client-ID': 'uflpzu6capd5fy7q1eliihjz8dd1yd' } };

var livecheckoptions = { method: 'GET',
    url: 'https://api.twitch.tv/kraken/streams/',
    qs: { game: 'Fortnite', offset: '0', limit: '2' },
    headers:
        { 
        	'Accept': 'application/vnd.twitchtv.v5+json',
            'Client-ID': 'uflpzu6capd5fy7q1eliihjz8dd1yd' } };

teamcallback = function (error, response, body) {
    if (error) throw new Error(error);
    document.write("ASDSAD");
	var $team = $('#team-members');
	$team.children().remove();

    var parsedTeamData = JSON.parse(body);

	parsedTeamData.users.forEach(function (displayname){

		$team.append('<div>' + displayname + '</div>');
		};
};

$(document).ready(function() {
	var req = request(teamoptions, teamcallback);
});
