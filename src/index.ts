import LinearSearcher from './searcher/linear'
import BinarySearcher from './searcher/binary'
import Searcher from './searcher'

const mock = [1,4,7,3,9]
const searcher = new BinarySearcher(mock)
console.log(new Searcher(searcher).search(1))