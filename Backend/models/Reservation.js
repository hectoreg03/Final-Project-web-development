const {Schema, modle, model}= require('mongoose');
const reservationSchema = new Schema({
    arrival: {
        type: Date,
        required: true,
        trim: true,
    },
    return: {
        type: Date,
        required: true,
        trim: true,
    },
    destiny: {
        type: String,
        required: true,
        trim: true,
    },
    adults: {
        type: Number,
        required: true,
        trim: true,
    },
    children: {
        type: Number,
        required: true,
        trim: true,
    },
},{
    timestamps: true
})
module.exports=model('Reservation',reservationSchema);