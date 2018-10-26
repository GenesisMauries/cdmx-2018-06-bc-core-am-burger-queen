import React, { Component } from 'react';
import data from './menu/menu.js'


class Choose extends Component {
 
  desayuno = (datas) => {
    console.log(datas);

  }

  comida = (datas) => {
    console.log(datas);
  }

  render() {
    return (
      <div>
        <div>
          <button type="button" className="btn btn-warning btn-lg" onClick={() => this.desayuno(data[0])} >Desayuno</button>
          <button type="button" className="btn btn-warning btn-lg" onClick={() => this.comida(data[1])}>Comida</button>
        </div>
        <div className="card row align-items-center col col-lg-2 ">
          <div className="card-body">
            <h5 className="card-title">BurgerQueen</h5>
            <h6 className="card-subtitle mb-2 text-muted">Orden N°915</h6>
            <p className="card-text">Aqui tú orden</p>
          </div>
        </div>


      </div>

    );
  }
}

export default Choose;