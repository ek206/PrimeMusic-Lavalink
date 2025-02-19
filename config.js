

module.exports = {
  TOKEN: "",
  language: "en",
  ownerID: ["620162365266329621", "706425935364096010"], 
  mongodbUri : "mongodb+srv://Evil:Evil@music.riy5n.mongodb.net/?retryWrites=true&w=majority&appName=music",
  setupFilePath: './commands/setup.json',
  commandsDir: './commands',  
  embedColor: "#1db954",
  activityName: "YouTube Music", 
  activityType: "LISTENING",  // Available activity types : LISTENING , PLAYING
  SupportServer: "https://discord.gg/codescript",
  embedTimeout: 5, 
  errorLog: "", 
  nodes: [
     {
      name: "Koi Node V4",
      password: "saher.inzeworld.com",
      host: "lava.inzeworld.com",
      port: 3128,
      secure: false
    }
  ]
}
