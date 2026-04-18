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