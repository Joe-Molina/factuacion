'use client'

import React from 'react'

//@ts-ignore
function FacturaCard({DescripcionFactura, cliente, createdAt, detallesFactura, id,admin_creador, }) {

    console.log(detallesFactura)

  return (
    <div className='text-white p-3 m-3 bg-slate-800 w-96 rounded-md shadow-lg'>

      <div className='flex justify-between px-1'>
      <h2>{cliente.nombre + ' ' + cliente.apellido}</h2>
        <p>nro factura: {id}</p>
      </div>
      <div className='bg-slate-700 p-3 shadow-inner rounded-sm'>
        <p>descripcion: {DescripcionFactura}</p>
        <p> fecha: {createdAt.toLocaleString()}</p>
        <p>facturado por: {admin_creador.username}</p>
      </div>

        <div>
        <div className='flex'>
                <p className=' w-32'>cantidad</p>
                <p className=' w-32'>producto</p>
                <p className=' w-32'>precio</p>
            </div>


          <div className='bg-slate-700 p-3 shadow-inner rounded-sm'>
          {detallesFactura.map(
            //@ts-ignore
            (detalle, index) => (
            <div key={index} className='flex'>
                <p className=' w-32'>{detalle.cantidad}</p>
                <p className=' w-32'>{detalle.producto.nombre}</p>
                <p className=' w-32'>{detalle.producto.precio}</p>
            </div>
          ))}
          </div>

          
        </div>

    </div>
  )
}

export default FacturaCard