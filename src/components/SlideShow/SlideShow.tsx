import { FC } from 'react';
import './SlideShow.css';
import RadioStudio from '../RadioStudio/RadioStudio';
import Slide from '../Slide/Slide';
import MiniRadio from '../MiniRadio/MiniRadio';

interface SlideData {
  id: number;
  type: 'intro' | 'artwork' | 'outro';
  title: string;
  artist?: string;
  image?: string;
  description?: string;
  hasAudio?: boolean;
}

interface SlideShowProps {
  slides: SlideData[];
  currentSlide: number;
  isZoomed: boolean;
  onSlideChange: (index: number) => void;
  // Ajout des props manquantes ici :
  isRadioOn: boolean;
  onPowerToggle: () => void;
  onVolumeChange: () => void;
  currentVolume: number;
}

const SlideShow: FC<SlideShowProps> = ({ 
  slides, 
  currentSlide, 
  isZoomed,
  onSlideChange,
  isRadioOn,
  onPowerToggle,
  onVolumeChange,
  currentVolume
}) => {
  const slide = slides[currentSlide] || slides[0];

  return (
    <div className={`slideshow ${isZoomed ? 'zoomed' : ''}`}>
      {/* On passe les props à RadioStudio pour l'animation L/R */}
      <RadioStudio isRadioOn={isRadioOn} onPowerToggle={onPowerToggle} />
      
      <div className="slide-container">
        <Slide 
          data={slide}
          isZoomed={isZoomed}
        />
      </div>

      {!isZoomed && (
        <MiniRadio 
          isPlaying={isRadioOn} 
          onPowerToggle={onPowerToggle}
          onVolumeChange={onVolumeChange}
          currentVolume={currentVolume}
        />
      )}

      <div className="slide-navigation">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`nav-dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => onSlideChange(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default SlideShow;