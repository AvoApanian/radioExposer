import { useState, useEffect, useRef } from 'react';
import './App.css';
import SlideShow from './components/SlideShow/SlideShow';
import jazzMusic from './sfx/jazzPresentation.mp3';

import hopperSelfPortrait from '../public/images//hopper-selfportrait.jpg';
import hopperChopSuey from '../public/images/hopper-chopsuey.jpg';



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
    { id: 1, type: 'intro', title: 'Welcome to the Show', hasAudio: true },

    {
      id: 2,
      type: 'artwork',
      title: 'Self-Portrait',
      artist: 'Edward Hopper',
      image: hopperSelfPortrait, 
      hasAudio: false
    },

    {
      id: 3,
      type: 'artwork',
      title: 'Chop Suey',
      artist: 'Edward Hopper',
      image: hopperChopSuey, 
      hasAudio: false
    },

    { id: 4, type: 'outro', title: 'Thank you for listening to me', hasAudio: true }
  ];

  // --- AUTO-OFF RADIO ---
  useEffect(() => {
    if (slides[currentSlide] && !slides[currentSlide].hasAudio) {
      setIsRadioOn(false);
    } else {
      setIsRadioOn(true);
    }
  }, [currentSlide]);

  useEffect(() => {
    if (audioRef.current) audioRef.current.volume = volume;
  }, [volume]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') setCurrentSlide(p => Math.min(p + 1, slides.length - 1));
      if (e.key === 'ArrowLeft') setCurrentSlide(p => Math.max(p - 1, 0));
      if (e.key === ' ') {
        e.preventDefault();
        setIsZoomed(p => !p);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    isRadioOn ? audio.play().catch(() => {}) : audio.pause();
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
        onPowerToggle={() => setIsRadioOn(!isRadioOn)}
        onVolumeChange={() => setVolume(v => (v >= 1 ? 0.2 : v + 0.2))}
        currentVolume={volume * 100}
      />
    </div>
  );
}

export default App;
