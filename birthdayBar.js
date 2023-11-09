// function birthdayBar(s,d,m){
//     let count = 0;

//     for(let i = 0; i < s.length; i++){
//         let sum = 0;
//         for(let j = i; j < i + m; j++){
//             if(i +m <= s.length){
//                 sum += s[j]
//             }
//         }
//         if (d === sum){
//             count++
//         }
//     }
//     return count;
// }

// console.log(birthdayBar([2,2,1,3,2],4,2))

function dSP(n,k,ar){
    let count = 0;

    for(let i = 0; i < n; i++){
        for(let j = 0; j < n; j++){
            if((i < j) && (((ar[i] + ar[j]) % k) == 0)){
                count++
            }
        }
    }
    return count;
}

console.log(dSP(6,3,[1,3,2,6,1,2]))