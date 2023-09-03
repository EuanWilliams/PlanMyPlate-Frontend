var request = require('request');

// Post request, returns 
module.exports.post = (route, data) => {
    var url = process.env.API_URL + route;
    var options = { 
        uri: url,
        method: 'POST',
        json: data
    };
    request(options, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            return body;
        }
        else if (error) {
            console.error(error);
            return error;
        }
        else if (response.statusCode != 200) {
            console.error("Non-200 status code recieved from api: " + response.statusCode + " " + response.statusMessage);
            return null;
        }
        else {
            console.error("Unknown error in api_utils.send_get");
            return null;
        }
    });
}

// Get request, returns
module.exports.send_get = (route) => {
    var url = process.env.API_URL + route;
    var options = { 
        uri: url,
        method: 'GET',
    };
    request(options, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            return body;
        }
        else if (error) {
            console.error(error);
            return error;
        }
        else if (response.statusCode != 200) {
            console.error("Non-200 status code recieved from api: " + response.statusCode + " " + response.statusMessage);
            return null;
        }
        else {
            console.error("Unknown error in api_utils.send_get");
            return null;
        }
    });
}