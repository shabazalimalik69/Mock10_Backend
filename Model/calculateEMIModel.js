const mongoose = require("mongoose");

const calculatorSchema = new mongoose.Schema({
    loanAmount:{
        type:Number,required:true,
    },
    loanInterestRate:{
        type:Number,required:true,
    },
    tenure:{
        type:Number,required:true,
    }
});

const loanDetails = mongoose.model("loanDetail",calculatorSchema);

module.exports = loanDetails