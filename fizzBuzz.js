// for numbers 1-100 prints "Fizz" if number is divisible by 3, "Buzz" if divisible by 5, and "FizzBuzz" if divisible by both
for(var i = 1; i <= 100; i++){
    if(i % 3 == 0 && i % 5== 0){
    console.log("FizzBuzz");
    }
else if(i % 3 == 0){
    console.log("Fizz");
}
else if(i % 5 ==0){
    console.log("Buzz");
}
else{
    console.log(i);
}
}