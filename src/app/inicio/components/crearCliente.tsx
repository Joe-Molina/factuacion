'use client'
import React, { useState } from 'react'
import { createCliente } from '../services/createCliente'

export function CrearCliente(id: any) {

 const [nombre, setnombre] = useState('')
 const [apellido, setapellido] = useState('')
 const [Domicilio, setdomicilio] = useState('')
 const [Cedula, setcedula] = useState('')

 const id_admin_creador = Number(id.id)

  return (
    <div className='max-h-64'>
        <form 
        onSubmit={async (e) => {
            e.preventDefault();

            console.log(
                nombre,
                apellido,
                Domicilio,
                Cedula,
                id_admin_creador)

            await createCliente({
                id_admin_creador,
        nombre,
        apellido,
        Domicilio,
        Cedula,
            })

            
            location.reload()
        }}
        className='flex flex-col gap-2 bg-neutral-800 p-3 text-neutral-300 '>
            <p className='text-neutral-300'>Crear cliente</p>
            <input type="text" name='nombre' onChange={(e) => setnombre(e.target.value)} placeholder='nombre' className='bg-neutral-700 p-1 rounded-md '/>
            <input type="text" name='apellido' onChange={(e) => setapellido(e.target.value)} placeholder='apellido' className='bg-neutral-700 p-1 rounded-md '/>
            <input type="text" name='domicilio' onChange={(e) => setdomicilio(e.target.value)} placeholder='domicilio' className='bg-neutral-700 p-1 rounded-md '/>
            <input type="text" name='cedula' onChange={(e) => setcedula(e.target.value)} placeholder='cedula' className='bg-neutral-700 p-1 rounded-md '/>
            <input type="submit" className='bg-slate-600 rounded-sm p-1'/>
        </form>
    </div>
  )
}
