import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

import { cities } from '@/lib/cities'
import { generateCityMetadata } from '@/lib/metadata'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return cities.map((city) => ({ slug: city.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    console.log()
  const { slug } = await params
  const city = cities.find((c) => c.slug === slug)
  if (!city) return {}
  return generateCityMetadata(city.name, city.state, `hearing-aid-centres/${city.slug}`)
}

export default async function CityPage({ params }: Props) {
  const { slug } = await params
  const city = cities.find((c) => c.slug === slug)
  if (!city) notFound()

//   return (
//     <main>
//       <h1>Hearing Aid Centre in {city!.name}</h1>
//       <p>SFL Hearing Solutions in {city!.name}, {city!.state}</p>
//     </main>
//   )

       return (
    <main>
      <h1>Hearing Aid Centre in {city.name}</h1>
      <p>
        SFL Hearing Solutions in {city.name}, {city.state}
      </p>
    </main>
  ) 

}