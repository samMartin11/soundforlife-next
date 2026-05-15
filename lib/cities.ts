export type city = {
  slug: string
  name: string
  state: string
  phone?: string
  address?: string
}

export const cities: city[] = [
  { slug: 'delhi',         name: 'Delhi',         state: 'Delhi' },
  { slug: 'noida',         name: 'Noida',         state: 'Uttar Pradesh' },
  { slug: 'noida',         name: 'Greater Noida', state: 'Uttar Pradesh' },
  { slug: 'ghaziabad',     name: 'Ghaziabad',     state: 'Uttar Pradesh' },
  { slug: 'gurugram',      name: 'Gurugram',      state: 'Haryana' },
  { slug: 'faridabad',     name: 'Faridabad',     state: 'Haryana' },
  { slug: 'karnal',        name: 'Karnal',        state: 'Haryana' },
  { slug: 'ambala',        name: 'Ambala',        state: 'Haryana' },
  { slug: 'chandigarh',    name: 'Chandigarh',    state: 'Punjab' },
  { slug: 'hoshiarpur',    name: 'Hoshiarpur',    state: 'Punjab' },
  { slug: 'jalandhar',     name: 'Jalandhar',     state: 'Punjab' },
  { slug: 'ludhiana',      name: 'Ludhiana',      state: 'Punjab' },
  { slug: 'amritsar',      name: 'Amritsar',      state: 'Punjab' },
  { slug: 'bathinda',      name: 'Bathinda',      state: 'Punjab' },
  { slug: 'agra',          name: 'Agra',          state: 'Uttar Pradesh' },
  { slug: 'lucknow',       name: 'Lucknow',       state: 'Uttar Pradesh' },
  { slug: 'kanpur',        name: 'Kanpur',        state: 'Uttar Pradesh' },
  { slug: 'moradabad',     name: 'Moradabad',     state: 'Uttar Pradesh' },
  { slug: 'dehradun',      name: 'Dehradun',      state: 'Uttarakhand' },
  { slug: 'jaipur',        name: 'Jaipur',        state: 'Rajasthan' },
  { slug: 'vadodara',      name: 'Vadodara',      state: 'Gujarat' },
  { slug: 'gandhi-nagar',  name: 'Gandhinagar',   state: 'Gujarat' },
  { slug: 'surat',         name: 'Surat',         state: 'Gujarat' },
  { slug: 'ahmedabad',     name: 'Ahmedabad',     state: 'Gujarat' },
  { slug: 'anand',         name: 'Anand',         state: 'Gujarat' },
  { slug: 'jammu',         name: 'Jammu',         state: 'Jammu & Kashmir' },
  { slug: 'kolkata',       name: 'Kolkata',       state: 'West Bengal' },
  { slug: 'mumbai',        name: 'Mumbai',        state: 'Maharashtra' },
  { slug: 'thane',         name: 'Thane',         state: 'Maharashtra' },
  { slug: 'nasik',         name: 'Nashik',        state: 'Maharashtra' },
  { slug: 'kerala',        name: 'Kerala',        state: 'Kerala' },
  { slug: 'bengaluru',     name: 'Bengaluru',     state: 'Karnataka' },
]