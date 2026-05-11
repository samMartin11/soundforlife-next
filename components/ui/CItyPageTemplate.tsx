type City = {
  slug: string
  name: string
  state: string
}

export default function CityPageTemplate({ city }: { city: City }) {
  return (
    <div>
      <h1>Hearing Aid Centre in {city.name}</h1>
      <p>{city.name}, {city.state}</p>
    </div>
  )
}
