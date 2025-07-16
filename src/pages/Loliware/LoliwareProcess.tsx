import { useState } from 'react';
import LoliwareGallery from './LoliwareGallery';
import { Accordion, AccordionItem } from '@szhsin/react-accordion';
import { images } from '../../assets/images';
import styles from './styles/LoliwareProcess.module.scss';
import { FaChevronDown } from 'react-icons/fa6';

const LoliwareProcess = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const brandImages = [
    images.LoliBrandProcess1,
    images.LoliBrandProcess2,
    images.LoliBrandProcess3,
    images.LoliBrandProcess4,
    images.LoliBrandProcess5,
    images.LoliBrandProcess6,
    images.LoliBrandProcess7,
  ];

  return (
    <>
      <main className={styles.loliware}>
        <section className={styles.fullWidth}>
          <img src={images.LoliBrandProcess} alt="Brand header" />
        </section>
        <section className={styles.loliwareProcess}>
          <h2>LoliWare Process</h2>

          <div className={styles.loliwareProcessBrand}>
            <h3>Brand Evolution</h3>
            <p></p>
            <p>
              Below you will find some process work for the brand, iconography
              as well as the website. The logo and icons have remained the same
              for the project, I felt that they still fit the brand as well as
              performed their appropriate function. While not all are unilized
              in my current verion of the site, they can still be seen on some
              of the other media.
            </p>

            <div className={styles.loliwareBrandGallery}>
              <LoliwareGallery images={brandImages} viewMode="thumbnails" />
            </div>
          </div>
        </section>
        <section className={styles.fullWidth}>
          <img src={images.LoliWireframe} alt="Wireframe header" />
        </section>
        <section className={styles.loliwareProcess}>
          <h2>LoliWare Process</h2>

          <div className={styles.loliwareProcessWeb}>
            <h3>Website Evolution</h3>
            <p>
              Over the lifespan of the project the website has evolved to take
              on some more modern touches. Since I started working on the
              Loliware brand my skills as a designer and developer have evolved
              so that I could make pages run smoother, look sleeker and also
              function to best suit users.
            </p>
            <p>
              Below you will find some process work for the brand, iconography
              as well as the website. The logo and icons have remained the same
              for the project, I felt that they still fit the brand as well as
              performed their appropriate function. While not all are unilized
              in my current verion of the site, they can still be seen on some
              of the other media.
            </p>

            <Accordion className={styles.accordion}>
              <AccordionItem
                className={styles.accordionItem}
                header={
                  <div
                    className={styles.accordionHeader}
                    onClick={handleToggle}>
                    <span>View Wireframe Sketches</span>
                    <FaChevronDown
                      className={`${styles.accordionHeaderIcon} ${
                        isOpen ? styles.rotate : ''
                      }`}
                    />
                  </div>
                }>
                <div className={styles.accordionContent}>
                  <img
                    src={images.LoliWireframeProcess1}
                    alt="Wireframe set one"
                  />
                  <img
                    src={images.LoliWireframeProcess2}
                    alt="Wireframe set two"
                  />
                  <img
                    src={images.LoliWireframeProcess3}
                    alt="Wireframe set two"
                  />
                </div>
              </AccordionItem>
              <AccordionItem
                className={styles.accordionItem}
                header={
                  <div
                    className={styles.accordionHeader}
                    onClick={handleToggle}>
                    <span>View Desktop Wireframes</span>
                    <FaChevronDown
                      className={`${styles.accordionHeaderIcon} ${
                        isOpen ? styles.rotate : ''
                      }`}
                    />
                  </div>
                }>
                <div className={styles.accordionContent}>
                  <img src={images.LoliWireframeD1} alt="Wireframe set one" />
                  <img src={images.LoliWireframeD2} alt="Wireframe set two" />
                </div>
              </AccordionItem>
              <AccordionItem
                className={styles.accordionItem}
                header={
                  <div
                    className={styles.accordionHeader}
                    onClick={handleToggle}>
                    <span>View Mobile Wireframes</span>
                    <FaChevronDown
                      className={`${styles.accordionHeaderIcon} ${
                        isOpen ? styles.rotate : ''
                      }`}
                    />
                  </div>
                }>
                <div className={styles.accordionContent}>
                  <img src={images.LoliWireframeM1} alt="Wireframe set one" />
                  <img src={images.LoliWireframeM2} alt="Wireframe set two" />
                  <img src={images.LoliWireframeM3} alt="Wireframe set three" />
                </div>
              </AccordionItem>
              <AccordionItem
                className={styles.accordionItem}
                header={
                  <div
                    className={styles.accordionHeader}
                    onClick={handleToggle}>
                    <span>View Mockups</span>
                    <FaChevronDown
                      className={`${styles.accordionHeaderIcon} ${
                        isOpen ? styles.rotate : ''
                      }`}
                    />
                  </div>
                }>
                <div className={styles.accordionContent}>
                  <img src={images.LoliMockup1} alt="Mockup set one" />
                  <img src={images.LoliMockup2} alt="Mockup set two" />
                </div>
              </AccordionItem>
            </Accordion>
          </div>
        </section>
      </main>
    </>
  );
};

export default LoliwareProcess;
