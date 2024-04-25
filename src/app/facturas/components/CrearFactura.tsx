'use client'

import React, { useEffect, useState } from 'react'
import { CreateDetalle } from '../services/createDetalleFactura'
import { CreateFactura } from '../services/createFactura'





export default function CrearFactura(id: any) {
  // estado que maneja la info de la factura
  const id_admin_creador = Number(id.id)
  const [id_cliente, setid_cliente] = useState(0)
  const [DescripcionFactura, setDescripcionFactura] = useState('')

  // estado que contiene los datos del estado
  const [id_producto, setProducto] = useState(2)
  const [cantidad, setcantidad] = useState(0)

  //Productos y clientes
  const [productos, setproductos] = useState([])
  const [clientes, setclientes] = useState([])

  //estado que contiene los detalles de la factura
  const [detalles, setdetalles] = useState([])
  const aggProducto = async (e: any) => {
    e.preventDefault();

    if (cantidad == 0) {
      return
    }

    const obtenerProducto = async (id: any) => {
      const res = await fetch(`/api/productos/${id}`)
      const datos = await res.json();
      return datos.nombre;

    }

    const nombreProducto = await obtenerProducto(id_producto)

    const obj = { id_producto, cantidad, nombreProducto }

    const NewDetalles = [...detalles, obj]

    //@ts-ignore
    setdetalles(NewDetalles)

    console.log('detalles')
    console.log(NewDetalles)
    console.log(detalles)
  }


  const obtenerProductos = async () => {
    try {
      const res = await fetch(`/api/productos`);
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      const datos = await res.json();
      setproductos(datos);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    obtenerProductos();
  }, []);

  const obtenerClientes = async () => {
    try {
      const res = await fetch(`/api/clientes`);
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      const datos = await res.json();
      setclientes(datos);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    obtenerProductos();
    obtenerClientes();
  }, []);

  console.log(productos)
  console.log(clientes)


  return (

    <div className='m-4 bg-neutral-900 h-full shadow-md rounded-xl p-5 text-neutral-100'>
      <h2 className='text-3xl font-semibold'>Crear Factura</h2>

      <form className='flex flex-col w-1/2 p-3'
        onSubmit={async (e) => {
          e.preventDefault();

          const NewFactura = await CreateFactura({
            id_admin_creador,
            id_cliente,
            DescripcionFactura,
          })

          const id_factura_referenciada = NewFactura.id

          //@ts-ignore
          detalles.map(async (detalle) => {
            await CreateDetalle({
              id_factura_referenciada,
              //@ts-ignore
              id_producto: detalle.id_producto,
              //@ts-ignore
              cantidad: detalle.cantidad,
            })

            location.reload()
          })


        }}>

        <label htmlFor="clientes" className='text-neutral-300 p-1' >Clientes</label>
        <select className='text-neutral-300 p-1 rounded-md mb-3 bg-neutral-800' required name="clientes" id="" onChange={(e) => { const number = Number(e.target.value); setid_cliente(number); console.log(number) }}>
          <option value=""></option>
          {
            clientes.map((cliente, index) => (
              <option value={
                //@ts-ignore
                cliente.id} className='text-neutral-300 p-1 rounded-md' key={index}> {cliente.nombre + ' ' + cliente.apellido} </option>

            ))
          }



        </select>

        <input type="text" className='placeholder:text-neutral-500 p-1 rounded-md bg-neutral-800' name='Descripcion' onChange={(e) => setDescripcionFactura(e.target.value)} placeholder='Descripcion...' />

        <section className='w-full flex '>


          <article className='w-1/2 flex flex-col  p-4 gap-3 mt-4 mr-3 rounded-md shadow-lg bg-neutral-800'>
            <p className='text-neutral-300'>Agregar Producto</p>

            <select className='bg-neutral-700 text-neutral-300 p-1 rounded-md' name="productos" id="" required onChange={(e) => { const number = Number(e.target.value); setProducto(number); }}>
              <option value="">escoge un producto</option>
              {
                productos.map((producto, index) => (
                  <option value={
                    //@ts-ignore
                    producto.id} className='text-neutral-300 p-1 rounded-md' key={index}>{producto.nombre}</option>

                ))
              }

            </select>
            <input className='bg-neutral-700 text-neutral-300 p-1 rounded-md w-20 placeholder:text-neutral-400' type="number" name='cantidad' onChange={(e) => { const number = Number(e.target.value); setcantidad(number) }} placeholder='cantidad' />

            <button className='bg-slate-400 p-1 m-1 rounded-sm' onClick={(e) => aggProducto(e)}>Agregar</button>
          </article>

          <article className='w-1/2 flex flex-col mt-4 max-h-96 overflow-auto'>
            <h3>productos incluidos</h3>
            <div className='flex w-full bg-neutral-950 p-1 rounded-md shadow-lg text-neutral-300 '>
              <p className='w-1/2 '>Producto</p>
              <p>cantidad</p>
            </div>
            {//@ts-ignore
              detalles.map((detalle, index) => (
                <div key={index} className='flex w-full'>

                  <p className='w-1/2 p-2'>{
                    //@ts-ignore
                    detalle.nombreProducto}</p>

                  <p className='w-1/2 p-2'> {
                    //@ts-ignore
                    detalle.cantidad}</p>

                </div>
              ))
            }
          </article>


        </section>

        <input type="submit" className='bg-green-800 w-32 p-1 rounded-md shadow-lg mt-2 ' />
      </form>

    </div>

  )

}
