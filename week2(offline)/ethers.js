import { ethers } from "ethers";

//generate a random wallet
const wallet = ethers.Wallet.createRandom();

//extract public private keys
const publickey = wallet.address;
const privatekey = wallet.privateKey;
console.log("*****************************************\n\n");
console.log("publickey: \n", publickey);
console.log("privatekey: \n", privatekey);



//message to sign
const message = "hello";

//sign the msg using wallet private key
const signature = await wallet.signMessage(message);
console.log("*****************************************\n\n");
console.log("signature: \n", signature);

//verify the signature
const result = ethers.verifyMessage(message, signature);

console.log("*****************************************");
console.log("recovered message: \n", result);
console.log("signature is valid: \n", result === publickey);
