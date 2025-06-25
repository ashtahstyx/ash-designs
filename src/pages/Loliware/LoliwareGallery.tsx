import { useState } from 'react';
import styles from './styles/LoliwareGallery.module.scss';

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
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const featuredImage = selectedImage ?? images[0];

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
          <div className={`${styles.loliwareGalleryGrid} ${className ?? ''}`}>
            {images.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`Thumbnail ${i}`}
                className={styles.thumbnail}
                onClick={() => setSelectedImage(img)}
              />
            ))}
          </div>
        </div>
      ) : (
        <div className={`${styles.loliwareGalleryGrid} ${className ?? ''}`}>
          {images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`Thumbnail ${i}`}
              className={styles.thumbnail}
              onClick={() => setSelectedImage(img)}
            />
          ))}
        </div>
      )}

      {viewMode === 'thumbnails' && selectedImage && (
        <div
          className={styles.modalOverlay}
          onClick={() => setSelectedImage(null)}>
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}>
            <button
              className={styles.modalClose}
              onClick={() => setSelectedImage(null)}
              aria-label="Close">
              ×
            </button>
            <img
              src={selectedImage}
              alt="Large preview"
              className={styles.modalImage}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ThumbnailGallery;
