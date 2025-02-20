import ReactPlayer from 'react-player'

const VideoPlayer = ({ url }: { url: string }) => {
  return (
    <div className="player-wrapper rounded-lg overflow-hidden shadow-xl">
      <ReactPlayer
        url={url}
        className="react-player"
        width="100%"
        height="100%"
        controls={true}
        light={true} // This enables a preview thumbnail
        playing={false}
        config={{
          youtube: {
            playerVars: {
              modestbranding: 1,
              showinfo: 0,
              rel: 0,
              color: 'white'
            }
          }
        }}
      />
    </div>
  )
}

export default VideoPlayer
