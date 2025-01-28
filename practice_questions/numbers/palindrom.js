function checkPalindrom(num) {
    let temp = num;
    let reversed = 0;
    while (temp> 0) {
        let s = temp%10;
        reversed = reversed * 10 + s;
        temp = Math.floor(temp/10);
    }
    return reversed === num;
}

let isPalindrom = checkPalindrom(122);
console.log(isPalindrom);