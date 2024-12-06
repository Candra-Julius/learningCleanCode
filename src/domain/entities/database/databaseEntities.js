class UsersDatabaseEntities {
    async getOne ( id, transaction ) {
        throw new Error('Methode getOne harus diimplementasi ')
    }

    async getAll ( where, limit, offset, transaction ){
        throw new Error('Methode getAll harus diimplementasi')
    }

    async bulkCreate ( data, transaction ) {
        throw new Error('Methode bulkCreate harus diimplementasi ')
    }

    async findOrCreate ( where, defaults, transaction ) {
        throw new Error('Methode findOrCreate harus diimplementasi ')
    }
    async update ( payload, where, transaction ){
        throw new Error('Methode update harus diimplementasi ')
    }

    async delete ( id, transaction ){
        throw new Error('Methode bulkDelete harus diimplementasi ')
    }
}

module.exports = UsersDatabaseEntities