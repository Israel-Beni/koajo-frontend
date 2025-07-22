import Image from "next/image";
import Video from 'next-video';
import getStarted from '/public/media/videos/get-started.mp4';
import TheSongVideo from "/public/media/videos/VID-20250322-WA0007.mp4"

export default function Home() {
  return (
    <>
     <Video src={getStarted} />
     <Video src={TheSongVideo} />
     </>

  );
}
