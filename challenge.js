function findDigits(n) {
    // Write your code here
    let count = 0;
    let num = "";
    num = n.toString();
    for (let i=0; i < num.length; i++) {
      if ( n % parseInt(num[i]) === 0) {
        count += 1;
      }
    }
    return count;
}
