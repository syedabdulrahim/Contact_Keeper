const jwt=require('jsonwebtoken');
const config=require('config');

module.exports=(req,res,next)=>{

    const token=req.header('x-auth-token');
    if(!token){

        return res.status(401).json({msg:"No token, Authorization denied"})
    }

    try{
        const decoded=jwt.verify(token,config.get('jwtSecret'));
        req.user=decoded.user; //clg this
        // console.log(req.header(''))
        next();

    }
    catch(error){

            console.log(error);
            res.status(401).json({msg:'token is invalid'})


    }
}