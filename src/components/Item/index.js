import React from 'react'

function Item({ text }) {
    console.log(text)
    return(
        <div>
            <div> {text === undefined ? 'standart text' : text}</div>
        </div>
    )
}

export default Item
