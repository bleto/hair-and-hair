import React from 'react';

import Layout from '../components/Layout';
import Seo from '../components/Seo';

const PricingPage = () => (
  <Layout>
    <Seo title="Cennik" description="Znajdź coś dla siebie" />
    <article id="main">
      <header>
        <h2>Cennik</h2>
        <p>znajdź coś dla siebie</p>
      </header>
      <section className="wrapper style5">
        <div className="inner">
          <table className="alt">
            <thead>
              <tr>
                <th>Nazwa</th>
                <th>Opis</th>
                <th>Czas</th>
                <th>Cena</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="centered">
                  <b>Konsultacja trychologiczna - pierwsza</b>
                </td>
                <td>
                  Podczas konsultacji zostaje szczegółowo przeprowadzony wywiad
                  oraz wykonana trichoskopia - bezinwazyjne badanie skóry głowy
                  i włosów.
                  <br />
                  Takie działanie pozwala na dokonanie prawidłowej diagnostyki
                  problemu skóry i włosów.
                  <br />
                  Wynik badania otrzymywany jest na miejscu. Podczas badania
                  widoczny jest na żywo, obraz skóry i włosów na ekranie, na tej
                  podstawie trycholog omawia stan włosów i skóry oraz rozpisuje
                  TRICHOPLAN.
                </td>
                <td className="nowrap centered">~60 min</td>
                <td className="nowrap centered">
                  <b className="gold">200 PLN</b>
                </td>
              </tr>
              <tr>
                <td className="centered">
                  <b>Konsultacja - kontrola</b>
                </td>
                <td>
                  Ma na celu ocenę efektów kuracji. <br />
                  Ponownie wykonywana jest trichoskopia.
                  <br />
                  Trycholog porównuje zdjęcia zrobione podczas kontroli do zdjęć
                  z pierwszej konsultacji.
                </td>
                <td className="nowrap centered">~30 min</td>
                <td className="nowrap centered">
                  <b className="gold">100 PLN</b>
                </td>
              </tr>
              <tr>
                <td className="centered">
                  <b>Zabieg trychologiczny</b>
                </td>
                <td>
                  Zabieg dostosowywany indywidualnie do potrzeb skóry i włosów.
                  <br />
                  Stanowi połączenie działania preparatów trychologicznych,
                  oczyszczania i wykorzystuje działanie sauny
                  ultradźwiękowej/prądów d'Arsonvala.
                  <br />
                  Dla uzyskania intensywniejszego efektu zaleca się połączenie z
                  infuzją tlenową.
                </td>
                <td className="nowrap centered">~70 min</td>
                <td className="nowrap centered">
                  <b className="gold">190 PLN</b>
                </td>
              </tr>
              <tr>
                <td className="centered">
                  <b>Infuzja tlenowa</b>
                </td>
                <td>
                  To bezinwazyjny zabieg polegający na wprowadzeniu środków
                  aktywnych w głąb skóry za pomocą sprężonego tlenu.
                  <br />
                  Dochodzi do dotlenienia skóry głowy, wzmocnienia jej,
                  uelastycznienia, stymulacji wzrostu włosów, a także wyciszenia
                  stanów zapalnych.
                  <br />
                  <br />
                  <b>Wskazania:</b>
                  <br />
                  <ul>
                    <li>ŁZS</li>
                    <li>łupież suchy/ tłusty</li>
                    <li>łojotok</li>
                    <li>AZS</li>
                    <li>stany zapalne</li>
                    <li>zapalenie mieszków włosowych - osłabione włosy</li>
                    <li>nadmierne wypadanie włosów</li>
                  </ul>
                </td>
                <td className="nowrap centered">~60 min</td>
                <td className="nowrap centered">
                  <b className="gold">200 PLN</b>
                </td>
              </tr>
              <tr>
                <td className="centered">
                  <b>Infuzja + zabieg trychologiczny</b>
                </td>
                <td>
                  To zabieg dostosowywany indywidualnie do potrzeb skóry i
                  włosów.
                  <br />
                  Stanowi połączenie działania preparatów trychologicznych,
                  oczyszczania i wykorzystuje działanie sauny
                  ultradźwiękowej/prądów d'Arsonvala oraz działanie sprzężonego
                  tlenu.
                  <br />
                  Intensywny zabieg dla najbardziej wymagającej skóry.
                </td>
                <td className="nowrap centered">~90 min</td>
                <td className="nowrap centered">
                  <b className="gold">290 PLN</b>
                </td>
              </tr>
              {/* <tr>
                <td className="centered">
                  <b>Mezoterapia mikroigłowa - dermapen + oczyszcznie skóry</b>
                </td>
                <td>
                  Dermapen/Mezopen to inaczej mezoterapia mikroigłowa. Podczas
                  zabiegu wykorzystuje się specjalistyczne, niewielkie
                  urządzenie, którego głowica pokryta jest mikroigiełkami.
                  <br />
                  Za ich pomocą do skóry podaje się indywidualnie dobrane
                  składniki aktywne – koktajle odżywcze. Również głębokość
                  nakłucia,dobierana jest indywidualnie do potrzeb klienta.
                  <br />
                  Na początku zabiegu wykonywane jest oczyszczenie skóry, które
                  przygotuje ją do przyjęcia składników aktywnych,podanych
                  podczas mezoterapii mikroigłowej.
                  <br />
                  <br />
                  <b>Wskazania:</b>
                  <ul>
                    <li>wzmożona utrata włosów</li>
                    <li>łysienie androgenowe</li>
                    <li>łysienie telogenowe</li>
                  </ul>
                </td>
                <td className="nowrap centered">~60 min</td>
                <td className="nowrap centered">
                  <b className="gold">320 PLN</b>
                </td>
              </tr> */}
              {/* <tr>
                <td className="centered">
                  <b>Zabieg oczyszczania BASIC</b>
                </td>
                <td>
                  Podstawowy zabieg oczyszczający, składa się z peelingu
                  dobranego do rodzaju skóry przez trychologa, mycia
                  oczyszczającego, indywidualnie dobranym do skóry głowy
                  szamponem oraz pielęgnacji odżywką lub maską.
                </td>
                <td className="nowrap centered">~45 min</td>
                <td className="nowrap centered">
                  <b className="gold">110 PLN</b>
                </td>
              </tr> */}
              <tr>
                <td className="centered">
                  <b>Zabieg pielęgnacyjny Beauty Expert Emmebi</b>
                </td>
                <td>
                  Zabieg pielęgnacyjno odżywczy na łodygę włosa.
                  <br />
                  Jeśli Twoje włosy wymagają regeneracji, odżywienia, są matowe
                  i słabe np. po dużej ekspozycji na słońce czy wodzie morskiej
                  - to zabieg regeneracyjny będzie dobrym wyborem.
                  <br />
                  Podczas zabiegu wykorzystuje się preparaty z wysoką
                  zawartością śluzu ślimaka „HELIX ASPERSA MÜLLER”. Regeneruje
                  zniszczone, suche i matowe włosy.
                  <br />
                  <br />
                  Dodatkowo podczas zabiegu wykorzystywane są dobroczynne
                  działania:
                  <br />
                  <ul>
                    <li>wyciągu z owocu granatu</li>
                    <li>białek kolagenowych</li>
                    <li>protein bambusa</li>
                    <li>gumy guar</li>
                    <li>kwasu cytrynowego</li>
                  </ul>
                  Zabieg przebiega w kilku etapach, głównym z nich jest
                  wprowadzenie wysoko skoncentrowanej ampułki za pomocą infuzji
                  tlenowej.
                </td>
                <td className="nowrap centered">~70 min</td>
                <td className="nowrap centered">
                  <b className="gold">160 PLN</b>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </article>
  </Layout>
);

export default PricingPage;
