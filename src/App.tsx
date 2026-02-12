import { useState, useEffect, useRef } from 'react';
import './App.css';
import SlideShow from './components/SlideShow/SlideShow';
import jazzMusic from './sfx/jazzPresentation.mp3';

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [isRadioOn, setIsRadioOn] = useState(true); 
  const [volume, setVolume] = useState(0.5);
  const audioRef = useRef<HTMLAudioElement>(null);

  const slides = [
    { id: 1, type: 'intro', title: 'Welcome to the Show', hasAudio: true },
    { id: 2, type: 'artwork', title: 'Self-Portrait', artist: 'Edward Hopper', image: '/images/hopper-selfportrait.jpg', hasAudio: false },
    { id: 3, type: 'artwork', title: 'Chop Suey', artist: 'Edward Hopper', image: '/images/hopper-chopsuey.jpg', hasAudio: false },
    { id: 4, type: 'outro', title: 'Thank you for listening to me', hasAudio: true }
  ];

  // --- AUTO-OFF SUR SLIDES 2 & 3 ---
  useEffect(() => {
    // Si la slide actuelle n'a pas d'audio (artwork), on coupe la radio
    if (slides[currentSlide] && !slides[currentSlide].hasAudio) {
      setIsRadioOn(false);
    } else if (slides[currentSlide]?.hasAudio) {
      setIsRadioOn(true);
    }
  }, [currentSlide]);

  useEffect(() => {
    if (audioRef.current) audioRef.current.volume = volume;
  }, [volume]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') setCurrentSlide(p => (p < slides.length - 1 ? p + 1 : p));
      if (e.key === 'ArrowLeft') setCurrentSlide(p => (p > 0 ? p - 1 : p));
      if (e.key === ' ') { e.preventDefault(); setIsZoomed(p => !p); }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

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
        slides={slides as any}
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