var rpc = require("discord-rpc")
const client = new rpc.Client({ transport: 'ipc' })
client.on('ready', () => {
client.request('SET_ACTIVITY', {
pid: process.pid,
activity : {
details : "main",
assets : {
large_image : "photo_name",
large_text : "Timur Tül" 
},
buttons : [{label : "DiscordPanel" , url : "https://wajex.net"},{label : "Github",url : "https://github.com/timurtul"}]
}
})
})
client.login({ clientId : "APIid" }).catch(console.error); 
