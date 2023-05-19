// A function that returns a given array with the given index position popped

function removeAt(arr, x){
    var newArr = [];
    for(var i = 0; i < arr.length; i++){
     if(i != x){
        newArr.push(arr[i]);
     }
    }
   return newArr;
}


console.log(removeAt([5,4,2,8,9], 2));