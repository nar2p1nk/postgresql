const bcrypt = require('bcrypt');
const pg = require('pg');
const hash = require('nanoid').nanoid();
require('custom-env').env('secret')

const client = new pg.Client(process.env.CONNECT_STRING2);


client.connect();

function createUser(username,password){
    const hashedPassword = bcrypt.hashSync(password,10)
    client.query(`INSERT INTO users(id,username,password) VALUES($1,$2,$3)`,
        [hash,username,hashedPassword],(err,res)=>{
            if(err){console.error(err.stack)}
            else{
                console.log('user created')
            }
            client.end()
        }
    )
}
//createUser('emilia', 'Fi')



