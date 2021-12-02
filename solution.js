function divisibleSumPairs(n, k, ar) {
    // Write your code here
    let count = 0;
    for (let i = 0; i < n; i++) {
        ar.slice(i+1, n).filter((number) => {
            if((number + ar[i]) % k === 0) {
                count++;
            }
        })
    }
    return count;

}

