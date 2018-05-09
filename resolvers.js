exports.resolvers = {
  Query: {
    getAllCourses: (root, { searchTerm }) => {
      return courseData;
    },
    getCourse: (root, { id }) => {
      return courseModel.findOne({ id });
    }
  },
  Mutation: {
    upvote: (root, { id }) => {
      const course = courseData.filter(course => {
        return course.id === id;
      })[0];
      course.voteCount++;
      return course;
    },
    downvote: (root, { id }) => {
      const course = courseData.filter(course => {
        return course.id === id;
      })[0];
      course.voteCount--;
      return course;
    }
  }
};
