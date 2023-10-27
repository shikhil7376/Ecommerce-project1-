const mongoose = require('mongoose')

const transactionSchema = new mongoose.Schema({
    amount:{
        type:Number,
        required : true,
    },
    description : {
        type : String,
        required : true
    },
    date : {
        type : Date,
        default : Date.now,
    },
    transactionId : {
        type : String,
        required : true
    },
})

const walletSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref : 'Customer',
        unique : true
    },
    balance : {
        type : Number,
        default : 0
    },
    transactions : [transactionSchema]
}) 

const Wallet = mongoose.model('Wallet',walletSchema)

module.exports = Wallet