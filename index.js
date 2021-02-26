var rpc = require("discord-rpc")
const client = new rpc.Client({ transport: 'ipc' })
client.on('ready', () => {
client.request('SET_ACTIVITY', {
pid: process.pid,
activity : {
details : "main",
assets : {
large_image : "photo_name",
large_text : "gance" 
},
buttons : [{label : "DiscordPanel" , url : "https://discordpanel.com"},{label : "Github",url : "https://github.com/thegance"}]
}
})
})
client.login({ clientId : "APIid" }).catch(console.error); 