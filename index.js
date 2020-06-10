//Embedded, 05-16-20
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const randomPuppy = require("random-puppy");
const token = process.env.token
const keepAlive = require("./server.js")
const cheerio = require("cheerio")
const request = require("request")
const fetch = require("node-fetch");
const bluebird = require("bluebird");
const phantom = require("phantomjs");
const trello_pack = require("trello");
const discord = require("discord.js");
const lodash = require("lodash")
const sqlite3 = require("sqlite3").verbose()
const newskey=process.env.newskey
const clientid="710122690974842970"
const fs = require('fs');
function write(msg){

  fs.writeFile('guilds', msg, (err) => {
    // throws an error, you could also catch it here
    if (err) throw err;

});
}
const superagent=require("superagent")
 function sendHentai(msg){
superagent.get('https://nekobot.xyz/api/image')
    .query({ type: ''+msg.content.split(" ")[1]})
     .end((err, response) => {
      msg.channel.send({ file: response.body.message });
   });
 }
function commas(val) {
	while (/(\d+)(\d{3})/.test(val.toString())) {
		val = val.toString().replace(/(\d+)(\d{3})/, '$1' + ',' + '$2');
	}
	return val;
}
let db = new sqlite3.Database('cash');

function update(args1) {

	db.run(`INSERT INTO cash VALUES (?,?)`,args1[0]+","+args1[1], function(err) {
		if (err) {
			return console.log(err.message);
		}
		console.log(`A row has been inserted with rowid ${this.lastID}`);
	});
}
//update(["'1'", 2])
//db.close();
const client = new discord.Client();
const reddit = [
	"meme",
	"animemes",
	"MemesOfAnime",
	"animememes",
	"AnimeFunny",
	"dankmemes",
	"dankmeme",
	"wholesomememes",
	"MemeEconomy",
	"techsupportanimals",
	"meirl",
	"me_irl",
	"2meirl4meirl",
	"AdviceAnimals"
];
const hentai = [
	"futanari"
]
fetch.Promise = bluebird;
const prefix = "r!";
var hp = 1;
var listener = app.listen(process.env.PORT, () => {
	console.log(`Your app is listening on port ${listener.address().port}`);
});
var trello = new trello_pack(
	"15156af17453ece66e0ace7c25faae5a",
	"a576ede86ba23bf00c843c64c1d7bc678ef07d2a25514ec7cdc370b3e149c6a8"
);
/*
db.close((err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Close the database connection.');
});*/
client.on("guildCreate",guild=>{
write(guild.name+" with "+guild.memberCount+"\n")

})
client.on("guildMemberAdd", member => {
	// console.log(member)
	var em = new discord.RichEmbed()
		.setAuthor(member.user.username + "#" + member.user.discriminator)
		.setTitle("Welcome! :wave:")
		.setDescription(
			"Welcome to the server,<@!" +
			member.id +
			">. There are now " +
			member.guild.memberCount +
			" users."
		)
		.setColor("#ff00ff");
	member.guild.channels.find(ch => (ch.name = "welcome")).send(em);
});
var att = 1;
var mag = 1;
var wp = 1;
var def = 1;
var pets = [
	"0.100000snail",
	"0.200000butterfly",
	"0.300000mouse",
	"0.400000bee",
	"0.500000fish",
	"0.550000snail",
	"0.600000butterfly",
	"0.650000mouse",
	"0.700000bee",
	"0.730000fish",
	"0.770000cat",
	"0.800000dog",
	"0.830000horse",
	"0.860000cow",
	"0.900000chicken",
	"0.915000shark",
	"0.930000dragon",
	"0.945000fairy",
	"0.955000unicorn",
	"0.970000chimera",
	"0.975500lion",
	"0.981000bear",
	"0.985500gorilla",
	"0.992000snake",
	"0.997500panda",
	"0.998000lion",
	"0.998500bear",
	"0.999000gorilla",
	"0.999500snake",
	"0.999900panda",
	"0.999917necromancer",
	"0.999934witch",
	"0.999951wizard",
	"0.999968enchantress",
	"0.999985valkyrie",
	"0.999917God of War",
	"0.999934God of Magic",
	"0.999951God of Skill",
	"0.999968Goddess of Recovery ",
	"0.999985Goddess of Confusion",
	"0.999990The Dark Lord",
	"0.999995The Dragon King",
	"0.999999The Blood Knight",
	"1.000000Eythera, the Creator"
];
pets = pets.sort();

