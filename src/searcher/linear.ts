import ISearcher from 'searcher/searcher.interface'

class LinearSearcher implements ISearcher {
  constructor(private numbers: number[]) {}
  
  search(number): number {
    for(let [index, num] of this.numbers.entries()) {
        if(num === number) return index
    }
    return -1
  }
}

export default LinearSearcher