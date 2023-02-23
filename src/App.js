
import React,{useState}  from "react"
import Item from './components/Item'
import '././App.css'

const users = [
    {
      content: 'Frontend Misha',
      id: 'fe',
      relations: ['pm', 'be', 'ds'],
    },
    {
      content: 'Design Pasha',
      id: 'ds',
      relations: ['pm', 'fe'],
    },
    {
      content: 'Project Manager Sanya',
      id: 'pm',
      relations: ['ba', 'fe', 'be', 'ds'],
    },
    {
      content: 'Backend Grisha',
      id: 'be',
      relations: ['pm', 'fe', 'ba'],
    },
    {
      content: 'Business Analyst Sveta',
      id: 'ba',
      relations: ['pm'],
    },
  ]

function App() {
  const [count, setCount] = useState(0)
  const [relations,setRelations] = useState([])
  const addRel = (rel) =>{
    setRelations(rel)
  }
    return(
        <div className="app">
          {users.map((item)=>(
          <div key = {item.id} onClick ={()=>addRel(item.relations)} > 
               <Item   user = {item} relations ={relations} />
           
          </div>
           ))}
            
        </div>
    )
}

export default App
