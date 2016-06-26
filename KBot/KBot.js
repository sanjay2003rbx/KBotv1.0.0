/* Remake of KBot in Node.js */
/* Version 1.0.0 */

/* Important Vars */
var Discord = require("discord.js");
var KBot = new Discord.Client();

/* Log in successful? */
KBot.on("ready", () => {
	console.log("KBot logged in!");
});

/* Basic Commands */
KBot.on("message", function(message) {
	if(message.content === "<test") {
		KBot.reply(message, " ``` Kirishima:Online ``` ");
    }
});

KBot.on("message", function(message) {
	if(message.content === "<about") {
		KBot.reply(message, " ``` Name: Kirishima#5963 Desc: Remake of JBot in Node.js but, an NSFW version. Bot: Yes Version: 1.0.0 Library: Discord.js ``` ");
    }
});

KBot.on("message", function(message) {
	if(message.content === "<stats") {
		KBot.reply(message, " ``` Current servers: 1 ``` ");
    }
});

/* File Sending Commands */
KBot.on("message", (msg) => {

	if (msg.content === "<testphoto") {
		KBot.sendFile(msg, "./Photos/test.jpg", "photo.jpg", (err, sentMessage) => {
			if (err)
				console.log("Couldn't send image: ", err);
		});
	}

	else if (msg.content === "file") {
		KBot.sendFile(msg.channel, new Buffer("Text in a file!"), "file.txt", (err, sentMessage) => {
			if (err)
				console.log("Couldn't send file: ", err)
		});
	}
});

/* Token corrected? Nope. */
KBot.loginWithToken("MTkzMzUxNzA3OTk5MjA3NDI1.CkWITw.5Qss4o-Z_rRFFX3FUoerGk52C_8");