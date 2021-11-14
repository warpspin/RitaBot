// ---------------------------------------
// This is a test function, DO NOT REOMVE
// ---------------------------------------

/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable sort-keys */
const {MessageActionRow, MessageSelectMenu} = require("discord.js");

module.exports = function run (data)
{

   client.on("interactionCreate", async (interaction) =>
   {

      if (!interaction.isCommand())
      {

         return;

      }

      if (interaction.commandName === "ping")
      {

         const row = new MessageActionRow().
            addComponents(new MessageSelectMenu().
               setCustomId("select").
               setPlaceholder("Nothing selected").
               addOptions([
                  {
                     "label": "Select me",
                     "description": "This is a description",
                     "value": "first_option"
                  },
                  {
                     "label": "You can select me too",
                     "description": "This is also a description",
                     "value": "second_option"
                  }
               ]),);

         await interaction.reply({"content": "Pong!",
            "components": [row]});

      }

   });

};
