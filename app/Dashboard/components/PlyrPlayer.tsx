'use client'

import { useEffect, useRef, useState } from 'react'
import dynamic from 'next/dynamic'
import 'plyr/dist/plyr.css'

export default function PlyrPlayer() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [watchTime, setWatchTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [currentSpeed, setCurrentSpeed] = useState(1)
  const [volume, setVolume] = useState(1)
  const [isFullscreen, setIsFullscreen] = useState(false)

  useEffect(() => {
    const loadPlyr = async () => {
      const Plyr = (await import('plyr')).default
      
      if (videoRef.current) {
        const player = new Plyr(videoRef.current, {
          controls: [
            'play-large',
            'restart',
            'rewind',
            'play',
            'fast-forward',
            'progress',
            'current-time',
            'duration',
            'mute',
            'volume',
            'captions',
            'settings',
            'pip',
            'airplay',
            'fullscreen'
          ],
          settings: ['captions', 'quality', 'speed', 'loop'],
          speed: { selected: 1, options: [0.25, 0.5, 0.75, 1, 1.25, 1.5, 1.75, 2, 4] },
          keyboard: { focused: true, global: true },
          tooltips: { controls: true, seek: true },
          captions: { active: true, language: 'auto' },
          fullscreen: { enabled: true, fallback: true, iosNative: true },
          storage: { enabled: true, key: 'plyr-settings' },
          previewThumbnails: { enabled: true },
          quality: {
            default: 1080,
            options: [2160, 1440, 1080, 720, 480, 360]
          }
        })

        // Enhanced Event Tracking
        player.on('timeupdate', () => {
          setWatchTime(player.currentTime)
          setDuration(player.duration)
        })
        player.on('ratechange', () => setCurrentSpeed(player.speed))
        player.on('volumechange', () => setVolume(player.volume))
        player.on('enterfullscreen', () => setIsFullscreen(true))
        player.on('exitfullscreen', () => setIsFullscreen(false))

        // Custom Keyboard Controls
        document.addEventListener('keydown', (e) => {
          switch(e.key) {
            case 'n': player.forward(10); break;
            case 'b': player.rewind(10); break;
            case '+': player.increaseVolume(0.1); break;
            case '-': player.decreaseVolume(0.1); break;
          }
        })
      }
    }

    loadPlyr()
  }, [])

  const progress = duration ? (watchTime / duration) * 100 : 0

  return (
    <div className="space-y-4">
      <div className="player-wrapper rounded-xl overflow-hidden shadow-lg">
        <video
          ref={videoRef}
          className="plyr-video"
          playsInline
          controls
          crossOrigin="anonymous"
        >
          <source
            src="/videos/Steve Jobs' Life Advice.mp4"
            type="video/mp4"
          />
          <track 
            kind="captions"
            label="English"
            srcLang="en"
            src="/captions/en.vtt"
          />
        </video>
      </div>
      
      <div className="bg-secondary/10 p-4 rounded-lg space-y-2">
        <div className="flex items-center justify-between text-sm">
          <span>Speed: {currentSpeed}x</span>
          <span>Volume: {Math.round(volume * 100)}%</span>
          <span>{isFullscreen ? 'Fullscreen' : 'Normal'}</span>
        </div>
        <div className="h-1 bg-primary/20 rounded-full overflow-hidden">
          <div 
            className="h-full bg-primary transition-all duration-300" 
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  )
}
