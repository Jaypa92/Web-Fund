// A function that takes the minimum value of an array and puts it in the front

function minToFront(arr){
    newArr = [];
    min = arr[0];
    for(var i = 0; i < arr.length; i++){
        if(arr[i] < min){
            min = arr[i];
        }
    }
    newArr.push(min);
    for(var i = 0; i < arr.length; i++){
        if(arr[i] != min){
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
console.log(minToFront([2,8,9,4,1]));