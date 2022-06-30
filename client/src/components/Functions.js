export default class Functions {


    static factorial = n => n <= 0 ? 1 : n * this.factorial(n - 1);

    static gcd = (a, b) => b === 0 ? a : this.gcd(b, a % b)

    static sumArray = ar => ar.length ? ar.pop() + this.sumArray(ar) : 0

    static maxItem = arr => {
        let max = arr.shift()
        if (arr.length === 0) return max
        if (max > arr[0]) arr[0] = max;
        return this.maxItem(arr)
    }

    static maxItemIndex = (arr) => {
        let index = 0
        let max = arr[0]
        arr.map((item, i) => {
            if (max < item) {
                max = item
                index = i
            }
        })
        return index
    }

    static selectSort = arr => {
        let new_arr = [];
        let length = arr.length;
        let index
        for (let i = 0; i < length; i++) {
            index = this.maxItemIndex(arr)
            new_arr.unshift(arr[index])
            arr.splice(index, 1)
        }
        return new_arr
    }

    static binarySearch = (array, item) => {
        let min = 0
        let max = array.length - 1
        let middle
        while (min <= max) {
            middle = Math.floor((min + max) / 2)
            if (array[middle] === item) {
                return middle
            } else {
                if (item > array[middle]) {
                    min = middle + 1
                } else {
                    max = middle - 1
                }
            }
        }
        return null
    }

    static binarySearchRecursive(array, item, min, max) {
        if (min > max) return null
        let middle = Math.floor((min + max) / 2)
        if (array[middle] === item) return middle
        if (item > array[middle])
            min = middle + 1
        else
            max = middle - 1
        return this.binarySearchRecursive(array, item, min, max)
    }

    static binarySearchRecursiveMin(array, item, min, max) {
        let middle = Math.floor((min + max) / 2)
        return (min > max) ? null
            : (array[middle] === item) ? middle
                : (item > array[middle]) ? this.binarySearchRecursive(array, item, middle + 1, max)
                    : this.binarySearchRecursive(array, item, min, middle - 1)
    }

    static quickSort = arr => {
        if (arr.length < 2)
            return arr
        else {
            let pivot = arr[Math.floor(Math.random() * arr.length)]
            let left = [], right = []
            arr.map(item => {
                if (item < pivot) left.push(item)
                if (item > pivot) right.push(item)
            })
            return [...this.quickSort(left), pivot, ...this.quickSort(right)]
        }
    }

    static swapArrayElements = (arr, xp, yp) => {
        let temp = arr[xp];
        arr[xp] = arr[yp];
        arr[yp] = temp;
    }

    static bubbleSort = arr => {
        let i, j;
        let n = arr.length
        let swapped;
        for (i = 0; i < n - 1; i++) {
            swapped = false;
            for (j = 0; j < n - i - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    this.swapArrayElements(arr, j, j + 1);
                    swapped = true;
                }
            }
            if (swapped === false) break;
        }

        return arr
    }

}