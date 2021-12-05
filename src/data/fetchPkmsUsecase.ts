import { GET } from "./RestApi";

export async function fetchPkmsUsecase(pageIndex: number, limit: number) {
  const offset = pageIndex - 1;
  const apiURL = `https://pokeapi.co/api/v2/pokemon?offset=${
    offset * limit
  }&limit=${limit}`;
  console.log(apiURL);
  const response = await GET(apiURL);
  return response;
}
