export function getPkmIdFromUrl(pokemonUrl: string): string {
  const splitUrl = pokemonUrl.split("/");
  const id = splitUrl[splitUrl.length - 2];
  return id;
}

export function getPkmImgUrl(pokemonUrl: string): string {
  const id = getPkmIdFromUrl(pokemonUrl);
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/${id}.png`;
}

export function getPkmIcon(pokemonUrl: string) {
  const id = getPkmIdFromUrl(pokemonUrl);
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/${id}.png`;
}
