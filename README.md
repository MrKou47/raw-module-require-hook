# raw-module-require-hook

require html,markdown or txt file in Node.js

## Install

```sh
npm install raw-module-require-hook
``

```sh
yarn add raw-module-require-hook
```


## Usage

```js
// index.js
require('raw-module-require-hook')({
  extensions: ['html', 'txt'],
});

const html = require('../assets/html/test.html'); // your html content
const txt = require('../assets/txt/test.txt'); // your txt content
```
