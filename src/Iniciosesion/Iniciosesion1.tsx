import React from 'react'
import './Iniciosesion.css'
import { TextField } from '@mui/material'
import facebook from '../IMG/facebook.png'
import google from '../IMG/google.png'
import crecemos from '../IMG/crecemos.png'
import { IoEye } from "react-icons/io5";

type Props = {}

const Iniciosesion1 = (props: Props) => {
  return (
    
<div className='prueba'>
  <div className='encabezado' style={{backgroundColor:"white"}}>
    <center>
      <img className='img' src={crecemos} />
    </center>
           <p className='text'>Inicio de sesión</p>
      
  </div>

   <div className='abajo'>
  <div className='texto' style={{backgroundColor:"white"}} >
  
      <center><TextField  label="Usuario" type='text' variant='outlined' style={{position: "relative",  top: "5vh",
                 width: "35vw" }}/> </center>
      <center><TextField  label="Contraseña" type='Password' variant='outlined' style={{position: "relative", top: "10vh",
                 width: "35vw" }} /></center>
      <center><button className='iniciesesion' style={{position:"relative", backgroundColor:"blue", borderRadius:"20px", border:"none",
                       top:"15vh", height:"6vh", width:"22vw"}}>
          <a href='/Eleccion' style={{backgroundColor:"blue",textDecoration: "none", color: "white", fontSize:"100%",fontWeight:"bold"}}>
            Inicia Sesión
          </a>
      </button> </center> 
      <div className='ojito-iniciarsesion'>< IoEye/> </div>      
      
  </div>

  <div className='botones' style={{backgroundColor:"white", border:"none"}}>
  <center><a href="https://www.facebook.com/Meta" style={{position:"relative"}}>
          <img className='face' style={{position:"relative", width:"450px",border:"none", top:"1vh"}}
          
          src={facebook}/>
        </a></center>

        <center><a href='/https://www.google.com' style={{position:"relative"}}>
          <img className='goog' style={{position:"relative",width:"450px", border:"none",top:"5vh"}} 
          src={google}/>
        </a></center>
  </div>
  </div> 
</div>



  )
}

export default Iniciosesion1