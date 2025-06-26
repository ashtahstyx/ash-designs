import styles from './styles/Loliware.module.scss';
import { images } from '../../assets/images';

const Loliware = () => {
  return (
    <main className={styles.loliware}>
      <section className={styles.loliwareIntro}>
        <div>
          <h2> LOLIWARE - Biodegr&#40;edible&#41; Cups and Straws</h2>
          <p>
            Created by two Industrial Designers, LOLIWARE is considered “the cup
            of the future” because it is the first fully edible and
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
      <section className={styles.loliwareAbout}>
        <div>
          <h2> Why LOLIWARE?</h2>
          <p>
            I orginally discovered LOLIWARE's brand on KickStarter looking for
            funding for biodegradable straws. I loved the brand, the feel for
            the company and the voice that the creators had. It was just fun,
            vibrant and overall such an interesting concept at the start of the
            degradable straw movement.
          </p>
          <p>
            later, they expanded into flavored cups which also had a unique set
            of flavors associated. While this product did not last, I believe
            due to the pricing of the product itself and not seeing a practical
            way forward with the niche customerbase, they have gone forward with
            their staws.
          </p>
          <p>
            I chose to focus on their cups however. Even if they aren't
            practical I found that marketing could be made fun. I chose a range
            of recipes to pair with your edible cup as well as a food truck and
            a small website focusing on purchasing and recipe creation.
          </p>
        </div>
      </section>
    </main>
  );
};

export default Loliware;