function createEmbed(title, description, timestamp, author, color, footer, id) {
	var e = new discord.RichEmbed()
		.setTitle(title)
		.setColor(color)
		.setAuthor(author.username + "#" + author.discriminator)
		.setFooter(footer);
	e.setDescription(description);
	if (timestamp == true) {
		e.setTimestamp();
	}
	client.channels
		.get(id)
		.send(e)
		.catch();
	return e;
}

function delRole(role, deleter) {
	try {
		role.delete("Deleted by " + deleter.id);
	} catch (error) {
		console.log(error);
	}
}

function createRole(guild, name, color) {
	guild.createRole({
		name: name,
		color: color.toUpperCase()
	});
}
var commands = [];
commands[0] = "help: outputs the current available commands.";
commands[1] = "ping: outputs the API latency";
commands[2] = "verify: verifies that the user has agreed to the roles.";
commands[3] = "uptime: prints how long the bot has been online for";
commands[4] =
	"say: makes the bot say something and deletes the original message as long as the original message doesnt have a mention.";
commands[5] = "youtube: prints out Embedded's youtube as an embed.";
commands[6] =
	"kick(Mod+): kicks the user specified and dms them with the reason.";
commands[7] = "ban(Mod+): bans user specified and dms them with the reason.";
commands[8] =
	"mute(Mod+): mutes the user specified and dms them with the reason.";
commands[9] = "unmute(Mod+): unmutes the user specified and notifies them.";
commands[10] = "avatar: returns the player avatar as an embed.";
commands[11] = "snipe: returns the most recent message";
commands[12] = "purge(Mod+) deletes messages";
commands[13] = "tnsfw(Mod+) toggles whether the channel is nsfw";
commands[14] =
	"delrole(Mod+) deletes role with name; deprecated, use delroleid";
