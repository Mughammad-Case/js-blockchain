# 🧱 JS Blockchain - My First Blockchain Built in JavaScript

This is a basic blockchain implementation I built in Javascript to understand the core concepts behind how blockchains work.
The project helped me understand the core pieces deeply - hashing, linking, mining, immutability and validation - while simultaneously sharpening my Javascript skills.

---

## 📚 What I've Learnt About Blockchain

Building this from scratch helped me understand:

### **1. How Blocks Work**

Each block stores:

- a timestamp
- data
- previous block's hash
- its own hash
- a nonce (for Proof of Work)

I leant that every block depends on the previous block - this creates the chain structure


### 🔐 **2. Hashing and Immutability**

I used **SHA256** to generate a unique hash for each block.

I learnt that:

- even the smallest change in data completely changes the hash
- this makes blockchain tamper-proof
- if the data is modified, the chain detects it instantly


### ⛏️ **3. Proof of Work (Mining)**

I implemented a simple mining algorithm where the block keeps trying different "nonce" values until it's hash starts with two zeros ("00").

This helped me understand:

- why mining takes time
- how difficulty affects the system


### ✅ **4. Chain Validation**

I learnt how to verify the chain by:

- checking if stored hashes match recalculated hashes
- checking if each block correctly points to the previous block

If either of the checks failed, then the chain is invalid.

---

## 🖥️ How This Project Helped My JS Skills:

- Working with **classes** and **constructors**
- Understanding "this" in class-based code
- Using external libraries ("crypto-js")
- JSON serialization with "JSON.stringify()"
- Using loops, logic checks and string manipulation

It also helped me build real world systems instead of just learning syntax.

---

## 🚀 How to Run This Project

- [ ] Install <a href="https://nodejs.org/en/download/current" target="_blank" rel="noopener noreferrer">Node.js</a>
- [ ] Install dependencies `npm install crypto-js`
- [ ] Run the blockchain file `node main.js`

You should see blocks being mined in the terminal, each with it's own hash + nonce.

---

## 🫂 Contributing

If you'd like to contribute:

1. Fork the repo
2. Create a new branch
3. Make your changes
4. Submit a pull request

_Suggestions, issues, optimizations, or new ideas are always welcome 😊._

---

## 📄 License

MIT - free to use, remix or learn from.

---

## ⭐ If You Like This Project

Give the repo a star on Githib - it helps with visibility and motivates me to keep building!

This repo will grow as my skills evolve.

---
