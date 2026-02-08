<!--

@license Apache-2.0

Copyright (c) 2025 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# Base

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Base ndarray extended BLAS functions.



<section class="usage">

## Usage

To use in Observable,

```javascript
ns = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/blas-ext-base-ndarray@v0.1.1-umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var ns = require( 'path/to/vendor/umd/blas-ext-base-ndarray/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/blas-ext-base-ndarray@v0.1.1-umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.ns;
})();
</script>
```

#### ns

Namespace containing base ndarray extended BLAS functions.

```javascript
var o = ns;
// returns {...}
```

The namespace exposes the following APIs:

<!-- <toc pattern="*"> -->

<div class="namespace-toc">

-   <span class="signature">[`csum( arrays )`][@stdlib/blas/ext/base/ndarray/csum]</span><span class="delimiter">: </span><span class="description">compute the sum of all elements in a one-dimensional single-precision complex floating-point ndarray.</span>
-   <span class="signature">[`dcusum( arrays )`][@stdlib/blas/ext/base/ndarray/dcusum]</span><span class="delimiter">: </span><span class="description">compute the cumulative sum of a one-dimensional double-precision floating-point ndarray.</span>
-   <span class="signature">[`dindexOf( arrays )`][@stdlib/blas/ext/base/ndarray/dindex-of]</span><span class="delimiter">: </span><span class="description">return the first index of a search element in a one-dimensional double-precision floating-point ndarray.</span>
-   <span class="signature">[`dlastIndexOf( arrays )`][@stdlib/blas/ext/base/ndarray/dlast-index-of]</span><span class="delimiter">: </span><span class="description">return the last index of a search element in a one-dimensional double-precision floating-point ndarray.</span>
-   <span class="signature">[`dlinspace( arrays )`][@stdlib/blas/ext/base/ndarray/dlinspace]</span><span class="delimiter">: </span><span class="description">fill a one-dimensional double-precision floating-point ndarray with linearly spaced values over a specified interval.</span>
-   <span class="signature">[`dsorthp( arrays )`][@stdlib/blas/ext/base/ndarray/dsorthp]</span><span class="delimiter">: </span><span class="description">sort a one-dimensional double-precision floating-point ndarray using heapsort.</span>
-   <span class="signature">[`dsum( arrays )`][@stdlib/blas/ext/base/ndarray/dsum]</span><span class="delimiter">: </span><span class="description">compute the sum of all elements in a one-dimensional double-precision floating-point ndarray.</span>
-   <span class="signature">[`gcusum( arrays )`][@stdlib/blas/ext/base/ndarray/gcusum]</span><span class="delimiter">: </span><span class="description">compute the cumulative sum of a one-dimensional ndarray.</span>
-   <span class="signature">[`gfindIndex( arrays, clbk[, thisArg] )`][@stdlib/blas/ext/base/ndarray/gfind-index]</span><span class="delimiter">: </span><span class="description">return the index of the first element in a one-dimensional ndarray which passes a test implemented by a predicate function.</span>
-   <span class="signature">[`gfindLastIndex( arrays, clbk[, thisArg] )`][@stdlib/blas/ext/base/ndarray/gfind-last-index]</span><span class="delimiter">: </span><span class="description">return the index of the last element in a one-dimensional ndarray which passes a test implemented by a predicate function.</span>
-   <span class="signature">[`gindexOf( arrays )`][@stdlib/blas/ext/base/ndarray/gindex-of]</span><span class="delimiter">: </span><span class="description">return the first index of a search element in a one-dimensional ndarray.</span>
-   <span class="signature">[`glastIndexOf( arrays )`][@stdlib/blas/ext/base/ndarray/glast-index-of]</span><span class="delimiter">: </span><span class="description">return the last index of a search element in a one-dimensional ndarray.</span>
-   <span class="signature">[`glinspace( arrays )`][@stdlib/blas/ext/base/ndarray/glinspace]</span><span class="delimiter">: </span><span class="description">fill a one-dimensional ndarray with linearly spaced values over a specified interval.</span>
-   <span class="signature">[`gsorthp( arrays )`][@stdlib/blas/ext/base/ndarray/gsorthp]</span><span class="delimiter">: </span><span class="description">sort a one-dimensional ndarray using heapsort.</span>
-   <span class="signature">[`gsum( arrays )`][@stdlib/blas/ext/base/ndarray/gsum]</span><span class="delimiter">: </span><span class="description">compute the sum of all elements in a one-dimensional ndarray.</span>
-   <span class="signature">[`scusum( arrays )`][@stdlib/blas/ext/base/ndarray/scusum]</span><span class="delimiter">: </span><span class="description">compute the cumulative sum of a one-dimensional single-precision floating-point ndarray.</span>
-   <span class="signature">[`sindexOf( arrays )`][@stdlib/blas/ext/base/ndarray/sindex-of]</span><span class="delimiter">: </span><span class="description">return the first index of a search element in a one-dimensional single-precision floating-point ndarray.</span>
-   <span class="signature">[`slastIndexOf( arrays )`][@stdlib/blas/ext/base/ndarray/slast-index-of]</span><span class="delimiter">: </span><span class="description">return the last index of a search element in a one-dimensional single-precision floating-point ndarray.</span>
-   <span class="signature">[`slinspace( arrays )`][@stdlib/blas/ext/base/ndarray/slinspace]</span><span class="delimiter">: </span><span class="description">fill a one-dimensional single-precision floating-point ndarray with linearly spaced values over a specified interval.</span>
-   <span class="signature">[`ssorthp( arrays )`][@stdlib/blas/ext/base/ndarray/ssorthp]</span><span class="delimiter">: </span><span class="description">sort a one-dimensional single-precision floating-point ndarray using heapsort.</span>
-   <span class="signature">[`ssum( arrays )`][@stdlib/blas/ext/base/ndarray/ssum]</span><span class="delimiter">: </span><span class="description">compute the sum of all elements in a one-dimensional single-precision floating-point ndarray.</span>
-   <span class="signature">[`zsum( arrays )`][@stdlib/blas/ext/base/ndarray/zsum]</span><span class="delimiter">: </span><span class="description">compute the sum of all elements in a one-dimensional double-precision complex floating-point ndarray.</span>

