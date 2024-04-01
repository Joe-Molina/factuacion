'use client'
import Link from "next/link";


export default function Home() {

  return (
    <div className="flex flex-col justify-center items-center">
     <h1 className="bg-slate-200 px-10 py-3 mb-4 border border-blue-200 rounded-md">facturas</h1>
     <Link href='/auth/login' className="rounded-md bg-slate-300 hover:bg-slate-400 transition px-5 py-2">iniciar session</Link>
      
    </div> 
  );
}
