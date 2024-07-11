import React from 'react'
import './Eleccion.css'
import crecemos from '../IMG/crecemos.png'


type Props ={}



const Eleccion = (props: Props) => {
  return (
    <div className='cuerpo'>

      <div className='titulo'>
          <p className='tueliges' style={{ fontSize:"720%", color:"gray", fontFamily:"Dancing Script"}}>Tú eliges</p>
      </div>

      <div className='centro'>
        <div className='fleximg'> 
          <a href='/Cliente'><img className='cliente' src='cliente.jpg'></img></a>
          <a href='/Trabajador'><img className='trabajador' src='trabajador.jpg' ></img></a>
        </div>
        <div className='flexpalabra'>
          <p translate="no" className='palabra'>OR</p>
        </div>

      <div className='palabras'>
      <p className='cli'>Cliente</p>
      <p className='tra'>Trabajador</p>
      </div>
      </div>
      
    </div>
    
  )
}

export default Eleccion

/*

      
fontFamily:"Grape Nuts",color:"gray"

      
      */