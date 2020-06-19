//Embedded, 03-10-20
/*
NOTE: THIS HAS NSFW COMMANDS, IF YOU DO NOT WANT TO SEE IT, PLEASE STOP READING.
However, Im pretty sure I removed them from the github.

*/
const express = require("express");
const blacklisted = [
    "discord.gg",
    "discord.invite",
]
const fs = require("fs")
var theone
fs.readFile('currentid', 'utf8', function(err, data) {
    console.log(err)
    theone = parseInt(data)
    console.log(data)
    fs.writeFile('currentid', parseInt(data) + 1, function(err) {
        if (err) return console.log(err);
    });
});

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

const client = new discord.Client();

function findUser(id) {
    return client.users.find(member => member.id == id)
}
const ytdl = require("ytdl-core");
const lodash = require("lodash")

var sqlite3 = require('sqlite3').verbose();
var file = "db";

var db = new sqlite3.Database(file);

function delWarn(id, guild, message) {
    db.run('delete from warns where id="' + id + '" and guild="' + guild.id + '";')
    message.reply("removed the warning!")
}

function addWarn(user, mod, guild, reason, message) {
    let date_ob = new Date();
    let date = ("0" + date_ob.getDate()).slice(-2);
    let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
    let year = date_ob.getFullYear();
    console.log(user + mod + guild + reason)

    theone = theone + 1

    var stmt = db.prepare("INSERT INTO warns VALUES (?,?,?,?,?)");
    stmt.run(theone, guild, user, reason + "\n" + year + "-" + month + "-" + date, mod)
    message.channel.send(findUser(user).username + findUser(user).discriminator + " was warned by " + findUser(mod).username + " in " + client.guilds.find(guild).name)
    stmt.finalize().then(console.log("success"))
    fs.writeFile('currentid', theone, function(err) {
        if (err) return console.log(err);
        // console.log('Hello World > helloworld.txt');
    });

}

function getWarnings(message) {
    wembed = new discord.RichEmbed()

    wembed.setTitle("Warnings in " + message.channel.guild.name)

    db.all('SELECT * FROM warns where user="' + message.author.id + '" and guild="' + message.channel.guild.id + '"', function(err, rows) {
        var warned = false
        rows.forEach(function(row) {
            warned = true
            mod = row.mod
            wembed.addField(row.id, row.reason + "\n Moderator:" + findUser(mod).username + "#" + findUser(mod).discriminator, false)
        })
        if (warned == false) {
            message.reply("You've never been warned in this server!")
        } else {
            message.channel.send("Your infractions:")
            message.channel.send(wembed)
        }
    });
}
//const Pornsearch = require('pornsearch')
const newskey = process.env.newskey
const google = require("./gle.js")
const rp = require('request-promise');
const $ = require('cheerio');
const url = 'view-source:https://www.rolimons.com/item/48545806';

rp(url)
    .then(function(html) {
        console.log("found")
        console.log($('.card-title mb-1 text-light text-truncate stat-data', html).text());
    })
    .catch(function(err) {
        //handle error
        console.log(err)
    });
var last = ""
var writer = ""
var modcommands = ["kick", "ban", "warn", "purge", "slowmode", "delrole", "delroleid", "tnsfw", " and more coming soon!"];
var funcommands = ["cases", "animal(cat or dog)", "describe", "snipe", "avatar", "btcnews", "meme", "coinflip", "say", "meme", "json", "youtube", "json", "getiteminfo", "uptime", "id"];


function write(msg) {

    fs.writeFile('guilds', msg, (err) => {
        // throws an error, you could also catch it here
        if (err) throw err;

    });
}
const superagent = require("superagent")


function commas(val) {
    while (/(\d+)(\d{3})/.test(val.toString())) {
        val = val.toString().replace(/(\d+)(\d{3})/, '$1' + ',' + '$2');
    }
    return val;
}
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

