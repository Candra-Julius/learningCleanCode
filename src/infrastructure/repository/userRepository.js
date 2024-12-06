const UsersDatabaseEntities = require("../../domain/entities/database/databaseEntities")

class UserRepository extends UsersDatabaseEntities{
    constructor(usersModels){
        this.usersModels = usersModels
    }
    getOne = async ( id, transaction ) => {
        return await this.usersModels.user.findOne({
            raw: true,
            plain: true,
            where: {id},
            transaction,
        })
    }
    getAll = async ( where, limit, offset, transaction ) => {
        return await this.usersModels.user.findAllandCount({
            raw: true,
            nest: true,
            where,
            limit,
            offset,
            transaction,
        })
    }
    bulkCreate = async ( data, transaction ) => {
        return await this.usersModels.user.bulkCreate(data, {
            transaction,
            returning:true,
            raw:true,
            nest:true
        })
    }
    findOrCreate = async ( where, defaults, transaction ) => {
        return await this.usersModels.user.findOrCreate({
            where,
            defaults,
            transaction,
        })
    }
    update = async ( payload, where, transaction ) => {
        return await this.usersModels.user.update(payload, {
            where,
            transaction,
            returning:true,
            raw:true,
            plain:true
        })
    }
    delete = async ( where, transaction ) => {
        return await this.usersModels.user.destroy({
            where,
            transaction,
        })
    }
}

module.exports = UserRepository