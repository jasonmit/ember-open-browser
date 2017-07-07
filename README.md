# ember-open-browser

Opens your ember-cli application in the systems default browser during `ember serve`.

Inspired by `create-react-app`.

## Installation

* `ember install ember-open-browser`

## Overriding Browser

`BROWSER=firefox ember s`

## Disabling addon

Setting an the `BROWSER` environment variable to `none` will disable the addon.
Example: `BROWSER=none ember s`

A more persistent method of disabling ember-open-browser is adding `"noBrowser": true` to `.ember-cli`
