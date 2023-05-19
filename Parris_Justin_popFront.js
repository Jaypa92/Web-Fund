// A function that pops the first value of an array

function popFront(arr){
    var newArr =[]
    var temp = arr[0]
    for(var i = 1; i < arr.length; i++){
newArr.push(arr[i]);
    }
    return newArr;
console.log(newArr)
}

console.log(popFront([5,7,1,9,3]));