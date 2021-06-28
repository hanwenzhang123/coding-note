Named Operations
Alias - A syntax for renaming the result of a field to anything you want

query {
  movieOne: movieById(  //Alias
    movieId: "movie_0"
    ){
    id
    title
  }
  movieTwo: movieById(  //Alias
    movieId: "movie_1"
  ){
    id
    title
  }
}

Using Aliases to Rename Fields
Fragment - Reusable sets of fields that can be included in multiple queries; saves time from needing to manually include the same fields over and over in many places

query {
  movieOne: movieById(  //Alias
    movieId: "movie_0"
    ){
    ...movieDetails //fragment
  }
  movieTwo: movieById(  //Alias
    movieId: "movie_1"
  ){
   ...movieDetails  //fragment
  }
}

fragment movieDetails on Movie{
    id
    title
    tagline
    revenue
}

//Question
- Which GraphQL concept is used to solve a name collision? Alias
- A collision is the term for what happens when two fields with the same name are requested in the same query.
- When using Aliases, the fields we want to receive in our response should be specified in the {curly braces} following the alias name.
- Which of the following is the endpoint name? movieById
  Which of the following is the alias name?   movieOne
query {
	movieOne: movieById (
		movieId: "movie_0"
	) {
		id
		title
	}
}


Passing in Variables

fragment movieDetails on Movie{
    id
    title
    tagline
    revenue
}

query ($movieOneId:ID!, $movieTwoId:ID!) {
  movieOne: movieById(  //Alias
    movieId: $movieOneId
    ){
    ...movieDetails //fragment
  }
  movieTwo: movieById(  //Alias
    movieId: $movieTwoId
  ){
   ...movieDetails  //fragment
  }
}

//JSON
{
  "movieOneId": "movie_0"
  "movieTwoId": "movie_1"
}


Specifying Default Variables

query($year: Int = 2000) {	//default value 2000
	randomMovieByYear(
		year: $year
		){
		id
		title
		releaseYear
	}
}

//JSON
{
  "year": 2001		//use this one, overwrite the 2000 one
}

//Question
- Query variables help make queries more reusable by avoiding Hardcoding.
- Fragments are particularly useful for selecting the same group of fields in multiple places.
- Which of the following values will be sent to our backend for the “year” argument? 2016
Which of the following values will be sent to our backend for the “year” argument? 2017 when year: null in /** Query variables */
/** Query */
query ($year:Int = 2017) {
	randomMovieByYear (
		year: $year
	) {
		id
		title
		releaseYear
	}
}

/** Query variables */
{
	year: 2016
}  

