// No need to import "react" just for JSX in React 17+

import github from "../assets/github.svg";
import "../sass/main.scss";


const App = () => {
  return (
    <>
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

  </>
  );
};

export default App;








// // No need to import "react" just for JSX in React 17+
// import Recipes from "./Recipes";
// import sword from "../images/swc-sword.png";
// import swordSvg from "../images/sword.svg";

// import "../styles/index.scss";

// const App = () => {
//   return (
//     <>
//       <section className="hero"></section>
//       <main>
//         <section>
//           <h1>Oh Herro, React.</h1>
//           <img src={sword} alt="sword" width="250" />
//           <img src={swordSvg} alt="sword" width="250" />
//           <Recipes />
//         </section>
//       </main>
//     </>
//   );
// };

// export default App;
