
import React  from "react"
import Item from './components/Item'

function App() {
    return(
        <div>
            <div>HOME</div>
            <Item/>
            <Item/>
            <Item text = {'Hello'}/>
            <Item/>
            <Item/>
            <Item/>
        </div>
    )
}

export default App
