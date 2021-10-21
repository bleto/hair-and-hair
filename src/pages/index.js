import React from 'react';
import Layout from '../components/Layout';
import Scroll from '../components/Scroll';

import pic1 from '../assets/images/pic04.png';
import pic2 from '../assets/images/pic02.png';
import pic3 from '../assets/images/pic03.png';
import logoTop from '../assets/images/hah-color-top.svg';
import config from '../../config';

const IndexPage = () => (
  <Layout>
    <section id="banner">
      <div className="logo">
        <img className="logo" src={logoTop} alt={config.heading} width="24%" />
      </div>
      <div className="inner">
        <h2>{config.heading}</h2>
        <p>{config.subHeading}</p>
      </div>
      <Scroll type="id" element="one">
        <a href="#one" className="more">
          Zobacz więcej
        </a>
      </Scroll>
    </section>

    <section id="one" className="wrapper style4 special">
      <div className="inner special">
        <header>
          <h2>Witam Cię w HAIR&HAIR</h2>
          <p>
            Zobacz cennik lub umów sie na wizytę
          </p>
        </header>
        <ul className="actions special">
          <li>
            <a href="/Booking" className="button fit primary">
              Umów wizytę
            </a>
          </li>
          <li>
            <a href="/Pricing" className="button fit">
              Cennik
            </a>
          </li>
        </ul>
      </div>
    </section>

    <section id="two" className="wrapper alt style9">
      <section className="spotlight">
        <div className="image face-image">
          <img src={pic1} alt="Natalia Kuklińska" />
        </div>
        <div className="content">
          <h2>
            O mnie
          </h2>
          <p>
            Nazywam się <b>Natalia Kuklińska</b> i jestem absolwentką Collegium Medicum UJ na wydziale farmacji, na kierunku kosmetologia...
            Jednak zdecydowanie wolę mówić o swojej pasji, którą od kilku lat jest trychologia.
            <br /><br />
            Trychologia to ciągle młoda i szybko rozwijająca się dziedzina. Stała się moją pasją już na studiach. Łączy w sobie zagadnienia wielu dziedzin tj. dermatologia, endokrynologia, kosmetologia czy dietetyka.
            Jako kosmetolog i trycholog od zawsze wiedziałam, że na nasze zdrowie i piękno składa się wiele czynników, a całościowe podejście do człowieka i jego holistyczna opieka może pomóc nam utrzymać zdrową skórę i zdrowe włosy- tym właśnie kieruję się w mojej codziennej pracy
          </p>
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <img src={pic2} alt="" />
        </div>
        <div className="content">
          <h2>
            Tortor dolore feugiat
            <br />
            elementum magna
          </h2>
          <p>
            Aliquam ut ex ut augue consectetur interdum. Donec hendrerit
            imperdiet. Mauris eleifend fringilla nullam aenean mi ligula.
          </p>
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <img src={pic3} alt="" />
        </div>
        <div className="content">
          <h2>
            Augue eleifend aliquet
            <br />
            sed condimentum
          </h2>
          <p>
            Aliquam ut ex ut augue consectetur interdum. Donec hendrerit
            imperdiet. Mauris eleifend fringilla nullam aenean mi ligula.
          </p>
        </div>
      </section>
    </section>

    <section id="three" className="wrapper style8 special">
      <div className="inner">
        <header className="major">
          <h2>FAQ</h2>
          <p>
            Najczestrze pytania
          </p>
        </header>
        <ul className="features">
          <li className="icon fa-paper-plane">
            <h3>Jak przygotowac sie do wizyty</h3>
            <p>
              dfsdfs
            </p>
          </li>
          <li className="icon solid fa-laptop">
            <h3>Ac Augue Eget</h3>
            <p>
              Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem
              tincidunt nullam amet leo Aenean ligula consequat consequat.
            </p>
          </li>
          <li className="icon solid fa-code">
            <h3>Mus Scelerisque</h3>
            <p>
              Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem
              tincidunt nullam amet leo Aenean ligula consequat consequat.
            </p>
          </li>
          <li className="icon solid fa-headphones-alt">
            <h3>Mauris Imperdiet</h3>
            <p>
              Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem
              tincidunt nullam amet leo Aenean ligula consequat consequat.
            </p>
          </li>

        </ul>
      </div>
    </section>

    <section id="one" className="wrapper style4 special">
      <div className="inner">
        <header className="major">
          <h2>
            Podoba Ci się HAIR&HAIR !
          </h2>
          <p>
            Odiwedź mnie na moich media społecznościowych.
          </p>
        </header>
        <ul className="icons major">
          {config.socialLinks.map(social => {
            const { style, icon, name, url } = social;
            return (
              <li key={url}>
                <a href={url} className={`icon ${style} ${icon} major`} target="_blank" rel="noreferrer">
                  <span className="label">{name}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>

  </Layout>
);

export default IndexPage;
