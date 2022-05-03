import { Injectable } from "@angular/core";
import { Apollo, gql } from "apollo-angular";


@Injectable({ providedIn: 'root' })
export class GraphQlService {

  constructor(private apolloClient: Apollo) { }

  private getPersonsQuery = gql`
  query{
    persons{
      id,
      firstName,
      lastName
    }
  }
  `;

  getAllPersons() {
    console.log(this.getPersonsQuery);
    return this.apolloClient.watchQuery<any>({
      query: this.getPersonsQuery
    }).valueChanges
  }

  getPersonWithDetails(personId: number) {
    const getPersonWithDetailsQuery = gql`
    query {
      persons(where: {id: {eq: ${personId}}}) {
        firstName
        lastName
        age
        gender
        customerSince
        addresses {
          streetName
          houseNumber
          postCode
          city
        }
        pets {
          name
          animalType
          veterinary {
            fullName
          }
        }
      }
    }`

    console.log(this.getPersonsQuery);
    return this.apolloClient.watchQuery<any>({
      query: getPersonWithDetailsQuery
    }).valueChanges
  }




}
