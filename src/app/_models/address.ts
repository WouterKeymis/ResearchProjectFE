export interface IAddress {
  id: number
  streetName: string
  houseNumber: number
  postCode: string
  city: string
}

export class Address implements IAddress {
  id: number
  streetName: string
  houseNumber: number
  postCode: string
  city: string

}
