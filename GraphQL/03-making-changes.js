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
