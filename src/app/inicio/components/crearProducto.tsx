'use client'
import React, { useState } from 'react'
import { CreateProduct } from '../services/createProduct'

export function CrearProducto(id: any) {

 const [nombre, setnombre] = useState('')
 const [descripcion, setadescripcion] = useState('')
 const [precio, setprecio] = useState('')

 const id_admin_creador = Number(id.id)

  return (
    <div>
        <h3>crear producto</h3>
        <form 
        onSubmit={async (e) => {
            e.preventDefault();

            console.log(
                nombre,
                descripcion,
                precio,
                id_admin_creador)

            await CreateProduct({
                id_admin_creador,
        nombre,
        descripcion,
        precio,
            })

            
            location.reload()
        }}
        className='flex flex-col gap-2 w-44'>
            <input type="text" name='nombre' onChange={(e) => setnombre(e.target.value)} placeholder='nombre'/>
            <input type="text" name='descripcion' onChange={(e) => setadescripcion(e.target.value)} placeholder='descripcion'/>
            <input type="text" name='precio' onChange={(e) => setprecio(e.target.value)} placeholder='precio'/>
            <input type="submit" />
        </form>
    </div>
  )
}
