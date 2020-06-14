import React, { useState, useEffect } from 'react'
import './Board.css'
import IndicatorRow from '../../component/IndicatorRow/IndicatorRow'
import Grid from '../../component/Grid/Grid'

const Board = (props) => {
    const [grid, setGrid] = useState([
        [false, false, false, false, false],
        [false, false, false, false, false],
        [false, false, false, false, false],
        [false, false, false, false, false],
        [false, false, false, false, false],
    ])
    const [indicators, setIndicators] = useState({ top: [], side: [] })

    const { puzzle } = props

    useEffect(() => {
        const gridSize = puzzle.length
        let row = Array(gridSize).fill(false)
        let emptyGrid = []

        for (let i = 0; i < gridSize; i++) {
            let newRow = [...row]
            emptyGrid.push(newRow)
        }

        // clears grid and recalculates indicators
        setGrid(emptyGrid)
        calculateAndSetIndicators()
    }, [puzzle])

    function calculateAndSetIndicators() {
        let top = []
        let side = []

        // logic for top row
        for (let i = 0; i < puzzle.length; i++) {
            let column = []
            let topCount = 0
            puzzle.forEach((r) => {
                if (r[i]) {
                    topCount++
                } else if (topCount) {
                    column.push(topCount)
                    topCount = 0
                }
            })
            // only push count if it isn't 0. this accounts for the last row of the column being true;
            if (topCount) {
                column.push(topCount)
            }
            // after counting indicator numbers. push to top and result topColumn.
            top.push(column)
            column = []
        }

        // logic for side row
        let sideCount = 0
        let row = []
        for (let i = 0; i < puzzle.length; i++) {
            puzzle[i].forEach((r) => {
                if (r) {
                    sideCount++
                } else if (sideCount) {
                    row.push(sideCount)
                    sideCount = 0
                }
            })
            if (sideCount) {
                row.push(sideCount)
                sideCount = 0
            }
            side.push(row)
            row = []
        }

        setIndicators({ top: top, side: side })
    }

    // sets new state when a box is clicked.
    function handleBoxChange(boxNumber) {
        let [row, column] = boxNumber

        let newGrid = [...grid]
        let boxValue = newGrid[row][column]
        // replace grid item with it's toggle value.
        newGrid[row].splice(column, 1, !boxValue)
        // update grid
        setGrid(newGrid)

        if (gameWinCheck(newGrid, puzzle)) {
            alert('You Win!')
        }
    }

    function gameWinCheck(currentGrid, solutionGrid) {
        for (let i = 0; i < currentGrid.length; i++) {
            for (let k = 0; k < currentGrid[i].length; k++) {
                if (currentGrid[i][k] !== solutionGrid[i][k]) {
                    return false
                }
            }
        }
        return true
    }

    return (
        <div className="game-board">
            <div className="topInd">
                <IndicatorRow
                    indicators={indicators.top}
                    orientation="horizontal"
                ></IndicatorRow>
            </div>
            <div className="sideInd">
                <IndicatorRow
                    className="sideInd"
                    indicators={indicators.side}
                    orientation="vertical"
                ></IndicatorRow>
            </div>
            <div className="board">
                <Grid grid={grid} handleBoxChange={handleBoxChange} />
            </div>
        </div>
    )
}

export default Board
