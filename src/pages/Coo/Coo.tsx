import UserFlow from '../../assets/images/coo/coo_user-flow.jpg';
import { images } from '../../assets/images';
import styles from './styles/Coo.module.scss';

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
        <section className={styles.cooApp}>
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
                This app pushes your comfort zone in many ways, in that you will
                hear the "coo" of your potential mate as well as only knowing
                you will be meeting up with a match who suits similar interests.
              </p>
            </div>
            <div>
              <h3>How It Works</h3>

              <p>
                A location-based dating app where the user is given a selection
                of possible matches (maxed at 5). When browsing for matching
                close by, you can move over the map to spot a local match.
                Choose who you would like to meet, our algorythm has already
                matched you based on some likes and dislikes you input into your
                profile.
              </p>
              <p>
                Once you have selected the other user will have to opportunity
                to accept a meetup in which options will appear for you to
                select a meeting place, out map will assist you in directions,
                don't worry.
              </p>
              <p>
                You will be able to then see a picture of your match, a small
                description and icons for likes and interests. The "Coo" will
                emmit and the sound will be the same as your potential match.
                Once you have met, the chat option will become available so you
                can continue talking or track who you have met.
              </p>
            </div>
          </div>

          <img
            className={styles.largeBanner}
            src={images.CooMultiLayout}
            alt="large banner showing multiple screens"
          />

          <h2>The App</h2>

          <div className={styles.cooAppDesign}>
            <div>
              <h3>The COO</h3>

              <p>
                Mating call will come from a variety of birds and will be loud
                and distinct enough in small crowd. It will shut off
                automatically when you are within 5 feet of your match. This
                setting can be altered to lower tones or pop in your headphones
                to keep a low profile.
              </p>

              <img src={images.Tilt} alt="Screen layer" />
            </div>

            <div className={styles.shakeIt}>
              <h3> Give It a Shake</h3>

              <p>
                Only one coo can be sent out every hour and matches will refresh
                when the phone is shaken if you do not find anyone that you
                click with. You will be able to shake your screen to refresh
                once in a 24-hour period. Which will max out your matches to 10
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
