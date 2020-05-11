import React from 'react'

function Skill_layout(props) {
    return (
        <>
        <li>
            <div className="title">{props.title}</div>
            <p className="para">{props.para} {<b>hello</b>}</p>
        </li>
        </>
    )
}

export default Skill_layout
