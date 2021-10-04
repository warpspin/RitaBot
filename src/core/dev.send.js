// -----------------
// Global variables
// -----------------

// Codebeat:disable[LOC,ABC,BLOCK_NESTING,ARITY]
const colors = require("./colors");
const {MessageEmbed} = require("discord.js");
const embed = new MessageEmbed();
const logger = require("./logger");
const error = require("./error");
const time = {
   "long": 60000,
   "short": 5000
};
const auth = require("./auth");

// ---------------------
// Send Data to Channel
// ---------------------

function sendMessage (data)
{

   return data.message.channel.send({"embeds": [embed]}).
      // eslint-disable-next-line consistent-return
      catch((err) =>
      {

         if (err.code && err.code === error.perm || error.access)
         {

            // console.log("Error 50013");
            logger(
               "custom",
               {
                  "color": "ok",
                  "msg": `:exclamation: Write Permission Error - DS.js\n
                  Server: **${data.channel.guild.name}** \n
                  Channel: **${data.channel.name}**\n
                  Chan ID: **${data.channel.id}**\n
                  Server ID: **${data.message.sourceID}**\n
                  Owner: **${data.message.guild.owner}**\n
                  The server owner has been notified. \n`
               }
            );
            const writeErr =
                  `:no_entry:  **${data.message.client.user.username}** does not have permission to write in your server **` +
                  `${data.channel.guild.name}**. Please fix.`;

            // -------------
            // Send message
            // -------------

            if (!data.channel.guild.fetchOwner())
            {

               return console.log(writeErr);

            }
            // console.log("DEBUG: Line 60 - Dev.Send.js");
            return data.channel.guild.fetchOwner().
               send(writeErr).
               catch((err) => console.log(
                  "error",
                  err,
                  "warning",
                  data.message.guild.name
               ));

         }

      });

}

// ---------------
// Command Header
// ---------------

// eslint-disable-next-line complexity
module.exports = function run (data)
{

   // ---------------------
   // Send Data to Channel
   // ---------------------

   if (auth.devID.includes(data.message.author.id))
   {

      // console.log("DEBUG: Developer Override");
      try
      {

         setTimeout(() => data.message.delete(), time.short);

      }
      catch (err)
      {

         console.log(
            "Bot Message Deleted Error 1, dev.send.js",
            err
         );

      }
      embed.
         setColor(colors.get(data.color)).
         setDescription(`Developer Identity confirmed:\n\n${data.text}`).
         setTimestamp();
      // -------------
      // Send message
      // -------------

      return sendMessage(data);

   }
   // console.log("DEBUG: Insufficient Permission");
   try
   {

      setTimeout(() => data.message.delete(), time.short);

   }
   catch (err)
   {

      console.log(
         "Bot Message Deleted Error 2 dev.send.js",
         err
      );

   }
   data.text = ":cop:  This Command is for bot developers only.";
   embed.
      setColor(colors.get(data.color)).
      setDescription(data.text).
      setTimestamp().
      setFooter("This message will self-destruct in one minute");

   // -------------
   // Send message
   // -------------

   return sendMessage(data);

};
