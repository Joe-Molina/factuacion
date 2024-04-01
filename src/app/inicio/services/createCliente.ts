export async function createCliente(data: any) {
  const res = await fetch("/api/clientes", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const datos = await res.json();
  console.log(datos);
}
