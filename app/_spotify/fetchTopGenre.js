import getTopArtists from "./fetchTopArtists";

const fetchTopGenres = async (spotifyToken, timeRange, limit) => {
  try {
    const topArtists = await getTopArtists(spotifyToken, timeRange, limit);

    // Extract genres from the top artists
    const genres = topArtists.flatMap((artist) => artist.genres);

    // Count occurrences of each genre
    const genreCount = genres.reduce((acc, genre) => {
      acc[genre] = (acc[genre] || 0) + 1;
      return acc;
    }, {});

    // Find the top genre(s)
    const topGenres = Object.keys(genreCount).reduce((acc, genre) => {
      if (!acc.length || genreCount[genre] > genreCount[acc[0]]) {
        return [genre];
      } else if (genreCount[genre] === genreCount[acc[0]]) {
        return [...acc, genre];
      }
      return acc;
    }, []);

    console.log('Top genre(s):', topGenres);
    return topGenres;
  } catch (error) {
    console.log('Error fetching top genres:', error);
    throw error;
  }
};

export default fetchTopGenres;