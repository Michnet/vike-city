// https://vike.dev/data
export { data }

//import fetch from "cross-fetch"
//import { filterMovieData } from "../filterMovieData"
import { render } from "vike/abort"

async function data(pageContext) { 
  const dataUrl = `https://lyvecityclub.com/wp-json/wp/v2/listings?slug=${pageContext.routeParams.slug}`
  let movie
  try {
    const response = await fetch(dataUrl)
    movie = await response.json()
  } catch (err) {
    console.error(err)
    throw render(
      503,
      `Couldn't fetch data, because failed HTTP GET request to ${dataUrl}`
    )
  }

  // We remove data we don't need because the data is passed to the client; we should
  // minimize what is sent over the network.
  //movie = filterMovieData(movie)

  const { title } = movie
  console.log('movie', movie);
  return {
    movie,
    // The page's <title>
    title
  }
}
