/* eslint-env node */
'use strict';

const opn = require('opn');
const cleanBaseURL = require('clean-base-url');
const Watcher = require('ember-cli/lib/models/watcher');

module.exports = {
  name: 'ember-open-browser',
  hasOpened: false,

  detectBrowser() {
    const envBrowser = process.env.BROWSER;

    if (envBrowser && envBrowser !== 'none') {
      return {
        app: envBrowser
      };
    }

    return {};
  },

  init() {
    this._super.init && this._super.init.apply(this, arguments);
    const _super = Watcher.prototype.didChange;
    const addon = this;

    Watcher.prototype.didChange = function didChange() {
      const ret = _super.apply(this, arguments);
      const { options } = this;

      if (this.serving && !addon.hasOpened && !options.noBrowser) {
        const baseURL = options.rootURL === '' ? '/' : cleanBaseURL(options.rootURL || options.baseURL);
        const url = `http${options.ssl ? 's' : ''}://${options.host || 'localhost'}:${options.port}${baseURL}`;
        opn(url, addon.detectBrowser());
        addon.hasOpened = true;
      }

      return ret;
    }
  }
};
