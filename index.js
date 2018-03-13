'use strict';

const cleanBaseURL = require('clean-base-url');
const open = require('./open-browser');

module.exports = {
  name: 'ember-open-browser',

  init() {
    this._super.init && this._super.init.apply(this, arguments);
    this._browser = this.detectBrowser();
  },

  detectBrowser() {
    return process.env.BROWSER;
  },

  createUri(opts) {
    let baseURL =
      opts.rootURL === '' ? '/' : cleanBaseURL(opts.rootURL || opts.baseURL);

    return `http${opts.ssl ? 's' : ''}://${opts.host || 'localhost'}:${
      opts.port
    }${baseURL}`;
  },

  serverMiddleware(config) {
    let opts = config.options || {};

    if (opts.noBrowser || this._browser === 'none') {
      return;
    }

    if (opts.watcher && opts.watcher.serving) {
      let uri = opts['open-browser-uri'] || this.createUri(opts);

      opts.watcher.watcher.once('change', () =>
        open(uri, {
          ui: this.ui
        })
      );
    }
  }
};
