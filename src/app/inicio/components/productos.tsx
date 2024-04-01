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
    <div className='flex flex-wrap'>
      {
        productos.map((producto: any) => (
          <article className='m-2 bg-slate-50 w-44 p-2 flex flex-col justify-center rounded-sm'>
            <h3 className='border-b '>{producto.nombre}</h3>
            <p className='border-b '>descripcion: {producto.descripcion}</p>
            <p className='border-b '>precio: {producto.precio}$</p>
          </article>
        ))
      }
    </div>
  )
}