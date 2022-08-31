const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const db = require('./database/connection')
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv');
dotenv.config({path: './env/.env'})
const mysql = require('mysql');

app.use(cors())
app.use(express.json())
app.use (express.urlencoded ({extended: false}))

app.post('/api/create-user',(req,res)=>{
    const name = req.body.name;
    const lastname = req.body.lastname;
    const rut = req.body.rut;
    const bornDate = req.body.bornDate;
    const phone = req.body.phone;
    const email = req.body.email;
    const region = req.body.region;
    const city = req.body.city;
    const comunne = req.body.comunne;
    const area = req.body.area;
    const role = (req.body.role === undefined || req.body.role === null) ? req.body.role = "" : req.body.role;
    const yearsExperience = req.body.yearsExperience;
    const resume = (req.body.resume === undefined || req.body.resume === null) ? req.body.resume = "" : req.body.resume;
    const pass = (req.body.pass === undefined || req.body.pass === null) ? req.body.pass = "" : req.body.pass;
    const agreeconditions = req.body.agreeconditions;

    const sqlInsert1 = "INSERT INTO user_info(rutUser,nameUser,lastnamesUser,bornDate,cellphone,email,regionUser,cityUser,communeUser,workareaUser,chargeUser,experienceYears,workResume,agreeconditions)" + 
    "VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
    const sqlInsert2 = "INSERT INTO user_credentials(userName, userPass)" + 
    "VALUES(?,?)";
    db.query(sqlInsert1,[rut,name,lastname,bornDate,phone,email,region,city,comunne,area,role,yearsExperience,resume,agreeconditions],(err,result)=>{
        if(err){
            res.status(500).send({ error: 'Something failed!' });
        }else{
            db.query(sqlInsert2,[email,pass],(err,result)=>{
                if(err){
                    res.status(500).send({ error: 'Something failed!' });
                }else{
                    res.send(result);
                }
            })
        }
    })
})

app.get('/api/localidades', (req,res)=>{
    res.header("Access-Control-Allow-Origin", "*");
    const sqlGetLocalidades = "SELECT r.region, p.provincia, c.comuna FROM regiones r, provincias p, comunas c  WHERE r.id = p.region_id AND p.id = c.provincia_id ORDER BY r.region ASC, p.provincia"
    db.query(sqlGetLocalidades,(err,result) =>{
        if(err){
            res.send(err);
        }else{
            let arrayLocations = [];
            let region = '';
            for(let i=0; i < (result).length -1; i++){
                if((result)[i + 1].region !== (result)[i].region){
                    let locationsObject = {
                        "region": region,
                        "ciudad" : []
                    }
                    locationsObject.region = ((result)[i].region);
                    const results = (result).filter(filterRegion);
                    for(let j=0; j < (results).length; j++){
                        if((results)[j + 1] === undefined || (results)[j + 1].provincia !== (results)[j].provincia){
                            let arrayCiudad = [{comunas: []}];
                            arrayCiudad.unshift((results)[j].provincia);
                            for(let k=0; k < (results).length; k++){
                                if(arrayCiudad[0] === (results)[k].provincia){
                                    arrayCiudad[1].comunas.push((results)[k].comuna);
                                }
                            }
                            (locationsObject.ciudad).push(arrayCiudad);
                        }
                    }
                    function filterRegion(e){
                        return e.region === locationsObject.region;
                    }
                    arrayLocations.push(locationsObject);      
                }
            }
            res.send(arrayLocations);
        }
    })
});

app.get('/api/usuarios', (req,res)=>{
    res.header("Access-Control-Allow-Origin", "*");
    const sqlGetUsers = "SELECT * FROM user_info"
    db.query(sqlGetUsers,(err,result) =>{
        if(err){
            res.status(500).send(err);
        }else{
            res.send(result);
        }
    })
});

app.post('/api/user-info', validateToken, (req,res)=>{
    const userLogged = JSON.parse(Buffer.from(req.body.authorization.split('.')[1], 'base64').toString());;
    const sqlGetUser = "SELECT * FROM user_info u WHERE u.email ="+mysql.escape(userLogged.userName);
    db.query(sqlGetUser,(err,result) =>{
        if(err){
            res.status(500).send('Problema buscando información del usuario')
        }else{
            res.send(result);
        }
    })
});

app.post('/api/login', (req,res)=>{
    const user = req.body.userName;
    const pass = req.body.userPass;
    const sqlGetUserCredentials = "SELECT u.userName, u.userPass FROM user_credentials u WHERE u.userName = "+mysql.escape(user)+ "AND u.userPass ="+mysql.escape(pass);
    db.query(sqlGetUserCredentials,(err,result) =>{
        if(result.length === 0){
            res.status(403).send({ error: 'Error o contraseñas incorrectos' });
        }else{
            const accessToken = generateAccessToken(req.body);
            res.header('authorization', accessToken).json({
                message: 'User authenticated',
                accessToken: accessToken
            })
        }
    })
});

function generateAccessToken(data){
    return jwt.sign(data,process.env.SECRET, {expiresIn: '60m'});
}

function validateToken(req,res,next){
    const accessToken = req.body['authorization'] || req.body['x-access-token'];
    if(!accessToken){
        res.status(401).send({error: 'Access Denied'});
    }
    jwt.verify(accessToken, process.env.SECRET, (err,response) =>{
        if(err){
            res.send('Access denied, token expired or incorrect')
        }else{
            next();
        }
    })
}

app.listen(3001,()=>{
    console.log("escuchando en el puerto 3001");
});