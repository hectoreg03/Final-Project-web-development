require('dotenv').config();
const app = require('./app');
require('./database.js');
async function main(){
    await app.listen(app.get('port'));
    console.log("listening to port ", app.get('port'));
}
main();