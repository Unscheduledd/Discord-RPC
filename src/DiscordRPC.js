/*
* This Discord RPC was created by unscheduleds#0 as a free to use template which herby prohibits anyone other than the creator himself to redistribute or sell this template.
* if this is for a team add your credentials here.
*/
const clientId = '/*YourIDHere*/';
const DiscordRPC = require('discord-rpc');
const RPC = new DiscordRPC.Client({ transport: 'ipc' });


DiscordRPC.register(clientId);
async function setActivity() {
    if (!RPC) return;
    RPC.setActivity({
        details: `RPC Test`,
        state: `RPC Test 1`,
        startTimestamp: Date.now(),
        LargeImageKey: 'growtopiaunderground.png',
        LargeImageText: `Growtopia`,
        smallImageKey: `growtopiaunderground`,
        smallImageText:`Underground`,
        instance: false,
        buttons: [
            {
                label: `Discord`,
                url: `https://www.discord.gg/ugt`
            },
            {
                label: `Youtube`,
                url: `https://www.youtube.com/unscheduled`
            }
        ]
        
    });
};

RPC.on('ready', async () => {
    setActivity();
    
    setInterval(() => {
        setActivity();
    }, 150000 * 1000);
});

console.clear();
console.log("\x1b[95m                                                        ▄▄       ▄▄ \x1b[0m")
console.log("\x1b[35m▄▄█▀▀▀█▄█                         ██                ▀███      ▄██\x1b[0m")
console.log("\x1b[95m▄██▀     ▀█                         ██                  ██       ██\x1b[0m")
console.log("\x1b[35m██▀       ▀███▄███  ▄▄█▀██ ▄█▀██▄ ██████  ▄▄█▀██   ▄█▀▀███       ██▄████▄ ▀██▀   ▀██▀  ▄█\x1b[0m")
console.log("\x1b[95m██          ██▀ ▀▀ ▄█▀   ███   ██   ██   ▄█▀   ██▄██    ██       ██    ▀██  ██   ▄█    ▀▀\x1b[0m")
console.log("\x1b[35m██▄         ██     ██▀▀▀▀▀▀▄█████   ██   ██▀▀▀▀▀▀███    ██       ██     ██   ██ ▄█\x1b[0m")
console.log("\x1b[95m▀██▄     ▄▀ ██     ██▄    ▄█   ██   ██   ██▄    ▄▀██    ██       ██▄   ▄██    ███      ▄▄\x1b[0m")
console.log("\x1b[35m▀▀█████▀▄████▄    ▀█████▀████▀██▄ ▀████ ▀█████▀ ▀████▀███▄     █▀█████▀     ▄█         ██\x1b[0m")
console.log("\x1b[95m                                                                          ▄█\x1b[0m")
console.log("\x1b[35m                                                                        ██▀\x1b[0m")
console.log("\x1b[95m╔╗ ╔╗            ╔╗        ╔╗    ╔╗       ╔╗\x1b[0m")
console.log("\x1b[35m║║ ║║            ║║        ║║    ║║       ║║\x1b[0m")
console.log("\x1b[95m║║ ║║╔═╗ ╔══╗╔══╗║╚═╗╔══╗╔═╝║╔╗╔╗║║ ╔══╗╔═╝║\x1b[0m")
console.log("\x1b[35m║║ ║║║╔╗╗║══╣║╔═╝║╔╗║║╔╗║║╔╗║║║║║║║ ║╔╗║║╔╗║\x1b[0m")
console.log("\x1b[95m║╚═╝║║║║║╠══║║╚═╗║║║║║║═╣║╚╝║║╚╝║║╚╗║║═╣║╚╝║\x1b[0m")
console.log("\x1b[35m╚═══╝╚╝╚╝╚══╝╚══╝╚╝╚╝╚══╝╚══╝╚══╝╚═╝╚══╝╚══╝\x1b[0m")

RPC.login({ clientId }).catch(err => console.error(err));