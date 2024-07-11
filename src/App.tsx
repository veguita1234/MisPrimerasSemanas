import React from 'react';
import { BrowserRouter as Router,  Route, Routes } from 'react-router-dom';
import Principal from '../src/PRINCIPAL/Principal';
import Registrarse1 from './Registrarse/Registrarse1';
import Iniciosesion1 from './Iniciosesion/Iniciosesion1';
import Eleccion from './ELECCION/Eleccion';
import Cliente from './CLIENTE/Cliente';
import Trabajador from './TRABAJADOR/Trabajador';

import 'react-bootstrap'
import './App.css'



function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Principal />}/>
          <Route path='/Registrarse1' element={<Registrarse1 />}/>
          <Route path='/iniciosesion1' element={<Iniciosesion1 />}/>
          <Route path='/Eleccion' element={<Eleccion />}/>
          <Route path='/Cliente' element={<Cliente />}/>
          <Route path='/Trabajador' element={<Trabajador />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

