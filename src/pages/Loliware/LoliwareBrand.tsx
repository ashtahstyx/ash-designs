import LoliwareGallery from './LoliwareGallery';
import { Link } from 'react-router-dom';
import { images } from '../../assets/images';
import styles from './styles/LoliwareBrand.module.scss';

const LoliwareBrand = () => {
  const packImages = [images.LoliPack1, images.LoliPack2, images.LoliPack3];
  const recipeImages = [
    images.LoliRecipe,
    images.LoliRecipe1,
    images.LoliRecipe2,
    images.LoliRecipe3,
    images.LoliRecipe4,
  ];

  const truckImages = [
    images.LoliTruckMain1,
    images.LoliTruckMain2,
    images.LoliTruckMain3,
  ];

  return (
    <>
      <main className={styles.loliware}>
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
          </div>
        </section>
        <section className={styles.loliwareType}>
          <div className={styles.loliwareTypeExample}>
            <img
              src={images.LogoType}
              alt="LOLIWARE quicksand typography examples"
            />
            <h3>Typography</h3>
            <h4>font-family: "Quicksand", sans-serif;</h4>

            <p>
              The typography needed to match the playful energy of the rest of
              the brand. I chose the Quicksand Google Font for several reason.
            </p>
            <p>
              First, the typeface was universal. Meaning that I could utilize it
              in print as well as a web-friendly typeface. While I would have
              taken extra steps to import a custom typeface, I felt that it was
              more work than was needed, why reinvent the wheel?
            </p>
            <p>
              Second, the typeface pulls in the rest of the elements of the
              brand. The brand is playful, simple and has an easy going
              personality. While this is an eco-friendly product I didn't want
              to go the expected route. The audience Loliware was originally
              trying to reach was a social, stylish, mid 20's, eco-conscious
              consumer. Therefore, the brand has to speak closer to this. I
              wanted the brand to not be taken too serious with eco insignias
              and shades of green. This is supposed to be a product you bust out
              during a themed birthday party. The "fancy china" so to speak.
            </p>
          </div>
        </section>
        <section className={styles.loliwareIcon}>
          <img src={images.LoliIcons} alt="LOLIWARE icon system" />
          <h3>Icon System</h3>
          <p>
            A small set of icons for organizing similar content and
            distinguishing small differences in recipes. Also cart and recipe
            icons for navigation. These are kept simple, easy to read and can be
            seen in all of the brand color combinations.
          </p>
        </section>
        <section className={styles.loliwarePack}>
          <div>
            <h2>Sales Material</h2>
            <h3>Box</h3>
            <p>
              The packaging will consist of completely biodegradable materials
              and transform into covers or coasters for each cup. All you have
              to do it tear along the perforated edges, fold and stick together.
              The "Party Pack" includes two of each cup flavor plus four
              signature LOLIWARE recipe cards.
            </p>
          </div>
          <div className={styles.loliwarePackGallery}>
            <LoliwareGallery images={packImages} viewMode="featured" />
          </div>
        </section>
        <section className={styles.loliwareRecipe}>
          <h3>Recipe Cards</h3>
          <p>
            There is an option to buy a larger set which will include a set of
            recipe cards. These cards will match the flavor of your cup and are
            a fun collectable so that you can make a signature LOLIWARE drink
            even when you are out of your favorite cup.
          </p>
          <div className={styles.loliwareRecipeGallery}>
            <LoliwareGallery images={recipeImages} viewMode="thumbnails" />
          </div>
        </section>
        <section className={styles.loliwareTruck}>
          <div className={`${styles.loliwareTruckImgs} ${styles.fullWidth}`}>
            <img
              src={images.LoliTruck1}
              alt="LOLIWARE food truck quarter view front"
            />
            <img
              src={images.LoliTruck2}
              alt="LOLIWARE food truck quarter view back"
            />
            <img
              src={images.LoliTruck3}
              alt="LOLIWARE food truck quarter view back"
            />
            <img
              src={images.LoliTruck4}
              alt="LOLIWARE food truck quarter view front"
            />
          </div>
          <div className={styles.loliwareTruckInfo}>
            <h3>Food Truck</h3>
            <p>
              A new take on an ice cream truck is used to bring something
              familiar to this inventive product. All drinks, both alcoholic and
              non-alcoholic, desserts, and other custom treats will be served
              inside of LOLIWARE rather than the normal cone or single-use
              disposable ware you are used to. This truck will be utilized at
              public events such as SXSW, food truck parks or just popping up
              unexpectedly outside parks or work.
            </p>
          </div>
          <div className={styles.loliwareTruckGallery}>
            <LoliwareGallery images={truckImages} viewMode="thumbnails" />
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
            <div className={styles.webButtons}>
              <a
                href="https://web.archive.org/web/20180812234402/https://www.loliware.com/"
                target="_blank">
                <button>Original Inspiration</button>
              </a>
              <a
                href="https://ashtahstyx.github.io/ah-design-portfolio/portfolio/lw-website/p-cherry.html#"
                target="_blank">
                <button>Initial Design</button>
              </a>
              <Link to="/loliware/web" target="_blank">
                <button>Current Design</button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default LoliwareBrand;
