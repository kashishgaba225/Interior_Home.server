const mongoose= require ('mongoose')

const userSchema= new mongoose.Schema({
    profileimg:{type:String, trim:true, required:false},
    title:{type:String,enum:['Mr','Miss','Other'], trim:true, required:true},
    name:{type:String, trim:true, required:true},
    email:{type:String, trim:true,unique:true, required:true},
    password:{type:String, trim:true, required:true},
    otp:{type:String,required:true,trim:true},
    toDeleted:{type:Boolean,default:false},
    toVerify:{type:Boolean,default:false},
    isAccoutActivate:{type:Boolean,default:true},
    role:{type:String,enum:['user','admin','shopkeepere'],required:true,trim:true}
    
},
{timestamps:true}
)
module.exports=mongoose.model('user',userSchema)