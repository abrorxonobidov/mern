export default class Functions {

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

}