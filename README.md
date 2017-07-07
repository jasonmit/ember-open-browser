# ember-open-browser

A thin addon that opens an ember-cli application using the systems default web browser after a successful build via `ember serve`.

Inspired by `create-react-app`.

## Installation

* `ember install ember-open-browser`

## Overriding Browser

`BROWSER=firefox ember s`

## Disabling addon

Setting an the `BROWSER` environment variable to `none` will disable the addon.
Example: `BROWSER=none ember s`

A more persistent method of disabling ember-open-browser is adding `"noBrowser": true` to `.ember-cli`
