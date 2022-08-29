const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');
const fieldsCreateUse = 'rutUser,nameUser,lastnamesUser,bornDate,cellphone,email,regionUser,cityUser,communeUser,workareaUser,specialityArea,chargeUser,experienceYears,workResume';

const db = mysql.createConnection({
    host: 'db-yobusco.c4j2uwjr1j1z.us-east-1.rds.amazonaws.com',
    port: '3306',
    user: 'admin',
    password: 'baltoh1502',
    database: 'yobusco_db'
})

db.connect((error) =>{
    if(error){
        console.log(error.message);
    }else{
        console.log("connected a database");
    }
})

app.use(cors());
app.use(express.json());
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

    const sqlInsert = "INSERT INTO user_info(rutUser,nameUser,lastnamesUser,bornDate,cellphone,email,regionUser,cityUser,communeUser,workareaUser,chargeUser,experienceYears,workResume,agreeconditions)" + 
    "VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
    db.query(sqlInsert,[rut,name,lastname,bornDate,phone,email,region,city,comunne,area,role,yearsExperience,resume,agreeconditions],(err,result)=>{
        if(err){
            res.status(500).send({ error: 'Something failed!' });
        }else{
            res.send(result);
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

app.listen(3001,()=>{
    console.log("escuchando en el puerto 3001");
});