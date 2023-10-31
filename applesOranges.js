// function applesOranges(s, t, a, b, apples, oranges){
//     let appleCount = 0;
//     let orangeCount = 0;

//     for(let i = 0; i < apples.length; i++){
//         if(apples[i] + a >= s && apples[i] + a <= t){
//             appleCount++;
//         }
//     }
//     for(let i = 0; i < oranges.length; i++){
//         if(oranges[i] + b >= s && oranges[i] + b <= t){
//             orangeCount++;
//         }
//     }
//     // console.log(`${appleCount} ${orangeCount}`)
//     console.log(appleCount)
//     console.log(orangeCount)

// }
// console.log(applesOranges(7,10,4,12,[2,3,-4],[3,-2,-4]))

// function kangaroos(x1, v1, x2, v2){
//     return v2 < v1 && (x2 - x1) % (v1 - v2) === 0 ? "YES" : "NO";
// }
// console.log(kangaroos(0,2,5,3))

// function twoSets(a, b){
//     let count = 0;
//     let index = 1;
//     let cloneA = a.splice(1, a.length);

//     while(a[0] * index <= b[0]){
//         if(cloneA.every(item => (a[0] * index) % item === 0)
//         &&
//         b.every(item => item % (a[0] * index) === 0)
//         ){
//             count++
//         }
//         index++
//     }
//     return count
// }
// console.log(twoSets([2,4],[16,32,96]))
const arr = [10, 5, 20, 20, 4, 5, 2, 25, 1]

function bBall(scores){
    let firstGame = scores[0]
    let currentHigh = scores[0];
    let currentLow = scores[0];
    let high = 0;
    let low = 0;
    let record = [0,0]
    for(let i = 0; i < scores.length; i++){
        if(scores[i] > firstGame && scores[i] > currentHigh){
            currentHigh = scores[i]
            record[0]++
        }
        else if(scores[i] < firstGame && scores[i] < currentLow){
            currentLow = scores[i]
            record[1]++
        }
    }
    return record
}
console.log(bBall(arr))