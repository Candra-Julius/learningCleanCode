class HashPassword {
    constructor(tools){
        this.tools = tools
        this.salt = 10
    }
    hash = async(plainText) => {
        return await this.tools.hash(plainText, this.salt)
    } 
    compare = async (plainText, hash) => {
        return await this.tools.compare(plainText, hash)
    }
}

module.exports = HashPassword