# Simple Sudoku Solver

Run in dev

`npm run dev`

Run in prod (essentially just makes JS files from TS)

`npm run prod`


## Installation
```
$ npm install sudoku-solver-simple
```

## Usage
```javascript
const {SudokuSolver} = require('sudoku-solver-simple')

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

SudokuSolver(typeBoard, (res)=>console.log(res))
```

## Output

The solved board can be accessed with a callback function passed into the SudokuSolver as a parameter.

## How it solves the Sudoku

Using recursion it brute force checks every spot with an available number. It will keep filling the board out until it gets stuck, then it will go back to the previous spot and choose a different number.

## License
(The MIT License)

Copyright (c) 2019 sudoku-solver-simple AUTHORS 

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to
deal in the Software without restriction, including without limitation the
rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
sell copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
IN THE SOFTWARE.