Schema - A special kind of document that describes how a GraphQL endpoint can receive and send information
Query Language - The syntax we use to write GraphQL queries that retrieve data from an endpoint
Self-documenting API - An API that can be easily understood just by reading its schema -- no extra documentation needed

type Movie {
  id: ID!
  title: String!
  tagline: String
  studio: Studio
}

type Studio {
  name: String!
  location: String!
}

quert{    //query declaration
  movieById(id: "gone-with-the-wind"){
            title
            studio {
              name
              location
            }
  	}
} 
//GraphQL allows us to nest complex data in a single request

Query - Queries specify which endpoints we want to call, how we want the response to look
Fields - Properties that comprise the shape of a response
Type - A collection of fields that make up a specific queryable object.

 
//Questions
- The shape of a GraphQL response is determined by the Fields you include.
- GraphQL is very similar to JSON in appearance; however, there are some differences. 
- Which of the following JSON components are NOT required in a GraphQL query?
  Colons, Commas, Values
- The "id, title, and tagline" in the below snippet are known as: Field
query {
	allMovies {
		id
		title
		tagline
	}
}
- Which of the following is a benefit of using GraphQL over REST?
  Self-documenting APIs / Fetching nested data in a single request
