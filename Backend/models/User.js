const {Schema, modle, model}= require('mongoose');
const userSchema = new Schema({
    uName: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    fsName : String,
    email: String,
    password: String,
    Reservations: [{}]
},{
    timestamps: true
})
module.exports=model('User',userSchema);