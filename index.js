const pg = require('pg');
const R = require('ramda');




require('custom-env').env('secret')

// CONNECT_STRING = `postgres://
// [username]:[password]@localhost:5432/[database]`

const connectionString = process.env.CONNECT_STRING;

const client = new pg.Client(connectionString);

client.connect();


client.query(`SELECT * FROM todos WHERE id = $1`,[2],(err,res)=>{
    console.log(err ? err.stack : res.rows[0])
    client.end()
})
