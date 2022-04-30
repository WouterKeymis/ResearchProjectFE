export interface IPet {
  id: number
  name: string
  animalType: string
}

export class Pet implements IPet{
  id: number
  name: string
  animalType: string

}
