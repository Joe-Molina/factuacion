import React, { use } from 'react'
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { getServerSession } from 'next-auth';
import { CrearCliente } from './components/crearCliente';
import { Clientes } from './components/clientes';
import { CrearProducto } from './components/crearProducto';
import { Productos } from './components/productos';


async function page() {
    //@ts-ignore
    const session = await getServerSession(authOptions);
    //@ts-ignore
    const userId = session.user.id

    console.log(userId)
  return (
    <div className='flex justify-around'>
        <div className='w-1/2'>
          <CrearCliente id={userId} />
          <Clientes/>
        </div>
        <div className='w-1/2'>
          <CrearProducto id={userId}/>
          <Productos/>
        </div>
    </div>
  )
}

export default page