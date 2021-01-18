const stairCase = (n) => {
    //result 
    let result = "";
    //the row - first loop
    for (let i = 1; i <= n; i++) {
        //spaces - second loop
        for (let s = n - 1; s >= i; s--) {
            console.log(result += "")
        }
        //the height - third loop
        for (let h = 1; h <= i; h++) {
            console.log(result += "#");
        }
        console.log("\n")
    }
    console.log(result);
}

stairCase(6);


