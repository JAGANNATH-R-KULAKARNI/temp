const mongoose = require('mongoose')
mongoose.connect(process.env.DB_URL , {
    useNewUrlParser : true ,
}).then(()=>{
    console.log('connected to the database')
}).catch((e)=>{
    console.log(e)
})