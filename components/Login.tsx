"use client"
import React from 'react';
import { generateSpotifyAuthorizeUrl } from '../app/_spotify/spotifyUtils';
import styles from '@/app/_styles/Navbar.module.css';
import {Button} from './ui/button'

const Login = () => {
  const handleLogin = () => {
    window.location.href = generateSpotifyAuthorizeUrl();
  };

  return (
    <div className={styles.ButtonDiv}>
      <Button onClick={handleLogin} variant='outline'>
        Sign in with Spotify
      </Button>
    </div>
  );
};

export default Login;