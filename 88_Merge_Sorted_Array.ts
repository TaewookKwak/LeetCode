/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    let i: number = m - 1;
    let j: number = n - 1;
    let k: number = m + n - 1;

    // i 와 j 가 모두 0이거나 0보다 클 때 까지
    while (i >= 0 && j >= 0) {
        if (nums1[i] > nums2[j]) {
            nums1[k] = nums1[i]
            i--
            k--
        } else {
            nums1[k] = nums2[j]
            j--
            k--
        }
    }

    while (i >= 0) {
        nums1[k] = nums1[i];
        i--
        k--
    }

    while (j >= 0) {
        nums1[k] = nums2[j];
        j--
        k--
    }

};