</div>

<!-- </toc> -->

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- TODO: better examples -->

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/utils-keys@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/blas-ext-base-ndarray@v0.1.1-umd/browser.js"></script>
<script type="text/javascript">
(function () {

console.log( objectKeys( ns ) );

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2026. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/blas-ext-base-ndarray.svg
[npm-url]: https://npmjs.org/package/@stdlib/blas-ext-base-ndarray

[test-image]: https://github.com/stdlib-js/blas-ext-base-ndarray/actions/workflows/test.yml/badge.svg?branch=v0.1.1
[test-url]: https://github.com/stdlib-js/blas-ext-base-ndarray/actions/workflows/test.yml?query=branch:v0.1.1

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/blas-ext-base-ndarray/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/blas-ext-base-ndarray?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/blas-ext-base-ndarray.svg
[dependencies-url]: https://david-dm.org/stdlib-js/blas-ext-base-ndarray/main

-->

[chat-image]: https://img.shields.io/badge/zulip-join_chat-brightgreen.svg
[chat-url]: https://stdlib.zulipchat.com

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/blas-ext-base-ndarray/tree/deno
[deno-readme]: https://github.com/stdlib-js/blas-ext-base-ndarray/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/blas-ext-base-ndarray/tree/umd
[umd-readme]: https://github.com/stdlib-js/blas-ext-base-ndarray/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/blas-ext-base-ndarray/tree/esm
[esm-readme]: https://github.com/stdlib-js/blas-ext-base-ndarray/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/blas-ext-base-ndarray/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/blas-ext-base-ndarray/main/LICENSE

<!-- <toc-links> -->

[@stdlib/blas/ext/base/ndarray/csum]: https://github.com/stdlib-js/blas-ext-base-ndarray-csum/tree/umd

[@stdlib/blas/ext/base/ndarray/dcusum]: https://github.com/stdlib-js/blas-ext-base-ndarray-dcusum/tree/umd

[@stdlib/blas/ext/base/ndarray/dindex-of]: https://github.com/stdlib-js/blas-ext-base-ndarray-dindex-of/tree/umd

[@stdlib/blas/ext/base/ndarray/dlast-index-of]: https://github.com/stdlib-js/blas-ext-base-ndarray-dlast-index-of/tree/umd

[@stdlib/blas/ext/base/ndarray/dlinspace]: https://github.com/stdlib-js/blas-ext-base-ndarray-dlinspace/tree/umd

[@stdlib/blas/ext/base/ndarray/dsorthp]: https://github.com/stdlib-js/blas-ext-base-ndarray-dsorthp/tree/umd

[@stdlib/blas/ext/base/ndarray/dsum]: https://github.com/stdlib-js/blas-ext-base-ndarray-dsum/tree/umd

[@stdlib/blas/ext/base/ndarray/gcusum]: https://github.com/stdlib-js/blas-ext-base-ndarray-gcusum/tree/umd

[@stdlib/blas/ext/base/ndarray/gfind-index]: https://github.com/stdlib-js/blas-ext-base-ndarray-gfind-index/tree/umd

[@stdlib/blas/ext/base/ndarray/gfind-last-index]: https://github.com/stdlib-js/blas-ext-base-ndarray-gfind-last-index/tree/umd

[@stdlib/blas/ext/base/ndarray/gindex-of]: https://github.com/stdlib-js/blas-ext-base-ndarray-gindex-of/tree/umd

[@stdlib/blas/ext/base/ndarray/glast-index-of]: https://github.com/stdlib-js/blas-ext-base-ndarray-glast-index-of/tree/umd

[@stdlib/blas/ext/base/ndarray/glinspace]: https://github.com/stdlib-js/blas-ext-base-ndarray-glinspace/tree/umd

[@stdlib/blas/ext/base/ndarray/gsorthp]: https://github.com/stdlib-js/blas-ext-base-ndarray-gsorthp/tree/umd

[@stdlib/blas/ext/base/ndarray/gsum]: https://github.com/stdlib-js/blas-ext-base-ndarray-gsum/tree/umd

[@stdlib/blas/ext/base/ndarray/scusum]: https://github.com/stdlib-js/blas-ext-base-ndarray-scusum/tree/umd

[@stdlib/blas/ext/base/ndarray/sindex-of]: https://github.com/stdlib-js/blas-ext-base-ndarray-sindex-of/tree/umd

[@stdlib/blas/ext/base/ndarray/slast-index-of]: https://github.com/stdlib-js/blas-ext-base-ndarray-slast-index-of/tree/umd

[@stdlib/blas/ext/base/ndarray/slinspace]: https://github.com/stdlib-js/blas-ext-base-ndarray-slinspace/tree/umd

[@stdlib/blas/ext/base/ndarray/ssorthp]: https://github.com/stdlib-js/blas-ext-base-ndarray-ssorthp/tree/umd

[@stdlib/blas/ext/base/ndarray/ssum]: https://github.com/stdlib-js/blas-ext-base-ndarray-ssum/tree/umd

[@stdlib/blas/ext/base/ndarray/zsum]: https://github.com/stdlib-js/blas-ext-base-ndarray-zsum/tree/umd

<!-- </toc-links> -->

</section>

<!-- /.links -->
