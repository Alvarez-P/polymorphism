import ISearcher from 'searcher/searcher.interface'

class BinarySearcher implements ISearcher {
  constructor(private numbers: number[]) {
    this.numbers = this.numbers.sort((a, b) => a - b)
  }

  search(number): number {
    let low = 0,
      high = this.numbers.length - 1,
      mid: number
    while (low <= high) {
      mid = Math.floor((low + high) / 2)
      if (this.numbers[mid] === number) return mid
      else if (this.numbers[mid] < number) low = mid + 1
      else high = mid - 1
    }
    return -1
  }
}

export default BinarySearcher