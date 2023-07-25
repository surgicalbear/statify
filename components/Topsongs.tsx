import styles from "@/app/_styles/User.module.css"
import { cn } from "@/lib/utils"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

type CardProps = React.ComponentProps<typeof Card>;
interface Artist {
  id: string;
  name: string;
}
interface Album {
  album_type: string;
  artists: Artist[];
  available_markets: string[];
  external_urls: { spotify: string };
  href: string;
  id: string;
  images: {
    height: number;
    url: string;
    width: number;
  }[];
}
interface TopTrack {
  id: string;
  name: string;
  artists: Artist[]; // Make sure artists is an array of objects of type Artist
  album: Album;
  albumArtwork: string;
}

interface TopSongProps extends CardProps {
  topTracks: TopTrack[];
}

export function TopSong({ className, topTracks, ...props }: TopSongProps) {
  return (
    <Card className={cn('w-[525px]', className)} {...props}>
      <CardHeader>
        <CardTitle>Top Songs</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        {topTracks.map((track, index) => (
          <>  
          <div key={track.id} className={styles.imageContainer}>
            <div className={styles.counter}>
            {index+1}
            </div>
            <img src={track.album.images[2].url}
            style={{ width: '25px', height: '25px', borderRadius: '15%'}}
            />
            <h3 className = {styles.songName}>
              {track.name} {' '}
              <span className={styles.artistName}>
                {track.artists.map((artist) => artist.name).join(', ')}
              </span>
            </h3>
          </div>
          </>
        ))}
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
    
  );
}

export default TopSong;
