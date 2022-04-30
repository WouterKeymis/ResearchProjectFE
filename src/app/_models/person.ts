export interface IPerson {
  id: number
  firstName: string
  lastName: string
  age: number
}

export class Person implements IPerson {
  id: number
  firstName: string
  lastName: string
  age: number
}

export class PersonGraphQl {
  id: number
  firstName: string
  lastName: string
}
