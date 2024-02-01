function isPalindrome(x: number): boolean {
    const numToStr: string = x.toString();
    const strToArr: string[] = numToStr.split("");
    const lengthArr = strToArr.length
    let result = true
    loop: for (let index = 0; index < lengthArr; index++) {
        // 같거나, 빼기합이 1이하가 아닐 때
        if ((lengthArr - 1 - index) - index! <= 1) if (strToArr[index] !== strToArr[lengthArr - 1 - index]) {
            result = false
            break loop;
        }

    }


    return result
};

