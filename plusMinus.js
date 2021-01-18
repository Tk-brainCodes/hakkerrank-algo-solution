/*
1.Count the total number of positive elements in the array.
2.Count the total number of negative elements in the array.
3.Count the total number of zero elements in the array.
4.Divide the total number of positive elements, negative elements, and zero elements by the size of the array, to get the ratio.
5.Print the ratio of positive, negative, and zero elements in the array up to four decimal places.
*/


function plusMinus(arr) {
    let len = arr.length;
    //Step 1. 4. 5
    const getPositiveArray = () => {
        return arr.filter(item => item > 0).length / len;
    }
    //Step 2. 4. 5
    console.log(getPositiveArray().toFixed(6));
    const getNegativeArray = () => {
        return arr.filter(item => item < 0).length / len;
    }
    //Step 3. 4. 5
    console.log(getNegativeArray().toFixed(6));
    const getZeroArray = () => {
        return arr.filter(item => item == 0).length / len;
    }
    console.log(getZeroArray().toFixed(6));
}

plusMinus([-4, 3, -9, 0, 4, 1]);