const TMDB_CONFIG = {
  BASE_URL: "https://api.themoviedb.org/3",
  API_KEY: process.env.EXPO_PUBLIC_MOVIE_API_KEY,
  headers: {
    accept: "application/json",
    authorization: `Bearer ${process.env.EXPO_PUBLIC_MOVIE_API_KEY}`,
  },
};

export const fetchMovies = async ({ query }: { query: string }) => {
  console.log('====================================');
  console.log('search query is :', query);
  console.log('====================================');
  const endPoint = query ? `${TMDB_CONFIG.BASE_URL}/search/movie?query=${encodeURIComponent(query)}`
    : `${TMDB_CONFIG.BASE_URL}/discover/movie?sort_by=popularity.desc`;

  const respons = await fetch(endPoint, {
    //
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

// const url = ' /discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';
// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZDQwYjU4NTNiYjQ2OTRiZWQzYTg1NzAwZWRlMzBmOCIsIm5iZiI6MTc0MTg4NzE1My41OTgsInN1YiI6IjY3ZDMxNmIxNDM0Yzk4YzhlYzgxY2JjYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.K75VsPGB_dNFaxGqW3QhnvVLPRjum4DrgC57lKugPN0'
//   }
// };

// fetch(TMDB_CONFIG, options)
//   .then(res => res.json())
//   .then(json => console.log(json))
//   .catch(err => console.error(err));
