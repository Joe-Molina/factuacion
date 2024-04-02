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
            className='flex flex-col gap-2  bg-neutral-800 p-3 text-neutral-300 '>
            <h3>crear producto</h3>
            <input type="text" name='nombre' onChange={(e) => setnombre(e.target.value)} placeholder='nombre' className='bg-neutral-700 p-1 rounded-md '/>
            <input type="text" name='descripcion' onChange={(e) => setadescripcion(e.target.value)} placeholder='descripcion' className='bg-neutral-700 p-1 rounded-md '/>
            <input type="text" name='precio' onChange={(e) => setprecio(e.target.value)} placeholder='precio' className='bg-neutral-700 p-1 rounded-md '/>
            <input type="submit" className='bg-slate-600 rounded-sm p-1'/>
        </form>
    </div>
  )
}
