//Anatomy of a Mutation
Mutation - A special kind of GraphQL query that causes changes to the data available on the backend

mutation{   //mutation declaration, tell GraphQL that we are going to change something
  createMovie(title:"My Movie", tagline: "Best Movie Ever"){
    id    //the field we want to return followed by the endpoint
    title
    tagline
  }
}

//Mutating with Scalar Type
mutation{ 
  createMovie(
    title: "Casablanca"
    tagline: "Booyah"
  ) {
    id
    title
    tagline
  }
}     //will successfully created
  

//Questions
- Which symbol is used to denote that an argument is required?
  Exclamation point
- GraphQL mutations can return a result, just like Queries.
- A GraphQL mutation begins with the Declaration


//Mutating with Input Object Types4:32
Return the Movie object with the nested Director object, and show the original fields.

  type Mutation {
    createMovie (
      title: String!
      tagline: String
      revenue: Int
    ): Movie
    addDirectorToMovie (
      movieId: ID!
      director: DirectorInput
    ): Movie
  }
  
//JSON
{
  "directorToAdd": {
    "name": "Charles"
  }
}
    
//Query
mutation($directorToAdd: DirectorInput!){
  addDirectorToMovie(
    movieId: "movie_0"
    director: $directorToAdd    //using the query variable with $
    ){
    title
    tagline
    directors{
      id
      name
    }
  }
}

//Questions
- Which symbol is used to identify variables inside of a query?
  Dollar Sign
- Which of the following describes the difference between Input Object types and Scalar types?
  Input Object types include their own nested properties
- Input Object types can include more nested Input Object types.
- Which language is used to specify query variables? 
  JSON
- Which pane is used in Launchpad to provide arguments for our mutation?
  Query Variables
