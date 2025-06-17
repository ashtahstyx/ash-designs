import UserFlow from '../../assets/images/coo/coo_user-flow.jpg';
import { images } from '../../assets/images';
import styles from './Coo.module.scss';

const Coo = () => {
  return (
    <>
      <main className={styles.coo}>
        <div className={styles.cooHeader}>
          <img
            className={styles.cooLogo}
            src={images.LogoCoo}
            alt="COO dating app logo"
          />
          <img
            className={styles.cooHero}
            src={images.CooHeader}
            alt="COO datng app header image"
          />
        </div>
        <section className={styles.cooShapedDrk}>
          <div className={styles.cooIntro}>
            <h2>Overview</h2>

            <p>
              A location based, limited match, bird themed app that will find
              your matches based around your current GPS location in real time.
              With the extra incentive of discounts, users could be more likely
              to make quicker or more frequent connections.
            </p>
          </div>

          <div className={styles.cooIntro}>
            <h2>Problem</h2>

            <p>
              Most dating apps give you unlimited options of potential dates but
              lack the means to motivate you to meet in person.
            </p>
          </div>

          <div className={styles.cooIntro}>
            <h2>Solution</h2>

            <p>
              Coo limits users options and offers immediate date options with
              discounts in your immediate area (within 1-2 miles).
            </p>
          </div>
        </section>
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

          <div className={styles.cooBrandType}>
            <div>
              <img src={images.CooTypeAB} alt="coo typeface choice" />
              <p>
                A/B testers preferred Oleo Script Swash Caps over another type
                choice.
              </p>
            </div>
            <div>
              <img src={images.CooTypeMain} alt="coo typeface choice" />
              <p>Oleo Script Swash Caps</p>
            </div>
            <div>
              <img src={images.CooTypeSecondary} alt="coo typeface choice" />
              <p>Seravek</p>
            </div>
          </div>

          <div className={styles.cooBrandColor}>
            <div className={styles.colorPalette}>
              <div className={styles.colorSlant}>
                <h3>Color Palette</h3>
                <p>
                  Coo takes its visual inspiration straight from the Love Bird.
                  Each color is pulled from their feathers or a tinted variation
                  of one of those colors. Neutral tones were used for the
                  background and text so that they would not distract from the
                  overall design.
                </p>
              </div>
            </div>

            <img src={images.CooPalette} alt="coo color choices" />
          </div>

          <div className={styles.cooBrandIcons}>
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
          </div>

          <div className={styles.cooABTests}>
            <img src={images.CooAB1} alt="A/B Test: user prefer to see icons" />
          </div>
        </section>
        <section className={styles.cooApp}>
          <img
            className={styles.largeBanner}
            src={images.CooMultiLayout}
            alt="A/B Test: user prefer to see icons"
          />

          <h2>The App</h2>

          <div className={styles.cooAppDesign}>
            <div>
              <h3>The COO</h3>

              <p>
                Mating call will come from a variety of birds and will be loud
                and distinct enough to hear above any crowd. It will shut off
                automatically when you are within 5 feet of your match.
              </p>

              <img src={images.Tilt} alt="Screen layer" />
            </div>

            <div className={styles.shakeIt}>
              <h3> Give It a Shake</h3>

              <p>
                Only one coo can be sent out every hour and matches will refresh
                when the phone is shaken if you do not find anyone that you
                click with. You will be able to shake your screen to refresh
                once in a 24-hour period. Which will max out your matches to 6
                people for the entire day in just your immediate area. So, save
                your refreshes!
              </p>

              <img
                className={styles.shakeItTimer}
                src={images.Timer}
                alt="24hr timer"
              />

              <img src={images.ShakeIt} alt="Coo App shake refresh feature" />
            </div>
          </div>

          <img
            className={styles.fullWidth}
            src={images.CooAB2}
            alt="A/B Test: user prefer to see icons"
          />

          <div className={styles.cooAppDetails}>
            <div>
              <h3>Design Process</h3>

              <p>
                When designing Coo, I drew inspiration from birds and the
                different ways that they attract and find a mate. Mating calls
                were chosen because they are loud and destinct, so keep in mind
                that this app is not for the easily embarrassed.
              </p>

              <p>
                This video intro will give you a quick and basic walkthrough of
                the entire application and a sample of a bird call that would be
                used.
              </p>
            </div>
            <div>
              <h3>How It Works</h3>

              <p>
                A location-based dating app where the female user is given
                control of the who, when, and where of every date. She will only
                show up on a male user’s screen if she first sends out a coo; a
                call that alerts a local male that she is interested in meeting
                him in person. Male users will always be active and will only
                see matches that have sent him a coo.
              </p>

              <p>
                If you are interested in the same sex all potential matches will
                be visible to both parties and both will have the option to send
                a coo.
              </p>
            </div>
          </div>

          <img
            className={styles.fullWidth}
            src={images.Process}
            alt="Diagram showing the Coo app design process"
          />

          <div className={styles.cooAppFull}>
            <h2>Full App</h2>

            <h3>App Flow</h3>
            <p>Click below to see a larger view of the entire web flow.</p>

            <a href={UserFlow} target="_blank" className={styles.popup}>
              <img
                src={images.Popup}
                rel="noopener noreferrer"
                alt="coo app user flow"
              />
            </a>
          </div>
        </section>
      </main>
    </>
  );
};

export default Coo;
