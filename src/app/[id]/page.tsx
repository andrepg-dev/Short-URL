import { BASE_URL } from '@/constants/BASE_URL';
import { redirect } from 'next/navigation'

export default async function Page({ params }: { params: { id: string } }) {
  const data = await getDataFromRandomLink(params.id)

  redirect(data.urlProvider)

  return <p>Pagina a dirigir es esta {data.urlProvider}</p>
}

async function getDataFromRandomLink(id: string) {
  // consultar a mi página web si el link existe
  // Link de ejemplo: m6suk

  const res = await fetch(`${BASE_URL}/api/${id}`);
  const data = await res.json()
  return data
}

