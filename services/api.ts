const TMDB_CONFIG = {
  BASE_URL: "https://api.themoviedb.org/3",
  API_KEY: process.env.EXPO_PUBLIC_MOVIE_API_KEY,
  headers: {
    accept: "application/json",
    authorization: `Bearer ${process.env.EXPO_PUBLIC_MOVIE_API_KEY}`,
  },
};


export const fetchMovies = async ({ query }: { query: string } ) => {
  const endPoint =  query ? `${TMDB_CONFIG.BASE_URL}/search/movie?query=${encodeURIComponent(query)}`
      : `${TMDB_CONFIG.BASE_URL}/discover/movie?sort_by=popularity.desc`; 
  const respons = await fetch(endPoint, {
    method: "GET",
    headers: TMDB_CONFIG.headers,
  });

  if (!respons.ok) {
    // Handling Error here
    //@ts-ignore
    throw new Error("Failed to fetch Popular Movie ", respons.statusText);
  }
  const data = await respons.json();

  return data.results;
};



export const fetchMovieDetails = async(movie_id:string)=>{   //:Promise<Movie>=> 
 try {
  
  
  const endPoint = `${TMDB_CONFIG.BASE_URL}/movie/${movie_id}`

  const respose = await fetch(endPoint ,{
    method:'GET',
    headers: TMDB_CONFIG.headers
  })
  if (!respose.ok) {
    // Handling Error here
    //@ts-ignore
    throw new Error("Failed to fetch Popular Movie ", respons.statusText);
  }
  
  const data = await respose.json();
  return data; 

  } catch (error) {
   console.log(error);
   throw  error 
  }
}