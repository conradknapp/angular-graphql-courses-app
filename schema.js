exports.typeDefs = `
  type Course {
    id: String
    title: String
    author: String
    description: String
    topic: String
    url: String
    voteCount: Int
  }

  type Query {
    getAllCourses(searchTerm: String): [Course]
    getCourse(id: String!): Course
  }

  type Mutation {
    addCourse(title: String!, author: String!, description: String!, topic: String!, url: String!): Course
    upvote(id: String!): Course
    downvote(id: String!): Course
  }
`;
