'use client'

import React, { useEffect, useState } from 'react'

export function Productos() {
  let [productos, setproductos] = useState([])

    useEffect(() => {

      fetch('/api/productos')
      .then(response => response.json())
      .then(data => {setproductos(data)})
      .catch(error => console.log(error));


    }, [])

    console.log(productos)
  return (
    <>
    <p className='mt-3 text-neutral-300'>Productos registrados</p>
    <article className='my-2 bg-neutral-800 text-neutral-300 p-1 px-4 flex justify-start w-full '>
        <h3 className='w-32 mr-2'>nombre</h3>
        <p className=' w-32 mr-2'>precio</p>
        <p className=' '>descripcion</p>
        </article>
    <div className='flex flex-wrap'>
      {
        productos.map((producto: any, index) => (
          <article className='bg-neutral-800 text-neutral-300 p-1 px-4 flex justify-start w-full border-b border-b-neutral-900' key={index}>
            <h3 className='w-32 mr-2 max-h-6 overflow-hidden '>{producto.nombre}</h3>
            <p className='overflow-hidden w-32'>{producto.precio}$</p>
            <p className='w-32 mr-2 max-h-6 overflow-hidden '>{producto.descripcion}</p>
          </article>
        ))
      }
    </div>
    </>
  )
}