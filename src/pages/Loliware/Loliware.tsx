import { useState, useEffect } from 'react';
import { Accordion, AccordionItem } from '@szhsin/react-accordion';
import styles from './styles/Loliware.module.scss';
import ThumbnailGallery from './LoliwareGallery';
import { loliwareFlavors } from './resources/flavors';
import { FaChevronDown } from 'react-icons/fa6';

const flavors = loliwareFlavors;

const Loliware = () => {
  const [startIndex, setStartIndex] = useState(0);
  const selectedFlavor = flavors[startIndex % flavors.length];
  const [isOpen, setIsOpen] = useState(false);

  const prevIndex = (startIndex - 1 + flavors.length) % flavors.length;
  const nextIndex = (startIndex + 1) % flavors.length;

  const prevFlavor = flavors[prevIndex];
  const nextFlavor = flavors[nextIndex];

  const [size, setSize] = useState<'small' | 'large'>('small');
  const [quantity, setQuantity] = useState(1);

  const unitPrice = selectedFlavor.prices[size];
  const subtotal = (unitPrice * quantity).toFixed(2);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    if (selectedFlavor) {
      const root = document.documentElement;
      root.style.setProperty('--loli-accent', selectedFlavor.accent1);
      root.style.setProperty('--loli-accent2', selectedFlavor.accent2);
    }
  }, [selectedFlavor]);

  return (
    <main className={styles.loliwareSite}>
      <section className={styles.loliwareNav}>
        <div className={styles.loliwareNavControls}>
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

      <section className={styles.loliwareHead}>
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
          <div className={styles.cartButtons}>
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

          <div className={styles.cartInput}>
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

          <h3 className={styles.cartSubtotal}>
            Subtotal: <span>${subtotal}</span>
          </h3>
        </div>
      </section>

      <section className={styles.loliwareGallery}>
        <ThumbnailGallery
          images={selectedFlavor.gallery as unknown as string[]}
          viewMode="thumbnails"
        />
      </section>

      <section className={styles.loliwareRecipe}>
        <h2>Recipes:</h2>
        <Accordion className={styles.recipeAccordion}>
          {selectedFlavor.recipes.map((recipe, index) => (
            <AccordionItem
              key={recipe.title + index}
              className={styles.recipeItems}
              header={
                <div
                  className={styles.recipeHeader}
                  onClick={() => {
                    // If you want each to toggle individually, you might use a separate state per item.
                    handleToggle();
                  }}>
                  <span>Let's make a {recipe.title}</span>
                  <FaChevronDown
                    className={`${styles.recipeHeaderIcon} ${
                      isOpen ? styles.rotate : ''
                    }`}
                  />
                </div>
              }>
              <div className={styles.recipeContent}>
                <div className={styles.recipeImg}>
                  <img src={recipe.image} alt={recipe.title} />
                </div>
                <div>
                  <h4>Ingredients</h4>
                  <ul className={styles.recipeIngredients}>
                    {recipe.ingredients.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4>Instructions</h4>
                  <ol className={styles.recipeInstructions}>
                    {recipe.instructions.map((step, i) => (
                      <li key={i}>{step}</li>
                    ))}
                  </ol>
                </div>
              </div>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </main>
  );
};

export default Loliware;
