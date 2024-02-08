// Input: nums = [0,1,2,2,3,0,4,2], val = 2

function removeElement(nums: number[], val: number): number {
    let k = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            // 0 !== 2
            // 1 !== 2
            // 2 === 2
            // 2 === 2
            // 3 !== 2
            // 0 !== 2
            // 4 !== 2
            // 2 === 2
            nums[k] = nums[i];
            // 0 = 0 [0,1,2,2,3,0,4,2]
            // 1 = 1 [0,1,2,2,3,0,4,2]
            // 2 = 3 [0,1,3,2,3,0,4,2]
            // 3 = 0 [0,1,3,0,3,0,4,2]
            // 4 = 4 [0,1,3,0,4,0,4,2]

            k++;
            // 1
            // 2
            // 3
            // 4
            // 5
        }
    }
    return k;
};
