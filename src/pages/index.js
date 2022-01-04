import React from 'react';
import Layout from '../components/Layout';
import Scroll from '../components/Scroll';
import SEO from '../components/Seo';

import pic1 from '../assets/images/pic01.webp';
import pic2 from '../assets/images/pic02.webp';
import pic3 from '../assets/images/pic03.webp';
import logoTop from '../assets/images/hah-color-top.svg';
import config from '../../config';

const IndexPage = () => (
  <Layout>
    <SEO
      title="Strona główna"
      description="Witam Cię w HAIR&HAIR - miejsce dla zdrowych włosów i skóry"
    />
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
          <p>miejsce dla zdrowych włosów i skóry</p>
        </header>
        <ul className="actions special">
          <li>
            <a href="/rezerwuj" className="button fit primary">
              Umów wizytę
            </a>
          </li>
          <li>
            <a href="/cennik" className="button fit">
              Cennik
            </a>
          </li>
        </ul>
      </div>
    </section>

    <section id="two" className="wrapper alt style9">
      <section className="spotlight">
        <div className="image face-image">
          <img
            src={pic1}
            alt="Natalia Kuklińska trycholog"
            width="100%"
            height="100%"
          />
        </div>
        <div className="content">
          <h2>O mnie</h2>
          <p>
            Nazywam się <b>Natalia Kuklińska</b> i jestem absolwentką Collegium
            Medicum UJ na wydziale farmacji, na kierunku kosmetologia... Jednak
            zdecydowanie wolę mówić o swojej pasji, którą od kilku lat jest
            trychologia.
            <br />
            <br />
            Jako kosmetolog i trycholog od zawsze wiedziałam, że na nasze
            zdrowie i piękno składa się wiele czynników, a całościowe podejście
            do człowieka i jego holistyczna opieka może pomóc nam utrzymać
            zdrową skórę i zdrowe włosy- tym właśnie kieruję się w mojej
            codziennej pracy.
          </p>
        </div>
      </section>
      <section className="spotlight">
        <div className="image face-image">
          <img src={pic2} alt="Gabinet Hair&Hair" width="100%" height="100%" />
        </div>
        <div className="content">
          <p>
            Ideą mojej pracy jest towarzyszenie wielu osobom w bardzo często
            trudnym dla nich czasie, związanym z łysieniem, nadmierną utratą
            włosów czy problemami skóry. Wszystkie te problemy często wpływają
            na zmniejszenie samooceny oraz obniżenie komfortu życia. Dlatego też
            powstało HAIR&amp;HAIR miejsce gdzie chcę zrozumieć Twój problem i
            pomóc Ci go rozwiązać.
            <br />
            <br />
            Jako trycholog kosmetolog od kilku lat pracuję z klientami z
            problematyczną skórą głowy, przerzedzeniem, nadmiernym wypadaniem
            włosów i łysieniem. Mam możliwość współpracy i dzielenia się wiedzą
            ze specjalistami w dziedzinie dermatologii, immunologii, dietetyki i
            trychologii- co niesamowicie cenię.
          </p>
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <img src={pic3} alt="Gabinet Hair&Hair" width="100%" height="100%" />
        </div>
        <div className="content">
          <p>
            Oprócz prowadzenia kuracji trychologicznym w swoim gabinecie, dzielę
            się wiedzą z początkującymi w dziedzinie trychologii studentami
            wrocławskiej uczelni.
            <br />
            <br />
            Ciągle poszerzam swoją wiedzę podczas szkoleń czy konferencji
            naukowych. Jestem przekonana, że odpowiednia edukacja i stały rozwój
            pozwolą mi w holistyczny sposób zatroszczyć się o moich klientów, co
            w konsekwencji przełoży się nie tylko na polepszenie jakości włosów
            i skóry, ale szczególnie na poziom komfortu i zadowolenia z jakże
            pięknego życia.
          </p>
        </div>
      </section>
    </section>

    <section id="three" className="wrapper style8 special">
      <div className="inner">
        <header className="major">
          <h2>FAQ</h2>
          <p>Najczęściej zadawane pytania</p>
        </header>
        <ul className="features">
          <li className="icon solid fa-clipboard-list">
            <h3>Jak należy przygotować się do pierwszej konsultacji?</h3>
            <p>
              ● 24h przed wizytą nie myć głowy
              <br />
              ● podczas ostatniego mycia przed wizytą nie używać szamponu
              p/łupieżowego
              <br />
              ● przed wizytą nie stosować suchego szamponu
              <br />● zapisać na kartce przyjmowane leki, suplementy oraz
              preparaty do włosów i skóry głowy
            </p>
          </li>
          <li className="icon solid fa-eye">
            <h3>Jak wygląda pierwsza konsultacja?</h3>
            <p>
              Podczas konsultacji trycholog przeprowadza szczegółowy wywiad,
              który jest bardzo ważny i stanowi podstawę pierwszej wizyty.{' '}
              <br />
              Już na etapie rozmowy pada mnóstwo istotnych dla trychologa
              wskazówek, które pomogą dokładnie określić problem i jego
              przyczynę.
              <br />
              Następnie wykonywane jest badanie trichoskopem- urządzenie służące
              do badania skóry głowy i włosów.
              <br />
              Na podstawie zebranego wywiadu i badania trycholog układa
              indywidualnie opracowany dla każdego klienta TRICHOPLAN.
            </p>
          </li>
          <li className="icon solid fa-allergies">
            <h3>
              Z jakim problemem można zgłosić się do trychologa w HAIR&amp;HAIR
              ?
            </h3>
            <p>
              Jest wiele schorzeń skóry głowy i włosów. Najczęściej pojawiające
              się to: łojotokowe zapalenie skóry głowy, łupież czy różne odmiany
              łysienia (telogenowe, androgenowe, plackowate itd.). Nie można też
              zapomnieć o atopowym zapaleniu skóry, łuszczycy czy schorzeniach o
              podłożu psychicznym takich jak trichotillomania (wyrywanie
              włosów).
            </p>
          </li>
          <li className="icon solid fa-paint-brush">
            <h3>Czy można farbować włosy przed konsultacją?</h3>
            <p>
              Włosy można farbować nie później niż tydzień przed konsultacją.
            </p>
          </li>
        </ul>
      </div>
    </section>

    <section id="one" className="wrapper style4 special">
      <div className="inner">
        <header className="major">
          <h2>CHCESZ BYĆ NA BIEŻĄCO ?</h2>
          <p>Odwiedź HAIR&amp;HAIR w mediach społecznościowych</p>
        </header>
        <ul className="icons major">
          {config.socialLinks.map((social) => {
            const { style, icon, name, url } = social;
            return (
              <li key={url}>
                <a
                  href={url}
                  className={`icon ${style} ${icon} major`}
                  target="_blank"
                  rel="noreferrer"
                >
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
