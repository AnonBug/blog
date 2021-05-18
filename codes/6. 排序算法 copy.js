/*
 * @Author: zyc
 * @Description: file content
 * @Date: 2021-04-27 18:50:36
 * @LastEditTime: 2021-04-27 19:24:04
 */

/* 
    快排
*/

const quickSort = arr => {
    function sort(arr, low, high) {
        if (low >= high) return;
        let k = partition(arr, low, high)
        sort(arr, low, k - 1)
        sort(arr, k + 1, high)
    }

    function partition(arr, low, high) {
        let left = low + 1, right = high
        while (left < right) {
            while (arr[left] < arr[low] && left <= right) {
                left++
            }
            while (arr[right] > arr[low] && right >= left) {
                right--
            }
            if (left >= right) break;
            [arr[left], arr[right]] = [arr[right], arr[left]]
        }
        [arr[low], arr[right]] = [arr[right], arr[low]]
        return right
    }

    arr.sort((a, b) => Math.random() - 0.5)
    sort(arr, 0, arr.length - 1)
}

let arr = [3, 1, 5, 2, 6, 3, 6, 9]
quickSort(arr)
console.log(arr);