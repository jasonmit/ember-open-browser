const opn = require('opn');
const cleanBaseURL = require('clean-base-url');

module.exports = {
  name: 'ember-open-browser',

  init() {
    this._super.init && this._super.init.apply(this, arguments);
    this._browser = this.detectBrowser();
  },

  detectBrowser() {
    if (process.env.BROWSER) {
      return {
        app:  process.env.BROWSER
      };
    }

    return {};
  },
  
  createUri(options) {
    const baseURL = options.rootURL === '' ? '/' : cleanBaseURL(options.rootURL || options.baseURL);
    
    return `http${options.ssl ? 's' : ''}://${options.host || 'localhost'}:${options.port}${baseURL}`;
  },

  serverMiddleware({ options }) {
    if (options.watcher.serving && process.env.BROWSER !== 'none' && !options.noBrowser) {
      const uri = options['open-browser-uri'] || this.createUri(options);

      options.watcher.watcher.once('change', () => opn(uri, this._browser));
    }
  }
};
