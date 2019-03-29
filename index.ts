import { Board } from './types'
let boardColsRows = 9;
let range = 10;

const isBoardFull = (board: Board) => {
    let i;
    let j;
    for (i = 0; i < boardColsRows; i++) { 
        for (j = 0; j < boardColsRows; j++) { 
            if (board[i][j] == 0) return false
        }        
    }
    return true
}

const possibleValues = (board: Board, i: number, j: number) => {
    let possibilityArray: any = {}
    let z;
    for (z = 1; z < range; z++) { 
        possibilityArray[z] = 0
    }

    // For horizontal rows
    let y;
    for (y = 0; y < boardColsRows; y++) { 
        if (board[i][y] != 0) {
            possibilityArray[board[i][y]] = 1
        }
    }

    // Vertical rows
    let x;
    for (x = 1; x < boardColsRows; x++) { 
        if (board[x][j] != 0) {
            possibilityArray[board[x][j]] = 1
        }
    }

    // For each square 3x3
    let k = 0
    let l = 0
    if (i >= 0 && i <= 2){
        k = 0
    } else if (i >= 3 && i <= 5){
        k = 3
    } else {
        k = 6
    }

    if (j >= 0 && j <= 2){
        l = 0
    } else if (j >= 3 && j <= 5){
        l = 3
    } else {
        l = 6
    }


    for (x = k; x < k + 3; x++) { 
        for (y = l; y < l + 3; y++) { 
            if (board[x][y] != 0) {
                possibilityArray[board[x][y]] = 1
            }
        }
    }

    for (z = 1; z < range; z++) { 
        if (possibilityArray[z] == 0){
            possibilityArray[z] = z
        } else {
            possibilityArray[z] = 0
        }
    } 

    return possibilityArray

}

const main = (board: Board) => {
    let i: number = 0;
    let j: number = 0;

    let possibilities: any = {}

    // Base case
    if (isBoardFull(board)) {
        printBoardPretty(board)
    } else {
        // Find first vacant spot
        let x, y;
        
        for (x = 0; x < boardColsRows; x++) { 
            for (y = 0; y < boardColsRows; y++) { 
                if (board[x][y] == 0) {
                    i = x;
                    j = y;
                    break;
                } else {
                    continue
                }
            }
        }

        // Get all possibilities for i,j
        possibilities = possibleValues( board, i , j )

        // Recurse
        let z
        for (z = 1; z < range; z++) { 
            if (possibilities[z] != 0) {
                board[i][j] = possibilities[z];
                main(board)
            }
        }
        board[i][j] = 0

    }
}

const printBoardPretty = (board: Board) => {
    let x, y;
        
    for (x = 0; x < boardColsRows; x++) { 
        if (x == 3 || x == 6) {
            console.log('***********')
        }
        let row = ''
        for (y = 0; y < boardColsRows; y++) { 
            if (y == 3 || y == 6) {
                row = row += '*'
            }
            row = row += board[x][y]
        }
        console.log(row)
    }
}

let typeBoard : Board = [
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

// console.log(board)
main(typeBoard)