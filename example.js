const pg = require("pg");
const settings = require("./settings"); // settings.json

const client = new pg.Client({
  user: settings.user,
  password: settings.password,
  database: settings.database,
  host: settings.hostname,
  port: settings.port,
  ssl: settings.ssl
});

const params = process.argv.splice(2);
console.log(params[0]);

console.log("Connect to DB");
client.connect((err) => {
  if (err) {
    return console.error("Connection Error", err);
  }
  client.query(`SELECT * from famous_people WHERE first_name = '${params[0]}';`)
    .then((result) => {
      console.log("Inside query.");
      console.log(result.rows[0].birthdate); //output: 1
      client.end();
    })
    .then(() => {
      //https://blog.risingstack.com/node-js-database-tutorial/
      process.exit(0);
    });
});