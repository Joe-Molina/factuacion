'use client'
import React, { useEffect, useState } from 'react'

//@ts-ignore
const HoraActual = (hora) => {
  console.log(hora)
    const StringADate = new Date(hora)
    return StringADate.toLocaleString()
}

//@ts-ignore
const GetUsuario = (id) => {
    
    

    return id
}


export function Auditoria() {
  let [auditoria, setauditoria] = useState([])

    useEffect(() => {

      fetch('/api/auditoria')
      .then(response => response.json())
      .then(data => {setauditoria(data)})
      .catch(error => console.log(error));


    }, [])

    console.log(auditoria)
  return (
    <>
      <p className='mt-20 text-neutral-300'>Inicios de Sesion</p>
        <article className='my-2 bg-neutral-900 text-neutral-300 p-1 px-4 flex justify-start w-full '>
        <h3 className='w-32 mr-2'>Usuario</h3>
        <p className=' w-60 mr-2 text-start'>Fecha y Hora de Coneccion</p>
        </article>
    <div className='flex flex-col overflow-auto '>
      {
      
        auditoria.map((audi: any, index) => (
          <article className=' bg-neutral-950 text-neutral-300 p-1 px-4 flex justify-start w-full border-b border-b-neutral-900' key={index}>
            <h3 className='w-32 mr-2 max-h-6 overflow-hidden'>{GetUsuario(audi.id_usuario)}</h3>
            <p className=' overflow-hidden'>{HoraActual(audi.createdAt)}</p>
          </article>
        ))
      }
    </div>
    </>
  )
}