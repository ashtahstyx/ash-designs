import { useState } from 'react';
import { Accordion, AccordionItem } from '@szhsin/react-accordion';
import styles from './Loliware.module.scss';
import { FaChevronDown } from 'react-icons/fa6';

const Loliware = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
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
    </>
  );
};

export default Loliware;
