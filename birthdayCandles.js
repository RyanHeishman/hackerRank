
const array = [3, 2, 1, 3]

function birthdayCandles(arr){
    
    let max = Math.max(...arr)
    let sum = 0;

    for(let i = 0; i < arr.length; i++){
        if( arr[i] === max ){
            sum++
        }
    }
    return sum
}

console.log(birthdayCandles(array))