export async function CreateFactura(data: any) {
  const res = await fetch("/api/facturas", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const datos = await res.json();
  return datos;
}
