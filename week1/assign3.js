// What if I ask you to find a nonce for the following input - 
// harkirat => Raman | Rs 100
// Ram => Ankit | Rs 10
// What if I ask you the following question — Give me an input string that outputs a SHA-256 hash that starts with 00000 . How will you do it?
// A: You will have to brute force until you find a value that starts with 00000

const crypto = require('crypto');

function assign3(prefix){
    let input = 0;
    while(true){
        let inputStr =
        `harkirat => Raman | Rs 100
         Ram => Ankit | Rs 10`+ input.toString();

        let hash = crypto.createHash('sha256').update(inputStr).digest('hex');
        
        if(hash.startsWith(prefix)){
            return{
                input: inputStr,
                hash: hash
            }
        }
        input++
    }


}



const result = assign3("00000");
console.log('input string: '+result.input)
console.log('hash string: '+result.hash)







