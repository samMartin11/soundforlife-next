import { notFound, redirect } from 'next/navigation'
import type { Metadata } from 'next'

import { cities } from '@/lib/cities'
import { generateCityMetadata } from '@/lib/metadata'

type Props = {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  return cities.map((city) => ({
    slug: city.slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const city = findCityBySlug(slug)

  if (!city) {
    return {}
  }

  return generateCityMetadata(
    city.name,
    city.state,
    city.slug
  )
}

export default async function CityPage({ params }: Props) {
  const { slug } = await params
  const city = findCityBySlug(slug)

  if (!city) {
    notFound()
  }

  // redirect(`/${city.slug}`)
   return (
    <main>
      <h1>Hearing Aid Centre in {city!.name}</h1>
      <p>{city!.name}, {city!.state}</p>
    </main>
  )
}

function findCityBySlug(slug: string) {
  return cities.find(
    (item) =>
      item.slug === slug 
      // item.slug === slug.replace('hearing-aid-centre-', 'hearing-aid-centres-')
  )
}
