export type city = {
  slug: string
  name: string
  state: string
  phone?: string
  address?: string
}

export const cities: city[] = [
  { slug: 'hearing-aid-centres-delhi',         name: 'Delhi',         state: 'Delhi' },
  { slug: 'hearing-aid-centres-noida',         name: 'Noida',         state: 'Uttar Pradesh' },
  { slug: 'hearing-aid-centres-greater-noida', name: 'Greater Noida', state: 'Uttar Pradesh' },
  { slug: 'hearing-aid-centres-ghaziabad',     name: 'Ghaziabad',     state: 'Uttar Pradesh' },
  { slug: 'hearing-aid-centres-gurugram',      name: 'Gurugram',      state: 'Haryana' },
  { slug: 'hearing-aid-centres-faridabad',     name: 'Faridabad',     state: 'Haryana' },
  { slug: 'hearing-aid-centres-karnal',        name: 'Karnal',        state: 'Haryana' },
  { slug: 'hearing-aid-centres-ambala',        name: 'Ambala',        state: 'Haryana' },
  { slug: 'hearing-aid-centres-chandigarh',    name: 'Chandigarh',    state: 'Punjab' },
  { slug: 'hearing-aid-centres-hoshiarpur',    name: 'Hoshiarpur',    state: 'Punjab' },
  { slug: 'hearing-aid-centres-jalandhar',     name: 'Jalandhar',     state: 'Punjab' },
  { slug: 'hearing-aid-centres-ludhiana',      name: 'Ludhiana',      state: 'Punjab' },
  { slug: 'hearing-aid-centres-amritsar',      name: 'Amritsar',      state: 'Punjab' },
  { slug: 'hearing-aid-centres-bathinda',      name: 'Bathinda',      state: 'Punjab' },
  { slug: 'hearing-aid-centres-agra',          name: 'Agra',          state: 'Uttar Pradesh' },
  { slug: 'hearing-aid-centres-lucknow',       name: 'Lucknow',       state: 'Uttar Pradesh' },
  { slug: 'hearing-aid-centres-kanpur',        name: 'Kanpur',        state: 'Uttar Pradesh' },
  { slug: 'hearing-aid-centres-moradabad',     name: 'Moradabad',     state: 'Uttar Pradesh' },
  { slug: 'hearing-aid-centres-dehradun',      name: 'Dehradun',      state: 'Uttarakhand' },
  { slug: 'hearing-aid-centres-jaipur',        name: 'Jaipur',        state: 'Rajasthan' },
  { slug: 'hearing-aid-centres-vadodara',      name: 'Vadodara',      state: 'Gujarat' },
  { slug: 'hearing-aid-centres-gandhi-nagar',  name: 'Gandhinagar',   state: 'Gujarat' },
  { slug: 'hearing-aid-centres-surat',         name: 'Surat',         state: 'Gujarat' },
  { slug: 'hearing-aid-centres-ahmedabad',     name: 'Ahmedabad',     state: 'Gujarat' },
  { slug: 'hearing-aid-centres-anand',         name: 'Anand',         state: 'Gujarat' },
  { slug: 'hearing-aid-centres-jammu',         name: 'Jammu',         state: 'Jammu & Kashmir' },
  { slug: 'hearing-aid-centres-kolkata',       name: 'Kolkata',       state: 'West Bengal' },
  { slug: 'hearing-aid-centres-mumbai',        name: 'Mumbai',        state: 'Maharashtra' },
  { slug: 'hearing-aid-centres-thane',         name: 'Thane',         state: 'Maharashtra' },
  { slug: 'hearing-aid-centres-nasik',         name: 'Nashik',        state: 'Maharashtra' },
  { slug: 'hearing-aid-centres-kerala',        name: 'Kerala',        state: 'Kerala' },
  { slug: 'hearing-aid-centres-bengaluru',     name: 'Bengaluru',     state: 'Karnataka' },
]