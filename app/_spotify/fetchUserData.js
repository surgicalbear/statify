import { getTokenFromUrl } from './spotifyUtils';
import profileData from './fetchUserProfile';

export const fetchUserData = async () => {
  const _spotifyToken = getTokenFromUrl().access_token;
  window.location.hash = '';

  if (_spotifyToken) {
    localStorage.setItem('spotifyToken', _spotifyToken);
    const data = await profileData(_spotifyToken);
    if (data) {
      return {
        spotifyToken: _spotifyToken,
        username: data.username,
        profilePicture: data.profilePicture,
      };
    }
  } else {
    // Retrieve data from local storage
    const storedToken = localStorage.getItem('spotifyToken');
    const storedUsername = localStorage.getItem('username');
    const storedProfilePicture = localStorage.getItem('profilePicture');

    if (storedToken && storedUsername && storedProfilePicture) {
      return {
        spotifyToken: storedToken,
        username: storedUsername,
        profilePicture: storedProfilePicture,
      };
    }
  }
  return null;
};