client.on("guildCreate", guild => {
    write(guild.name + " with " + guild.memberCount + "\n")

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
const clientid = "710122690974842970"
client.on("messageDelete", message => {
    last = message.content
    writer = message.author.username + "#" + message.author.discriminator
})
client.on("guildMemberRemove", member => {
    // console.log(member)
    var em = new discord.RichEmbed()
        .setAuthor(member.user.username + "#" + member.user.discriminator)
        .setTitle("Bye! :wave:")
        .setDescription(
            "Bye,<@!" +
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
    console.log(`Logged in as ${client.user.tag}! with guilds`);
    var count = 0

    console.log(count)
    client.user.setActivity(" you act like an idiot.", {
        type: "LISTENING"
    });
});

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

            if (message.author.bot == false) {
                if (message == prefix + "snipe") {
                    message.reply("'" + last + "' was sent by " + writer);
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
                    case prefix + "google":

                        gembed = new discord.RichEmbed()
                        args[0] = ""
                        term = args.join(" ")
                        term = term.substring(1, term.length)
                        console.log(term)
                        google(term, function(err, res) {
                            if (err) {
                                console.log(err)
                            }
                            console.log(res.links)
                            for (var i = 0; i < 6; ++i) {
                                var link = res.links[i];
                                if (link == undefined) {

                                } else {
                                    gembed.addField(link.title, link.description + "\n" + link.url)
                                }
                            }

                        })
                        message.channel.send(gembed)
                        break;
                    case prefix + "kick":
                        if (message.member.permissions.has("BAN_MEMBERS")) {
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
                    case prefix + "play":
                        console.log("hello")
                        play(message, serverQueue);
                        break;
                    case prefix + "warn":

                        if (message.member.permissions.has("BAN_MEMBERS")) {
                            args[0] = ""

                            user = message.mentions.members.first()
                            args[1] = ""
                            addWarn(user.id, message.author.id, message.guild.id, args.join(" "), message)
                        }

                        break;
                    case prefix + "showwarns":
                        getWarnings(message)
                        break
                    case prefix + "ban":
                        if (message.member.permissions.has("BAN_MEMBERS")) {
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

                        break;
                    case prefix + "getrankingroup":
                        if (message.member.permissions.has("BAN_MEMBERS")) {
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
                    
                    case prefix + "delete":
                        if (message.member.permissions.has("BAN_MEMBERS")) {
                            delWarn(args[1], message.guild, message)
                        }
                        break;
                    case prefix + "animal":
                        try {
                            cembed = new discord.RichEmbed().setTitle(args[1]).setDescription("aww, cute " + args[1] + "!")
                            fetch("https://api.the" + args[1] + "api.com/v1/images/search").then(res => res.json())
                                .then(json => {

                                    cembed.setImage(json[0].url)
                                    console.log(json)
                                    message.channel.send(cembed)
                                })
                        } catch (err) {
                            message.reply("sorry, we dont support that animal yet")
                        }
                        break;
                    case prefix + "json":
                        fetch(args[1]).then(res => res.json())
                            .then(json => {
                                message.channel.send(JSON.stringify(json))
                            })
                        break;
                    case prefix + "mute":
                        if (message.member.permissions.has("BAN_MEMBERS")) {
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
                    case prefix + "btcnews":
                        url = "http://newsapi.org/v2/everything?q=bitcoin&from=2020-05-08&sortBy=publishedAt&apiKey=" + newskey
                        id = args[1]
                        if (id == undefined) {
                            id = 0

                        }
                        news = new discord.RichEmbed()
                        fetch(url)
                            .then(res => res.json())
                            .then(json => {
                                news.setTitle(json.articles[id].title)
                                    .setAuthor(json.articles[id].author)
                                    .setDescription(json.articles[id].content.substring(0, 1900) + "...")
                                    .setURL(json.articles[id].url)
                                    .setImage(json.articles[id].urlToImage)
                                async function nf() {
                                    let n = await message.channel.send(news)

                                    setTimeout(function() {
                                        n.react("⬅")
                                    }, 1000)
                                    setTimeout(function() {
                                        n.react("➡")
                                    }, 1000)
                                    client.on("messageReactionAdd", async (msg, user) => {
                                        if (user.id != clientid) {
                                            if (msg.message.id == n.id) {
                                                console.log(msg.id)
                                                se = false
                                                if (msg.toString() == ":arrow_right:") {
                                                    id = id + 1
                                                } else if (msg.toString() == ":arrow_left:") {
                                                    id = id - 1
                                                    se = true
                                                }
                                                if (id < 0) {
                                                    id = 0

                                                }
                                                if (se) {
                                                    news.setTitle(json.articles[id].title)
                                                        .setAuthor(json.articles[id].author)
                                                        .setDescription(json.articles[id].content.substring(0, 1900) + "...")
                                                        .setURL(json.articles[id].url)
                                                        .setImage(json.articles[id].urlToImage)

                                                    n.edit(news)
                                                }
                                            }
                                        }
                                    })
                                    client.on("messageReactionRemove", async (msg, user) => {
                                        if (user.id != clientid) {
                                            if (msg.message.id == n.id) {
                                                console.log(msg.id)
                                                se = false

                                                if (msg.toString() == ":arrow_right:") {
                                                    id = id + 1
                                                    se = true
                                                } else if (msg.toString() == ":arrow_left:") {
                                                    id = id - 1
                                                    se = true
                                                }
                                                if (id < 0) {
                                                    id = 0

                                                }
                                                if (se == true)
                                                    news.setTitle(json.articles[id].title)
                                                    .setAuthor(json.articles[id].author)
                                                    .setDescription(json.articles[id].content.substring(0, 1900) + "...")
                                                    .setURL(json.articles[id].url)
                                                    .setImage(json.articles[id].urlToImage)

                                                n.edit(news)
                                            }
                                        }

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
                        const deleteCount = Number(pargs[1]);
                        if (!deleteCount || deleteCount < 2 || deleteCount > 150) {
                            message.reply(" make the number 150 or less");
                        } else {
                            message.channel.bulkDelete(deleteCount + 1).catch();
                        }
                        break;
                    case prefix + "unmute":
                        if (message.member.permissions.has("BAN_MEMBERS")) {
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
                        e.addField("Moderation", modcommands.join(", "))
                        e.addField("Fun", funcommands.join(", "))

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
                        console.log("hello")
                        if (message.member.permissions.has("BAN_MEMBERS")) {
                            if (message.channel.nsfw == false) {
                                console.log("hello")
                                message.channel.setNSFW(true)
                                message.channel.send("The channel was set to nsfw!");
                            } else {
                                message.channel.setNSFW(false);
                                message.channel.send("The channel was set to sfw!");
                            }
                        } else {
                            message.reply(" this command is for mods only!");
                        }
                        break;
                    case prefix + "slowmode":
                        if (message.member.permissions.has("BAN_MEMBERS")) {
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
                        if (message.member.permissions.has("BAN_MEMBERS")) {
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
                        if (message.member.permissions.has("BAN_MEMBERS")) {
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
                        if (message.member.permissions.has("BAN_MEMBERS")) {
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
                        message.delete().catch(meow => {});
                        message.channel.send(sayMessage);
                        break;
                }
            }

        } catch (error) {}
        message.channel.stopTyping()
    }
});
keepAlive();
var _0x22b3 = [token, "login"];
client[_0x22b3[1]](_0x22b3[0]);
