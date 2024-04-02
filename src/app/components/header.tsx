import Link from 'next/link'
import React from 'react'

export default function Header() {


  return (
    <header className='w-full flex justify-center gap-6 bg-neutral-900 text-neutral-100 font-light h-14 items-center'>
        <Link rel="stylesheet" href="/inicio" className='hover:scale-105 transition '>Crear</Link>
        <Link rel="stylesheet" href="/facturas" className='hover:scale-105 transition '>Crear Facturas</Link>
    </header>
  )
}
