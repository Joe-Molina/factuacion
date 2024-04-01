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
    <div>
        <h3>crear Cliente</h3>
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
        className='flex flex-col gap-2 w-44'>
            <input type="text" name='nombre' onChange={(e) => setnombre(e.target.value)} placeholder='nombre'/>
            <input type="text" name='apellido' onChange={(e) => setapellido(e.target.value)} placeholder='apellido'/>
            <input type="text" name='domicilio' onChange={(e) => setdomicilio(e.target.value)} placeholder='domicilio'/>
            <input type="text" name='cedula' onChange={(e) => setcedula(e.target.value)} placeholder='cedula'/>
            <input type="submit" />
        </form>
    </div>
  )
}
