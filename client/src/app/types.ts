export type Course = {
  _id: string;
  title: string;
  author: string;
  description: string;
  topic: string;
  url: string;
  voteCount: string;
};

export type Query = {
  allCourses: Course[];
};
