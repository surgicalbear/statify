import axios from 'axios';

const getTopArtists = async (spotifyToken, timeRange = 'medium_term', limit = 10) => {
  try {
    // Get user's top tracks based on the specified time range
    const topArtistResponse = await axios.get(
      `https://api.spotify.com/v1/me/top/artists?time_range=${timeRange}&limit=${limit}`,
      {
        headers: {
          Authorization: `Bearer ${spotifyToken}`,
        },
      }
    );

    const topArtist = topArtistResponse.data.items;
    console.log(topArtist)
    return topArtist;
  } catch (error) {
    console.log('Error fetching top artists:', error);
    throw error;
  }
};

export default getTopArtists;