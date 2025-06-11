const discord = require('discord.js');

module.exports = (client) => {
    console.log(`Bot loaded on ${client.guilds.cache.size} server(s).`);
    client.user.setActivity('さいあくなめにあわせてやる');
};
