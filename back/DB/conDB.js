const mongoose = require('mongoose') ;
require('dotenv').config()



// function to connect DB
const DBconnect = async ()=>{
    try {
        
        await mongoose.connect(mongodb+srv://rg:TEST123@cluster0.0lbc9ru.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0,
            {useNewUrlParser : true,
            useUnifiedTopology : true},()=>console.log("DB connected")) ;
        }
    catch (error) {
        console.log(error)
                  }
}

module.exports = DBconnect
