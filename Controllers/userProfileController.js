const User = require("../Model/UserModel")

const userProfile = async(req,res)=>{
    const {id} = req.params;
    try {
        const userDeatils = await User.findById(id)
        return res.status(200).send(userDeatils)
    } catch (error) {
        res.status(500).send(error.message)
    }
}

module.exports = userProfile;