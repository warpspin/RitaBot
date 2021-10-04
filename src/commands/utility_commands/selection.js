// ---------------------------------------
// This is a test function, DO NOT REOMVE
// ---------------------------------------
/*
const embed = new MessageEmbed().setDescription("Please Choose a Category in the dropdown menu.");
const components = (state) => [

    new MessageActionRow().addComponents(new MessageSelectMenu().
    setCustomId("help-menu").
    setPlaceholder("Please select a Cateegory").
    setDisabled(state).
    addOptions(paramMap.map((cmd) => ({
        "value": cmd
    }))))

];

const initialMessage = await data.message.channel.send({"embeds": [embed],
    "components": components(false)});

const filter = (interaction) => interaction.user.id === data.message.author.id;

const collector = data.message.channel.createMessageComponentCollector({filter,
    "componentType": "SELECT_MENU",
    "time": 5000});

collector.on("collect", (interaction) =>
{

    const [ cmd ] = interaction.value;

    const catEmbed = new MessageEmbed().setTitle("Help Menu").
    setDescription("Here are command").
    addField(paramMap.map((cmd) => ({
        "name": "",
        "value": "",
        "inline": true
    })));


    interaction.update({"embeds": [catRmbed]});

});

collector.on("end", () =>
{

    initialMessage.edit({"components": components(true)});

});
*/
