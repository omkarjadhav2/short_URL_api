const mongoose = require("mongoose");
 
const connectToMongodb = async ()=>{
    mongoose.connection.on('connected' , ()=> {
       console.log('Mongodb Connected');
       
    })
   await mongoose.connect(`${process.env.MONGODB_URI}`)


}
module.exports = {
    connectToMongodb,

}