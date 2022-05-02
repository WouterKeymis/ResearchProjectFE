import { Address } from "./address"
import { Pet } from "./pet"

export interface IPerson {
  id: number
  firstName: string
  lastName: string
  age: number
  gender: string
  married: boolean
  customerSince: Date
}

export class Person implements IPerson {
  id: number
  firstName: string
  lastName: string
  age: number
  gender: string
  married: boolean
  customerSince: Date
}

export class PersonGraphQl {
  id: number
  firstName: string
  lastName: string
}

export class PersonWithDetailsGraphQl {
  id: number
  firstName: string
  lastName: string
  age: number
  gender: string
  married: boolean
  customerSince: Date
  addresses: Array<Address>
  pets: Array<Pet>
}
