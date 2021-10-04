// -----------------
// Global variables
// -----------------

// Codebeat:disable[LOC,ABC,BLOCK_NESTING,ARITY]
const db = require("../../core/db");
const sendMessage = require("../../core/dev.send");
const oneLine = require("common-tags").oneLine;


// ------
// Check
// ------

module.exports = function run (data)
{

   // -------------
   // Command Code
   // -------------

   // console.log("DEBUG: Check");

   // eslint-disable-next-line no-unused-vars
   const serverId = data.cmd.num;


   db.getServerInfo(
      serverId,
      function getServerInfo (server)
      {


         // console.log(`DEBUG: Warn - ${serverId}`);
         const Result = `\`\`\`Server: ${serverId}\nError Count: ${server[0].errorcount}\nWarn Count: ${server[0].warncount}\nEject Count: ${server[0].ejectcount}\nWarn Status: ${server[0].warn}\nBlacklist Status: ${server[0].blacklisted}\n\n\`\`\``;
         data.text = `${Result}\n\n`;


         // -------------
         // Send message
         // -------------

         return sendMessage(data);

      }
   ).catch((err) =>
   {

      console.log(
         "error",
         err,
         "warning",
         serverId
      );

      data.text = oneLine`\`\`\`${serverId} is not in our Database\n\n\`\`\``;
      return sendMessage(data);

   });


};
