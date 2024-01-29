const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const {VideogamesToDb} = require('./src/services/videogamesToDb.js')

// Syncing all the models at once.

const startServer = async ()=>{
    await conn.sync({ force: true })
    server.listen(3001,() => {
      console.log('%s listening at 3001')
    });
    VideogamesToDb()
  }

startServer();

