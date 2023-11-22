import React from 'react';

import Layout from '../components/Layout';
import Seo from '../components/Seo';

const ContactPage = () => (
  <Layout>
    <Seo title="Regulamin" description="Regulamin wizyt" />
    <article id="main">
      <header>
        <h2>Regulamin wizyt</h2>
      </header>
      <section className="wrapper style5">
        <div class="inner">
          <header className="major">
            <p>
            <h4>Umawianie wizyt</h4>
            <ol>
              <li>Wizyty można umawiać za pośrednictwem aplikacji booksy lub telefonicznie.
              (kontakt może być utrudniony – nie posiadam recepcji, w miarę możliwości w przerwach oddzwaniam).</li>
              <li>Nie wysyłam przypomnień o wizycie.</li>
              <li>Przypomnienia o wizycie wysyłane są tylko dla klientów którzy umówili wizytę za pośrednictwem aplikacji booksy.</li>
              <li>Gabinet nie ma stałych godzin pracy.</li>
              <li>W sytuacji kiedy klient samodzielni umówi się na pierwszą konsultację, mimo iż jest to konsultacja kontrolna ( taki
            klient był w gabinecie już wcześniej), gabinet pobiera opłatę za umówioną przez klienta usługę ( pierwszą
            konsultację), czyli 200 zł.</li>
              <li>Umawiając wizytę przyjmują Państwo do wiadomości, że trycholog nie jest lekarzem.</li>
              </ol>
              <h4>Pierwsza konsultacja</h4> <br />
              <ul>
                <li>Na konsultacje/wizyty – przychodzimy z kompletem zaleconych badań, na 24 h przed wizytą nie myjemy głowy i nie
nakładamy środków do stylizacji.</li>
                <li>Na pierwszą wizytę przynosimy listę stosowanych: leków, suplementów, preparatów na skórę owłosioną głowy i włosy</li>
                <li>Czas trwania konsultacji – do <b>60 minut</b>.</li>
                <li>Podczas konsultacji zostaną przekazane zalecenia ewentualnej: pielęgnacji, zabiegów, suplementacji, badań, wizyt u innego
specjalisty itp.</li>
                <li>Podczas konsultacji przeprowadzany jest wywiad i diagnostyka trychologiczna.</li>
                <li>Jeśli klient spóźni się na wizytę więcej niż 15 minut konsultacja/zabieg zostanie przełożony.</li>
              </ul>
              <h4>Konsultacja kontrolna</h4> <br />
O konsultacji kontrolnej mówimy gdy Podopieczny jest pod opieką specjalisty a od ostatniej konsultacji nie minęło więcej niż 3
miesiące ( chyba,że trycholog zlecił konsultację kontrolną w innym czasie) aktywnej pracy dobranej według zaleceń lub
współpracy w gabinecie. <br />
Konsultacja kontrolna ma na celu analizę stanu skóry, włosów, analizę postępów, nowych badań, weryfikacje planu działania.<br />
Czas konsultacji kontrolnej: do <b>30 minut</b>. <br />

              <ul>
                <li>na wizytę kontrolną prosimy przynieść zalecone badania</li>
                <li>prosimy nie wykonywać peelingu na 2 dni przed wizytą</li>
                <li>głowa może być umyta wieczorem przed wizytą</li>
                <li>prosimy nie farbować włosów na min. 7 dni przed wizytą</li>
                <li>prosimy nie posypywać skóry głowy i włosów produktami kamuflującymi</li>
                <li>Jeśli klient spóźni się na wizytę więcej niż 15 minut konsultacja/zabieg zostanie przełożony</li>
              </ul>

Przerwanie zaleceń, zmiana (bez konsultacji z prowadzącym trychologiem) stosowania zaleceń, odstawienie lub brak
kontynuacji (według zaleceń) preparatów wiążę się z brakiem efektów i pracą od początku (konsultacja jako I wizyta).
            <br />
            <br />
              <h4>Przekładanie wizyt</h4> <br />
              <ul>
                <li>umówioną konsultacje/ zabieg można przełożyć na inny wolny termin w grafiku. Taką chęć zgłaszamy na min. 2 dni przed
planowo umówionym terminem.</li>
                <li>w sytuacji kiedy klient 2 x przełoży wizytę na 1 dzień przed wizytą czy w tym samym dniu, lub nie odwoła wizyty- umówienie
kolejnej wizyty/ zabiegu nie będzie możliwe.</li>
              </ul>

              <h4>Zasady komunikacji</h4> <br />
              <ul>
                <li>Wizyty umawiane są telefonicznie lub za pośrednictwem aplikacji booksy (kontakt może być utrudniony,w miarę możliwości
staram się oddzwaniać). Gabinet nie ma stałych godzin pracy.</li>
                <li>Nie wysyłam przypomnień o wizycie.</li>
                <li>Podczas konsultacji wszystko jest dokładnie tłumaczone, można zadawać pytania. Jeśli do 7 dni po konsultacji pojawią się
wątpliwości można napisać 1 maila, w którym będą pytania co do omawianych zagadnień na konsultacji – w odpowiedzi
zwrotnej będą krótkie odpowiedzi. Jeśli jest potrzebne ponowne, szersze omówienie, wytłumaczenie należy umówić się na
konsultacje kontrolną.</li>
                <li>Mail: proszę w miarę możliwości wysyłać jednego maila z wynikami badań, które zaleciłam na konsultacji i wszelkie
informacje, pytania wysyłać w 1 mailu – ułatwi nam to współpracę.</li>
                <li> Nie udzielam porad trychologicznych przez telefon czy online.</li>
              </ul>
            </p>
            <h4>Płatność: gotówka/karta</h4> <br />
          </header>
        </div>
        <hr />
      </section>
    </article>
  </Layout>
);

export default ContactPage;
