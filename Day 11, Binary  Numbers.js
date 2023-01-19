'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}



function main() {
    var n = parseInt(readLine());
    const countArray=[];
    let count=0;
    let inputBinary = n.toString(2).split('');
    inputBinary.forEach((digit, index)=>{
        if(digit==='1'){
            count++;
            if(index===inputBinary.length-1){
                countArray.push(count);
            }
        }else{
            countArray.push(count);
            count=0;
        }
    });
    console.log(countArray.sort((a,b)=>b-a)[0]);
}
