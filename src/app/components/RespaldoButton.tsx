'use client'

import React from 'react'

const crearRespaldo = () => {
    fetch('/api/respaldo')
    alert('respaldo creado exitosamente')
}

export function RespaldoButton() {
    return (
        <button onClick={crearRespaldo} className='hover:text-slate-400  transition '>Crear Respaldo de Bd</button>
    )
}
