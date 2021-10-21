import React, { useState, useRef } from 'react';
import ReactDOM from 'react-dom'
// import IframeResizer from 'iframe-resizer-react';

import Layout from '../components/Layout';


const BookingPage = () => {
  // const iframeRef = useRef(null);
  const [iFrameHeight, setHeight] = useState(600)

  const iframeData = {
    id: 96326,
    uniqueId: '58cda12586',
    lang: 'pl',
    country: 'pl',
    mode: 'dialog',
    theme: 'default'
  };
  const url = `https://booksy.com/widget/index.html?id=${iframeData.id}&amp;lang=${iframeData.lang}&amp;country=${iframeData.country}&amp;mode=${iframeData.mode}&amp;theme=${iframeData.theme}&amp;uniqueId=${iframeData.uniqueId}`;

  return (
  <Layout>
    <article id="main">
      <header>
        <h2>Rezerwuj</h2>
        <p>Aliquam ut ex ut interdum donec amet imperdiet eleifend</p>
      </header>
      <section className="wrapper style5">
        <div className="inner">
          {/* <IframeResizer
            forwardRef={iframeRef}
            // onMessage={onMessage}
            // onResized={onResized}
            src="https://booksy.com/widget/index.html?id=96326&amp;lang=pl&amp;country=pl&amp;mode=dialog&amp;theme=default&amp;uniqueId=58cda12586"
              style={{ maxWidth: 640, width: '100%', height: iFrameHeight, overflow: 'visible'}}
          /> */}
          <iframe
            title="Booksy"
              // src={`${url}`}
            src="https://booksy.com/widget/index.html?id=96326&amp;lang=pl&amp;country=pl&amp;mode=dialog&amp;theme=default&amp;uniqueId=58cda12586"
            width="100%"
            // onLoad={() => {
            //   const obj = ReactDOM.findDOMNode(this);

            //   setHeight(obj.contentWindow.document.body.scrollHeight + 'px');
            // }}
            height="1000px"
            scrolling="no"
            frameBorder="0"></iframe>
        </div>
      </section>
    </article>
  </Layout>
)
};

export default BookingPage;
