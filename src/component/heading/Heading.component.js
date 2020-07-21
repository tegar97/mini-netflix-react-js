import React from 'react'
import HeadingStyle from './Heading.module.css'
function Heading() {
    return (
        <div className={HeadingStyle.textBox}>
            <h1 className={HeadingStyle.heading}>MOVIE SEARCH</h1>
        </div>
    )
}

export default Heading
