import { Component, OnInit } from '@angular/core';
import { Person, PersonGraphQl } from '../_models/person';
import { GraphQlService } from '../_services/graphql.service';

@Component({
  selector: 'app-graphql',
  templateUrl: './graphql.component.html',
  styleUrls: ['./graphql.component.scss']
})
export class GraphqlComponent implements OnInit {

  persons: Array<PersonGraphQl>
  selectedPerson: Person | null

  constructor(private graphQlService: GraphQlService) { }

  ngOnInit(): void {
    this.graphQlService.getAllPersons().subscribe(({data, loading}) => {
      this.persons = data.person
      console.log(data);
    })
  }

  showDetails(personId: number) {

  }

}
