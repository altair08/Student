import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
import studentRoutes from './routes/student.js'


  

const app = express();



app.use(bodyParser.json({limit :"20mb",extended:true}))
app.use(bodyParser.urlencoded({limit :"20mb",extended:true}))

app.use(cors())
app.use('/students', studentRoutes); 

const CONNECTION_URL ='mongodb://localhost/datacollection'


app.use(express.json())

mongoose.connect(CONNECTION_URL,{useNewUrlParser:true})
const con = mongoose.connection

con.on('open',function(){
    console.log("connected...")
})

 mongoose.set('useFindAndModify',false)

 
 app.listen(5000,function(){
    console.log("server started")
})
