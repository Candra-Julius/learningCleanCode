class Transaction {
    constructor(db) {
        this.db = db;
    }
    handleTransactions  = async function(handle) {
            const data = await this.db.transaction(async (transaction) => {
            const res = await handle(transaction);
            return res;
        });
        return data;
    }
}

module.exports = Transaction