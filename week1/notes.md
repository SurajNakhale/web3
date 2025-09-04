# Why Blockchains?

**Inflating Currencies**  
Central banks can print more money, leading to inflation.

**Inflation Issues**  
Printing money and distributing it to everyone causes inflation, reducing the value of money.

**Random Bailouts**  
Governments bail out failing institutions, creating unfair economic conditions.

**Need for Better Currency**  
A currency that is open, transparent, and immune to arbitrary printing is essential.

**Fractional Reserve Banking**  
Banks only keep a fraction of depositors' money on hand, which can lead to financial instability.

**Currency Depreciation**  
Traditional currencies lose value over time due to inflation.

**Lack of Backing**  
Modern currencies are not backed by tangible assets like gold or silver.

**Recommended Watching**  
*The Big Short* (film) provides insight into financial crises and the need for better financial systems.

---

# What is Blockchain?

Blockchain is a **decentralized** and **distributed digital ledger** that records transactions across many computers, ensuring **data security** and **transparency**.

It operates without a central authority, using **cryptographic techniques** to verify and add new transactions.

---

## Main Characteristics of Blockchain

- **Decentralization**  
  Blockchain is managed across multiple nodes (machines), ensuring no single entity controls the data.  
  Each node stores the entire blockchain, providing access to all data.

- **Immutability**  
  Once data is recorded, it cannot be easily altered or deleted, ensuring integrity.

- **Transparency**  
  All transactions are visible to all participants, promoting openness and trust.

- **Consensus Mechanisms**  
  Nodes follow mechanisms (e.g., Proof of Work, Proof of Stake) to validate and add transactions.

---

## Purpose of Blockchain

Blockchain aims to create a network where:

- Any person or organization can participate.
- No single person or organization can control the process.
- Transactions are **secure**, **transparent**, and **tamper-proof** without a central authority.

---

# How to Create a New Currency with Blockchain

There is a need for **trustless**, **anonymized**, and **decentralized** forms of money.

Blockchain solves this for us.

---

## Key Points

- **Avoiding Central Ownership**  
  Centralized control can lead to misuse and lack of transparency.  
  Blockchain distributes control among nodes.

- **Trustless System**  
  No need to trust a central authority.  
  Transactions are verified by consensus.

- **Anonymization**  
  Supports anonymized transactions.  
  User privacy is protected while maintaining system-wide transparency.

- **Decentralization**  
  Operates on a network of nodes, preventing control by any single entity.  
  Reduces the risk of manipulation or failure.

> By leveraging these principles, blockchain allows for secure, transparent, and decentralized currencies.

---

## 💡 Resources

- [Bitcoin - But how does bitcoin actually work? (YouTube)](https://www.youtube.com)
- [Bitcoin Whitepaper - Bitcoin: A Peer-to-Peer Electronic Cash System](https://bitcoin.org/bitcoin.pdf)

---

# Hashing

**Definition**  
Transforms input data of any size into a fixed-size string of characters.

---

## Properties of Hashing

- **Deterministic**  
  Same input always produces the same output.

- **Fast Computation**  
  Hash values can be quickly verified.

- **Pre-image Resistance**  
  Difficult to reverse-engineer the input from the output.

- **Avalanche Effect**  
  Small changes in input drastically change the output.

- **Collision Resistance**  
  Hard to find two inputs producing the same hash.

---

## Example: SHA-256

- **Secure Hash Algorithm** (256-bit)  
  Produces a **32-byte hash** from any input.

💡 Try it online: [SHA256 - Online Tools](https://emn178.github.io/online-tools/sha256.html)

---

## Hashing vs. Encryption

- **Hashing**
  - Converts data into a fixed-size string.
  - Irreversible.
  - Used for data integrity (e.g., password storage, file verification).

- **Encryption**
  - Converts data into a different format.
  - Reversible using a key.
  - Used for confidentiality (e.g., secure communication).

---

# How Does Blockchain Work?

---

## Blocks

Data is stored in **blocks**.

Each block contains:

- A list of transactions.
- A timestamp.
- A cryptographic hash of the previous block.

---

## Chain

Blocks are linked together in chronological order, forming a **chain** — hence, *blockchain*.

💡 Try this visual: [Blockchain Demo (andersbrownworth.com)](https://andersbrownworth.com/blockchain)

---

# Important Terms

---

## Nonce

A **unique number** miners find to produce a valid hash.

Ensures the resulting hash meets the blockchain's difficulty conditions.

---

## Finding Nonce

- **Miners** produce blocks.
- Higher **compute power** increases the chance of mining the next block.
- Used to calculate the correct nonce.

---

## Nonce and Proof of Work (PoW)

Nonce is used with the block's data to find a valid hash.

This process is called **Proof of Work**.

---

## Consensus Mechanism

Ensures agreement on the blockchain’s state and transaction validity.

Acts as a **rulebook** for validating blocks and transactions.

---

## Proof of Work (PoW)

- A type of consensus mechanism.
- Involves solving complex math problems to find the nonce.
- Secures and validates transactions on the blockchain.
