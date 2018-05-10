import { Injectable } from "@angular/core";

import { Apollo } from "apollo-angular";
import gql from "graphql-tag";
import { map, filter } from "rxjs/operators";

import { Course, Query } from "./types";

@Injectable()
export class CourseService {
  constructor(private apollo: Apollo) {}

  getAllCourses(searchTerm: String) {
    return this.apollo
      .watchQuery<Query>({
        query: gql`
          query getAllCourses($searchTerm: String) {
            getAllCourses(searchTerm: $searchTerm) {
              title
              author
              description
              topic
              url
              voteCount
            }
          }
        `,
        variables: {
          searchTerm: searchTerm
        }
      })
      .valueChanges.pipe(map(result => result.data.allCourses));
  }

  upvoteCourse(_id: String) {
    return this.apollo.mutate({
      mutation: gql`
        mutation upvote($_id: String!) {
          upvote(_id: $_id) {
            _id
            title
            voteCount
          }
        }
      `,
      variables: {
        _id: _id
      }
    });
  }

  downvoteCourse(_id: String) {
    return this.apollo.mutate({
      mutation: gql`
        mutation downvote($_id: String!) {
          downvote(_id: $_id) {
            _id
            title
            voteCount
          }
        }
      `,
      variables: {
        _id: _id
      }
    });
  }
}
