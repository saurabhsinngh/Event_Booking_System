const mongoose = require('mongoose')

const bookingSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref:'User', required: true },
    event: { type: mongoose.Schema.Types.ObjectId, ref:'Event', required: true },
    tickets: { type: Number, required: true }
})

module.exports = mongoose.model('Booking', bookingSchema);