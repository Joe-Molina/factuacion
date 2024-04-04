export async function GETiniciosDeSesion() {
  const res = await fetch("/api/auditoria");

  const datos = await res.json();
  return await datos;
}
