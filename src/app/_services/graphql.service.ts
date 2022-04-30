import { Injectable } from "@angular/core";
import { Apollo, gql } from "apollo-angular";


@Injectable({ providedIn: 'root' })
export class GraphQlService {

  constructor(private apolloClient: Apollo) { }

  private getPersonsQuery = gql`
  query{
    person{
      id,
      firstName,
      lastName
    }
  }
  `;

  getAllPersons() {
    return this.apolloClient.watchQuery<any>({
      query: this.getPersonsQuery
    }).valueChanges
  }




}
