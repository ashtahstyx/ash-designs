import { images } from '../../assets/images';
import styles from './styles/CooBrand.module.scss';

const Coo = () => {
  return (
    <>
      <main className={styles.coo}>
        <section className={styles.cooBrand}>
          <h2>The Brand</h2>

          <h3>Typography</h3>
          <p>
            A swash display type is used for the logo and on specific headers
            throughout the app. This typeface brings a playful and sing-song
            feel to the design. All of typography is styled in the humanist
            sans, Seravek, which was chosen for ease of readability and its hand
            written qualities.
          </p>

          <div className={styles.cooType}>
            <div>
              <img src={images.CooTypeMain} alt="coo typeface choice" />
              <p>Oleo Script Swash Caps</p>
            </div>
            <div>
              <img src={images.CooTypeSecondary} alt="coo typeface choice" />
              <p>Seravek</p>
            </div>
          </div>
        </section>
        <section className={styles.cooColor}>
          <div className={styles.colorPalette}>
            <div className={styles.colorSlant}>
              <h3>Color Palette</h3>
              <p>
                Coo takes its visual inspiration straight from nature and the
                well known, Love Bird. Below shows the exact image used to pull
                each color for the color palette. The signature coo color is a
                tint of the bright lovebird face color to give a designer some
                room to play with different tones.
              </p>
              <p>
                Neutral tones were pulled in to round out the brand. These sit
                on the cooler side of the color spectrum to add in some
                variation, stand out when needed but also pull away to not
                outshine the main palette. These tones are used in text and
                background elements within the overall design.
              </p>
            </div>
          </div>

          <img
            className={styles.cooPalette}
            src={images.CooPalette}
            alt="coo color choices"
          />
        </section>
        <section className={styles.cooIconography}>
          <h3>Icon Sets</h3>
          <p>
            Two seperate sets of icons are used throughout the app. The grey
            icons assist in distinguishing the types of establishments located
            on the map. Bright orange icons are used in the user profiles to
            show interests or hobbies.
          </p>

          <div className={styles.cooIcons}>
            <img src={images.CooIcons1} alt="Coo App building icons" />

            <img src={images.CooIcons2} alt="Coo App interst icons" />
          </div>
        </section>
        <section className={styles.cooMap}>
          <div>
            <h3>User Map</h3>
            <p>
              Rather than use a standard Map pulled in from sources such as
              Google. I wanted to created a custom experience using the Coo
              color palette and icons.
            </p>
            <p>
              When browsing for matching close by, you can move over the map to
              spot a local match. There will be an icon if no image is available
              or once matched it will be replaced with the picture of your
              match.
            </p>
            <p>
              The background is pushed back but does contain icons and landmarks
              so that you will know where you are and what meeting options are
              around your location. Yellow buildings will signify where a
              sponsored coupon is available to meet at.
            </p>
          </div>
          <div>
            <img src={images.CooMap1} alt="Coo App customized map" />
            <img src={images.CooMap2} alt="Coo App customized map" />
            <img src={images.CooMap3} alt="Coo App customized map" />
          </div>
        </section>
      </main>
    </>
  );
};

export default Coo;
