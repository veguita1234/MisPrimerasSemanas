import React from 'react'
import './principal.css'
import { Row } from 'react-bootstrap'
import img from '../IMG/group-1.png'


type Props = {}

const BOXES = (props: Props) => {
  return(
    <div className='BOXES' >
    <div className="box1">
        <img className='img' src={img} />
      <input className="buscar" placeholder="¿Que servicios busca?"></input>
      <div className='botones'>
          
            <a className='inicio' href='/Iniciosesion1' style={{textDecoration: "none", color: "white"}}>Inicia sesión</a>
            <a className='registrar' href='/Registrarse1' style={{textDecoration: "none", color: "white"}}>Registrate</a>
          </div>
      </div>
    
    <div className='box2'>
    </div>
    
    </div>


  )
}
export default BOXES;