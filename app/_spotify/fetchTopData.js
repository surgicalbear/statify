import getTopTracks from "./fetchTopSongs";
import getTopArtists from "./fetchTopArtists";

export const fetchTopData = async (token) => {
  const [topTracksMedium, topTracksLong, topTracksShort] = await Promise.all([
    getTopTracks(token, 'medium_term', 10),
    getTopTracks(token, 'long_term', 10),
    getTopTracks(token, 'short_term', 10),
  ]);


  return {
    topTracksMedium,
    topTracksLong,
    topTracksShort,
  };
};