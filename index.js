const pg = require('pg');
const R = require('ramda');




require('custom-env').env('secret')

// CONNECT_STRING = `postgres://
// [username]:[password]@localhost:5432/[database]`

const connectionString = process.env.CONNECT_STRING;

const client = new pg.Client(connectionString);
const todo = [];
client.connect();

function getTodo(id){
    client.query(`SELECT * FROM todos WHERE id = $1`,[id],(err,res)=>{
        if(err){console.error(err.stack)}
        else{
            const row = res.rows[0];
            console.log(row)
        }
        client.end()
    })
}

function getTodos(){
    client.query(`SELECT * FROM todos`,[],(err,res)=>{
        if(err){console.log(err.stack)}
        else{
            console.log(res.rows);
        }
    })
}


getTodos()
