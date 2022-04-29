require("dotenv").config();
const { Client, Intents } = require("discord.js");

const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

client.on("messageCreate", (message) => {
  if (message.channel.parentId !== process.env.CATEGORY_ID) return;
  message.react("🧇");
});

client.login(process.env.TOKEN);
