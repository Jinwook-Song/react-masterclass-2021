const API_KEY = "e9658b7e9fde9f5a87597714d40bf19c";
const BASE_PATH = "https://api.themoviedb.org/3";

export interface MoviesData {
  id: number;
  backdrop_path: string;
  poster_path: string;
  title: string;
  overview: string;
}

export interface GetMoViesApi<T> {
  dates: {
    maximum: string;
    minimum: string;
  };
  page: number;
  results: T;
  total_pages: number;
  total_results: number;
}

export async function getMovies(): Promise<GetMoViesApi<MoviesData[]>> {
  const request = await fetch(
    `${BASE_PATH}/movie/now_playing?api_key=${API_KEY}`
  );
  const response = await request.json();
  return response;
}
