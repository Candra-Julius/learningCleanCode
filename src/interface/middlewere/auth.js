class Auth {
    constructor(jwt, userRepository){
        this.jwt = jwt;
        this.userRepository = this.userRepository
    }
    async doAuth (req,res,next) {
        try {
            const token = req.headers['authorization'];
            if (!token) return res.status(403).send({ message: 'Token missing' });
            const {id} = await jwt.verify(token, process.env.JWT_SECRET);
            req.user = await this.userRepository.getOne(id);
            next()
        } catch (error) {
            res.status(500).json({message: message.error})
        }
    }
}

module.exports = Auth