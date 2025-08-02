//What if I ask you that the input 
// string should start with 100xdevs ?
//  How would the code change?

const crypto = require('crypto');


function assign2(prefix){
    let input=0;
    while(true){
        let inputstr = `harkirat=> Raman| Rs 100
        Ram=> Ankit| RS 10`+input.toString();
        let hash = crypto.createHash('sha256').update(inputstr).digest('hex');
        if(hash.startsWith(prefix)){
            return{
                input: inputstr,
                hash: hash
            }
        }
        input++
    }
}



const result = assign2("00000");
console.log("input string: "+ result.input)
console.log("hash string:" + result.hash)