import { useState } from 'react';
import { Accordion, AccordionItem } from '@szhsin/react-accordion';
import { images } from '../../assets/images';
import styles from './LoliwareBrand.module.scss';
import { FaChevronDown } from 'react-icons/fa6';

const Loliware = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <main className={styles.loliware}>
        <section className={styles.loliwareIntro}>
          <div>
            <h2> LOLIWARE - Biodegr&#40;edible&#41; Cups and Straws</h2>
            <p>
              Created by two Industrial Designers, LOLIWARE is considered “the
              cup of the future” because it is the first fully edible and
              biodegradable disposable cup and straws that are made primarily of
              seaweed. LOLIWARE aims to rid the world of plastic waste by
              replacing one-use cups and straws.
            </p>

            <a href="https://www.loliware.com/" target="_blank">
              <button>Check out the real company!</button>
            </a>
          </div>
          <img
            className={styles.loliwareLogo}
            src={images.LogoLoli}
            alt="Rebrand for LOLIWARE"
          />
        </section>
        <section className={styles.loliwareBrand}>
          <picture>
            <source srcSet={images.LoliBrandM} media="(max-width: 767px)" />
            <source srcSet={images.LoliBrand} media="(min-width: 768px)" />
            <img
              className={styles.fullWidth}
              src={images.LoliBrand}
              alt="Rebrand for LOLIWARE"
            />
          </picture>

          <h2>LoliWare Brand</h2>
          <div className={styles.loliLogos}>
            <img src={images.LogoLoli2} alt="Rebrand for LOLIWARE Logo One" />
            <img src={images.LogoLoli3} alt="Rebrand for LOLIWARE Logo Two" />
            <img src={images.LogoLoli} alt="Rebrand for LOLIWARE Logo Three" />
          </div>

          <div className={styles.loliwareBrandExample}>
            <h3>The Brand</h3>
            <p>
              The mark is simple and bright and mimics the shape and intent of
              their star product, the LOLIWARE cup. Colors used across all
              branding and products were inspired by their current bright color
              palette with variations in intensity and shade.
            </p>
            <a href="lw-website/index.html" target="_blank">
              <button>Check it out!</button>
            </a>
          </div>
        </section>
        <section className={styles.loliwareWeb}>
          <img
            className={styles.loliwareWebMock}
            src={images.LoliWeb}
            alt="Rebrand for LOLIWARE"
          />
          <h2>LoliWare WebPage</h2>
          <div className={styles.loliwareWebExample}>
            <h3>Website Example</h3>
            <p>
              Currently the web presence lacks the same character as the
              product, so large type and bold colors are used to accent each cup
              in its own unique color. Product pages and recipe pages will be
              color coded to mimic each cup flavor.
            </p>
            <a href="lw-website/index.html" target="_blank">
              <button>Check it out!</button>
            </a>
          </div>
        </section>
        <section>
          <Accordion className={styles.accordion}>
            <AccordionItem
              className={styles.accordionItem}
              header={
                <div className={styles.accordionHeader} onClick={handleToggle}>
                  <span>What is Game Hive?</span>
                  <FaChevronDown
                    className={`${styles.accordionHeaderIcon} ${
                      isOpen ? styles.rotate : ''
                    }`}
                  />
                </div>
              }>
              <div className={styles.accordionContent}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </div>
            </AccordionItem>
          </Accordion>
        </section>
      </main>
    </>
  );
};

export default Loliware;
