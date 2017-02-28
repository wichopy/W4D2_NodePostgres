const URL = require('./databaseURL');
const knex = require('knex')({
  client: 'pg',
  //NEED to add ?ssl=true to the heroku URL in order for the connection to work...
  //Reference here: https://github.com/tgriesser/knex/issues/239
  connection: URL.URL
});
// console.log(knex);
module.exports = knex;
// knex.select()
//   .from('famous_people')
//   .then((rows) => {
//     console.log(rows);
//   })
//   .then(() => {
//     process.exit(0);
//   });