import React,{useEffect,useState} from 'react'
import Axios from 'axios'
import '../css/recipeItem.css'
import {Link} from 'react-router-dom'

function Recipe() {
    const [recipe, setreceipe] = useState([])
    const [id,setId] = useState()
 
  useEffect(() => {
    Axios.get("http://starlord.hackerearth.com/recipe")
    .then(res=>{
        setreceipe(res.data)
    })

}, [])

const recipeitem = recipe.map(item=>(
   <Link to='/payment'  key={item.id} className='link'>
    <div className='card'>
       <h1 className='name'>{item.name}</h1>
       <p>{item.category} ({item.label})</p>
       <img className='img' alt='' src={item.image}/>
<p>{item.description}</p>

<p className='price'>Price: ${item.price}</p>
</div>
   </Link>
  


))



return (
        <div className='recipe'>
         
           {recipeitem}
           
           
        </div>
    )
}

export default Recipe
