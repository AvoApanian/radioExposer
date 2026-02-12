import { FC } from 'react';
import './Slide.css';

interface SlideData {
  id: number;
  type: 'intro' | 'artwork' | 'outro';
  title: string;
  artist?: string;
  image?: string;
  description?: string;
  hasAudio?: boolean;
}

interface SlideProps {
  data: SlideData;
  isZoomed: boolean;
}

const Slide: FC<SlideProps> = ({ data, isZoomed }) => {
  return (
    <div className={`slide slide-${data.type} ${isZoomed ? 'zoomed' : ''}`}>
      {data.type === 'intro' && (
        <div className="intro-content">
          <h1 className="intro-title">
            <span className="title-line">{data.title}</span>
          </h1>
          <div className="intro-subtitle">
            <span className="vinyl-icon">🎵</span>
            <span>A Visual Journey Through Art</span>
          </div>
        </div>
      )}

      {data.type === 'artwork' && (
        <div className="artwork-content">
          <div className="artwork-frame">
            {data.image ? (
              <img 
                src={data.image} 
                alt={data.title}
                className="artwork-image"
              />
            ) : (
              <div className="artwork-placeholder">
                <div className="placeholder-text">{data.title}</div>
                <div className="placeholder-artist">{data.artist}</div>
              </div>
            )}
          </div>
          <div className="artwork-info">
            <h2 className="artwork-title">{data.title}</h2>
            <p className="artwork-artist">{data.artist}</p>
            {data.description && (
              <p className="artwork-description">{data.description}</p>
            )}
          </div>
        </div>
      )}

      {data.type === 'outro' && (
        <div className="outro-content">
          <h1 className="outro-title">
            <span className="title-word">{data.title.split(' ')[0]}</span>{' '}
            <span className="title-word">{data.title.split(' ')[1]}</span>{' '}
            <span className="title-word">{data.title.split(' ')[2]}</span>
          </h1>
          <div className="outro-subtitle">
            {data.title.split(' ').slice(3).join(' ')}
          </div>
          <div className="outro-decoration">
            <div className="deco-line"></div>
            <span className="deco-icon">★</span>
            <div className="deco-line"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Slide;
