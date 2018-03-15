# ember-open-browser

[![npm Version][npm-badge]][npm]

A small addon that opens an ember-cli application, using the systems default web browser, after an initial build via `ember serve`.

This is only made possible by prior work within `create-react-app`.

## Installation

* `ember install ember-open-browser`

## Overriding Default Browser

Open browser using firefox instead of the system default:
`BROWSER=firefox ember s`

Temporarily disable addon:
`BROWSER=none ember s`

## Overriding the URI

By default, ember-open-browser will use derive the `host`, `port`, and `scheme` from ember-cli.  Typically this is `http://localhost:4200/`.

There may be instances where you'll want to override this URI to point somewhere else - especially useful when you have an nginx instance standing in front of ember-cli's web server.

This can be defined within `.ember-cli` within your project root.

```json
{
  "open-browser-uri": "https://google.local"
}
```

## Disabling addon

Setting the `BROWSER` environment variable to `none` will disable the addon.
Example: `BROWSER=none ember s`

A more persistent method of disabling ember-open-browser is adding `"noBrowser": true` to `.ember-cli`

[npm]: https://www.npmjs.org/package/ember-open-browser
[npm-badge]: https://img.shields.io/npm/v/ember-open-browser.svg?style=flat-square

# Licensing

MIT License

See [LICENSE.md](/LICENSE.md)
See [open-browser/LICENSE.md](open-browser/LICENSE.md)
