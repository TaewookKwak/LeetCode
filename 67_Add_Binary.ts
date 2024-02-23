"1010"
"1011"
function addBinary(a: string, b: string): string {
  let result: string = "";

  let carry = 0;
  for(let i = a.length - 1, j = b.length - 1; i >= 0 || j >= 0; i--, j--) {
    const num1 = parseInt(a[i] ?? "0"); // string -> num
    const num2 = parseInt(b[j] ?? "0"); // string -> num
    const sum = num1 + num2 + carry;
    // 0 + 1 + 0 = 1
    // 1 + 1 + 0 = 2
    // 0 + 0 + 1 = 1
    // 1 + 1 + 0 = 2
    
    carry = sum > 1 ? 1 : 0;
    // 1 > 1 = 0
    // 2 > 1 = 1
    // 1 > 1 = 0
    // 2 > 1 = 1

    result = (sum % 2 === 1 ? "1" : "0") + result;
    // 1 % 2 = 1 === 1 = "1" + "" = "1"
    // 2 % 2 = 0 !== 1 = "0" + "1" = "01"
    // 1 % 2 = 1 === 1 = "1" + "01" = "101"
    // 2 % 2 = 0 !== 0 = "0" + "101" = "0101"
  }

  return carry ? "1" + result : result;
  // 1 ? "1" + "0101" = "10101"
};
