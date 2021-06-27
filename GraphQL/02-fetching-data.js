//Anatomy of a Query
Declaration - The keyword which starts every GraphQL query
Endpoint - A section of a GraphQL backend responsible for returning a specific piece of all the data available

query{  //query declaration
  topMovieByRevenue{  //call topMovieByRevenue endpoint
    id    //the field we want to return
    title
    tagline
  }
}

//Selecting Fields
Scalar field - A field with a simple data type, such as a String, Int, or Boolean
Object type field - A field which returns another object, which can be broken down into further scalar or object type fields

query{ 
  topMovieByRevenue{ 
    id    
   // poster    //not exist, will return an error
    studio{ //object field with name and location
      name
    }
  }
}

//List
we can query for data about multiple objects.

query{ 
  allMovies{ 
    title
    tagline
    studio{
      name
      location
    }
  }
}

//Questions
- A GraphQL query begins with the Declaration.
- In the below code snippet, "query" is known as the Declaration
query {
	topMovieByRevenue {
		id
		title
		revenue
	}
}  
- We can tell GraphQL which properties we want to include or exclude from our response using fields.
- Which of the following is NOT an example of a scalar field? Objects
- If we request a field that doesn’t exist on a Type, GraphQL will: throw an error
- “topMovieByRevenue” is know as the Endpoint
query {
	topMovieByRevenue {
		id
		title
		revenue
	}
} 
- What is specified in the curly braces following the Endpoint name?
  Fields





