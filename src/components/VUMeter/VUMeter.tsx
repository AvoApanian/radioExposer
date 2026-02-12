import { FC, useEffect, useState } from 'react';
import './VUMeter.css';

interface VUMeterProps {
  channel: 'L' | 'R';
  isActive: boolean; // Ajout de la prop
}

const VUMeter: FC<VUMeterProps> = ({ channel, isActive }) => {
  const [level, setLevel] = useState(0);

  useEffect(() => {
    if (!isActive) {
      setLevel(0);
      return;
    }
    const interval = setInterval(() => {
      setLevel(Math.random() * 100);
    }, 150);
    return () => clearInterval(interval);
  }, [isActive]);

  const segments = 20;
  const activeSegments = Math.floor((level / 100) * segments);

  return (
    <div className="vu-meter">
      <div className="vu-label">{channel}</div>
      <div className="vu-bar">
        {[...Array(segments)].map((_, i) => {
          let segmentClass = 'segment';
          if (i < activeSegments) {
            if (i < segments * 0.7) segmentClass += ' active green';
            else if (i < segments * 0.9) segmentClass += ' active yellow';
            else segmentClass += ' active red';
          }
          return <div key={i} className={segmentClass}></div>;
        })}
      </div>
    </div>
  );
};

export default VUMeter;