//Img
const xyz = 3.9374232323523532523;
console.log(xyz.toFixed(3))   //3.937

// 1.
// input = [1,2,3,4,5]
// Minimum sum = 1 + 2 + 3 + 4 = 10 (exclude 5)
// Maximum sum = 2 + 3 + 4 + 5 = 14 (exclude 1)

function miniMaxSum(arr) {
    let min = arr[0]
    let max = arr[0]
    let total=0
    for(let i=0;i<arr.length;i++){
        if(max<arr[i]){
            max=arr[i]
        }
        if(min>arr[i]){
            min=arr[i]
        }
        total+=arr[i]
    }
    console.log(total-max,total-min)
}

miniMaxSum([1,2,3,4,5])

//2.
// candles = [3,1,2,3]
// The tallest candles are 4 units high. There are 2 candles with this height, so the function should return 2.

function birthdayCakeCandles(candles) {
    let max=candles[0]
    // let count=0
    let count=1
    // for(let i=0;i<candles.length;i++){
    for(let i=1;i<candles.length;i++){
    //    if(max<candles[i]){
    //     count=0
    //     max=candles[i]
    //    } 
    //    if(max == candles[i]){
    //     count++
    //    }
         if(max<candles[i]){
            max=candles[i]
            count=1
         }
         else if(max === candles[i]){
            count++
         }
    }
    return count

}
console.log(birthdayCakeCandles([3,1,2,3]))


// 3.
// Complete the TIMECONVERSION function with the following parameter(s):
// String s: a time in  12 hour format
// return string : the time in 24 hour format

function timeConversion(s) {
    let period = s.slice(-2)
    let time = s.slice(0,-2)
    let arr = time.split(":")
    if(period == "PM" && arr[0]!="12"){
        arr[0] = Number(arr[0])+12
    }
    else if(period == "AM" && arr[0]=="12"){
            arr[0] = "00"
    }
    let result = `${arr[0]}:${arr[1]}:${arr[2]}`
    return result

}
console.log(timeConversion("07:05:45PM"))

// 4.
//  84 round to 85 (85 - 84 is less than 3)
//  29  do not round (result is less than 38)
//  57 do not round (60 - 57 is 3 or higher)

function gradingStudents(grades) {
    return grades.map(grade => {
        if (grade < 38) return grade;
        const nextMultiple = Math.ceil(grade / 5) * 5;
        return (nextMultiple - grade) < 3 ? nextMultiple : grade;
    });
}
function gradingStudents(grades) {
    return grades.map(grade => {
        if (grade < 38) return grade;
        const remainder = grade % 5;
        // remainder 0 → already multiple of 5 (no change)
        // remainder 3 or 4 → difference to next multiple is < 3 → round up
        if (remainder === 3 || remainder === 4) {
            return grade + (5 - remainder);
        }
        return grade;
    });
}
function gradingStudents(grades) {
    return grades.map(grade => {
        if (grade < 38 || grade % 5 === 0) return grade; // fix: 38 not 37

        const digits = String(grade).padStart(2, '0'); // fix: handles single digits
        const unitDigit = Number(digits[1]);            // fix: convert to Number

        if (unitDigit >= 3 && unitDigit <= 4) return grade + (5 - unitDigit);  // round to x5
        if (unitDigit >= 8 && unitDigit <= 9) return grade + (10 - unitDigit); // round to x0
        return grade;
    });
}

//5. LongFactorials
// 25! = 15511210043330985984000000
// 100! = 93326215443944152681699238856266700490715968264381621468592963895217599993229915608941463976156518286253697920827223758251185210916864000000000000000000000000
function extraLongFactorials(n) {
    let result=BigInt(1);
    for(let i=BigInt(n);i>0n;i--){
        result *= i
    }
    console.log(result.toString())
}
extraLongFactorials(25)


//6.
// 11 2 4  
// 4 5 6
// 10 8 -12

// 11
//    5
//      -12   [11+5-12 = 4]
//      4    
//    5
// 10         [10+5+4 = 19]
// Output ===> |4-19| = 15 
function diagonalDifference(arr) {
    console.log(arr)
    let a = 0;
    let b = arr.length-1;
    let leftToRight = 0 
    let RightToLeft = 0
    for(let i=0;i<arr.length;i++){
            leftToRight += arr[i][a]
            RightToLeft += arr[i][b]
        a++
        b--
    }
    let result = leftToRight-RightToLeft
    return Math.abs(result)
}
function diagonalDifferenceCleaner(arr) {
    let leftToRight = 0;
    let rightToLeft = 0;

    for (let i = 0; i < arr.length; i++) {
        leftToRight += arr[i][i]; // primary diagonal
        rightToLeft += arr[i][arr.length - 1 - i]; // secondary diagonal
    }

    return Math.abs(leftToRight - rightToLeft);
}


// 7
//  input = [1 2 3 4 5 4 3 2 1 3 4]
//  output = 3 ({ '1': 2, '2': 2, '3': 3, '4': 3, '5': 1 })
function migratoryBirds(arr) {
    let result = {}
    for(let i=0;i<arr.length;i++){
        if(result[arr[i]] === undefined){
            result[arr[i]] = 1
        }
        else {
            result[arr[i]]++
        }
    }
    let max=-1
    let output=0
    for(let key in result){
        if(result[key]>max){
            max=result[key]
            output=Number(key)
        }
    }
    return output
}
