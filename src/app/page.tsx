import React from 'react'
import Facturas from './components/Facturas';

export default function Home() {

  return (
    <div className="flex flex-col items-center h-[calc(100%-6rem)] bg-zinc-900 m-4 rounded-md">
    
    <h1 className='text-3xl font-bold text-white my-3 shadow-xl'>Facturas</h1>
    
    <Facturas/>

      
    </div> 
  );
}
