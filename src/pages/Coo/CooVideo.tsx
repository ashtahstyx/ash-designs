import { images } from '../../assets/images';
import ReactPlayer from 'react-player';
import {
  MediaController,
  MediaControlBar,
  MediaTimeRange,
  MediaTimeDisplay,
  MediaPlaybackRateButton,
  MediaPlayButton,
  MediaSeekBackwardButton,
  MediaSeekForwardButton,
  MediaFullscreenButton,
} from 'media-chrome/react';

export default function Player() {
  return (
    <MediaController
      style={{
        width: '100%',
        aspectRatio: '16/9',
      }}>
      <ReactPlayer
        slot="media"
        src={images.CooTest}
        controls={false}
        muted={true}
        volume={0}
        style={{
          width: '100%',
          height: '100%',
          '--controls': 'none',
        }}></ReactPlayer>
      <MediaControlBar>
        <MediaPlayButton />
        <MediaSeekBackwardButton seekOffset={10} />
        <MediaSeekForwardButton seekOffset={10} />
        <MediaTimeRange />
        <MediaTimeDisplay showDuration />
        <MediaPlaybackRateButton />
        <MediaFullscreenButton />
      </MediaControlBar>
    </MediaController>
  );
}
