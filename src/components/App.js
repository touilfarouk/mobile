
import envelop from "../assets/envelop.svg";
import github from "../assets/github.svg";
import instagram from "../assets/instagram.svg";
import linkedin from "../assets/linkedin.svg";
import office from "../assets/office.svg";
import phone from "../assets/phone.svg";
import twitter from "../assets/twitter.svg";

import "../sass/main.scss";


const App = () => {
  return (
    <>
      
    <div className="navigation">
      <input type="checkbox" className="navigation__checkbox" id="nav-toggle" />
      <label for="nav-toggle" className="navigation__button">
        <span className="navigation__icon">&nbsp;</span>
      </label>
      <div className="navigation__background"></div>
      <nav className="navigation__nav">
        <ul className="navigation__list">
          <li className="navigation__item">
            <a href="#about" className="navigation__link"
              ><span>01</span>About Me</a
            >
          </li>
          <li className="navigation__item">
            <a href="#" className="navigation__link"><span>02</span>Projects</a>
          </li>
          <li className="navigation__item">
            <a href="#" className="navigation__link"><span>03</span>Articles</a>
          </li>
          <li className="navigation__item">
            <a href="#" className="navigation__link"><span>04</span>Testimonials</a>
          </li>
          <li className="navigation__item">
            <a href="#" className="navigation__link"><span>05</span>Contact</a>
          </li>
        </ul>
      </nav>
    </div>

    <div className="preloader">
    <div className="preloader__content">
      <h1 className="preloader__hide">
        <span className="preloader__text">I Craft</span>
      </h1>
      <h1 className="preloader__hide">
        <span className="preloader__text">Websites That</span>
      </h1>
      <h1 className="preloader__hide">
        <span className="preloader__text">You'd Love Using!</span>
      </h1>
    </div>
    </div>
    
    <div className="preloader__slider">
      <h4>Welcome to</h4>
      <h1>Nitin Ranganath's</h1>
      <h4>portfolio</h4>
    </div>
 
  <main className="hero">
      <div className="hero__content">
        <p className="hero__content__greeting">Hello there, I'm</p>
        <h1 className="hero__content__name">Nitin Ranganath</h1>
        <h2 className="hero__content__headline">Web Developer & Designer</h2>
        <p className="hero__content__about">
          I'm an avid web developer experienced in building full-stack
          responsive web applications which your customers would love using! Let
          me take you on a journey from development to deployment.
        </p>
        <a href="#"
          ><button className="hero__content__button">Contact me</button></a
        >
        <a href="#"
          ><button className="hero__content__button--outlined">
            Download Resume
          </button></a
        >
      </div>
      <div className="hero__socials">
        <div className="hero__socials__content">
          <a href="mailto:nitinranganath@gmail.com">nitinranganath@gmail.com</a>
        </div>
      </div>
    </main>





    <section className="about" id="about">
    <div className="about__content container">
      <div className="about__content__icons">
        <div className="about__content__icons__icon">
          <i className="devicon-html5-plain"></i>
          <p>HTML</p>
        </div>
        <div className="about__content__icons__icon">
          <i className="devicon-css3-plain"></i>
          <p>CSS</p>
        </div>
        <div className="about__content__icons__icon">
          <i className="devicon-javascript-plain"></i>
          <p>JavaScript</p>
        </div>
        <div className="about__content__icons__icon">
          <i className="devicon-typescript-plain"></i>
          <p>TypeScript</p>
        </div>
        <div className="about__content__icons__icon">
          <i className="devicon-react-original"></i>
          <p>React</p>
        </div>
        <div className="about__content__icons__icon">
          <i className="devicon-nodejs-plain"></i>
          <p>NodeJS</p>
        </div>
        <div className="about__content__icons__icon">
          <i className="devicon-mongodb-plain"></i>
          <p>MongoDB</p>
        </div>
        <div className="about__content__icons__icon">
          <i className="devicon-postgresql-plain"></i>
          <p>PostgreSQL</p>
        </div>
        <div className="about__content__icons__icon">
          <i className="devicon-express-original"></i>
          <p>Express</p>
        </div>
        <div className="about__content__icons__icon">
          <i className="devicon-vuejs-plain"></i>
          <p>Vue</p>
        </div>
        <div className="about__content__icons__icon">
          <i className="devicon-redux-original"></i>
          <p>Redux</p>
        </div>
        <div className="about__content__icons__icon">
          <i className="devicon-sass-original"></i>
          <p>SASS</p>
        </div>
        <div className="about__content__icons__icon">
          <i className="devicon-materialui-plain"></i>
          <p>Material UI</p>
        </div>
        <div className="about__content__icons__icon">
          <i className="devicon-bootstrap-plain"></i>
          <p>Bootstrap</p>
        </div>
        <div className="about__content__icons__icon">
          <i className="devicon-python-plain"></i>
          <p>Python</p>
        </div>
        <div className="about__content__icons__icon">
          <i className="devicon-java-plain"></i>
          <p>Java</p>
        </div>
      </div>
      <div className="about__content__text">
        <h2 className="about__content__text__heading">About Me</h2>
        <p className="about__content__text__paragraph">
          I'm a computer engineering student and an aspiring software
          developer based in Mumbai, India who's fascinated with web
          technologies. Here's what I can help you with:
        </p>
        <p className="about__content__text__skill">
          💻 Building
          <span className="accent-bg">highly interactive front end</span>
          and user interfaces as
          <span className="bold">single page applications</span>
        </p>
        <p className="about__content__text__skill">
          🗄️ Developing
          <span className="accent-bg"
            >robust, efficient and secure backend API</span
          >
          with <span className="bold">NoSQL database connectivity</span>
        </p>
        <p className="about__content__text__skill">
          🎨 Design
          <span className="accent-bg">user centric interfaces</span>
          to achieve top notch <span className="bold">user experience</span>
        </p>
      </div>
    </div>
  </section>


  
<section className="contact" id="contact">
    <div className="contact__container">
      <div className="contact__card">
        <div className="contact__card__content">
          <h2 className="contact__card__heading">Reach Out To Me</h2>
          <ul className="contact__card__list">
            <li className="contact__card__list__item">
              <span><img src={office} alt="Address icon" /></span>
              <span
                >Film City Road, Malad East<br />Mumbai, Maharashtra<br />India
                - 400097</span >
            </li>
            <li className="contact__card__list__item">
              <span
                ><img src={envelop} alt="Email address icon"
              /></span>
              <span>farouktouil@hotmail.com</span>
            </li>
            <li className="contact__card__list__item">
              <span><img src={phone} alt="Phone icon" /></span>
              <span>+213 799 162 746</span>
            </li>
          </ul>
        </div>
        <ul className="contact__card__socials">
          <li>
            <a href="#"><img src={github} alt="GitHub icon" /></a>
          </li>
          <li>
            <a href="#"
              ><img src={linkedin} alt="LinkedIn icon"
            /></a>
          </li>
          <li>
            <a href="#"
              ><img src={twitter} alt="Twitter icon"
            /></a>
          </li>
          <li>
            <a href="#"
              ><img src={instagram} alt="Instagram icon"
            /></a>
          </li>
        </ul>
      </div>
      <div className="contact__form">
        <h2 className="contact__form__heading">Drop a Message</h2>
        <form action="" className="contact__form__container">
          <div className="contact__form__input w50">
            <input type="text" required />
            <span>First Name</span>
          </div>
          <div className="contact__form__input w50">
            <input type="text" required />
            <span>Last Name</span>
          </div>
          <div className="contact__form__input w50">
            <input type="email" required />
            <span>Email Address</span>
          </div>
          <div className="contact__form__input w50">
            <input type="text" required />
            <span>Phone Number</span>
          </div>
          <div className="contact__form__input w100">
            <textarea required></textarea>
            <span>Your Message</span>
          </div>
          <div className="contact__form__button w100">
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    </div>
  </section>



  </>
  );
};

export default App;

