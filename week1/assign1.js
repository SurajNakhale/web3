//What if I ask you the following question — Give me an input string that 
// outputs a SHA-256 hash
//  that starts with 00000 . How will you do it?



const crypto = require('crypto');


function assign(prefix){
    let input = 0;
    while(true){
        let inputStr = "100xdevs"+input.toString();
        let hash = crypto.createHash('sha256').update(inputStr).digest('hex');
        if(hash.startsWith(prefix)){
        return {
            input: inputStr,
            hash: hash
        }
    }
    input++
}
}


const result = assign("00000");
console.log("input: "+result.input);
console.log("hashStr: "+result.hash);








