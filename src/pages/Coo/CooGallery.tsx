import { useState } from 'react';
import styles from './styles/CooGallery.module.scss';

type ViewMode = 'thumbnails' | 'featured';

interface ThumbnailGalleryProps {
  images: readonly string[];
  viewMode?: ViewMode;
  className?: string;
}

const ThumbnailGallery = ({
  images,
  viewMode = 'thumbnails',
  className,
}: ThumbnailGalleryProps) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const featuredImage =
    selectedIndex !== null ? images[selectedIndex] : images[0];

  // Go to next image (wrap around)
  const goNext = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex + 1) % images.length);
  };

  // Go to previous image (wrap around)
  const goPrev = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex - 1 + images.length) % images.length);
  };

  return (
    <>
      {viewMode === 'featured' ? (
        <div className={styles.featuredLayout}>
          <div className={styles.featuredView}>
            <img
              src={featuredImage}
              alt="Featured preview"
              className={styles.featuredImage}
            />
          </div>
          <div className={`${styles.cooGalleryGrid} ${className ?? ''}`}>
            {images.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`Thumbnail ${i}`}
                className={styles.thumbnail}
                onClick={() => setSelectedIndex(i)}
              />
            ))}
          </div>
        </div>
      ) : (
        <div className={`${styles.cooGalleryGrid} ${className ?? ''}`}>
          {images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`Thumbnail ${i}`}
              className={styles.thumbnail}
              onClick={() => setSelectedIndex(i)}
            />
          ))}
        </div>
      )}

      {/* Modal with navigation arrows */}
      {viewMode === 'thumbnails' && selectedIndex !== null && (
        <div
          className={styles.modalOverlay}
          onClick={() => setSelectedIndex(null)}>
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}>
            {/* Close Button */}
            <button
              className={styles.modalClose}
              onClick={() => setSelectedIndex(null)}
              aria-label="Close">
              ×
            </button>

            {/* Left Arrow */}
            <button
              className={styles.modalPrev}
              onClick={goPrev}
              aria-label="Previous">
              ‹
            </button>

            {/* Image */}
            <img
              src={images[selectedIndex]}
              alt={`Large preview ${selectedIndex + 1}`}
              className={styles.modalImage}
            />

            {/* Right Arrow */}
            <button
              className={styles.modalNext}
              onClick={goNext}
              aria-label="Next">
              ›
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ThumbnailGallery;
