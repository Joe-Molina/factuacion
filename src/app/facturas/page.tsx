import React from 'react'
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { getServerSession } from 'next-auth';
import CrearFactura from './components/CrearFactura';

export default async function Facturas() {
    //@ts-ignore
    const session = await getServerSession(authOptions);
    //@ts-ignore
    const userId = session.user.id

  return (


    <div className='h-[calc(100%-6rem)]'>
        <CrearFactura id={userId}/>
    </div>


  )
}
