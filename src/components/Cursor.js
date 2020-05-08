import React from 'react'

function Cursor(props) {
    return (
        <>
            <div className="cursor" style={{top: props.y - 15 + 'px', left: props.x - 15 + 'px', borderColor: props.color}}></div>
        </>
    )
}

export default Cursor
