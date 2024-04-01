'use client'

import React, { useEffect, useState } from 'react'

export function Clientes() {
  let [clientes, setclientes] = useState([])

    useEffect(() => {

      fetch('/api/clientes')
      .then(response => response.json())
      .then(data => {setclientes(data)})
      .catch(error => console.log(error));


    }, [])

    console.log(clientes)
  return (
    <div className='flex flex-wrap'>
      {
        clientes.map((cliente: any) => (
          <article className='m-2 bg-slate-50 w-44 p-2 flex flex-col justify-center rounded-sm'>
            <h3 className='border-b '>{cliente.nombre + ' ' + cliente.apellido}</h3>
            <p className='border-b '>domicilio: {cliente.Domicilio}</p>
            <p className='border-b '>cedula: {cliente.Cedula}</p>
          </article>
        ))
      }
    </div>
  )
}