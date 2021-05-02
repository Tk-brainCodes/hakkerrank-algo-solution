function miniMaxSum(arr) {
    // Write your code here
    let sumOfArray = arr.reduce((a, b) => a + b);
    let minValue = sumOfArray - Math.min(...arr);
    let maxValue = sumOfArray - Math.max(...arr);
    console.log(maxValue, minValue);
}
