// Import Keypair from Solana web3.js
import { Keypair } from "@solana/web3.js";
import nacl from "tweetnacl";

// Generate a new wallet (keypair)
const keypair = Keypair.generate();

// Extract public and secret keys
const publicKey = keypair.publicKey.toString();   // Convert to string for readability
const secretKey = keypair.secretKey;              // Uint8Array (64 bytes)

// Display the keys
console.log("Public Key:", publicKey);
console.log("Secret Key:", secretKey);

//convert msg to uint8array cause it work on bytes array
const message = new TextEncoder().encode("hello");

//signed the array
const signature = nacl.sign.detached(message, secretKey);

console.log("signature: ", signature);

//verify
const result = nacl.sign.detached.verify(
    message,
    signature,
    keypair.publicKey.toBytes(),
);

console.log("Result: ", result);
