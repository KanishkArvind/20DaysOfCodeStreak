function processData(input) {
    //Enter your code here
    let arr = input.split("\n"), even, odd;

    arr.forEach((word) => {
        even = ""; 
        odd = "";

        if(!isNaN(word)) 
            return;

        Array.from(word).forEach((letter, index) => {

            if(index === 0 || index % 2 === 0) {
                even += letter;
            } else {
                odd += letter;
            }

        });
        
        console.log(even.concat(" ", odd));
    });
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
