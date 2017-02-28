const knex = require('./knex_queries');
// console.log(knex);

const args = process.argv.splice(2);
var first_name = args[0];
var last_name = args[1];
var birthdate = args[2];

if (first_name == undefined || last_name == undefined || birthdate == undefined) {
  return console.log('Please enter first name, last name and birthdate!!');
}
//dont listen to documentation... use this example...
//https://github.com/tgriesser/knex
knex.insert({
    first_name: first_name,
    last_name: last_name,
    birthdate: birthdate
  }).into('famous_people')
  .then(() => {
    console.log("finished insert!");
    process.exit(0);
  });