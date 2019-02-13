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
    var parsedTeamData = JSON.parse(bdoy);
//    console.log(parsedTeamData.users.length)
      		var i, streamers, tagline;
      		streamers = 'Sanitarium Stream Team Members : '
      		for ( i = 0; i < parsedTeamData.users.length; i++){
  				streamername = parsedTeamData.users[i].display_name;
//				console.log(streamername);
				if (i > 0)
					streamers = streamers + ", ";
       			streamers = streamers + parsedTeamData.users[i].display_name ;
//            	console.log(parsedTeamData.users[i].display_name);
    	  	};
//           	console.log(streamers);
//            console.log(JSON.parse(data));
};


var req = request(teamoptions, teamcallback).end();
