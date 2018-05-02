const Discord = require('discord.js');
const client = new Discord.Client();
const { prefix } = require('./config.json');

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === `${prefix}ping`) {
        message.channel.send('Pong.');
    }
});

// Create an event listener for new guild members
client.on('guildMemberAdd', member => {
    // Send the message to a designated channel on a server:
    const channel = member.guild.channels.find('name', 'member-log');
    // Do nothing if the channel wasn't found on this server
    if (!channel) return;
    // Send the message, mentioning the member
    channel.send(`Hey ${member}, welcome to Sioux Gamers :tada::hugging: ! Please note, that although this server is intended for Sioux employees and their friends, it is a public server and not the place to discuss confidential information.`);
});

client.login(process.env.BOT_TOKEN);