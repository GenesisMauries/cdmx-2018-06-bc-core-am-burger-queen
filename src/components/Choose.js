import React from 'react';
import data from './menu/menu.js'


const Choose = props => {
    
   console.log(data)
   
    


    
    return (
      <div>
        <button type="button" className="btn btn-warning btn-lg">Desayuno</button>
        <button type="button" className="btn btn-warning btn-lg">Comida</button>
      </div>
    );
  }
  
export default Choose;