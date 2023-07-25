// TopTracksDisplay.js
import React from 'react';
import styles from '../_styles/User.module.css';
import TopSong from "@/components/Topsongs";
import TopArtist from '@/components/Topartist';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const TopTracksDisplay = ({ topTracksMedium, topTracksShort, topTracksLong, topArtistsMedium, topArtistsShort, topArtistsLong}) => (
  <div className={styles.tabs}>
    <Tabs defaultValue="All time">
        <TabsList>
            <TabsTrigger value="4 weeks">4 weeks</TabsTrigger>
            <TabsTrigger value="6 month">6 month</TabsTrigger>
            <TabsTrigger value="All time">All time</TabsTrigger>
        </TabsList>
          <TabsContent value="6 month">
            <div className={styles.cardContainer}>
              <TopSong topTracks={topTracksMedium}/>
            </div>
            <div className={styles.secondCardContainer}>
              <TopArtist topArtists={topArtistsMedium}/>
            </div>
          </TabsContent>
          <TabsContent value="4 weeks">
            <div className={styles.cardContainer}>
              <TopSong topTracks={topTracksShort}/>
            </div>
            <div className={styles.secondCardContainer}>
              <TopArtist topArtists={topArtistsShort}/>
            </div>
          </TabsContent>
          <TabsContent value="All time">
            <div className={styles.cardContainer}>
              <TopSong topTracks={topTracksLong}/>
            </div>
            <div className={styles.secondCardContainer}>
              <TopArtist topArtists={topArtistsLong}/>
            </div>
          </TabsContent>
    </Tabs>
  </div>
);

export default TopTracksDisplay;