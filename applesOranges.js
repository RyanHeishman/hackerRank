function applesOranges(s, t, a, b, apples, oranges){
    let appleCount = 0;
    let orangeCount = 0;

    for(let i = 0; i < apples.length; i++){
        if(apples[i] + a >= s && apples[i] + a <= t){
            appleCount++;
        }
    }
    for(let i = 0; i < oranges.length; i++){
        if(oranges[i] + b >= s && oranges[i] + b <= t){
            orangeCount++;
        }
    }
    // console.log(`${appleCount} ${orangeCount}`)
    console.log(appleCount)
    console.log(orangeCount)

}
console.log(applesOranges(7,10,4,12,[2,3,-4],[3,-2,-4]))