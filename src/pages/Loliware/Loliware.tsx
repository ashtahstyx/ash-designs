import { useState } from 'react';
import { Accordion, AccordionItem } from '@szhsin/react-accordion';
import styles from './Loliware.module.scss';
import { loliwareFlavors } from './resources/flavors';
import { FaChevronDown } from 'react-icons/fa6';

const flavors = loliwareFlavors;

const Loliware = () => {
  const [startIndex, setStartIndex] = useState(0);
  const selectedFlavor = flavors[startIndex % flavors.length];
  const [isOpen, setIsOpen] = useState(false);

  // Calculate previous and next indices
  const prevIndex = (startIndex - 1 + flavors.length) % flavors.length;
  const nextIndex = (startIndex + 1) % flavors.length;

  const prevFlavor = flavors[prevIndex];
  const nextFlavor = flavors[nextIndex];

  const [size, setSize] = useState<'small' | 'large'>('small');
  const [quantity, setQuantity] = useState(1);

  const unitPrice = selectedFlavor.prices[size]; // Dynamic!
  const subtotal = (unitPrice * quantity).toFixed(2);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <main className={styles.loliwareSite}>
      <section className={styles.loliwareNav}>
        <div className={styles.navControls}>
          <button
            className={styles.prev}
            onClick={() => setStartIndex(prevIndex)}>
            ← {prevFlavor.label}
          </button>
          <button
            className={styles.next}
            onClick={() => setStartIndex(nextIndex)}>
            {nextFlavor.label} →
          </button>
        </div>
      </section>

      <section
        className={styles.loliwareHead}
        style={{
          background: `linear-gradient(135deg, ${selectedFlavor.accent1}, ${selectedFlavor.accent2})`,
        }}>
        <img
          className={styles.loliwareHeadImg}
          src={selectedFlavor.image}
          alt={selectedFlavor.label}
        />
        <h2>{selectedFlavor.label}</h2>
      </section>

      <section className={styles.loliwareProduct}>
        <div className={styles.info}>
          <h3 className={styles.infoTitle}>{selectedFlavor.label}</h3>
          <p className={styles.infoDescription}>{selectedFlavor.description}</p>
          <p className={styles.infoIngredients}>{selectedFlavor.ingredients}</p>
        </div>
        <div className={styles.cartSection}>
          <div className={styles.sizeButtons}>
            <button
              className={size === 'small' ? styles.active : ''}
              onClick={() => setSize('small')}>
              4 Cups
            </button>
            <button
              className={size === 'large' ? styles.active : ''}
              onClick={() => setSize('large')}>
              16 Cups
            </button>
          </div>

          <div className={styles.quantityInput}>
            <label htmlFor="quantity">Quantity:</label>
            <input
              id="quantity"
              type="number"
              min="1"
              value={quantity}
              onChange={(e) =>
                setQuantity(Math.max(1, parseInt(e.target.value) || 1))
              }
            />
          </div>

          <h3>
            <span>Subtotal: </span>${subtotal}
          </h3>
        </div>
      </section>

      <section className={styles.loliwareRecipe}>
        <Accordion className={styles.accordion}>
          <AccordionItem
            className={styles.accordionItem}
            header={
              <div className={styles.accordionHeader} onClick={handleToggle}>
                <span>Lets make a {selectedFlavor.recipes[0].title}?</span>
                <FaChevronDown
                  className={`${styles.accordionHeaderIcon} ${
                    isOpen ? styles.rotate : ''
                  }`}
                />
              </div>
            }>
            <div className={styles.accordionContent}>
              Flavor-specific content here for {selectedFlavor.label}
            </div>
          </AccordionItem>
        </Accordion>
      </section>
    </main>
  );
};

export default Loliware;
