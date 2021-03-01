import ISearcher from 'searcher/searcher.interface'

class BinarySearcher implements ISearcher {
  constructor(private numbers: number[]) {}

  sort() {
    return this.numbers.sort((a, b) => a - b)
  }
  
  search(number): number {
    const sortedArray = this.sort()
    let low = 0,
      high = sortedArray.length - 1,
      mid: number
    while (low <= high) {
      mid = Math.floor((low + high) / 2)
      if (sortedArray[mid] === number) return mid
      else if (sortedArray[mid] < number) low = mid + 1
      else high = mid - 1
    }
    return -1
  }
}

export default BinarySearcher