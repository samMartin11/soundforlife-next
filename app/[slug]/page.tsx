import { cities } from '@/lib/cities'
import { notFound, redirect } from 'next/navigation'
import type { Metadata } from 'next'
import CityPageTemplate from '@/components/ui/CItyPageTemplate'

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

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params
  const city = findCityBySlug(slug)

  if (!city) return {}

  return {
    title: `Hearing Aid Centre in ${city.name}`,
    description: `SFL Hearing Solutions in ${city.name}, ${city.state}. Free hearing test, expert audiologists, Signia & Phonak hearing aids.`,
    alternates: {
      canonical: `https://www.soundforlife.in/${city.slug}`,
    },
  }
}

export default async function CityPage({
  params,
}: Props) {
  const { slug } = await params
  const city = findCityBySlug(slug)

  if (!city) {
    notFound()
  }

  if (slug !== city.slug) {
    redirect(`/${city.slug}`)
  }

  return <CityPageTemplate city={city} />
}

function findCityBySlug(slug: string) {
  return cities.find(
    (item) =>
      item.slug === slug ||
      item.slug === slug.replace('hearing-aid-centre-', 'hearing-aid-centres-')
  )
}
