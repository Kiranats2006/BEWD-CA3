const express=require('express');
const app=express();
app.use(express.json());
const jsonWebToken=require('jsonwebtoken');
const PORt=8080;

const secretKey='MysecretKey'


const users=[
    {
        id:'E12345',
        password: 'securePass',
    }
];

//login page
app.post('/login', (req,res)=>{
    const {id, password}=req.body;
    let user=null;
    for(let i=0; i<users.length; i++){
        if(users[i].id==id && users[i].password==password){
            user=users[i];
        }
    }
    const token=jsonWebToken.sign({id: user.id}, secretKey,{expiresIn:'10m'});
    res.json({token});
})

//dashboard with bearer token
app.get('/dashboard', (req,res)=>{
    const token=req.headers.authorization.split(' ')[1];
    if(!token){
        return res.json({message: 'Please enter valid token'});
    }
    console.log(token)
    try {
        const verifyDashboard =jsonWebToken.verify(token, secretKey);
        if(!verifyDashboard){
            return res.send({message: 'Incorrect token, please verify'});
        }
    } catch (error) {
        return res.status(401).send({error: 'Unauthorized'})
    }
    res.json({message: 'Welcome to your employee dashboard!'});
})

app.listen(PORt, ()=>{
    console.log(`index.js is running in http://localhost:${PORt}`)
});
