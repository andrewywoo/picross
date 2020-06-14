import React from 'react'
import Box from '../Box/Box'

const Grid = (props) => {
    const { grid, handleBoxChange } = props
    return grid.map((row, rowIndex) => {
        return (
            <div key={rowIndex} className="row">
                {row.map((checkVal, boxIndex) => {
                    return (
                        <Box
                            key={'' + rowIndex + boxIndex}
                            checked={checkVal}
                            clicked={() =>
                                handleBoxChange([rowIndex, boxIndex])
                            }
                        ></Box>
                    )
                })}
            </div>
        )
    })
}

export default Grid
