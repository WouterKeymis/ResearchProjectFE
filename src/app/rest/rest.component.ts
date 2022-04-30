import { Component, OnInit } from '@angular/core';
import { Address } from '../_models/address';
import { Person } from '../_models/person';
import { Pet } from '../_models/pet';
import { RestService } from '../_services/rest.service';

@Component({
  selector: 'app-rest',
  templateUrl: './rest.component.html',
  styleUrls: ['./rest.component.scss']
})
export class RestComponent implements OnInit {

  persons: Array<Person>
  addresses: Array<Address>
  pets: Array<Pet>
  selectedPerson: Person | null

  constructor(private restService: RestService) { }

  ngOnInit(): void {
    this.restService.getPersons().subscribe(persons => {
      this.persons = persons;
      console.log("GET - /api/Persons");
      console.log(persons);
    })
  }

  showDetails(personId: number) {
    this.selectedPerson = this.persons.find(pers => pers.id === personId) ?? null

    this.restService.getAddresses(personId).subscribe(addresses => {
      this.addresses = addresses;
      console.log("GET - api/Persons/Addresses/personId");
      console.log(addresses)
    })
    this.restService.getPets(personId).subscribe(pets => {
      this.pets = pets;
      console.log("GET - api/Persons/Pets/personId");
      console.log(pets)
    })
  }

}
