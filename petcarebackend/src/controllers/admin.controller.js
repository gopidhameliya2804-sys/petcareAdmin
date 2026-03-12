let dashboard = async (req , res) => {
    try {
        return res.status(200).json({
            status: true,
            message :"Profile Found",
            user:req.user
        })
    } catch (e) {
        console.log(e);
        return res.status(500).json({
            status: false,
            message:"Internal Server Error. Please try again later"
        });
    }
}

module.exports = dashboard ;