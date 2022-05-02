import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Address } from "../_models/address";
import { Person } from "../_models/person";
import { Pet } from "../_models/pet";
import { Vet } from "../_models/vet";


@Injectable({ providedIn: 'root'})
export class RestService {

  private baseUrl = 'https://localhost:44379/api/';
  constructor(private httpClient: HttpClient) { }

  getPersons(): Observable<Person[]> {
    return this.httpClient.get<Person[]>(this.baseUrl + 'Persons')
  }

  getAddresses(personId: number): Observable<Address[]> {
    return this.httpClient.get<Address[]>(this.baseUrl + 'Persons/Addresses/' + personId)
  }

  getPets(personId: number): Observable<Pet[]> {
    return this.httpClient.get<Pet[]>(this.baseUrl + 'Persons/Pets/' + personId)
  }

  getVetForPet(vetId: number): Observable<Vet[]> {
    return this.httpClient.get<Vet[]>(this.baseUrl + 'Vets/' + vetId)
  }




}
