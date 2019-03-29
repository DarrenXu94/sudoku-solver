# Sudoku Solver backend logic

Run in dev

`npm run dev`

Run in prod (essentially just makes JS files from TS)

`npm run prod`

## How it solves the Sudoku

Using recursion it brute force checks every spot with an available number. It will keep filling the board out until it gets stuck, then it will go back to the previous spot and choose a different number.