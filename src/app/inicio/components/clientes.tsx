'use client'

import React, { useEffect, useState } from 'react'

const handleClick = async (id: any) => {
  const res2 = await fetch(`/api/clientes/${id}`, {
    method: "DELETE"
  }
  )
  const data2 = await res2.json()
  console.log(data2)
  //location.reload()
}

export function Clientes() {
  let [clientes, setclientes] = useState([])

  useEffect(() => {

    fetch('/api/clientes')
      .then(response => response.json())
      .then(data => { setclientes(data) })
      .catch(error => console.log(error));


  }, [])

  console.log(clientes)
  return (
    <>
      <p className='mt-3 text-neutral-300'>clientes registrados</p>
      <article className='my-2 bg-neutral-800 text-neutral-300 p-1 px-4 flex justify-start w-full '>
        <h3 className='w-32 mr-2'>Nombre</h3>
        <p className=' w-32 mr-2'>Documento</p>
        <p className=' '>domicilio</p>
      </article>
      <div className='flex flex-col overflow-auto '>
        {

          clientes.map((cliente: any, index) => (
            <article key={index} className=' bg-neutral-800 text-neutral-300 p-1 px-4 flex justify-start w-full border-b border-b-neutral-900'>
              <h3 className='w-32 mr-2 max-h-6 overflow-hidden'>{cliente.nombre + ' ' + cliente.apellido}</h3>
              <p className='w-32 mr-2 max-h-6 overflow-hidden'>{cliente.Cedula}</p>
              <p className=' overflow-hidden'>{cliente.Domicilio}</p>
            </article>
          ))
        }
      </div>
    </>
  )
}