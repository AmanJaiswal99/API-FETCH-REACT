import React from 'react'
import './App.css';
import Recipe from './components/Recipe'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Payment from './components/Payment'

function App() {
  return (
<Router>
<div className="App">
     <Route exact path='/'>
     <p className='heading'>Click to order</p>
      <Recipe/>
     </Route>
    
      <Route exact path='/payment' component={Payment}/>
    </div>
 
</Router>
     
    
  );
}

export default App;
