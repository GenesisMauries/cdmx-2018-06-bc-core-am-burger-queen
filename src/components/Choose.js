import React, { Component } from 'react';
import data from './menu/menu.js'


class Choose extends Component {
  desayuno = (datas) => {
    console.log(datas.Desayuno)
  }

  comida = (datas) =>{
    console.log(datas.Comida);
  }

  render() {
    //console.log(data.Desayuno)
    return (
      <div>
        <button type="button" className="btn btn-warning btn-lg" onClick={() => this.desayuno(data)}>Desayuno</button>
        <button type="button" className="btn btn-warning btn-lg" onClick  ={()=>this.comida(data)}>Comida</button>
      </div>
    );
  }
}
export default Choose;