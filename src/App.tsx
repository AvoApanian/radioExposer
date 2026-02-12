import { useState, useEffect, useRef } from 'react';
import './App.css';
import SlideShow from './components/SlideShow/SlideShow';
import jazzMusic from './sfx/jazzPresentation.mp3';

interface SlideData {
  id: number;
  type: 'intro' | 'artwork' | 'outro';
  title: string;
  artist?: string;
  image?: string;
  description?: string;
  hasAudio: boolean;
}

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [isRadioOn, setIsRadioOn] = useState(true);
  const [volume, setVolume] = useState(0.5);
  const audioRef = useRef<HTMLAudioElement>(null);

  const slides: SlideData[] = [
    {
      id: 1,
      type: 'intro',
      title: 'Welcome to the Show',
      hasAudio: true
    },

    {
      id: 2,
      type: 'artwork',
      title: 'Self-Portrait',
      artist: 'Edward Hopper',
      image: import.meta.env.BASE_URL + 'images/hopper-selfportrait.jpg',
      hasAudio: false
    },

    {
      id: 3,
      type: 'artwork',
      title: 'Chop Suey',
      artist: 'Edward Hopper',
      image: import.meta.env.BASE_URL + 'images/hopper-chopsuey.jpg',
      hasAudio: false
    },

    {
      id: 4,
      type: 'outro',
      title: 'Thank you for listening to me',
      hasAudio: true
    }
  ];

  // AUTO ON / OFF RADIO SELON SLIDE
  useEffect(() => {
    if (!slides[currentSlide]?.hasAudio) {
      setIsRadioOn(false);
    } else {
      setIsRadioOn(true);
    }
  }, [currentSlide]);

  // VOLUME
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  // CLAVIER
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        setCurrentSlide(p => Math.min(p + 1, slides.length - 1));
      }
      if (e.key === 'ArrowLeft') {
        setCurrentSlide(p => Math.max(p - 1, 0));
      }
      if (e.key === ' ') {
        e.preventDefault();
        setIsZoomed(p => !p);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // AUDIO
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isRadioOn) {
      audio.play().catch(() => {});
    } else {
      audio.pause();
    }
  }, [isRadioOn]);

  return (
    <div className="app">
      <audio ref={audioRef} src={jazzMusic} loop preload="auto" />

      <SlideShow
        slides={slides}
        currentSlide={currentSlide}
        isZoomed={isZoomed}
        onSlideChange={setCurrentSlide}
        isRadioOn={isRadioOn}
        onPowerToggle={() => setIsRadioOn(p => !p)}
        onVolumeChange={() =>
          setVolume(v => (v >= 1 ? 0.2 : v + 0.2))
        }
        currentVolume={volume * 100}
      />
    </div>
  );
}

export default App;
