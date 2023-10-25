// function stair(n){
//     // let space = ' '
//     // let multStr = hash.repeat(n)
//     for(let i = 1; i <= n; i++){
//         let spaces = n - i;
//         // space.repeat(spaces);
//         // console.log(`${space}#\n`)
//         console.log(' '.repeat(spaces) + '#'.repeat(i))
//     }
//     // return multStr
// }
// console.log(stair(4))

const miniMaxSum =(arr) => {
    let minSum = 0;
    let maxSum = 0;
    let maxNum = Math.max(...arr)
    let minNum = Math.min(...arr)
    
    function hasDups(a){
        const noDups = new Set(a);
        return a.length !== noDups.size;
    }

    if(hasDups(arr) === true){
        for(let i = 0; i < arr.length; i++){
            minSum += arr[i];
            maxSum += arr[i];
        }
    }

    const arrNoMax = arr.filter(function(num){
        return num != maxNum
    })
    const arrNoMin = arr.filter(function(num){
        return num != minNum
    })
    // console.log(arrNoMin)
    //MinSumLoop
    for(let i = 0; i < arrNoMax.length; i++){
        minSum += arrNoMax[i]
    }
    //MaxSumLoop
    for(let i = 0; i < arrNoMin.length; i++){
        maxSum += arrNoMin[i]
    }
    console.log(minSum, maxSum)

}
console.log(miniMaxSum([5,5,5,5]))