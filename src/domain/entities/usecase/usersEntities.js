class UsersUseCaseEntity {
    async getOneById ( id ) {
        throw new Error('Methode harus diimplementasi')
    }
    async getAll ( user, page, limit, offset ) {
        throw new Error('Methode harus diimplementasi')   
    }
    async post ( full_name, username, email, password ) {
        throw new Error('Methode harus diimplementasi')
    }
    async patch ( id, full_name, username, email ){
        throw new Error('Methode harus diimplementasi')
    }
    async delete ( id ){
        throw new Error('Methode harus diimplementasi')
    }
}
