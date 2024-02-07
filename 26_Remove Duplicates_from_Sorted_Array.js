function removeDuplicates(nums: number[]): number {
    if (nums.length === 0) return 0;
     let k: number = 1;

    for (let i = 1; i < nums.length; i++) {
       // 앞 뒤로 비교해서 같으면
        if (nums[i] !== nums[i - 1]) {
            nums[k] = nums[i];
            k++;
          
        } 
    }

    return k;
};
