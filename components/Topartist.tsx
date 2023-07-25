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
  images: {
    height: number;
    url: string;
    width: number;
  }[];
}

interface TopArtistProps {
  className?: string;
  topArtists: Artist[];
}

export function TopArtist({ className, topArtists }: TopArtistProps) {
  return (
    <div className={styles.topMargin}>
      <Card className={cn('w-[525px]', className)}>
        <CardHeader>
          <CardTitle>Top Artists</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4">
          {topArtists.map((artist, index) => (
            <div key={artist.id} className={styles.imageContainer}>
              <div className={styles.counter}>{index + 1}</div>
              {artist.images.length > 0 && (
                <img
                  src={artist.images[0].url} // Display the first image in the array
                  style={{ width: '25px', height: '25px', borderRadius: '15%' }}
                />
              )}
              <h3 className={styles.songName}>{artist.name}</h3>
            </div>
          ))}
        </CardContent>
        <CardFooter></CardFooter>
      </Card>
    </div>
  );
}

export default TopArtist;
