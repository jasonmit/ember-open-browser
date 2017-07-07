/* eslint-env node */
'use strict';

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

  serverMiddleware({ options }) {
    if (options.watcher.serving && process.env.BROWSER !== 'none' && !options.noBrowser) {
      let url = options['open-browser-uri'];

      if (!url) {
        const baseURL = options.rootURL === '' ? '/' : cleanBaseURL(options.rootURL || options.baseURL);
        url = `http${options.ssl ? 's' : ''}://${options.host || 'localhost'}:${options.port}${baseURL}`;
      }

      options.watcher.watcher.once('change', () => opn(url, this._browser));
    }
  }
};
