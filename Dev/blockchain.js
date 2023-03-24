function Blockchain() {
    this.chain = []; //store blocks
    this.newTransactions = []; // list of transaction
}

Blockchain.prototype.createNewBlock = function (nonce, previousBlockHash, hash) {
    const newBlock = {
        index: this.chain.length + 1,
        timestamp: Date.now(),
        transaction: this.newTransactions,
        nonce: nonce,
        hash: hash,
        previousBlockHash: previousBlockHash
    };

    this.newTransactions = []; // to clear the new transaction array
    this.chain.push(newBlock);

    return newBlock;

}


Blockchain.prototype.getLastBlock = function() {
    return this.chain[this.chain.length-1];
}


Blockchain.prototype.createNewTransaction = function(amount, sender, recipient){
    const newTransaction = {
        amount: amount,
        sender: sender,
        recipient: recipient
    };

    this.newTransactions.push(newTransaction);
}



module.exports = Blockchain;