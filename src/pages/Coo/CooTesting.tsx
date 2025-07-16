import CooVideo from './CooVideo';
import CooGallery from './CooGallery';
import { images } from '../../assets/images';
import styles from './styles/CooTesting.module.scss';

const Coo = () => {
  const iconProcess = [
    images.CooIconProcess1,
    images.CooIconProcess2,
    images.CooIconProcess3,
    images.CooIconProcess4,
    images.CooIconProcess5,
  ];

  const appProcess = [
    images.CooAppProcess2,
    images.CooAppProcess1,
    images.CooAppProcess3,
    images.CooAppProcess4,
    images.CooAppProcess5,
    images.CooAppProcess6,
    images.CooAppProcess7,
    images.CooAppProcess8,
    images.CooAppProcess9,
    images.CooAppProcess10,
  ];

  return (
    <>
      <main className={styles.coo}>
        <section className={styles.cooProcess}>
          <div>
            <h2>Paper to Pixels</h2>
            <p>
              Paper went to design on screen. I had my UX, now I needed a solid
              UI to back it up. The design and personality went through many
              changes until the final product was produced and a solid palette
              was decided on. This brand and UI also went through rounds of peer
              reviews and presentations.
            </p>
            <p>
              Other changes included were to functionality itself. The token
              system was removed, a timer for meeting was added as well as the
              map function with local deals.
            </p>

            <div>
              <h3>Protytype Sketches</h3>
              <CooGallery images={iconProcess} viewMode="thumbnails" />
            </div>

            <div>
              <h3>Icon Sketches</h3>
              <CooGallery images={appProcess} viewMode="thumbnails" />
            </div>
          </div>
          <img
            className={styles.fullWidth}
            src={images.Process}
            alt="Diagram showing the Coo app design process"
          />
        </section>
        <section className={styles.cooPrototype}>
          <div>
            <CooVideo />
          </div>
          <div>
            <h2>Paper Prototyping</h2>
            <p>
              Step one after the idea came to fruition, was to get something on
              paper that was useable and testable. I went with printed out paper
              prototypes for some example screens and had a user go through the
              application for me while I watched. I gave them a short prompt
              that they were new to the app, wanted to see how matches worked,
              edit their profile, view a message and explore other options.
            </p>
            <p>
              I learned from this that there were too many elements in my
              intital idea. The inclusion of tokens made this seem like an app
              to gain achievements and that wasn't my goal. My goal was to
              create connections and get the user out of app as soon as
              possible.
            </p>
            <p>
              There are also moments of recognition in my intial idea, it
              followed the flow of 20+ apps that I had tested. You get a list of
              matches, choose someone, find out what they like, chat for a bit
              and so on. It was a little stale and needed to be livened up so
              that it stands out.
            </p>
          </div>
        </section>
        <section className={styles.cooTest}>
          <div>
            <h2>AB Testing</h2>
            <p>
              I had a small group of fellow classmates test the application,
              went through the paper prototype(s) and offered feedback as they
              ran through.
            </p>
            <p>
              Some vital suggestions included:
              <ul>
                <li>icons rather than just to show a simple paragraph.</li>
                <li>
                  a branded waypoint rather than something generic seen on
                  google or other maps.
                </li>
                <li>
                  testers preferred Oleo Script Swash Caps over another type
                  choice.
                </li>
              </ul>
            </p>
          </div>
          <div className={styles.cooTestResult}>
            <img src={images.CooTypeAB} alt="coo typeface choice" />
            <img
              src={images.CooAB3}
              alt="Diagram showing the Coo app design process"
            />
            <img
              src={images.CooAB4}
              alt="Diagram showing the Coo app design process"
            />
          </div>
        </section>
      </main>
    </>
  );
};

export default Coo;
