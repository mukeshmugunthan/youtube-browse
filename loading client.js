/
function showResponse(response) {
    var responseString = JSON.stringify(response, '', 2);
    document.getElementById('response').innerHTML += responseString;
}


function onClientLoad() {
    gapi.client.load('youtube', 'v3', onYouTubeApiLoad);
}


function onYouTubeApiLoad() {
    
    gapi.client.setApiKey('AIzaSyCR5In4DZaTP6IEZQ0r1JceuvluJRzQNLE');
    showResponse();
}