# ember-open-browser

[![npm Version][npm-badge]][npm]

A tiny addon that opens an ember-cli application, using the systems default web browser, after a initial build via `ember serve`.

The addon is heavily inspired by `create-react-app` and parts have been lifted from `create-react-app` - such as the ability to reuse opened tabs on OSX ([licensed separately under BSD](https://github.com/jasonmit/ember-open-browser/blob/master/open-browser/LICENSE.md)).

## Installation

* `ember install ember-open-browser`

## Overriding Browser

`BROWSER=firefox ember s`

## Overriding the URI

By default, ember-open-browser will use derive the `host`, `port`, and `scheme` from ember-cli.  Typically this is `http://localhost:4200/`.

There may be instances where you'll want to override this URI to point somewhere else - especially useful when you have an nginx instance standing in front of ember-cli's web server.

This can be defined within `.ember-cli` within your project root.

```json
{
  "open-browser-uri": "https://www.foobarbaz.com"
}
```

## Disabling addon

Setting the `BROWSER` environment variable to `none` will disable the addon.
Example: `BROWSER=none ember s`

A more persistent method of disabling ember-open-browser is adding `"noBrowser": true` to `.ember-cli`

[npm]: https://www.npmjs.org/package/ember-open-browser
[npm-badge]: https://img.shields.io/npm/v/ember-open-browser.svg?style=flat-square

# Licensing

Parts of the codebase are licensed under MIT and other parts under BSD.

See [LICENSE.md](/LICENSE.md)

See [open-browser/LICENSE.md](open-browser/LICENSE.md)
