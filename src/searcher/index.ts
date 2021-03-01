import ISearcher from './searcher.interface'

class Searcher {
  constructor(private Searcher: ISearcher) {}

  search(number: number): string {
    return `Index of ${number}: ${this.Searcher.search(number)}`
  }
}

export default Searcher
