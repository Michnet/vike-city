import ky from "ky";
import { serializeQuery } from "../../../functions/base";

// https://vike.dev/onBeforePrerenderStart
export { onBeforePrerenderStart }

//import { filterMovieData } from "../filterMovieData"
//import { filterMoviesData, getStarWarsMovies, getTitle } from "./getStarWarsMovies"

const onBeforePrerenderStart = async () => {
  //const movies = await getStarWarsMovies()
  const dataUrl = `https://lyvecityclub.com/wp-json/m-api/v1/ids?${serializeQuery({type: 'job_listing', listing_type:'event', slugs: true}) }`
  //const movies = fetch(dataUrl, {type: 'job_listing', listing_type:'event', slugs: true});

  const moviesSlugs = await ky.get(dataUrl).json();
   console.log('movieSlugs', moviesSlugs);
  return [
    ...moviesSlugs.map(movie => {
      const url = `/events/${movie}`
      return {
        url,
        // Note that we can also provide the `pageContext` of other pages.
        // This means that Vike will not call any
        // `data()` hook and the Star Wars API will be called
        // only once (in this `onBeforePrerenderStart()` hook).
        /* pageContext: {
          data: {
            movie: filterMovieData(movie),
            title: movie.title
          }
        } */
      }
    })
  ]
}
