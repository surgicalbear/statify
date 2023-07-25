import getTopArtists from "./fetchTopArtists";

export const fetchTopArtistsData = async (token) => {
  const [topArtistsMedium, topArtistsLong, topArtistsShort] = await Promise.all([
    getTopArtists(token, 'medium_term', 10),
    getTopArtists(token, 'long_term', 10),
    getTopArtists(token, 'short_term', 10),
  ]);

  return {
    topArtistsMedium,
    topArtistsLong,
    topArtistsShort,
  };
};