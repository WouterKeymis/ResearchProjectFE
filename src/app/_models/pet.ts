import { Vet } from "./vet"

export interface IPet {
  id: number
  name: string
  animalType: string
  veterinaryId: number
  veterinary: Vet
}

export class Pet implements IPet{
  id: number
  name: string
  animalType: string
  veterinaryId: number
  veterinary: Vet
}
