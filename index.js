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

  createUri(options) {
    let baseURL = options.rootURL === '' ? '/' : cleanBaseURL(options.rootURL || options.baseURL);

    return `http${options.ssl ? 's' : ''}://${options.host || 'localhost'}:${options.port}${baseURL}`;
  },

  serverMiddleware(config) {
    let options = config.options;

    if (options.watcher.serving && this._browser !== 'none' && !options.noBrowser) {
      let uri = options['open-browser-uri'] || this.createUri(options);

      options.watcher.watcher.once('change', () =>
        open(uri, {
          ui: this.ui
        })
      );
    }
  }
};
