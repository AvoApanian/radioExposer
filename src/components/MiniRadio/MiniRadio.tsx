import { FC, useEffect, useState } from 'react';
import './MiniRadio.css';
import { soundManager } from '../../utils/SoundManager';

interface MiniRadioProps {
  isPlaying: boolean;
  onPowerToggle: () => void;
}

const MiniRadio: FC<MiniRadioProps> = ({ isPlaying, onPowerToggle }) => {
  const [bars, setBars] = useState<number[]>([5, 5, 5, 5, 5, 5]);

  // L'égaliseur s'anime seulement si le son est ON
  useEffect(() => {
    if (!isPlaying) {
      setBars([5, 5, 5, 5, 5, 5]); // Barres à plat si radio OFF
      return;
    }

    const interval = setInterval(() => {
      setBars(Array.from({ length: 6 }, () => 10 + Math.random() * 70));
    }, 120);

    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <div className={`mini-radio ${isPlaying ? 'playing' : ''}`}>
      <div className="radio-body">
        
        {/* Écran de l'égaliseur */}
        <div className="radio-display">
          <div className="equalizer">
            {bars.map((height, i) => (
              <div key={i} className="eq-bar" style={{ height: `${height}%` }}></div>
            ))}
          </div>
        </div>

        <div className="radio-buttons">
          {/* Seul le bouton Power reste */}
          <div 
            className="button power" 
            title="Power ON/OFF" 
            onClick={() => {
                soundManager.switch();
                onPowerToggle();
            }}
          ></div>
        </div>

        {/* Petite LED d'état */}
        <div className={`power-led ${isPlaying ? 'on' : ''}`}></div>
      </div>
    </div>
  );
};

export default MiniRadio;