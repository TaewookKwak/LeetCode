// function mySqrt(x: number): number {
//     if(x === 0) return x
//     // number : 1
//     for(let i = 1; i <= x; i++){
//         // 1 <= 9 && 4 > 9
//         // 4 <= 9 && 9 > 9
//         // 9 <= 9 && 16 > 9
//         if(i * i <= x && (i+1) * (i+1) > x ){
//             return i
//         } 
//     }
// };


// 뉴턴 랩슨 법
// function mySqrt(x: number): number {
//     let result = x;
//     let precision = 0.00001;
//     while (Math.abs(x - result * result) > precision) {
//         result = (result + x / result) / 2
//     }
//     return Math.floor(result)
// };

// 이진 탐색
function mySqrt(x: number): number {
    let low = 0 // 0, 3, 4
    let high = x  // 10, 4, 3
 
    // true, true , true, true, false
    while (low <= high) {
        const mid = Math.floor((low + high) / 2) // 5, 2, 3, 4
        const sqrOfMid = mid * mid // 25, 4, 9, 16
        // false, true, true, false
        if (sqrOfMid <= x) {
            // If the squared midpoint is less than or equal to the target,
            // update the lower bound to search on the right side.
            low = mid + 1 // 3, 4
        }
        else {
            // If the squared midpoint is greater than the target,
            // update the upper bound to search on the left side.
            high = mid - 1 // 4, 3
        }
    }

    return high 

};
