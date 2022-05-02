import { Component, OnInit } from '@angular/core';
import { Address } from '../_models/address';
import { Person, PersonGraphQl, PersonWithDetailsGraphQl } from '../_models/person';
import { Pet } from '../_models/pet';
import { GraphQlService } from '../_services/graphql.service';

@Component({
  selector: 'app-graphql',
  templateUrl: './graphql.component.html',
  styleUrls: ['./graphql.component.scss']
})
export class GraphqlComponent implements OnInit {

  persons: Array<PersonGraphQl>
  selectedPerson: PersonWithDetailsGraphQl
  addresses: Array<Address>
  pets: Array<Pet>



  constructor(private graphQlService: GraphQlService) { }

  ngOnInit(): void {
    this.graphQlService.getAllPersons().subscribe(({data, loading}) => {
      this.persons = data.persons
      console.log(data);
    })
  }

  showDetails(personId: number) {
    this.graphQlService.getPersonWithDetails(personId).subscribe(({data, loading}) => {
      this.selectedPerson = data.persons[0];
      console.log(data);
    })
  }

}
