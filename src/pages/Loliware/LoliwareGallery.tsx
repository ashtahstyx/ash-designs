import { useState } from 'react';
import styles from './Loliware.module.scss';

interface ThumbnailGalleryProps {
  images: readonly string[];
}

const ThumbnailGallery = ({ images }: ThumbnailGalleryProps) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <div className={styles.loliwareGalleryGrid}>
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

      {selectedImage && (
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
