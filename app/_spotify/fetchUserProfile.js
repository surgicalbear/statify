import axios from 'axios';

const profileData = async (spotifyToken) => {
  try {
    const response = await axios.get('https://api.spotify.com/v1/me', {
      headers: {
        Authorization: `Bearer ${spotifyToken}`,
      },
    });

    const { display_name, images } = response.data;
    const profilePicture = images[1]?.url || '';
    console.log(display_name)
    console.log(images)

    return {
      username: display_name,
      profilePicture: profilePicture,
    };
  } catch (error) {
    console.log('Error fetching profile data:', error);
    throw error;
  }
};

export default profileData;