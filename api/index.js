const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const genresToDb = require('./src/routes/services/genresToDb.js');
const PORT = 3001;

const startServer = async ()=>{
    await conn.sync({ force: true })
    server.listen(PORT,() => {
      console.log(`linsting in port ${PORT}`)
    });
    await genresToDb();
}
startServer();


