import React from 'react'
import './Box.css'

const Box = (props) => {
    return (
        <div
            className={props.checked ? 'box_checked' : 'box_unchecked'}
            onClick={props.clicked}
            onContextMenu={() => console.log('right click!')}
            //onMouseDown={props.clicked}
            //onMouseUp={props.clicked}
        ></div>
    )
}

export default Box
