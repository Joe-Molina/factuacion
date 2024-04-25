

import Link from 'next/link'
import React from 'react'
import { ButtonSignIn, ButtonSignOut } from './buttonSignOut'
import { getServerSession } from 'next-auth'
import { authOptions } from '../api/auth/[...nextauth]/route'
import { RespaldoButton } from './RespaldoButton'

export default async function Header() {

  //@ts-ignore
  const session = await getServerSession(authOptions)

  return (
    <header className='w-full flex justify-around gap-6 bg-neutral-900 text-neutral-100 font-light h-14 items-center'>

      <Link href="/" rel="stylesheet">BillFactory</Link>

      {
        session ?

          <div className='flex gap-6'>
            <Link rel="stylesheet" href="/inicio" className='hover:scale-105 transition '>Crear</Link>
            <Link rel="stylesheet" href="/facturas" className='hover:scale-105 transition '>Crear Facturas</Link>
            <Link rel="stylesheet" href="/auditoria" className='hover:scale-105 transition '>Auditoria</Link>
            <RespaldoButton />
            <ButtonSignOut />
          </div>

          :

          <ButtonSignIn />
      }
    </header>
  )
}
