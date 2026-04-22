

const num = 12345;
//output = 54321

function digitExtraction(num) {
    let digit = "";
    let temp=num;
    while(temp>0){
        digit += temp % 10
        temp = Math.floor(temp/10);
    }
    console.log("revesed number is ",digit)
}
digitExtraction(num)


//output = 135 [Check whether 1, 2,3,4 and 5 are divisors of 12345. All 5 numbers divide evenly into 12345 so return 5]
function splitFilter(num){
    console.log(String(Math.abs(num)).split("").filter((d) => d !== 0 && num % d === 0).join("").length)
}
splitFilter(num)