commands[15] = "delroleid(Mod+): delted role with the given id";
client.on("ready", () => {
	console.log(`Logged in as ${client.user.tag}!`);
	client.user.setActivity(" you act like an idiot.", {
		type: "LISTENING"
	});
});
/*
   var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "test",
  password: "1234"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query("CREATE DATABASE mydb", function (err, result) {
    if (err) throw err;
    console.log("Database created");
  });
});
*/
client.on("message", async message => {
	if (message != null) {
		//message.channel.startTyping()
		if (
			token == process.env.usertoken
		) {
			if (message.author.id != "693482849914847282") {
				return;
			}
		}
		try {
			var adminRole = message.channel.guild.roles.find(
				role => role.name == "Moderator"
			);
			var mutedRole = message.channel.guild.roles.find(
				role => role.name == "Muted"
			);
			var verifiedRole = message.channel.guild.roles.find(
				role => role.name == "Verified"
			);
			var logs = message.guild.channels.find(
				textchannel => textchannel.name == "message-logs"
			);
			if (adminRole && mutedRole && verifiedRole && logs) {
			if (message.channel.guild.name!="Embedded Support Server"){
        
      	console.log(message.guild.name);
      }
        if (message.author.bot == false) {
					if (message == prefix + "snipe") {
						message.reply(e);
					}
					if (message == "what do i do with aceterix's shitty ideas?") {
						message.reply(
							" his ideas are never good, so you chuck 'em in the trashcan :trash: Embedded's ideas are clearly superior, so that is what you should support without fails. U see, u fuckers didnt choose the minecraft game, so we lost the opportunity of being what skyblock is now. Kudos to all of you. Now, make sure u retards pick right the next time. :middle_finger:"
						);
					}
					var channel;
					e = new discord.RichEmbed()
						.setTitle("New Message")
						.setTimestamp()
						.setColor("#0099ff")
						.setAuthor(
							message.author.username + "#" + message.author.discriminator
						)
						.setFooter(message.author.id);
					e.setDescription(
						message.content + "\n in #" + message.channel.name + ""
					);
					client.channels
						.get(logs.id)
						.send(e)
						.catch();
					var member = message.member;
					var args = message.content.split(" ", 10);
					switch (member.roles.get("name", "Moderator")) {
						case null:
							break;
						default:
							switch (args[0]) {
								case prefix + "getiteminfo":
									let embed = new discord.RichEmbed();
									let fargs = message.content.split(":")
									let itemargs = fargs[1].split(" ")
									let iargs = farg[0]
									fetch(
											"https://catalog.roblox.com/v1/search/items/details?Keyword=" +
											iargs[1] +
											"&assetType=18"
										)
										.then(res => res.json())
										.then(json => {
											var url = "https://rolimons.com/item/" + json.data[1].id
											/* request(url,function(err,resp,body){
											   var $=cheerio.load(body)
											   var value=$(".d-flex")
											   console.log(value.children[1])
											   embed.addField("Value",value)
											   
											 })*/
											embed.setDescription(json.data[1].description);
											embed.setURL("https://www.roblox.com/catalog/" + json.data[1].id)
											embed.addField("Price", json.data[1].price, true);
											embed.setFooter("id" + json.data[1].id)
											if (json.data[1].lowestPrice != undefined) {
												embed.addField("Lowest Price", json.data[1].lowestPrice, true);
											}
											embed.addField("Sales", json.data[1].purchaseCount, true);
											embed.addField("Favorites", json.data[1].favoriteCount, true);
											embed.setImage(
												"https://www.roblox.com/thumbs/asset.ashx?width=100&height=100&assetid=" +
												json.data[1].id
											);
											embed.setAuthor(
												json.data[1].creatorName +
												"(" +
												json.data[1].creatorTargetId +
												")"
											);
											embed.setThumbnail(
												"https://www.roblox.com/Thumbs/Avatar.ashx?x=50&y=50&userid=" +
												json.data[1].creatorTargetId
											);
											console.log(iargs[1])
											embed.setTimestamp();
											embed.setTitle(json.data[1].name);
											message.reply(embed);
										});
									break;
								case prefix + "play":
									break;
								case prefix + "ping":
									message.channel.sendMessage(
										":ping_pong: Pong! API latency is `" +
										`${Date.now() - message.createdTimestamp}` +
										" ms`"
									);
									break;
								case "eprefix":
									message.reply(
										"the current prefix for EmbeddedBot is " + prefix
									);
									break;
								case prefix + "hunt":
									break;
                case prefix+"currency":
               // message.channel.send("hello")
try{db.all("SELECT * FROM cash where id="+message.author.id, function(err, rows) {
        
            message.reply("you have "+rows[0].value+" coins");
          return;
        
})
		}
  catch(err){
console.log(err)
  }
  update[message.author.id,"1000"]
  message.channel.send("you havent gotten any money yet!")
                break;
								case prefix + "trello":
									if ((message.member.id = "693482849914847282")) {
										var cards = args[1].split(",");
										trello.addCard(cards[0], cards[1], "0HidTez3", function(
											error,
											trelloCard
										) {
											if (error) {
												console.log("Could not add card:", error);
											} else {
												console.log("Added card:", trelloCard);
											}
										});
									}
									break;
								case prefix + "scout":
									break;
								case prefix + "balance":
									break;
								case prefix + "coinflip":
									var cfr = Math.floor(Math.random() * 2 + 1);
									if (cfr == 1) {
										message.reply("heads");
									} else {
										message.reply("tails");
									}
									break;
								case prefix + "hunt":
									break;
									break;
								case prefix + "kick":
									if (message.member.roles.has(adminRole.id)) {
										var m = message.mentions.members.first();
										let reason = args.slice(1).join(" ");
										var z = reason.split(" ");
										m.send(
											"you were kicked from " +
											message.guild.name +
											" for " +
											z[1]
										);
										m.kick(reason).catch(error =>
											message.reply(
												`Sorry ${message.author} I couldn't kick because of : ${error}`
											)
										);
										message.reply(
											m +
											" has been kicked by " +
											message.author.username +
											" for " +
											z[1]
										);
									}
									break;
								case prefix + "ban":
									if (message.member.roles.has(adminRole.id)) {
										let m = message.mentions.members.first();
										let reason = args.slice(1).join(" ");
										var z = reason.split(" ");
										m.send(
											"you were banned from " +
											message.guild.name +
											" for " +
											z[1]
										);
										m.ban(reason).catch(error =>
											message.reply(
												`Sorry ${message.author} I couldn't ban because of : ${error}`
											)
										);
										message.reply(
											m +
											" has been banned by " +
											message.author.username +
											" for " +
											z[1]
										);
									}
									break;
								case prefix + "sqleval":
									var sqlargs = args[1].split("~")
									db.all("SELECT * from Dreams", (err, rows) => {
										message.channel.send(JSON.stringify(rows));
									});
									break;
								case prefix + "getrankingroup":
									if (message.member.roles.has(adminRole.id)) {
										var m = message.mentions.members.first();
										console.log("got here");
										var reason = args.slice(1).join(" ");
										var z = reason.split(" ");
										var m123 = m.nickname;
										console.log(m123);
									}
									break;
								case prefix + "meme":
									let subreddit =
										reddit[Math.floor(Math.random() * reddit.length)];
									var a = args[1];
									if (a == undefined) {
										a = 1;
									}
									message.channel.startTyping();
									for (var i = 0; i < a; i++) {
										randomPuppy(subreddit)
											.then(async url => {
												await message.channel
													.send(new discord.RichEmbed().setImage(url).setAuthor(subreddit))
													.then(() => message.channel.stopTyping());
											})
											.catch(err => console.error(err));
									}
									break;
								case prefix + "porn":
                if (message.channel.nsfw==true) {
								sendHentai(message)
                }
                else{
var pornembed=new discord.RichEmbed().setTitle("This Channel is not NSFW!").setDescription("This channel is not nsfw, please make it nsfw to use this command. Heres some sfw pussy for now.")
fetch("https://api.thecatapi.com/v1/images/search")	.then(res => res.json()) 
											.then(json => {

pornembed.setImage(json[0].url)
console.log(json)
message.channel.send(pornembed)
            })
                }
									break;
                 
                  case prefix+"animal":
                  try{
cembed=new discord.RichEmbed().setTitle(args[1]).setDescription("aww, cute "+args[1]+"!")
fetch("https://api.the"+args[1]+"api.com/v1/images/search")	.then(res => res.json()) 
											.then(json => {

cembed.setImage(json[0].url)
console.log(json)
message.channel.send(cembed)
            })
                  }
                  catch(err){
message.reply("sorry, we dont support that animal yet")
                  }
                  break;
                  case prefix+"json":
fetch(args[1])	.then(res => res.json()) 
											.then(json => {
message.channel.send(JSON.stringify(json))
            })
                  break;
								case prefix + "mute":
									if (message.member.roles.has(adminRole.id)) {
										var m = message.mentions.members.first();
										var reason = args.slice(1).join(" ");
										var z = reason.split(" ");
										createEmbed(
											"User Muted",
											m.name +
											"#" +
											m.discriminator +
											" has been muted by " +
											message.author.username +
											" for " +
											z[1],
											true,
											message.author,
											"	#2E0854",
											m.id,
											logs.id
										);
										m.send(
											"you were muted in " + message.guild.name + " for " + z[1]
										).catch("cannot dm this user.");
										m.addRole(mutedRole.id);
										message.channel.send(
											m +
											" has been muted by " +
											message.author.username +
											" for " +
											z[1]
										);
									}
									break;
                case prefix+"btcnews":
url="http://newsapi.org/v2/everything?q=bitcoin&from=2020-05-08&sortBy=publishedAt&apiKey="+newskey
id=args[1]
if (id==undefined){
id=0

}
												news = new discord.RichEmbed()
	fetch(url)
											.then(res => res.json())
											.then(json => {
                      news.setTitle(json.articles[id].title)
                      .setAuthor(json.articles[id].author)
                      .setDescription(json.articles[id].content.substring(0,1900)+"...")
                      .setURL(json.articles[id].url)
                      .setImage(json.articles[id].urlToImage)
                    async function nf(){
let n=await message.channel.send(news)

setTimeout(function() {n.react("⬅")},1000)
setTimeout(function() {n.react("➡")},1000)
client.on("messageReactionAdd", async (msg,user)=>{
if (user.id!=clientid){
  if (msg.message.id==n.id){
    console.log(msg.id)
  se=false
    if (msg.toString()==":arrow_right:"){    
id=id+1
}
else if(msg.toString()==":arrow_left:"){
  id=id-1
  se=true
}
if (id<0){
id=0

}
if (se){
 news.setTitle(json.articles[id].title)
                      .setAuthor(json.articles[id].author)
                      .setDescription(json.articles[id].content.substring(0,1900)+"...")
                      .setURL(json.articles[id].url)
                      .setImage(json.articles[id].urlToImage)
                      
n.edit(news)
}
}
}
})
client.on("messageReactionRemove", async (msg,user)=>{
if (user.id!=clientid){
  if (msg.message.id==n.id){
    console.log(msg.id)
    se=false
 
if (msg.toString()==":arrow_right:"){    
id=id+1
se=true
}
else if(msg.toString()==":arrow_left:"){
  id=id-1
  se=true
}
if (id<0){
id=0

}
if (se==true)
 news.setTitle(json.articles[id].title)
                      .setAuthor(json.articles[id].author)
                      .setDescription(json.articles[id].content.substring(0,1900)+"...")
                      .setURL(json.articles[id].url)
                      .setImage(json.articles[id].urlToImage)
                      
n.edit(news)
}}

})

                    }
nf()
											.catch(err => {
												console.log(err);
											});
                      });
                break;
								case prefix + "eval":
									if (message.author.id !== '693482849914847282') return;
									let evaled;
									try {
										evaled = await eval(args.join(' '));
										evaled.substring(1, evaled.length)
										message.channel.send(inspect(evaled));
										console.log(inspect(evaled));
									} catch (error) {
										console.error(error);
										message.reply(error.substring(0, 499));
									}
									break;
								case prefix + "avatar":
									var e = new discord.RichEmbed();
									if (message.content == ".avatar") {
										var user = message.author;
										e.title = message.author.username + "'s Avatar";
										e.setTimestamp();
										e.setColor("#0099ff");
										e.setAuthor("EmbeddedBot");
										e.setImage(user.avatarURL)
											.setFooter("The bot was created by EmbeddedHorror");
										message.reply(e);
									} else {
										var user = message.mentions.users.first();
										e.title = user.username + "'s Avatar";
										e.setTimestamp();
										e.setColor("#0099ff");
										e.setAuthor("EmbeddedBot");
										e.setImage(user.avatarURL)
											.setFooter("The bot was created by EmbeddedHorror");
										message.reply(e);
									}
									break;
								case prefix + "cases":
									if (args[1] == "global") {
										fetch('https://api.covid19api.com/summary')
											.then(res => res.json()) // expecting a json response
											.then(json => {
												covidembed = new discord.RichEmbed()
												covidembed.setTitle("Global Coronavirus Cases")
												for (var attributename in json.Global) {
													covidembed.addField(attributename, commas(json.Global[attributename]))
												}
												message.channel.send(covidembed)
											})
											.catch(err => {
												console.log(err);
											});
									} else {
										fetch('https://api.covid19api.com/summary')
											.then(res => res.json()) // expecting a json response
											.then(json => {
												covidembed = new discord.RichEmbed()
												// covidembed.setTitle("Global Coronavirus Cases")
												for (var country in json.Countries) {
													// console.log(country)
													country = json.Countries[country]
													if (country.Country == args[1] || country.CountryCode == args[1].toUpperCase()) {
														covidembed.setTitle(country.Country + " Coronavirus Cases")
														for (var attribute in country) {
															if (attribute != "Slug" && attribute != "CountryCode" && attribute != "Country") {
																if (attribute.substring(0, 3) == "New" || attribute.substring(0, 3) == "Tot") {
																	covidembed.addField(attribute, commas(country[attribute]))
																} else {
																	covidembed.addField(attribute, country[attribute])
																}
															}
														}
														message.channel.send(covidembed)
														//console.log("found")
														return;
													}
												}
											});
									}
									break;
								case prefix + "purge":
									var pargs = message.content.split(" ");
									const deleteCount = parseInt(pargs[1]);
									if (!deleteCount || deleteCount < 2 || deleteCount > 150) {
										message.reply(" make the number 150 or less");
									} else {
										message.channel.bulkDelete(deleteCount + 1).catch();
									}
									break;
								case prefix + "unmute":
									if (message.member.roles.has(adminRole.id)) {
										let m = message.mentions.members.first();
										let reason = args.slice(1).join(" ");
										var z = reason.split(" ");
										m.send(
											"you were unmuted in " + message.guild.name + " by you."
										);
										m.removeRole(mutedRole.id).catch(error =>
											message.reply(
												`Sorry ${message.author} I couldn't unmute because of : ${error}`
											)
										);
										message.reply(
											m + " has been unmuted by " + message.author.username
										);
									}
									break;
								case prefix + "help":
									var e = new discord.RichEmbed();
									e.title = "Current Commands";
									e.setTimestamp();
									e.setThumbnail(
										"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.redd.it%2F4toxzsgn1ydz.png&f=1&nofb=1"
									);
									e.setColor("#0099ff");
									e.setAuthor(
											"EmbeddedBot",
											"https://cdn.discordapp.com/avatars/693482849914847282/5b13ec3a61a46988a11c0e5dc0bbf2e5.png?size=256"
										)
										.setFooter("The bot was created by EmbeddedHorror");
									e.description = commands.join("\n \n");
									message.channel.send(e);
									break;
								case prefix + "uptime":
									var m = client._pong;
									var args2 = message.content.split(".", 10);
									var s = client.uptime / 60000;
									message.reply(
										" the bot has been up for about " +
										Math.round(s) +
										" minutes."
									);
									break;
								case prefix + "verify":
									if (message.channel.name == "verify") {
										message.reply(
											" you are now verified. Welcome to the server."
										);
										message.member.addRole(verifiedRole.id);
									}
									break;
								case prefix + "tnsfw":
									if (message.member.roles.has(adminRole.id)) {
										if (message.channel.nsfw == false) {
											message.channel.nsfw = true;
											message.channel.send("The channel was set to nsfw!");
										} else {
											message.channel.nsfw = false;
											message.channel.send("The channel was set to sfw!");
										}
									} else {
										message.reply(" this command is for mods only!");
									}
									break;
								case prefix + "slowmode":
									if (message.member.roles.has(adminRole.id)) {
										if (args[1] != null) {
											message.channel.slowmode = args[1] * 1000;
											message.reply("Set the slowmode to " + args[1] + "!");
										}
									} else {
										message.reply(" this command is for mods only!");
									}
									break;
								case prefix + "youtube":
									var e = new discord.RichEmbed();
									e.title = "Click here to view Embedded's Youtube";
									e.description =
										"**Don't forget to subscribe!** \n \n Link not working? Paste this into your browser: \n https://www.youtube.com/channel/UC8MO1aWGHN_jEG-r8aBhrOw/featured";
									e.setTimestamp().setURL(
										"https://www.youtube.com/channel/UC8MO1aWGHN_jEG-r8aBhrOw/featured"
									);
									e.setThumbnail(
										"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.redd.it%2F4toxzsgn1ydz.png&f=1&nofb=1"
									);
									e.setColor("#FF0000");
									e.setAuthor(
											"EmbeddedBot",
											"https://cdn.discordapp.com/avatars/693482849914847282/5b13ec3a61a46988a11c0e5dc0bbf2e5.png?size=256"
										)
										.setFooter(
											"Requested by " +
											message.author.username +
											"(" +
											message.author.id +
											")"
										);
									message.channel.send(e);
									break;
								case prefix + "id":
									message.reply("your id is " + message.author.id)
									break;
								case prefix + "delroleid":
									if (message.member.roles.has(adminRole.id)) {
										var rargs = message.content.split(" ");
										rargs[0] = "";
										var nameforrole = rargs[1];
										try {
											delRole(
												message.channel.guild.roles.find("id", nameforrole),
												message.author
											);
											message.reply(" deleted role " + nameforrole + ".");
										} catch (error) {
											console.log(error);
											message.reply(error);
										}
									}
									break;
								case prefix + "delrole":
									if (message.member.roles.has(adminRole.id)) {
										var rargs = message.content.split(" ");
										rargs[0] = "";
										var nameforrole = rargs[1];
										try {
											delRole(
												message.channel.guild.roles.find("name", nameforrole),
												message.author
											);
											message.reply(" deleted role " + nameforrole + ".");
										} catch (error) {
											console.log(error);
											message.reply(error);
										}
									}
									break;
								case prefix + "createrole":
									if (message.member.roles.has(adminRole.id)) {
										var rargs = message.content.split(" ");
										rargs[0] = "";
										var nameforrole = rargs[1];
										var rargs2 = nameforrole.split(",");
										try {
											createRole(message.guild, rargs2[0], rargs2[1]);
											message.reply(
												" created role " +
												rargs2[0] +
												" with color " +
												rargs2[1]
											);
										} catch (error) {
											console.log(error);
											message.reply(error);
										}
									}
									break;
								case prefix + "describe":
									var dm = "";
									var r = Math.floor(Math.random() * 10) + 1;
									if (r == 1) {
										dm = "cunt";
									}
									if (r == 2) {
										dm = "bitch";
									}
									if (r == 3) {
										dm = "whore";
									}
									if (r == 4) {
										dm = "simp";
									}
									if (r == 5) {
										dm = "clown";
									}
									if (r == 6) {
										dm = "bimbo";
									}
									if (r == 7) {
										dm = "kind person";
									}
									if (r == 8) {
										dm = "good friend";
									}
									if (r == 9) {
										dm = "retard";
									}
									if (r == 10) {
										dm = "james charles fan";
									}
									message.reply("they are a " + dm + ".");
									break;
								case prefix + "say":
									if (
										message.content.search("@") == -1 &&
										message.content.search("@") == -1
									)
										var sargs = message.content.split(" ");
									sargs[0] = "";
									var sayMessage = sargs.join(" ");
									message.delete().catch(O_o => {});
									message.channel.send(sayMessage);
									break;
							}
							break;
					}
				}
			}
		} catch (error) {}
		message.channel.stopTyping()
	}
});
keepAlive();
var _0x22b3 = [token, "login"];
client[_0x22b3[1]](_0x22b3[0]);