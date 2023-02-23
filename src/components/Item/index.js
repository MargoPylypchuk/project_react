import React,{satIsClick, useState} from 'react'
import '../../App.css'

function Item({ user,relations }) {
    const [isClick, satIsClick] = useState(false)

    const getRelashionUser = () =>{
        // console.log(user.relations)
        satIsClick(!isClick)
        
    }
    console.log(relations)
    
    return(
        <div className={relations.includes(user.id) ? 'item green'  : 'item'  }onClick={getRelashionUser}>
            {user.content} 
        </div>
    )
}

export default Item
