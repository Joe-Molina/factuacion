'use client'

import React from 'react'
import {signOut} from 'next-auth/react'
import Link  from 'next/link'
import { redirect } from 'next/navigation'

export function ButtonSignOut() {

  return (
    
       <button className='mr-4  text-zinc-200 shadow-sm bg-zinc-700 hover:bg-slate-700 transition px-3 py-1 text-sm rounded-sm' onClick={() => {signOut(); redirect('/')}}>Cerrar Sesion</button>       
   
    

  )
}

export function ButtonSignIn() {

  return (
    
       <Link className=' text-zinc-200 shadow-sm bg-zinc-700 hover:bg-slate-700 transition px-3 py-1 text-sm rounded-sm' href='/auth/login'>iniciar sesion</Link>
   
    

  )
}