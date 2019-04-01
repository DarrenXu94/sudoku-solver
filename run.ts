import { SudokuSolver, printBoardPretty } from './index'
import { Board9x9 } from './types'

let typeBoard = [
    [8,7,6,9,0,0,0,0,0],
    [0,1,0,0,0,6,0,0,0],
    [0,4,0,3,0,5,8,0,0],
    [4,0,0,0,0,0,2,1,0],
    [0,9,0,5,0,0,0,0,0],
    [0,5,0,0,4,0,3,0,6],
    [0,2,9,0,0,0,0,0,8],
    [0,0,4,6,9,0,1,7,3],
    [0,0,0,0,0,1,0,0,4]
]

let sudokuMedium: Board9x9<number> = [
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,3,0,8,5],
    [0,0,1,0,2,0,0,0,0],
    [0,0,0,5,0,7,0,0,0],
    [0,0,4,0,0,0,1,0,0],
    [0,9,0,0,0,0,0,0,0],
    [5,0,0,0,0,0,0,7,3],
    [0,0,2,0,1,0,0,0,0],
    [0,0,0,0,4,0,0,0,9]
]

const cb = (resultBoard: Board9x9<number>) => {

    printBoardPretty(resultBoard)
}

let resultBoard = SudokuSolver(sudokuMedium, cb)
