// lib/metadata.ts
import type { Metadata } from 'next'
//import { cities } from './cities'

// export async function generateCityMetadata(
// name: string, 
// state: string,
//  p0: string, 
//  { params }: { params: Promise<{ slug: string} >} ): Promise<Metadata> {
//   const { slug } = await params
//   const city = cities.find((c) => c.slug === slug)
//   if (!city) return {}
//   return {
//     title: `Hearing Aid Centre in ${city.name}`,
//     description: `SFL Hearing Solutions in ${city.name}, ${city.state}. Free hearing test, expert audiologists, Signia & Phonak hearing aids.`,
//     alternates: { canonical: `https://www.soundforlife.in` }
//   }
// }


// export function generateBrandMetadata(brandName: string, slug: string): Metadata {
//   return {
//     title: `${brandName} Hearing Aids in India`,
//     description: `Explore ${brandName} hearing aids at SFL Hearing Solutions. Free trial available across 30+ cities in India.`,
//     alternates: {
//       canonical: `https://www.soundforlife.in/${slug}`,
//     },
//   }
// }

export function generateCityMetadata(
  name: string,
  state: string,
  slug: string
): Metadata {
  return {
    title: `Hearing Aid Centre in ${name}`,
    description: `SFL Hearing Solutions in ${name}, ${state}. Free hearing test, expert audiologists, Signia & Phonak hearing aids.`,
    alternates: {
      canonical: `https://www.soundforlife.in/${slug}`,
    },
  }
}

export function generateBrandMetadata(
  brandName: string,
  slug: string
): Metadata {
  return {
    title: `${brandName} Hearing Aids in India`,
    description: `Explore ${brandName} hearing aids at SFL Hearing Solutions. Free trial available across 30+ cities in India.`,
    alternates: {
      canonical: `https://www.soundforlife.in/${slug}`,
    },
  }
}