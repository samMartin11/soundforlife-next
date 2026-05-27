export type city = {
  slug: string
  name: string
  state: string
  lat: number
  lng: number
  phone?: string
  address?: string
}

export const cities: city[] = [
  { slug: 'delhi',        name: 'Delhi',        state: 'Delhi',           lat: 28.6139, lng: 77.2090 },
  { slug: 'noida',        name: 'Noida',        state: 'Uttar Pradesh',   lat: 28.5355, lng: 77.3910 },
  { slug: 'noida',        name: 'Greater Noida',state: 'Uttar Pradesh',   lat: 28.4744, lng: 77.5040 },
  { slug: 'ghaziabad',    name: 'Ghaziabad',    state: 'Uttar Pradesh',   lat: 28.6692, lng: 77.4538 },
  { slug: 'gurugram',     name: 'Gurugram',     state: 'Haryana',         lat: 28.4595, lng: 77.0266 },
  { slug: 'faridabad',    name: 'Faridabad',    state: 'Haryana',         lat: 28.4089, lng: 77.3178 },
  { slug: 'karnal',       name: 'Karnal',       state: 'Haryana',         lat: 29.6857, lng: 76.9905 },
  { slug: 'ambala',       name: 'Ambala',       state: 'Haryana',         lat: 30.3752, lng: 76.7821 },
  { slug: 'chandigarh',   name: 'Chandigarh',   state: 'Punjab',          lat: 30.7333, lng: 76.7794 },
  { slug: 'hoshiarpur',   name: 'Hoshiarpur',   state: 'Punjab',          lat: 31.5143, lng: 75.9115 },
  { slug: 'jalandhar',    name: 'Jalandhar',    state: 'Punjab',          lat: 31.3260, lng: 75.5762 },
  { slug: 'ludhiana',     name: 'Ludhiana',     state: 'Punjab',          lat: 30.9010, lng: 75.8573 },
  { slug: 'amritsar',     name: 'Amritsar',     state: 'Punjab',          lat: 31.6340, lng: 74.8723 },
  { slug: 'bathinda',     name: 'Bathinda',     state: 'Punjab',          lat: 30.2110, lng: 74.9455 },
  { slug: 'agra',         name: 'Agra',         state: 'Uttar Pradesh',   lat: 27.1767, lng: 78.0081 },
  { slug: 'lucknow',      name: 'Lucknow',      state: 'Uttar Pradesh',   lat: 26.8467, lng: 80.9462 },
  { slug: 'kanpur',       name: 'Kanpur',       state: 'Uttar Pradesh',   lat: 26.4499, lng: 80.3319 },
  { slug: 'moradabad',    name: 'Moradabad',    state: 'Uttar Pradesh',   lat: 28.8386, lng: 78.7733 },
  { slug: 'dehradun',     name: 'Dehradun',     state: 'Uttarakhand',     lat: 30.3165, lng: 78.0322 },
  { slug: 'jaipur',       name: 'Jaipur',       state: 'Rajasthan',       lat: 26.9124, lng: 75.7873 },
  { slug: 'vadodara',     name: 'Vadodara',     state: 'Gujarat',         lat: 22.3072, lng: 73.1812 },
  { slug: 'gandhi-nagar', name: 'Gandhinagar',  state: 'Gujarat',         lat: 23.2156, lng: 72.6369 },
  { slug: 'surat',        name: 'Surat',        state: 'Gujarat',         lat: 21.1702, lng: 72.8311 },
  { slug: 'ahmedabad',    name: 'Ahmedabad',    state: 'Gujarat',         lat: 23.0225, lng: 72.5714 },
  { slug: 'anand',        name: 'Anand',        state: 'Gujarat',         lat: 22.5645, lng: 72.9289 },
  { slug: 'jammu',        name: 'Jammu',        state: 'Jammu & Kashmir', lat: 32.7266, lng: 74.8570 },
  { slug: 'kolkata',      name: 'Kolkata',      state: 'West Bengal',     lat: 22.5726, lng: 88.3639 },
  { slug: 'mumbai',       name: 'Mumbai',       state: 'Maharashtra',     lat: 19.0760, lng: 72.8777 },
  { slug: 'thane',        name: 'Thane',        state: 'Maharashtra',     lat: 19.2183, lng: 72.9781 },
  { slug: 'nasik',        name: 'Nashik',       state: 'Maharashtra',     lat: 19.9975, lng: 73.7898 },
  { slug: 'kerala',       name: 'Kerala',       state: 'Kerala',          lat: 10.8505, lng: 76.2711 },
  { slug: 'bengaluru',    name: 'Bengaluru',    state: 'Karnataka',       lat: 12.9716, lng: 77.5946 },
]
