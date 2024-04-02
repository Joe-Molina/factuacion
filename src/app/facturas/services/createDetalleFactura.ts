export async function CreateDetalle(data: any) {
  const res = await fetch("/api/facturas/detallesFactura", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const datos = await res.json();
  console.log(datos);
}
