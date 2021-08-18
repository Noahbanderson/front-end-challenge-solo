export type Representative = {
  name: string
  party: Party
  state: string
  district: string
  phone: string
  office: string
  link: string
}

export type Party = 'Democrat' | 'Republican'
