exports.typeDefs = `
  type Course {
    title: String
    author: String
    description: String
    topic: String
    url: String
    voteCount: Int
  }

  type Query {
    getAllCourses(searchTerm: String): [Course]
    getCourse(_id: String!): Course
  }

  type Mutation {
    addCourse(title: String!, author: String!, description: String!, topic: String!, url: String!): Course
    upvote(_id: String!): Course
    downvote(_id: String!): Course
  }
`;
