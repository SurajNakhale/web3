let bytes = new Uint8Array([0,255,127,128]); //max have 255 space to store an element  where 1 byte is group of 8 bits
 bytes[1] = 300;
console.log(bytes);


//binaryRepresentation characters
let name = 31902;
let name1 ="bro"
let binary = new TextEncoder().encode(name1);
console.log(binary);
 


let arr = new Uint8Array([31902]);
//binary of 31902 is 1111100 10011110
//it take only last 8 elements 
//and returns its vlaue
console.log(arr);
//10011110 = 158
