let str="ABCCDA" //unique = BD | dublicate = AC
let unique = ""
let dublicate = []
for(let i=0;i<str.length;i++){
    let count=0
    for(let j=0;j<str.length;j++){
        if(str[i] == str[j]){
            count++
        }
    }
    if(count==1){
        unique += str[i]
    }
    else{
        // dublicate += str[i]
        if(!dublicate.includes(str[i])){
            dublicate.push(str[i])
        }
    }
}
console.log(unique,dublicate.join(""))

// Prices of keyboards
// Prices of USB drives
// A budget
// You must buy exactly 1 keyboard + 1 USB drive
// Total cost should be ≤ budget
// Among all valid combinations, choose the maximum possible total
function getMoneySpent(keyboards, drives, b) {
    let result=-1
    for(let keyboard of keyboards){
        for(let drive of drives){
            if(keyboard+drive <= b && result<keyboard+drive){
                result=keyboard+drive
            }
        }
    }
    return result
}