import { prisma } from '@/app/libs/prisma'
import React from 'react'
import FacturaCard from './FacturaCard'

async function Facturas() {
  
  const facturas = async () => {
   const Facturas = await prisma.factura.findMany({
      include: {
        detallesFactura: {
          include: {
            producto: true, 
          }
        },
        cliente: true,
        admin_creador: true
        

      },
    })
    return Facturas
  }
 const Facturas = await facturas()

 console.log(Facturas)

  return (
    <div className='flex gap-10 flex-wrap justify-center overflow-auto'>

      {
        Facturas.map((fac, index) => (

           <FacturaCard key={index}
          //@ts-ignore
           {...fac} />
        ))
      }
    </div>
  )
}

export default Facturas