import { FC } from 'react';
import './OnAirLight.css';

interface OnAirLightProps {
  isOn: boolean; // Ajout de la prop
}

const OnAirLight: FC<OnAirLightProps> = ({ isOn }) => {
  return (
    <div className={`on-air-container ${isOn ? 'power-on' : 'power-off'}`}>
      <div className="on-air-light">
        <div className="light-glow"></div>
        <div className="light-text">ON AIR</div>
      </div>
    </div>
  );
};

export default OnAirLight;