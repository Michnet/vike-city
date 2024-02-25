// https://vike.dev/data
export { data }

import ky from "ky";
//import fetch from "cross-fetch"
//import { filterMovieData } from "../filterMovieData"
import { render } from "vike/abort"

async function data(pageContext) { 
  const dataUrl = `https://lyvecityclub.com/wp-json/wp/v2/listings?slug=${pageContext.routeParams.slug}`
  const json = await ky.get(dataUrl).json();
  let movie
  if(json) {
    //const response = await fetch(dataUrl)
    movie = json;
  }else{
   /*  console.error(err)
    throw render(
      503,
      `Couldn't fetch data, because failed HTTP GET request to ${dataUrl}`
    ) */
  }

  // We remove data we don't need because the data is passed to the client; we should
  // minimize what is sent over the network.
  //movie = filterMovieData(movie)

  const { title } = movie
  return {
    movie,
    // The page's <title>
    title
  }
}
