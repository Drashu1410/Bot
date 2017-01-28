var restify = require('restify');
var builder = require('botbuilder');

//=========================================================
// Bot Setup
//=========================================================

// Setup Restify Server
var server = restify.createServer();
server.listen(process.env.port || process.env.PORT || 3978, function () {
   console.log('%s listening to %s', server.name, server.url); 
});
  
// Create chat bot
var connector = new builder.ChatConnector({
	appId: '6b117dda-5f6a-42f5-bf9a-f42bb482c3fd',
    appPassword: 'GhCR3CeCri5ZXXYzDOw5y1B'
});
var bot = new builder.UniversalBot(connector);
server.post('/api/messages', connector.listen());



//=========================================================
// Bots Dialogs
//=========================================================

bot.dialog('/', function (session) {
    session.send("Hello There, 123");
	session.send("whats your name");
});
