// the connection file of mongo db to the project \\

// const{username,password}=process.env;


//  export const connectionSrt="mongodb+srv://"+username+":"+password+"@cluster0.1khv8ly.mongodb.net/production?appName=Cluster0"



const { MONGO_USER, MONGO_PASS } = process.env;

console.log("USER:", MONGO_USER);
console.log("PASS:", MONGO_PASS);

export const connectionSrt = `mongodb://${MONGO_USER}:${MONGO_PASS}@ac-uhdi6ax-shard-00-00.1khv8ly.mongodb.net:27017,ac-uhdi6ax-shard-00-01.1khv8ly.mongodb.net:27017,ac-uhdi6ax-shard-00-02.1khv8ly.mongodb.net:27017/production?ssl=true&replicaSet=atlas-43bcfb-shard-0&authSource=admin&appName=Cluster0`