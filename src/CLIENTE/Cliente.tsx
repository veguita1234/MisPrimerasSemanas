import React from 'react'
import './Cliente.css'

const Cliente = () => {
  return (
    <div className='container'>
      <div className='izquierda'>
          <div className='titulo'>
            <p style={{position:"relative",fontFamily:"Abril Fatface",fontSize:"60px"}}>¿Qué necesitas?</p>
          </div>

      <div className='botones'>   

          <button className='productos'>
              <p style={{fontSize:"20px"}}>Productos</p>
          </button>

          <button className='servicios'>
              <p style={{fontSize:"20px", border:"0", margin:"0", padding:"0"}}>Servicios</p>
          </button>
      </div>  

      </div>

      <div className='derecha'>

      </div>

    </div>
  )
}

export default Cliente