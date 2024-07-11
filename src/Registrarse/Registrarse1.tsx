import React from 'react'
import './Registrarse.css'
import { TextField } from '@mui/material'
import facebook from '../IMG/facebook.png'
import google from '../IMG/google.png'
import crecemos from '../IMG/crecemos.png'
import { IoEye } from "react-icons/io5";

type Props = {}

const Registrarse1 = (props: Props) => {
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
  <div className='textfield' style={{position:"relative"}}>
      <center><TextField  label="Correo" type='text' variant='outlined' style={{position: "relative",  top: "5vh",
                 width: "35vw" }}/> </center>
      <center><TextField  label="Usuario" type='text' variant='outlined' style={{position: "relative", top: "10vh",
                 width: "35vw" }}/></center>
      <center><TextField  label="Contraseña" type='password' variant='outlined' style={{position: "relative",  top: "15vh",
                 width: "35vw" }}/> </center>
      <center><button className='iniciesesion' style={{position:"relative", backgroundColor:"blue", borderRadius:"20px", border:"none",
                       top:"20vh", height:"6vh", width:"22vw"}}>
          <a href='/Eleccion' style={{backgroundColor:"blue",textDecoration: "none", color: "white", fontSize:"100%",fontWeight:"bold"}}>
            Inicia Sesión
          </a>
      </button> </center>       
      </div>
      <div className='ojito-registrarse'><IoEye /></div>
  </div>

  <div className='botones' style={{backgroundColor:"white", border:"none"}}>
  <center><a href="https://www.facebook.com/Meta" style={{position:"relative"}}>
          <img className='face' style={{position:"relative", width:"450px",border:"none", top:"3vh"}}
          
          src={facebook}/>
        </a></center>

        <center><a href='/https://www.google.com' style={{position:"relative"}}>
          <img className='goog' style={{position:"relative",width:"450px", border:"none",top:"7vh"}} 
          src={google}/>
        </a></center>
  </div>
  </div> 
</div>

)
}

export default Registrarse1