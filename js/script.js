function palindrome(num, step = 0) {
    let numReverse = +(num.toString().split("").reverse().join(""));
    result = num + numReverse;
    if(num === numReverse){
        return {
            result: num,
            steps: step,
        };
    }
    return palindrome(result,step + 1);
}
console.log(palindrome(12));