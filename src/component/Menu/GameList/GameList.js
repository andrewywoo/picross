import React from 'react'

const GameList = (props) => {
    return (
        <>
            <h1>Easy</h1>

            <h1>Medium</h1>
            <button value="1" onClick={(e) => props.changePuzzle(e, 'easy')}>
                1
            </button>
            <button value="2" onClick={(e) => props.changePuzzle(e, 'easy')}>
                2
            </button>
            <h1>Hard</h1>
            <h1>Expert</h1>
        </>
    )
}

export default GameList
