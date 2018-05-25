# raw-module-require-hook

require html,markdown or txt file in Node.js

## Install

```sh
npm install raw-module-require-hook
```

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

## When to use it?

If you building an universal react app, you might want to require raw file in the Node.js, like `import html from '../assets/test.html'` or import markdown file for [react-markdown](https://github.com/rexxars/react-markdown) component.

⚠️ If you want to use both `raw-module-require-hook` and *Typescript*. You shouldn't include your raw file use es module.

**incorrent:**
```ts
import html form '../assets/test.html';

import * as html form '../assets/test.html';
```

**corrent:**
```ts
const html = require('../assets/test.html');
```

Because this hook turn `html` file to `module.exports = 'some html content'`, and `tsc` can not transform this commonjs module currently.
