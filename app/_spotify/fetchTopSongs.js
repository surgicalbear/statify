import axios from 'axios';

const getTopTracks = async (spotifyToken, timeRange = 'medium_term', limit = 50) => {
  try {
    // Get user's top tracks based on the specified time range
    const topTracksResponse = await axios.get(
      `https://api.spotify.com/v1/me/top/tracks?time_range=${timeRange}&limit=${limit}`,
      {
        headers: {
          Authorization: `Bearer ${spotifyToken}`,
        },
      }
    );

    const topTracks = topTracksResponse.data.items;
    console.log(topTracks)
    return topTracks;
  } catch (error) {
    console.log('Error fetching top tracks:', error);
    throw error;
  }
};

export default getTopTracks;
