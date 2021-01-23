import React from 'react';
import Carousel from '../../Carousel/Carousel';
import Cards from '../../Cards/Cards';
import Typewriter from 'typewriter-effect';

const Home = () => {
  return (
    <>
      <header>
        <Carousel />
      </header>
      <section>
        <div className="container">
          <div className="row">
            <div className="content-home p-5">
              <div className="page-home p-0 ">
                <div className="custom-text p-5">
                  <h2 className="fw-bold">LIBRAIRIE COMICSTORE</h2>
                  <p>
                    La librairie Comicstore vous propose depuis 2008 le meilleur
                    de la BD en ligne ou dans sa boutique à Annemasse
                    (Haute-Savoie). Retrouvez ici vos albums préférés mais aussi
                    un large choix de para-BD et d’articles de décoration.
                  </p>
                </div>
                <img
                  className=""
                  src="https://www.comicstore.fr/img/cms/Slide_CS_push_mention.jpg"
                  alt="bd"
                />
              </div>
              <div className="text-center mt-5 fw-bold type">
                <span className="line1 mt-2"></span>
                <Typewriter
                  options={{
                    strings: [
                      'BIENVENUE',
                      'SUR NOTRE',
                      'PREMIER SITE-WEB',
                      'REALISE AVEC',
                      'REACT et BOOTSTRAP',
                    ],
                    autoStart: true,
                    loop: true,
                    wrapperClassName: 'type',
                    deleteChars: 1,
                  }}
                />
                <span className="line1 mt-2"></span>
              </div>
            </div>

            <Cards />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
