"use client"
import React, { useEffect, useState } from 'react';
import { fetchUserData } from './fetchUserData';
import {fetchTopData} from './fetchTopData';
import {fetchTopArtistsData} from './fetchTopArtistData'
import fetchTopGenres from './fetchTopGenre'
import TopTracksDisplay from './TopTracksDisplay';
import styles from '../_styles/User.module.css'
import SkeletonDemo from '@/components/Skeletondemo';
const API = () => {
  const [userData, setUserData] = useState(null);
  const [topTracksData, setTopTracksData] = useState(null);
  const [topArtistsData, setTopArtistsData] = useState(null);
  const [topGenreData, setTopGenre]= useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const user = await fetchUserData();
      setUserData(user);

      if (user && user.spotifyToken) {
        const [topTracks, topArtists, topGenre] = await Promise.all([
          fetchTopData(user.spotifyToken),
          fetchTopArtistsData(user.spotifyToken),
          fetchTopGenres(user.spotifyToken),
        ]);
        setTopTracksData(topTracks);
        setTopArtistsData(topArtists);
        setTopGenre(topGenre);
        localStorage.setItem('topTracksData', JSON.stringify(topTracks));
        localStorage.setItem('topArtistsData', JSON.stringify(topArtists));
        localStorage.setItem('topGenreData', JSON.stringify(topGenre));
    }else{
      const storedTopTracksData = JSON.parse(localStorage.getItem('topTracksData'));
      const storedTopArtistsData = JSON.parse(localStorage.getItem('topArtistsData'));
      const storedTopGenresData = JSON.parse(localStorage.getItem('topGenreData'));
      setTopTracksData(storedTopTracksData);
      setTopArtistsData(storedTopArtistsData);
      setTopGenre(storedTopGenresData)
    }
    };

    fetchData();
  }, []);

  if (!userData || !topTracksData) {
    return(
    <div className={styles.confined}>
      <SkeletonDemo />
    </div>
  )}

  const { username, profilePicture } = userData;
  const { topTracksMedium, topTracksLong, topTracksShort } = topTracksData;
  const { topArtistsMedium, topArtistsLong, topArtistsShort } = topArtistsData;
  


  return (
    <>
      <div className={styles.bg}>
        <div className={styles.confined}>
          <img src={profilePicture} alt="Profile Picture" className={styles.profilePicture} />
          <div className={styles.userContainer}>
              <h1 className={styles.userName}>{username}</h1>
              <p className={styles.heyThere}>Hey there! Welcome to <span className={styles.txtClr}>
                statify
                </span>
              </p>
          </div>
        </div>
      </div>
    <TopTracksDisplay
      topTracksMedium={topTracksMedium}
      topArtistsMedium={topArtistsMedium}
      topTracksLong={topTracksLong}
      topArtistsLong={topArtistsLong}
      topTracksShort={topTracksShort}
      topArtistsShort={topArtistsShort}
    />
    </>
  );
};

export default API;
