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
    let count=0
    for(let i=0;i<candles.length;i++){
       if(max<candles[i]){
        count=0
        max=candles[i]
       } 
       if(max == candles[i]){
        count++
       }
    }
    return count

}
console.log(birthdayCakeCandles([3,1,2,3]))