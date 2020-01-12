var sentence = "I love learning software development";

for (var i=0; i < sentence.length; i++) {
    if(sentence[i] !== " "){
        console.log(sentence[i]);
    }
}

//Code Along: Adding every positive integer less than n to sum
var n = 25;
var sum = 0;
for (var i=0; i < n; i++) {
sum = sum + i;
}