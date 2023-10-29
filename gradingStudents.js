const arr = [73,67,38,33]

function gradingStudents(grades){

    let newArr = []

    for(let i = 0; i < grades.length; i++){
        let grade = grades[i]/5
        grade = Math.ceil(grade)*5
        
        if(grade - grades[i] < 3 && grades[i] >= 38){
            // newArr.push(grade)
            // console.log(grade)
            grades[i] = grade
        }
        else if(grade - grades[i] >= 3 || grades[i] < 38){
            // newArr.push(grades[i])
            // console.log(grades[i])
            grades[i] = grades[i]
        }
    }
    return grades
}

console.log(gradingStudents(arr))