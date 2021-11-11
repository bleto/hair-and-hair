export const generateUniqueId = (pattern) => {
  pattern = pattern || 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx';
  return pattern.replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0,
      v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

export const iframeFactory = (options) => {
  const opts = options || {};
  // inject unique identifier into iframe source address
  opts.src +=
    (opts.src.indexOf('?') > -1 ? '&' : '?') + 'uniqueId=' + opts.uniqueId;

  const container = opts.container || document.body;
  let iframeId = undefined;

  return {
    create: create,
    element: function element() {
      return container.querySelector('iframe');
    },
  };

  function create() {
    if (iframeId) return;
    iframeId = generateUniqueId('iframe-xxxx');

    container.insertAdjacentHTML(
      'beforeend',
      '\n                <iframe \n                    width="' +
        (opts.width || 476) +
        '" \n                    height="' +
        (opts.height || 660) +
        '"\n                    src="' +
        opts.src +
        '"\n                    style="border: 0">\n            ' +
        '"\n                    sandbox="allow-same-origin allow-forms allow-popups">\n            '
    );

    // register "message" handler
    window.addEventListener('message', messageHandler, true);
  }

  function messageHandler(event) {
    const data = event.data;
    /**
     * data : {
     *     uniqueId : ...,
     *     events   : {
     *         name => { ... },
     *         ...
     *     }
     * }
     */

    // ignore message, if response unique identifier doesn't
    // match iframe src unique identifier
    if (data.uniqueId !== opts.uniqueId || !data.events) return;

    const events = ['resize', 'close'];

    for (let i = events.length - 1; i > -1; i--) {
      const name = events[i];

      if (data.events[name]) {
        // "close" => "onClose"
        const callback =
          opts['on' + name.charAt(0).toUpperCase() + name.substr(1)];

        // shortcut
        if (typeof callback !== 'function') continue;

        try {
          callback(data.events[name]);
        } catch (e) {}
      }
    }
  }
};

export const createWidgetContainer = (config) => {
  const cls = 'booksy-widget-container';
  const containerClass = [
    cls,
    cls + '-' + config.mode,
    cls + '-' + config.theme,
    cls + '-' + config.lang,
  ].join(' ');
  const container = document.body.querySelector('.iframeContainer');
  const div = document.createElement('div');

  div.setAttribute('class', containerClass);
  container.appendChild(div);

  return div;
};

export const createIframe = (container, src) => {
  const iframe = iframeFactory({
    uniqueId: generateUniqueId('xxxxxxxxxx'),
    src: src,
    width: '100%',
    height: 800,
    container: container,
    onResize: function onResize(params) {
      window.setTimeout(function () {
        iframe.element().style.height = params.height + 15 + 'px';
      }, 50);
    },
    onClose: function onClose() {
      container.remove();
    },
  });

  return iframe.create();
};
