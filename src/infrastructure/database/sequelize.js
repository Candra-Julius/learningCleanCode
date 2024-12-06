class Database {
    constructor(sequelize){
        this.sequelize = sequelize
        this.connection()
    }
    connection = () => {
        this.db = this.sequelize(process.env.DB_SCEM, process.env.DB_USER, process.env.DB_PASS, {
            dialect: process.env.DB_DIALECT,
            host: process.env.DB_HOST,
            port: process.env.DB_PORT,
            pool: {
                max: 300,
                min: 0,
                idle: 200000,
                acquire: 200000,
                evict: 1000,
            },
            dialectOptions: {
                statement_timeout: 60000
            },
            logging: false,
        });
        this.authenticate()
        this.addHook()
    }
    addHook = () => {
        this.db.addHook('afterConnect', async (connection) => {
            await connection.query("SET idle_in_transaction_session_timeout TO '1min'");
        });
    }
    authenticate = () => {
        this.db.authenticate()
        .then(() => {
            console.log('Connection database has been established successfully.');
        })
        .catch(err => {
            console.error('Unable to connect to the database:', err);
        });
    }
}

module.exports = Database;