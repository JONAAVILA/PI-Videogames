const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const PORT = 3001;

const startServer = async ()=>{
    await conn.sync({ force: true })
    server.listen(PORT,() => {
      console.log(`linsting in port ${PORT}`)
    });
}

startServer();


