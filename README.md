# remark-code-titles

[![npm version](https://badge.fury.io/js/remark-code-titles.svg)](https://badge.fury.io/js/remark-code-titles)

[Remark](https://github.com/remarkjs/remark) plugin to add code title inspired by [gatsby-remark-code-titles](https://github.com/DSchau/gatsby-remark-code-titles)

## Usage

We have the following file, `hello.md`:

~~~markdown
# Hello World

```js:hello.js
console.log('js')
```
~~~

And our script, `hello.js`, lokks as follows:

```js:sample.js
const vfile = require('to-vfile')
const unified = require('unified')
const parse = require('remark-parse')
const codeTitle = require('remark-code-titles')
const html = require('remark-html')

const result = unified()
  .use(parse)
  .use(codeTitle)
  .use(html)
  .process(vfile.readSync('./hello.md'), (err, file) => {
    if (err) throw err
    console.log(String(file))
  })
```

Now, running `node hello.js` yields:

```html
<h1>Hello World</h1>
<div class="remark-code-title">hello.js</div>
<pre><code class="language-js">console.log('js')
</code></pre>
```
