const loanDetail = require("../Model/calculateEMIModel")


const postLoanDetails = async(req,res)=>{
    const {loanAmount,loanInterestRate,tenure} = req.body;
    const rate=loanInterestRate/12/100;
    const emiData=Math.ceil((loanAmount*rate*( 1 + rate )*tenure) / ( ( 1 + rate )*tenure - 1 )); 
    try {
        const loanDetails = await loanDetail.create({loanAmount,loanInterestRate,tenure});
        loanDetails.save();
        return res.status(200).send({message:"Successfully Calculated",emiData})
    } catch (error) {
        res.status(500).send(error.message)
    }
}

module.exports = {postLoanDetails}


