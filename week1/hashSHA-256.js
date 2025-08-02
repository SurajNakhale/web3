// Import the built-in 'crypto' module in Node.js, which provides cryptographic functionalities
const crypto = require('crypto');


//define input string that needs to be hashed
const input = "100xdevs"

//creats a sha256 hash object ,updates it with theinput string and generate the hashto convert
//data into hashed object fixed length 
const hash = crypto.createHash('sha256').update(input).digest('hex');


//hex 256/4 = 64 it gives 64-character long hashed string
console.log(hash);
