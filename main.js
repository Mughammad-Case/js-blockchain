const SHA256 = require("crypto-js/sha256");

class Block {
  constructor(timestamp, data, previousHash = "") {
    this.index = 0; // Position of the block (not used yet)
    this.timestamp = timestamp; // Date and time block was created
    this.data = data; // What the block stores
    this.previousHash = previousHash; // Hash of the previous block
    this.hash = this.calculateHash(); // Current Block Hash
    this.nonce = 0; // Proof of Work counter
  }

  calculateHash() {
    return SHA256(
      this.index + this.previousHash + this.timestamp + this.data + this.nonce
    ).toString();
  } // Creates a SHA256 hash (digital fingerprint) on Block

  mineBlock(difficulty) {
    while (
      this.hash.substring(0, difficulty) !== Array(difficulty + 1).join("0")
    ) {
      this.nonce++;
      this.hash = this.calculateHash();
    }
    console.log("Block mined: " + this.hash);
  }
} // Proof of Work trying different nonces until the hash has enough leading zeros

class Blockchain {
  constructor() {
    this.chain = [this.createGenesisBlock()]; // Genesis block means Block #0 of the blockchain
    this.difficulty = 2; // How hard it is to find valid hash - hash must start with 2 zeros
  }

  createGenesisBlock() {
    return new Block("27/11/2025", "The Genesis Block", "0");
  } // Manually creates first block

  getLatestBlock() {
    return this.chain[this.chain.length - 1];
  } // Return to most recent block

  addBlock(newBlock) {
    newBlock.previousHash = this.getLatestBlock().hash;
    newBlock.hash = newBlock.calculateHash();
    newBlock.mineBlock(this.difficulty);
    this.chain.push(newBlock);
  } // Adds new block to the chain

  isChainValid() {
    // Verify if block is valid
    for (let i = 1; i < this.chain.length; i++) {
      const currentBlock = this.chain[i];
      const previousBlock = this.chain[i - 1];

      if (currentBlock.hash !== currentBlock.calculateHash()) {
        return false;
      } // Checks if hash matches the calculated hash

      if (currentBlock.previousHash !== previousBlock.hash) {
        return false;
      } // Checks if previousHash matches the hash of the previous block
    }

    return true;
  }
}

let jsChain = new Blockchain(); // Create a new blockchain

console.log("Mining block 1...");
jsChain.addBlock(new Block(new Date().toLocaleString(), { amount: 4 })); // Add first block

console.log("Mining block 2...");
jsChain.addBlock(new Block(new Date().toLocaleString(), { amount: 10 })); // Add second block

console.log(JSON.stringify(jsChain, null, 4)); // Prints blockchain in console
