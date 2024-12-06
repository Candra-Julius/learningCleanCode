class UsersModels {
    constructor( db, type) {
        this.db = db
        this.type = type 
    }
    user = ( ) => {
        const users = this.db.define('users', {
        id: {
            type: this.type.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        full_name: this.type.STRING,
        username: this.type.STRING,
        email: this.type.STRING,
        password: this.type.STRING,
        created_at: this.type.DATE,
        updated_at: this.type.DATE,
    }, {
        freezeTableName: true,
        timestamps: false
    });

    users.removeAttribute('id');
    }

}

module.exports = UsersModels