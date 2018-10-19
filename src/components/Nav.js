import React from 'react';
import './css/Nav.css';
import Choose from './Choose'


const Nav = props => {
  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#top">
          <img id = 'photo' src={props.userPhoto} width="40" height="40" alt="fotoDePerfil" />
          {props.userName}
        </a>
        <button type="button" className="btn btn-secondary" onClick={props.out}>Salir</button>
      </nav>
      <Choose/>
    </div>
  );
}

export default Nav;