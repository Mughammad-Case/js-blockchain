const SHA256 = require("crypto-js/sha256");

class Block {
  constructor(timestamp, data, previousHash = "") {
    this.index = 0;
    this.timestamp = timestamp;
    this.data = data;
    this.previousHash = previousHash;
    this.hash = this.calculateHash();
    this.nonce = 0;
  }

  calculateHash() {
    return SHA256(
      this.index + this.previousHash + this.timestamp + this.data + this.nonce
    ).toString();
  }

  mineBlock(difficulty) {
    while (
      this.hash.substring(0, difficulty) !== Array(difficulty + 1).join("0")
    ) {
      this.nonce++;
      this.hash = this.calculateHash();
    }
    console.log("Block mined: " + this.hash);
  }
}

class Blockchain {
  constructor() {
    this.chain = [this.createGenesisBlock()]; // Genesis block means Block #0 of the blockchain or root of the entire blockchain
    this.difficulty = 2;
  }

  createGenesisBlock() {
    return new Block("27/11/2025", "The Genesis Block", "0");
  }

  getLatestBlock() {
    return this.chain[this.chain.length - 1];
  }

  addBlock(newBlock) {
    newBlock.previousHash = this.getLatestBlock().hash;
    newBlock.hash = newBlock.calculateHash();
    newBlock.mineBlock(this.difficulty);
    this.chain.push(newBlock);
  }

  isChainValid() {
    for (let i = 1; i < this.chain.length; i++) {
      const currentBlock = this.chain[i];
      const previousBlock = this.chain[i - 1];

      if (currentBlock.hash !== currentBlock.calculateHash()) {
        return false;
      }

      if (currentBlock.previousHash !== previousBlock.hash) {
        return false;
      }
    }

    return true;
  }
}

let jsChain = new Blockchain();

console.log("Mining block 1...");
jsChain.addBlock(new Block(new Date().toLocaleString(), { amount: 4 }));

console.log("Mining block 2...");
jsChain.addBlock(new Block(new Date().toLocaleString(), { amount: 10 }));

console.log(JSON.stringify(jsChain, null, 4));
