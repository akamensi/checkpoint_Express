const express = require('express')

const app = express()

const port = 5000

app.use(express.json())

const timeWare = (req,res,next)=>{
    const currentHour = new Date().getHours();
    const allowedStartHour = 9;
    const allowedEndHour = 17;
  
    if (currentHour < allowedStartHour || currentHour >= allowedEndHour) {
      return res.status(403).json({ message: 'Requests are only allowed between 9 AM and 5 PM' });
    }
  
    next();
}

app.use(timeWare)

app.get('/home',(req,res)=>{
    res.sendFile(__dirname+'/public/Home.html')
})

app.get('/services',(res,res)=>{
res.sendFile(__dirname+'/public/Services.html')
})

app.get('/contact',()=>{
    res.sendFile(__dirname+'/public/Contact.html')
})

app.get('/style.css',(req,res)=>{
    res.sendFile(__dirname+'/public/style.css')
    })

app.listen(port, console.log(`the server is runnig on the port ${port}`))