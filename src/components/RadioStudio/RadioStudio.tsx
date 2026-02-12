import { FC, useState, useMemo } from 'react';
import './RadioStudio.css';
import OnAirLight from '../OnAirLight/OnAirLight';
import VUMeter from '../VUMeter/VUMeter';
import { soundManager } from '../../utils/SoundManager';

interface RadioStudioProps {
  isRadioOn: boolean;
  onPowerToggle: () => void;
}

const RadioStudio: FC<RadioStudioProps> = ({ isRadioOn, onPowerToggle }) => {
  const [vinylSpinning, setVinylSpinning] = useState<number | null>(null);
  const [knobRotations, setKnobRotations] = useState<number[]>(Array(8).fill(0));
  const [posterFlipped, setPosterFlipped] = useState<boolean[]>([false, false]);
  const [cableGlowing, setCableGlowing] = useState<number | null>(null);

  const faderHeights = useMemo(() => 
    Array.from({ length: 8 }, () => Math.floor(30 + Math.random() * 40)), 
  []);

  const handlePowerClick = () => {
    isRadioOn ? soundManager.powerOff() : soundManager.powerOn();
    onPowerToggle();
  };

  const handleVinylClick = (index: number) => {
    soundManager.vinyl();
    setVinylSpinning(vinylSpinning === index ? null : index);
  };

  const handleKnobClick = (index: number) => {
    soundManager.knob();
    const newRotations = [...knobRotations];
    newRotations[index] = (newRotations[index] + 45) % 360;
    setKnobRotations(newRotations);
  };

  const handlePosterClick = (index: number) => {
    soundManager.click();
    const newFlipped = [...posterFlipped];
    newFlipped[index] = !newFlipped[index];
    setPosterFlipped(newFlipped);
  };

  const handleCableClick = (index: number) => {
    soundManager.buzz();
    setCableGlowing(index);
    setTimeout(() => setCableGlowing(null), 1000);
  };

  return (
    <div className={`radio-studio ${isRadioOn ? 'is-on' : 'is-off'}`}>
      <div className="studio-background"></div>
      
      <div className="studio-elements">
        {/* Console analogique */}
        <div className="console">
          <div className="console-top">
            {/* Bouton Power Rouge sur la console */}
            <div 
              className={`power-switch ${isRadioOn ? 'active' : ''}`} 
              onClick={handlePowerClick}
              title="Bouton Marche/Arrêt Radio"
            ></div>

            {[...Array(8)].map((_, i) => (
              <div key={i} className="channel">
                <div 
                  className="knob interactive" 
                  style={{ transform: `rotate(${knobRotations[i]}deg)` }}
                  onClick={() => handleKnobClick(i)}
                ></div>
                <div className="fader" style={{ height: `${faderHeights[i]}%` }}></div>
              </div>
            ))}
          </div>
          
          <div className="vu-meters">
            <VUMeter channel="L" isActive={isRadioOn} />
            <VUMeter channel="R" isActive={isRadioOn} />
          </div>
        </div>

        {/* Lumière ON AIR - Se synchronise avec le power */}
        <OnAirLight isOn={isRadioOn} />

        {/* Microphone rétro */}
        <div className="microphone">
          <div className="mic-head"></div>
          <div className="mic-body"></div>
          <div className="mic-stand"></div>
        </div>

        {/* Vinyles empilés */}
        <div className="vinyl-stack">
          {[...Array(5)].map((_, i) => (
            <div 
              key={i} 
              className={`vinyl interactive ${vinylSpinning === i ? 'spinning' : ''}`}
              style={{ 
                transform: `translateY(${i * -3}px) rotate(${i * 2}deg)`,
                zIndex: 5 - i
              }}
              onClick={() => handleVinylClick(i)}
            >
              <div className="vinyl-label"></div>
              <div className="vinyl-hole"></div>
            </div>
          ))}
        </div>

        {/* Câbles SVG */}
        <svg className="cables" viewBox="0 0 1920 1080" preserveAspectRatio="none">
          <path
            className={`cable interactive ${cableGlowing === 0 ? 'glowing' : ''}`}
            d="M 100 800 Q 300 700, 500 750 T 900 800"
            stroke={isRadioOn ? "rgba(255, 69, 0, 0.4)" : "rgba(50, 50, 50, 0.4)"}
            strokeWidth="3"
            fill="none"
            onClick={() => handleCableClick(0)}
          />
        </svg>

        {/* Affiches murales */}
        <div className="posters">
          {[0, 1].map((i) => (
            <div 
              key={i}
              className={`poster poster-${i+1} interactive ${posterFlipped[i] ? 'flipped' : ''}`}
              onClick={() => handlePosterClick(i)}
            >
              <div className="poster-front">
                <div className="poster-text">{i === 0 ? 'LIVE' : 'RADIO'}</div>
              </div>
              <div className="poster-back">
                <div className="poster-text">{i === 0 ? '80s' : 'VIBE'}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Particules de poussière */}
        <div className="dust-particles">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="dust"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 10}s`,
                animationDuration: `${15 + Math.random() * 10}s`
              }}
            ></div>
          ))}
        </div>
      </div>

      <div className="vignette"></div>
    </div>
  );
};

export default RadioStudio;