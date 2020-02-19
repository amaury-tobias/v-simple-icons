# v-simple-icons

[![SupportMe](https://img.shields.io/badge/SUPPORT-ME-F16061?style=for-the-badge&logo=ko-fi&labelCoor=F16061&logoColo0)](https://ko-fi.com/amaury_tobias)
[![npm](https://img.shields.io/npm/v/v-simple-icons?style=for-the-badge)](https://www.npmjs.com/package/v-simple-icons)
![npm bundle size](https://img.shields.io/bundlephobia/min/v-simple-icons?style=for-the-badge)
[![NPM](https://img.shields.io/npm/l/v-simple-icons?style=for-the-badge)](LICENSE)
[![NPM downloads](https://img.shields.io/npm/dm/v-simple-icons.svg?style=for-the-badge)](https://npmjs.com/package/v-simple-icons)

## Install

```bash
yarn add v-simple-icons
```

## Usage

```js
// Only import what you need!
import { VueJsIcon, AirbnbIcon, ... } from 'v-simple-icons'
```

See all icons and usage here: https://v-simple-icons.netlify.com

### Sizing

By default, icons will be sized based on the font size of the parent element.

You can set a custom size using the `size` attribute.
For multiple based sizing, pass the desired multiple followed by an `x`.

```html
<vue-js-icon size="1.5x" class="custom-class"></vue-js-icon>
```

You can also set a `px` size directly by just passing an integer

```html
<vue-js-icon size="25" class="custom-class"></vue-js-icon>
```

## Tree shaking

By using ES imports like `import { VueJsIcon } from 'v-simple-icons'` with [webpack + minifier](https://webpack.js.org/guides/tree-shaking/#minify-the-output) or Rollup, unused exports in this module will be automatically eliminated.

To make webpack tree shaking work without using any minifier, you can use the per-file icons from [`icons`](https://unpkg.com/v-simple-icons/icons/) directory, e.g. `import VueJsIcon from 'v-simple-icons/icons/VueJsIcon'`.

## Related

- [vue-feather-icons](https://github.com/egoist/vue-feather-icons)
- [vue-bytesize-icons](https://github.com/egoist/vue-bytesize-icons)

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'feat: Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## Author

**v-simple-icons** [amaury-tobias](https://github.com/amaury-tobias), Released under the [MIT](./LICENSE) License.<br>
Authored and maintained by amaury-tobias with help from contributors

> GitHub [@amaury-tobias](https://github.com/amaury-tobias) · Twitter [@amaury-tobias](https://twitter.com/amaury-tobais)
