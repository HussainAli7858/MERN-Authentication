import jwt from 'jsonwebtoken';

const userAuth = (req, res, next) => {
    const {token} = req.cookies;
    if(!token){
        return res.json({success: false, message: "Unauthorized, Login Again" });
    }
    try {
       const tokenDecode = jwt.verify(token, process.env.JWT_SECRET);
        if (tokenDecode.Id) {
            req.userId = tokenDecode.Id;
        }else{
            return res.json({success: false, message: "Unauthorized, Login Again" });   
        }
        next();
    } catch (error) {
        res.json({success: false, message:error.message });
    }
}

export default userAuth;