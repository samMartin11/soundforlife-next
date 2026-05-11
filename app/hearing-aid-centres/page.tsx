import Link from 'next/link'

import { cities } from '@/lib/cities'

export default function HearingAidCentresPage() {
  return (
    <main>
      <h1>Hearing Aid Centres</h1>
      <p>Find an SFL Hearing Solutions centre near you.</p>

      <ul>
        {cities.map((city) => (
          <li key={city.slug}>
            <Link href={`/${city.slug}`}>
              {city.name}, {city.state}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  )
}
