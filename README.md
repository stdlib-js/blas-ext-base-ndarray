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
ns = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/blas-ext-base-ndarray@umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var ns = require( 'path/to/vendor/umd/blas-ext-base-ndarray/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/blas-ext-base-ndarray@umd/browser.js"></script>
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

-   <span class="signature">[`caxpb( arrays )`][@stdlib/blas/ext/base/ndarray/caxpb]</span><span class="delimiter">: </span><span class="description">multiply each element in a one-dimensional single-precision complex floating-point ndarray by a scalar constant and add a scalar constant to each result.</span>
-   <span class="signature">[`caxpby( arrays )`][@stdlib/blas/ext/base/ndarray/caxpby]</span><span class="delimiter">: </span><span class="description">multiply a one-dimensional single-precision complex floating-point ndarray by a scalar constant and add the result to a second one-dimensional single-precision complex floating-point ndarray multiplied by a scalar constant.</span>
-   <span class="signature">[`cindexOf( arrays )`][@stdlib/blas/ext/base/ndarray/cindex-of]</span><span class="delimiter">: </span><span class="description">return the first index of a search element in a one-dimensional single-precision complex floating-point ndarray.</span>
-   <span class="signature">[`coneTo( arrays )`][@stdlib/blas/ext/base/ndarray/cone-to]</span><span class="delimiter">: </span><span class="description">fill a one-dimensional single-precision complex floating-point ndarray with linearly spaced numeric elements which increment by `1` starting from one.</span>
-   <span class="signature">[`csum( arrays )`][@stdlib/blas/ext/base/ndarray/csum]</span><span class="delimiter">: </span><span class="description">compute the sum of all elements in a one-dimensional single-precision complex floating-point ndarray.</span>
-   <span class="signature">[`csumkbn( arrays )`][@stdlib/blas/ext/base/ndarray/csumkbn]</span><span class="delimiter">: </span><span class="description">compute the sum of all elements in a one-dimensional single-precision complex floating-point ndarray using an improved Kahan–Babuška algorithm.</span>
-   <span class="signature">[`cunitspace( arrays )`][@stdlib/blas/ext/base/ndarray/cunitspace]</span><span class="delimiter">: </span><span class="description">fill a one-dimensional single-precision complex floating-point ndarray with linearly spaced numeric elements which increment by `1` starting from a specified value.</span>
-   <span class="signature">[`cxpy( arrays )`][@stdlib/blas/ext/base/ndarray/cxpy]</span><span class="delimiter">: </span><span class="description">add elements of a one-dimensional single-precision complex floating-point ndarray to the corresponding elements of a second one-dimensional single-precision complex floating-point ndarray and assign the results to the second ndarray.</span>
-   <span class="signature">[`cxsa( arrays )`][@stdlib/blas/ext/base/ndarray/cxsa]</span><span class="delimiter">: </span><span class="description">subtract a scalar constant from each element in a one-dimensional single-precision complex floating-point ndarray.</span>
-   <span class="signature">[`cxsy( arrays )`][@stdlib/blas/ext/base/ndarray/cxsy]</span><span class="delimiter">: </span><span class="description">subtract the elements of an output one-dimensional single-precision complex floating-point ndarray from the corresponding elements in an input one-dimensional single-precision complex floating-point ndarray and assign the results to the output ndarray.</span>
-   <span class="signature">[`czeroTo( arrays )`][@stdlib/blas/ext/base/ndarray/czero-to]</span><span class="delimiter">: </span><span class="description">fill a one-dimensional single-precision complex floating-point ndarray with linearly spaced numeric elements which increment by `1` starting from zero.</span>
-   <span class="signature">[`daxpb( arrays )`][@stdlib/blas/ext/base/ndarray/daxpb]</span><span class="delimiter">: </span><span class="description">multiply each element in a one-dimensional double-precision floating-point ndarray by a scalar constant and add a scalar constant to each result.</span>
-   <span class="signature">[`daxpby( arrays )`][@stdlib/blas/ext/base/ndarray/daxpby]</span><span class="delimiter">: </span><span class="description">multiply a one-dimensional double-precision floating-point ndarray by a scalar constant and add the result to a second one-dimensional double-precision floating-point ndarray multiplied by a scalar constant.</span>
-   <span class="signature">[`dcircshift( arrays )`][@stdlib/blas/ext/base/ndarray/dcircshift]</span><span class="delimiter">: </span><span class="description">circularly shift the elements of a one-dimensional double-precision floating-point ndarray by a specified number of positions.</span>
-   <span class="signature">[`dcusum( arrays )`][@stdlib/blas/ext/base/ndarray/dcusum]</span><span class="delimiter">: </span><span class="description">compute the cumulative sum of a one-dimensional double-precision floating-point ndarray.</span>
-   <span class="signature">[`dcusumkbn( arrays )`][@stdlib/blas/ext/base/ndarray/dcusumkbn]</span><span class="delimiter">: </span><span class="description">compute the cumulative sum of a one-dimensional double-precision floating-point ndarray using an improved Kahan–Babuška algorithm.</span>
-   <span class="signature">[`dcusumkbn2( arrays )`][@stdlib/blas/ext/base/ndarray/dcusumkbn2]</span><span class="delimiter">: </span><span class="description">compute the cumulative sum of a one-dimensional double-precision floating-point ndarray using a second-order iterative Kahan–Babuška algorithm.</span>
-   <span class="signature">[`dcusumors( arrays )`][@stdlib/blas/ext/base/ndarray/dcusumors]</span><span class="delimiter">: </span><span class="description">compute the cumulative sum of a one-dimensional double-precision floating-point ndarray using ordinary recursive summation.</span>
-   <span class="signature">[`dcusumpw( arrays )`][@stdlib/blas/ext/base/ndarray/dcusumpw]</span><span class="delimiter">: </span><span class="description">compute the cumulative sum of a one-dimensional double-precision floating-point ndarray using pairwise summation.</span>
-   <span class="signature">[`ddiff( arrays )`][@stdlib/blas/ext/base/ndarray/ddiff]</span><span class="delimiter">: </span><span class="description">calculate the k-th discrete forward difference of a one-dimensional double-precision floating-point ndarray.</span>
-   <span class="signature">[`dindexOfFalsy( arrays )`][@stdlib/blas/ext/base/ndarray/dindex-of-falsy]</span><span class="delimiter">: </span><span class="description">return the index of the first falsy element in a one-dimensional double-precision floating-point ndarray.</span>
-   <span class="signature">[`dindexOf( arrays )`][@stdlib/blas/ext/base/ndarray/dindex-of]</span><span class="delimiter">: </span><span class="description">return the first index of a search element in a one-dimensional double-precision floating-point ndarray.</span>
-   <span class="signature">[`dlastIndexOf( arrays )`][@stdlib/blas/ext/base/ndarray/dlast-index-of]</span><span class="delimiter">: </span><span class="description">return the last index of a search element in a one-dimensional double-precision floating-point ndarray.</span>
-   <span class="signature">[`dlinspace( arrays )`][@stdlib/blas/ext/base/ndarray/dlinspace]</span><span class="delimiter">: </span><span class="description">fill a one-dimensional double-precision floating-point ndarray with linearly spaced values over a specified interval.</span>
-   <span class="signature">[`dnansum( arrays )`][@stdlib/blas/ext/base/ndarray/dnansum]</span><span class="delimiter">: </span><span class="description">compute the sum of a one-dimensional double-precision floating-point ndarray, ignoring `NaN` values.</span>
-   <span class="signature">[`dnansumkbn( arrays )`][@stdlib/blas/ext/base/ndarray/dnansumkbn]</span><span class="delimiter">: </span><span class="description">compute the sum of a one-dimensional double-precision floating-point ndarray, ignoring `NaN` values and using an improved Kahan–Babuška algorithm.</span>
-   <span class="signature">[`dnansumkbn2( arrays )`][@stdlib/blas/ext/base/ndarray/dnansumkbn2]</span><span class="delimiter">: </span><span class="description">compute the sum of a one-dimensional double-precision floating-point ndarray, ignoring `NaN` values and using a second-order iterative Kahan–Babuška algorithm.</span>
-   <span class="signature">[`dnansumors( arrays )`][@stdlib/blas/ext/base/ndarray/dnansumors]</span><span class="delimiter">: </span><span class="description">compute the sum of a one-dimensional double-precision floating-point ndarray, ignoring `NaN` values and using ordinary recursive summation.</span>
-   <span class="signature">[`dnansumpw( arrays )`][@stdlib/blas/ext/base/ndarray/dnansumpw]</span><span class="delimiter">: </span><span class="description">compute the sum of a one-dimensional double-precision floating-point ndarray, ignoring `NaN` values and using pairwise summation.</span>
-   <span class="signature">[`doneTo( arrays )`][@stdlib/blas/ext/base/ndarray/done-to]</span><span class="delimiter">: </span><span class="description">fill a one-dimensional double-precision floating-point ndarray with linearly spaced numeric elements which increment by `1` starting from one.</span>
-   <span class="signature">[`dsort( arrays )`][@stdlib/blas/ext/base/ndarray/dsort]</span><span class="delimiter">: </span><span class="description">sort a one-dimensional double-precision floating-point ndarray.</span>
-   <span class="signature">[`dsorthp( arrays )`][@stdlib/blas/ext/base/ndarray/dsorthp]</span><span class="delimiter">: </span><span class="description">sort a one-dimensional double-precision floating-point ndarray using heapsort.</span>
-   <span class="signature">[`dsortins( arrays )`][@stdlib/blas/ext/base/ndarray/dsortins]</span><span class="delimiter">: </span><span class="description">sort a one-dimensional double-precision floating-point ndarray using insertion sort.</span>
-   <span class="signature">[`dsortsh( arrays )`][@stdlib/blas/ext/base/ndarray/dsortsh]</span><span class="delimiter">: </span><span class="description">sort a one-dimensional double-precision floating-point ndarray using Shellsort.</span>
-   <span class="signature">[`dsum( arrays )`][@stdlib/blas/ext/base/ndarray/dsum]</span><span class="delimiter">: </span><span class="description">compute the sum of all elements in a one-dimensional double-precision floating-point ndarray.</span>
-   <span class="signature">[`dsumkbn( arrays )`][@stdlib/blas/ext/base/ndarray/dsumkbn]</span><span class="delimiter">: </span><span class="description">compute the sum of all elements in a one-dimensional double-precision floating-point ndarray using an improved Kahan–Babuška algorithm.</span>
-   <span class="signature">[`dsumkbn2( arrays )`][@stdlib/blas/ext/base/ndarray/dsumkbn2]</span><span class="delimiter">: </span><span class="description">compute the sum of all elements in a one-dimensional double-precision floating-point ndarray using a second-order iterative Kahan–Babuška algorithm.</span>
-   <span class="signature">[`dsumors( arrays )`][@stdlib/blas/ext/base/ndarray/dsumors]</span><span class="delimiter">: </span><span class="description">compute the sum of a one-dimensional double-precision floating-point ndarray using ordinary recursive summation.</span>
-   <span class="signature">[`dsumpw( arrays )`][@stdlib/blas/ext/base/ndarray/dsumpw]</span><span class="delimiter">: </span><span class="description">compute the sum of a one-dimensional double-precision floating-point ndarray using pairwise summation.</span>
-   <span class="signature">[`dunitspace( arrays )`][@stdlib/blas/ext/base/ndarray/dunitspace]</span><span class="delimiter">: </span><span class="description">fill a one-dimensional double-precision floating-point ndarray with linearly spaced numeric elements which increment by `1` starting from a specified value.</span>
-   <span class="signature">[`dxpy( arrays )`][@stdlib/blas/ext/base/ndarray/dxpy]</span><span class="delimiter">: </span><span class="description">add elements of a one-dimensional double-precision floating-point ndarray to the corresponding elements of a second one-dimensional double-precision floating-point ndarray and assign the results to the second ndarray.</span>
-   <span class="signature">[`dxsa( arrays )`][@stdlib/blas/ext/base/ndarray/dxsa]</span><span class="delimiter">: </span><span class="description">subtract a scalar constant from each element in a one-dimensional double-precision floating-point ndarray.</span>
-   <span class="signature">[`dxsy( arrays )`][@stdlib/blas/ext/base/ndarray/dxsy]</span><span class="delimiter">: </span><span class="description">subtract the elements of an output one-dimensional double-precision floating-point ndarray from the corresponding elements in an input one-dimensional double-precision floating-point ndarray and assign the results to the output ndarray.</span>
-   <span class="signature">[`dzeroTo( arrays )`][@stdlib/blas/ext/base/ndarray/dzero-to]</span><span class="delimiter">: </span><span class="description">fill a one-dimensional double-precision floating-point ndarray with linearly spaced numeric elements which increment by `1` starting from zero.</span>
-   <span class="signature">[`gaxpb( arrays )`][@stdlib/blas/ext/base/ndarray/gaxpb]</span><span class="delimiter">: </span><span class="description">multiply each element in a one-dimensional ndarray by a scalar constant and add a scalar constant to each result.</span>
-   <span class="signature">[`gaxpby( arrays )`][@stdlib/blas/ext/base/ndarray/gaxpby]</span><span class="delimiter">: </span><span class="description">multiply a one-dimensional ndarray by a scalar constant and add the result to a second one-dimensional ndarray multiplied by a scalar constant.</span>
-   <span class="signature">[`gcircshift( arrays )`][@stdlib/blas/ext/base/ndarray/gcircshift]</span><span class="delimiter">: </span><span class="description">circularly shift the elements of a one-dimensional ndarray by a specified number of positions.</span>
-   <span class="signature">[`gcusum( arrays )`][@stdlib/blas/ext/base/ndarray/gcusum]</span><span class="delimiter">: </span><span class="description">compute the cumulative sum of a one-dimensional ndarray.</span>
-   <span class="signature">[`gcusumkbn( arrays )`][@stdlib/blas/ext/base/ndarray/gcusumkbn]</span><span class="delimiter">: </span><span class="description">compute the cumulative sum of a one-dimensional ndarray using an improved Kahan–Babuška algorithm.</span>
-   <span class="signature">[`gcusumkbn2( arrays )`][@stdlib/blas/ext/base/ndarray/gcusumkbn2]</span><span class="delimiter">: </span><span class="description">compute the cumulative sum of a one-dimensional ndarray using a second-order iterative Kahan–Babuška algorithm.</span>
-   <span class="signature">[`gcusumors( arrays )`][@stdlib/blas/ext/base/ndarray/gcusumors]</span><span class="delimiter">: </span><span class="description">compute the cumulative sum of a one-dimensional ndarray using ordinary recursive summation.</span>
-   <span class="signature">[`gcusumpw( arrays )`][@stdlib/blas/ext/base/ndarray/gcusumpw]</span><span class="delimiter">: </span><span class="description">compute the cumulative sum of a one-dimensional ndarray using pairwise summation.</span>
-   <span class="signature">[`gfindIndex( arrays, clbk[, thisArg] )`][@stdlib/blas/ext/base/ndarray/gfind-index]</span><span class="delimiter">: </span><span class="description">return the index of the first element in a one-dimensional ndarray which passes a test implemented by a predicate function.</span>
-   <span class="signature">[`gfindLastIndex( arrays, clbk[, thisArg] )`][@stdlib/blas/ext/base/ndarray/gfind-last-index]</span><span class="delimiter">: </span><span class="description">return the index of the last element in a one-dimensional ndarray which passes a test implemented by a predicate function.</span>
-   <span class="signature">[`gindexOfFalsy( arrays )`][@stdlib/blas/ext/base/ndarray/gindex-of-falsy]</span><span class="delimiter">: </span><span class="description">return the index of the first falsy element in a one-dimensional ndarray.</span>
-   <span class="signature">[`gindexOfTruthy( arrays )`][@stdlib/blas/ext/base/ndarray/gindex-of-truthy]</span><span class="delimiter">: </span><span class="description">return the index of the first truthy element in a one-dimensional ndarray.</span>
-   <span class="signature">[`gindexOf( arrays )`][@stdlib/blas/ext/base/ndarray/gindex-of]</span><span class="delimiter">: </span><span class="description">return the first index of a search element in a one-dimensional ndarray.</span>
-   <span class="signature">[`gjoinBetween( arrays )`][@stdlib/blas/ext/base/ndarray/gjoin-between]</span><span class="delimiter">: </span><span class="description">return a string by joining one-dimensional ndarray elements using a specified separator for each pair of consecutive elements.</span>
-   <span class="signature">[`gjoin( arrays )`][@stdlib/blas/ext/base/ndarray/gjoin]</span><span class="delimiter">: </span><span class="description">return a string created by joining one-dimensional ndarray elements using a specified separator.</span>
-   <span class="signature">[`glastIndexOf( arrays )`][@stdlib/blas/ext/base/ndarray/glast-index-of]</span><span class="delimiter">: </span><span class="description">return the last index of a search element in a one-dimensional ndarray.</span>
-   <span class="signature">[`glinspace( arrays )`][@stdlib/blas/ext/base/ndarray/glinspace]</span><span class="delimiter">: </span><span class="description">fill a one-dimensional ndarray with linearly spaced values over a specified interval.</span>
-   <span class="signature">[`gnansum( arrays )`][@stdlib/blas/ext/base/ndarray/gnansum]</span><span class="delimiter">: </span><span class="description">compute the sum of a one-dimensional ndarray, ignoring `NaN` values.</span>
-   <span class="signature">[`gnansumkbn( arrays )`][@stdlib/blas/ext/base/ndarray/gnansumkbn]</span><span class="delimiter">: </span><span class="description">compute the sum of a one-dimensional ndarray, ignoring `NaN` values and using an improved Kahan–Babuška algorithm.</span>
-   <span class="signature">[`gnansumkbn2( arrays )`][@stdlib/blas/ext/base/ndarray/gnansumkbn2]</span><span class="delimiter">: </span><span class="description">compute the sum of a one-dimensional ndarray, ignoring `NaN` values and using a second-order iterative Kahan–Babuška algorithm.</span>
-   <span class="signature">[`gnansumors( arrays )`][@stdlib/blas/ext/base/ndarray/gnansumors]</span><span class="delimiter">: </span><span class="description">compute the sum of a one-dimensional ndarray, ignoring `NaN` values and using ordinary recursive summation.</span>
-   <span class="signature">[`gnansumpw( arrays )`][@stdlib/blas/ext/base/ndarray/gnansumpw]</span><span class="delimiter">: </span><span class="description">compute the sum of a one-dimensional ndarray, ignoring `NaN` values and using pairwise summation.</span>
-   <span class="signature">[`goneTo( arrays )`][@stdlib/blas/ext/base/ndarray/gone-to]</span><span class="delimiter">: </span><span class="description">fill a one-dimensional ndarray with linearly spaced numeric elements which increment by `1` starting from one.</span>
-   <span class="signature">[`gsort( arrays )`][@stdlib/blas/ext/base/ndarray/gsort]</span><span class="delimiter">: </span><span class="description">sort a one-dimensional ndarray.</span>
-   <span class="signature">[`gsorthp( arrays )`][@stdlib/blas/ext/base/ndarray/gsorthp]</span><span class="delimiter">: </span><span class="description">sort a one-dimensional ndarray using heapsort.</span>
-   <span class="signature">[`gsum( arrays )`][@stdlib/blas/ext/base/ndarray/gsum]</span><span class="delimiter">: </span><span class="description">compute the sum of all elements in a one-dimensional ndarray.</span>
-   <span class="signature">[`gsumkbn( arrays )`][@stdlib/blas/ext/base/ndarray/gsumkbn]</span><span class="delimiter">: </span><span class="description">compute the sum of all elements in a one-dimensional ndarray using an improved Kahan–Babuška algorithm.</span>
-   <span class="signature">[`gsumkbn2( arrays )`][@stdlib/blas/ext/base/ndarray/gsumkbn2]</span><span class="delimiter">: </span><span class="description">compute the sum of all elements in a one-dimensional ndarray using a second-order iterative Kahan–Babuška algorithm.</span>
-   <span class="signature">[`gsumors( arrays )`][@stdlib/blas/ext/base/ndarray/gsumors]</span><span class="delimiter">: </span><span class="description">compute the sum of all elements in a one-dimensional ndarray using ordinary recursive summation.</span>
-   <span class="signature">[`gsumpw( arrays )`][@stdlib/blas/ext/base/ndarray/gsumpw]</span><span class="delimiter">: </span><span class="description">compute the sum of all elements in a one-dimensional ndarray using pairwise summation.</span>
-   <span class="signature">[`gunitspace( arrays )`][@stdlib/blas/ext/base/ndarray/gunitspace]</span><span class="delimiter">: </span><span class="description">fill a one-dimensional ndarray with linearly spaced numeric elements which increment by `1` starting from a specified value.</span>
-   <span class="signature">[`gxpy( arrays )`][@stdlib/blas/ext/base/ndarray/gxpy]</span><span class="delimiter">: </span><span class="description">add elements of a one-dimensional ndarray to the corresponding elements of a second one-dimensional ndarray and assign the results to the second ndarray.</span>
-   <span class="signature">[`gxsa( arrays )`][@stdlib/blas/ext/base/ndarray/gxsa]</span><span class="delimiter">: </span><span class="description">subtract a scalar constant from each element in a one-dimensional ndarray.</span>
-   <span class="signature">[`gxsy( arrays )`][@stdlib/blas/ext/base/ndarray/gxsy]</span><span class="delimiter">: </span><span class="description">subtract the elements of an output one-dimensional ndarray from the corresponding elements in an input one-dimensional ndarray and assign the results to the output ndarray.</span>
-   <span class="signature">[`gzeroTo( arrays )`][@stdlib/blas/ext/base/ndarray/gzero-to]</span><span class="delimiter">: </span><span class="description">fill a one-dimensional ndarray with linearly spaced numeric elements which increment by `1` starting from zero.</span>
-   <span class="signature">[`saxpb( arrays )`][@stdlib/blas/ext/base/ndarray/saxpb]</span><span class="delimiter">: </span><span class="description">multiply each element in a one-dimensional single-precision floating-point ndarray by a scalar constant and add a scalar constant to each result.</span>
-   <span class="signature">[`saxpby( arrays )`][@stdlib/blas/ext/base/ndarray/saxpby]</span><span class="delimiter">: </span><span class="description">multiply a one-dimensional single-precision floating-point ndarray by a scalar constant and add the result to a second one-dimensional single-precision floating-point ndarray multiplied by a scalar constant.</span>
-   <span class="signature">[`scircshift( arrays )`][@stdlib/blas/ext/base/ndarray/scircshift]</span><span class="delimiter">: </span><span class="description">circularly shift the elements of a one-dimensional single-precision floating-point ndarray by a specified number of positions.</span>
-   <span class="signature">[`scunone( arrays )`][@stdlib/blas/ext/base/ndarray/scunone]</span><span class="delimiter">: </span><span class="description">cumulatively test whether every element in a one-dimensional single-precision floating-point ndarray is falsy.</span>
-   <span class="signature">[`scusum( arrays )`][@stdlib/blas/ext/base/ndarray/scusum]</span><span class="delimiter">: </span><span class="description">compute the cumulative sum of a one-dimensional single-precision floating-point ndarray.</span>
-   <span class="signature">[`scusumkbn( arrays )`][@stdlib/blas/ext/base/ndarray/scusumkbn]</span><span class="delimiter">: </span><span class="description">compute the cumulative sum of a one-dimensional single-precision floating-point ndarray using an improved Kahan–Babuška algorithm.</span>
-   <span class="signature">[`scusumkbn2( arrays )`][@stdlib/blas/ext/base/ndarray/scusumkbn2]</span><span class="delimiter">: </span><span class="description">compute the cumulative sum of a one-dimensional single-precision floating-point ndarray using a second-order iterative Kahan–Babuška algorithm.</span>
-   <span class="signature">[`scusumors( arrays )`][@stdlib/blas/ext/base/ndarray/scusumors]</span><span class="delimiter">: </span><span class="description">compute the cumulative sum of a one-dimensional single-precision floating-point ndarray using ordinary recursive summation.</span>
-   <span class="signature">[`sindexOf( arrays )`][@stdlib/blas/ext/base/ndarray/sindex-of]</span><span class="delimiter">: </span><span class="description">return the first index of a search element in a one-dimensional single-precision floating-point ndarray.</span>
-   <span class="signature">[`slastIndexOf( arrays )`][@stdlib/blas/ext/base/ndarray/slast-index-of]</span><span class="delimiter">: </span><span class="description">return the last index of a search element in a one-dimensional single-precision floating-point ndarray.</span>
-   <span class="signature">[`slinspace( arrays )`][@stdlib/blas/ext/base/ndarray/slinspace]</span><span class="delimiter">: </span><span class="description">fill a one-dimensional single-precision floating-point ndarray with linearly spaced values over a specified interval.</span>
-   <span class="signature">[`snansum( arrays )`][@stdlib/blas/ext/base/ndarray/snansum]</span><span class="delimiter">: </span><span class="description">compute the sum of a one-dimensional single-precision floating-point ndarray, ignoring `NaN` values.</span>
-   <span class="signature">[`snansumkbn( arrays )`][@stdlib/blas/ext/base/ndarray/snansumkbn]</span><span class="delimiter">: </span><span class="description">compute the sum of a one-dimensional single-precision floating-point ndarray, ignoring `NaN` values and using an improved Kahan–Babuška algorithm.</span>
-   <span class="signature">[`snansumkbn2( arrays )`][@stdlib/blas/ext/base/ndarray/snansumkbn2]</span><span class="delimiter">: </span><span class="description">compute the sum of a one-dimensional single-precision floating-point ndarray, ignoring `NaN` values and using a second-order iterative Kahan–Babuška algorithm.</span>
-   <span class="signature">[`snansumors( arrays )`][@stdlib/blas/ext/base/ndarray/snansumors]</span><span class="delimiter">: </span><span class="description">compute the sum of a one-dimensional single-precision floating-point ndarray, ignoring `NaN` values and using ordinary recursive summation.</span>
-   <span class="signature">[`snansumpw( arrays )`][@stdlib/blas/ext/base/ndarray/snansumpw]</span><span class="delimiter">: </span><span class="description">compute the sum of a one-dimensional single-precision floating-point ndarray, ignoring `NaN` values and using pairwise summation.</span>
-   <span class="signature">[`soneTo( arrays )`][@stdlib/blas/ext/base/ndarray/sone-to]</span><span class="delimiter">: </span><span class="description">fill a one-dimensional single-precision floating-point ndarray with linearly spaced numeric elements which increment by `1` starting from one.</span>
-   <span class="signature">[`ssort( arrays )`][@stdlib/blas/ext/base/ndarray/ssort]</span><span class="delimiter">: </span><span class="description">sort a one-dimensional single-precision floating-point ndarray.</span>
-   <span class="signature">[`ssorthp( arrays )`][@stdlib/blas/ext/base/ndarray/ssorthp]</span><span class="delimiter">: </span><span class="description">sort a one-dimensional single-precision floating-point ndarray using heapsort.</span>
-   <span class="signature">[`ssum( arrays )`][@stdlib/blas/ext/base/ndarray/ssum]</span><span class="delimiter">: </span><span class="description">compute the sum of all elements in a one-dimensional single-precision floating-point ndarray.</span>
-   <span class="signature">[`ssumkbn( arrays )`][@stdlib/blas/ext/base/ndarray/ssumkbn]</span><span class="delimiter">: </span><span class="description">compute the sum of all elements in a one-dimensional single-precision floating-point ndarray using an improved Kahan–Babuška algorithm.</span>
-   <span class="signature">[`ssumkbn2( arrays )`][@stdlib/blas/ext/base/ndarray/ssumkbn2]</span><span class="delimiter">: </span><span class="description">compute the sum of all elements in a one-dimensional single-precision floating-point ndarray using a second-order iterative Kahan–Babuška algorithm.</span>
-   <span class="signature">[`ssumors( arrays )`][@stdlib/blas/ext/base/ndarray/ssumors]</span><span class="delimiter">: </span><span class="description">compute the sum of a one-dimensional single-precision floating-point ndarray using ordinary recursive summation.</span>
-   <span class="signature">[`ssumpw( arrays )`][@stdlib/blas/ext/base/ndarray/ssumpw]</span><span class="delimiter">: </span><span class="description">compute the sum of all elements in a one-dimensional single-precision floating-point ndarray using pairwise summation.</span>
-   <span class="signature">[`sunitspace( arrays )`][@stdlib/blas/ext/base/ndarray/sunitspace]</span><span class="delimiter">: </span><span class="description">fill a one-dimensional single-precision floating-point ndarray with linearly spaced numeric elements which increment by `1` starting from a specified value.</span>
-   <span class="signature">[`sxpy( arrays )`][@stdlib/blas/ext/base/ndarray/sxpy]</span><span class="delimiter">: </span><span class="description">add elements of a one-dimensional single-precision floating-point ndarray to the corresponding elements of a second one-dimensional single-precision floating-point ndarray and assign the results to the second ndarray.</span>
-   <span class="signature">[`sxsa( arrays )`][@stdlib/blas/ext/base/ndarray/sxsa]</span><span class="delimiter">: </span><span class="description">subtract a scalar constant from each element in a one-dimensional single-precision floating-point ndarray.</span>
-   <span class="signature">[`sxsy( arrays )`][@stdlib/blas/ext/base/ndarray/sxsy]</span><span class="delimiter">: </span><span class="description">subtract the elements of an output one-dimensional single-precision floating-point ndarray from the corresponding elements in an input one-dimensional single-precision floating-point ndarray and assign the results to the output ndarray.</span>
-   <span class="signature">[`szeroTo( arrays )`][@stdlib/blas/ext/base/ndarray/szero-to]</span><span class="delimiter">: </span><span class="description">fill a one-dimensional single-precision floating-point ndarray with linearly spaced numeric elements which increment by `1` starting from zero.</span>
-   <span class="signature">[`zaxpb( arrays )`][@stdlib/blas/ext/base/ndarray/zaxpb]</span><span class="delimiter">: </span><span class="description">multiply each element in a one-dimensional double-precision complex floating-point ndarray by a scalar constant and add a scalar constant to each result.</span>
-   <span class="signature">[`zaxpby( arrays )`][@stdlib/blas/ext/base/ndarray/zaxpby]</span><span class="delimiter">: </span><span class="description">multiply a one-dimensional double-precision complex floating-point ndarray by a scalar constant and add the result to a second one-dimensional double-precision complex floating-point ndarray multiplied by a scalar constant.</span>
-   <span class="signature">[`zindexOf( arrays )`][@stdlib/blas/ext/base/ndarray/zindex-of]</span><span class="delimiter">: </span><span class="description">return the first index of a search element in a one-dimensional double-precision complex floating-point ndarray.</span>
-   <span class="signature">[`zoneTo( arrays )`][@stdlib/blas/ext/base/ndarray/zone-to]</span><span class="delimiter">: </span><span class="description">fill a one-dimensional double-precision complex floating-point ndarray with linearly spaced numeric elements which increment by `1` starting from one.</span>
-   <span class="signature">[`zsum( arrays )`][@stdlib/blas/ext/base/ndarray/zsum]</span><span class="delimiter">: </span><span class="description">compute the sum of all elements in a one-dimensional double-precision complex floating-point ndarray.</span>
-   <span class="signature">[`zsumkbn( arrays )`][@stdlib/blas/ext/base/ndarray/zsumkbn]</span><span class="delimiter">: </span><span class="description">compute the sum of all elements in a one-dimensional double-precision complex floating-point ndarray using an improved Kahan–Babuška algorithm.</span>
-   <span class="signature">[`zunitspace( arrays )`][@stdlib/blas/ext/base/ndarray/zunitspace]</span><span class="delimiter">: </span><span class="description">fill a one-dimensional double-precision complex floating-point ndarray with linearly spaced numeric elements which increment by `1` starting from a specified value.</span>
-   <span class="signature">[`zxpy( arrays )`][@stdlib/blas/ext/base/ndarray/zxpy]</span><span class="delimiter">: </span><span class="description">add elements of a one-dimensional double-precision complex floating-point ndarray to the corresponding elements of a second one-dimensional double-precision complex floating-point ndarray and assign the results to the second ndarray.</span>
-   <span class="signature">[`zxsa( arrays )`][@stdlib/blas/ext/base/ndarray/zxsa]</span><span class="delimiter">: </span><span class="description">subtract a scalar constant from each element in a one-dimensional double-precision complex floating-point ndarray.</span>
-   <span class="signature">[`zxsy( arrays )`][@stdlib/blas/ext/base/ndarray/zxsy]</span><span class="delimiter">: </span><span class="description">subtract the elements of an output one-dimensional double-precision complex floating-point ndarray from the corresponding elements in an input one-dimensional double-precision complex floating-point ndarray and assign the results to the output ndarray.</span>
-   <span class="signature">[`zzeroTo( arrays )`][@stdlib/blas/ext/base/ndarray/zzero-to]</span><span class="delimiter">: </span><span class="description">fill a one-dimensional double-precision complex floating-point ndarray with linearly spaced numeric elements which increment by `1` starting from zero.</span>

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
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/blas-ext-base-ndarray@umd/browser.js"></script>
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

[test-image]: https://github.com/stdlib-js/blas-ext-base-ndarray/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/blas-ext-base-ndarray/actions/workflows/test.yml?query=branch:main

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

[@stdlib/blas/ext/base/ndarray/caxpb]: https://github.com/stdlib-js/blas-ext-base-ndarray-caxpb/tree/umd

[@stdlib/blas/ext/base/ndarray/caxpby]: https://github.com/stdlib-js/blas-ext-base-ndarray-caxpby/tree/umd

[@stdlib/blas/ext/base/ndarray/cindex-of]: https://github.com/stdlib-js/blas-ext-base-ndarray-cindex-of/tree/umd

[@stdlib/blas/ext/base/ndarray/cone-to]: https://github.com/stdlib-js/blas-ext-base-ndarray-cone-to/tree/umd

[@stdlib/blas/ext/base/ndarray/csum]: https://github.com/stdlib-js/blas-ext-base-ndarray-csum/tree/umd

[@stdlib/blas/ext/base/ndarray/csumkbn]: https://github.com/stdlib-js/blas-ext-base-ndarray-csumkbn/tree/umd

[@stdlib/blas/ext/base/ndarray/cunitspace]: https://github.com/stdlib-js/blas-ext-base-ndarray-cunitspace/tree/umd

[@stdlib/blas/ext/base/ndarray/cxpy]: https://github.com/stdlib-js/blas-ext-base-ndarray-cxpy/tree/umd

[@stdlib/blas/ext/base/ndarray/cxsa]: https://github.com/stdlib-js/blas-ext-base-ndarray-cxsa/tree/umd

[@stdlib/blas/ext/base/ndarray/cxsy]: https://github.com/stdlib-js/blas-ext-base-ndarray-cxsy/tree/umd

[@stdlib/blas/ext/base/ndarray/czero-to]: https://github.com/stdlib-js/blas-ext-base-ndarray-czero-to/tree/umd

[@stdlib/blas/ext/base/ndarray/daxpb]: https://github.com/stdlib-js/blas-ext-base-ndarray-daxpb/tree/umd

[@stdlib/blas/ext/base/ndarray/daxpby]: https://github.com/stdlib-js/blas-ext-base-ndarray-daxpby/tree/umd

[@stdlib/blas/ext/base/ndarray/dcircshift]: https://github.com/stdlib-js/blas-ext-base-ndarray-dcircshift/tree/umd

[@stdlib/blas/ext/base/ndarray/dcusum]: https://github.com/stdlib-js/blas-ext-base-ndarray-dcusum/tree/umd

[@stdlib/blas/ext/base/ndarray/dcusumkbn]: https://github.com/stdlib-js/blas-ext-base-ndarray-dcusumkbn/tree/umd

[@stdlib/blas/ext/base/ndarray/dcusumkbn2]: https://github.com/stdlib-js/blas-ext-base-ndarray-dcusumkbn2/tree/umd

[@stdlib/blas/ext/base/ndarray/dcusumors]: https://github.com/stdlib-js/blas-ext-base-ndarray-dcusumors/tree/umd

[@stdlib/blas/ext/base/ndarray/dcusumpw]: https://github.com/stdlib-js/blas-ext-base-ndarray-dcusumpw/tree/umd

[@stdlib/blas/ext/base/ndarray/ddiff]: https://github.com/stdlib-js/blas-ext-base-ndarray-ddiff/tree/umd

[@stdlib/blas/ext/base/ndarray/dindex-of-falsy]: https://github.com/stdlib-js/blas-ext-base-ndarray-dindex-of-falsy/tree/umd

[@stdlib/blas/ext/base/ndarray/dindex-of]: https://github.com/stdlib-js/blas-ext-base-ndarray-dindex-of/tree/umd

[@stdlib/blas/ext/base/ndarray/dlast-index-of]: https://github.com/stdlib-js/blas-ext-base-ndarray-dlast-index-of/tree/umd

[@stdlib/blas/ext/base/ndarray/dlinspace]: https://github.com/stdlib-js/blas-ext-base-ndarray-dlinspace/tree/umd

[@stdlib/blas/ext/base/ndarray/dnansum]: https://github.com/stdlib-js/blas-ext-base-ndarray-dnansum/tree/umd

[@stdlib/blas/ext/base/ndarray/dnansumkbn]: https://github.com/stdlib-js/blas-ext-base-ndarray-dnansumkbn/tree/umd

[@stdlib/blas/ext/base/ndarray/dnansumkbn2]: https://github.com/stdlib-js/blas-ext-base-ndarray-dnansumkbn2/tree/umd

[@stdlib/blas/ext/base/ndarray/dnansumors]: https://github.com/stdlib-js/blas-ext-base-ndarray-dnansumors/tree/umd

[@stdlib/blas/ext/base/ndarray/dnansumpw]: https://github.com/stdlib-js/blas-ext-base-ndarray-dnansumpw/tree/umd

[@stdlib/blas/ext/base/ndarray/done-to]: https://github.com/stdlib-js/blas-ext-base-ndarray-done-to/tree/umd

[@stdlib/blas/ext/base/ndarray/dsort]: https://github.com/stdlib-js/blas-ext-base-ndarray-dsort/tree/umd

[@stdlib/blas/ext/base/ndarray/dsorthp]: https://github.com/stdlib-js/blas-ext-base-ndarray-dsorthp/tree/umd

[@stdlib/blas/ext/base/ndarray/dsortins]: https://github.com/stdlib-js/blas-ext-base-ndarray-dsortins/tree/umd

[@stdlib/blas/ext/base/ndarray/dsortsh]: https://github.com/stdlib-js/blas-ext-base-ndarray-dsortsh/tree/umd

[@stdlib/blas/ext/base/ndarray/dsum]: https://github.com/stdlib-js/blas-ext-base-ndarray-dsum/tree/umd

[@stdlib/blas/ext/base/ndarray/dsumkbn]: https://github.com/stdlib-js/blas-ext-base-ndarray-dsumkbn/tree/umd

[@stdlib/blas/ext/base/ndarray/dsumkbn2]: https://github.com/stdlib-js/blas-ext-base-ndarray-dsumkbn2/tree/umd

[@stdlib/blas/ext/base/ndarray/dsumors]: https://github.com/stdlib-js/blas-ext-base-ndarray-dsumors/tree/umd

[@stdlib/blas/ext/base/ndarray/dsumpw]: https://github.com/stdlib-js/blas-ext-base-ndarray-dsumpw/tree/umd

[@stdlib/blas/ext/base/ndarray/dunitspace]: https://github.com/stdlib-js/blas-ext-base-ndarray-dunitspace/tree/umd

[@stdlib/blas/ext/base/ndarray/dxpy]: https://github.com/stdlib-js/blas-ext-base-ndarray-dxpy/tree/umd

[@stdlib/blas/ext/base/ndarray/dxsa]: https://github.com/stdlib-js/blas-ext-base-ndarray-dxsa/tree/umd

[@stdlib/blas/ext/base/ndarray/dxsy]: https://github.com/stdlib-js/blas-ext-base-ndarray-dxsy/tree/umd

[@stdlib/blas/ext/base/ndarray/dzero-to]: https://github.com/stdlib-js/blas-ext-base-ndarray-dzero-to/tree/umd

[@stdlib/blas/ext/base/ndarray/gaxpb]: https://github.com/stdlib-js/blas-ext-base-ndarray-gaxpb/tree/umd

[@stdlib/blas/ext/base/ndarray/gaxpby]: https://github.com/stdlib-js/blas-ext-base-ndarray-gaxpby/tree/umd

[@stdlib/blas/ext/base/ndarray/gcircshift]: https://github.com/stdlib-js/blas-ext-base-ndarray-gcircshift/tree/umd

[@stdlib/blas/ext/base/ndarray/gcusum]: https://github.com/stdlib-js/blas-ext-base-ndarray-gcusum/tree/umd

[@stdlib/blas/ext/base/ndarray/gcusumkbn]: https://github.com/stdlib-js/blas-ext-base-ndarray-gcusumkbn/tree/umd

[@stdlib/blas/ext/base/ndarray/gcusumkbn2]: https://github.com/stdlib-js/blas-ext-base-ndarray-gcusumkbn2/tree/umd

[@stdlib/blas/ext/base/ndarray/gcusumors]: https://github.com/stdlib-js/blas-ext-base-ndarray-gcusumors/tree/umd

[@stdlib/blas/ext/base/ndarray/gcusumpw]: https://github.com/stdlib-js/blas-ext-base-ndarray-gcusumpw/tree/umd

[@stdlib/blas/ext/base/ndarray/gfind-index]: https://github.com/stdlib-js/blas-ext-base-ndarray-gfind-index/tree/umd

[@stdlib/blas/ext/base/ndarray/gfind-last-index]: https://github.com/stdlib-js/blas-ext-base-ndarray-gfind-last-index/tree/umd

[@stdlib/blas/ext/base/ndarray/gindex-of-falsy]: https://github.com/stdlib-js/blas-ext-base-ndarray-gindex-of-falsy/tree/umd

[@stdlib/blas/ext/base/ndarray/gindex-of-truthy]: https://github.com/stdlib-js/blas-ext-base-ndarray-gindex-of-truthy/tree/umd

[@stdlib/blas/ext/base/ndarray/gindex-of]: https://github.com/stdlib-js/blas-ext-base-ndarray-gindex-of/tree/umd

[@stdlib/blas/ext/base/ndarray/gjoin-between]: https://github.com/stdlib-js/blas-ext-base-ndarray-gjoin-between/tree/umd

[@stdlib/blas/ext/base/ndarray/gjoin]: https://github.com/stdlib-js/blas-ext-base-ndarray-gjoin/tree/umd

[@stdlib/blas/ext/base/ndarray/glast-index-of]: https://github.com/stdlib-js/blas-ext-base-ndarray-glast-index-of/tree/umd

[@stdlib/blas/ext/base/ndarray/glinspace]: https://github.com/stdlib-js/blas-ext-base-ndarray-glinspace/tree/umd

[@stdlib/blas/ext/base/ndarray/gnansum]: https://github.com/stdlib-js/blas-ext-base-ndarray-gnansum/tree/umd

[@stdlib/blas/ext/base/ndarray/gnansumkbn]: https://github.com/stdlib-js/blas-ext-base-ndarray-gnansumkbn/tree/umd

[@stdlib/blas/ext/base/ndarray/gnansumkbn2]: https://github.com/stdlib-js/blas-ext-base-ndarray-gnansumkbn2/tree/umd

[@stdlib/blas/ext/base/ndarray/gnansumors]: https://github.com/stdlib-js/blas-ext-base-ndarray-gnansumors/tree/umd

[@stdlib/blas/ext/base/ndarray/gnansumpw]: https://github.com/stdlib-js/blas-ext-base-ndarray-gnansumpw/tree/umd

[@stdlib/blas/ext/base/ndarray/gone-to]: https://github.com/stdlib-js/blas-ext-base-ndarray-gone-to/tree/umd

[@stdlib/blas/ext/base/ndarray/gsort]: https://github.com/stdlib-js/blas-ext-base-ndarray-gsort/tree/umd

[@stdlib/blas/ext/base/ndarray/gsorthp]: https://github.com/stdlib-js/blas-ext-base-ndarray-gsorthp/tree/umd

[@stdlib/blas/ext/base/ndarray/gsum]: https://github.com/stdlib-js/blas-ext-base-ndarray-gsum/tree/umd

[@stdlib/blas/ext/base/ndarray/gsumkbn]: https://github.com/stdlib-js/blas-ext-base-ndarray-gsumkbn/tree/umd

[@stdlib/blas/ext/base/ndarray/gsumkbn2]: https://github.com/stdlib-js/blas-ext-base-ndarray-gsumkbn2/tree/umd

[@stdlib/blas/ext/base/ndarray/gsumors]: https://github.com/stdlib-js/blas-ext-base-ndarray-gsumors/tree/umd

[@stdlib/blas/ext/base/ndarray/gsumpw]: https://github.com/stdlib-js/blas-ext-base-ndarray-gsumpw/tree/umd

[@stdlib/blas/ext/base/ndarray/gunitspace]: https://github.com/stdlib-js/blas-ext-base-ndarray-gunitspace/tree/umd

[@stdlib/blas/ext/base/ndarray/gxpy]: https://github.com/stdlib-js/blas-ext-base-ndarray-gxpy/tree/umd

[@stdlib/blas/ext/base/ndarray/gxsa]: https://github.com/stdlib-js/blas-ext-base-ndarray-gxsa/tree/umd

[@stdlib/blas/ext/base/ndarray/gxsy]: https://github.com/stdlib-js/blas-ext-base-ndarray-gxsy/tree/umd

[@stdlib/blas/ext/base/ndarray/gzero-to]: https://github.com/stdlib-js/blas-ext-base-ndarray-gzero-to/tree/umd

[@stdlib/blas/ext/base/ndarray/saxpb]: https://github.com/stdlib-js/blas-ext-base-ndarray-saxpb/tree/umd

[@stdlib/blas/ext/base/ndarray/saxpby]: https://github.com/stdlib-js/blas-ext-base-ndarray-saxpby/tree/umd

[@stdlib/blas/ext/base/ndarray/scircshift]: https://github.com/stdlib-js/blas-ext-base-ndarray-scircshift/tree/umd

[@stdlib/blas/ext/base/ndarray/scunone]: https://github.com/stdlib-js/blas-ext-base-ndarray-scunone/tree/umd

[@stdlib/blas/ext/base/ndarray/scusum]: https://github.com/stdlib-js/blas-ext-base-ndarray-scusum/tree/umd

[@stdlib/blas/ext/base/ndarray/scusumkbn]: https://github.com/stdlib-js/blas-ext-base-ndarray-scusumkbn/tree/umd

[@stdlib/blas/ext/base/ndarray/scusumkbn2]: https://github.com/stdlib-js/blas-ext-base-ndarray-scusumkbn2/tree/umd

[@stdlib/blas/ext/base/ndarray/scusumors]: https://github.com/stdlib-js/blas-ext-base-ndarray-scusumors/tree/umd

[@stdlib/blas/ext/base/ndarray/sindex-of]: https://github.com/stdlib-js/blas-ext-base-ndarray-sindex-of/tree/umd

[@stdlib/blas/ext/base/ndarray/slast-index-of]: https://github.com/stdlib-js/blas-ext-base-ndarray-slast-index-of/tree/umd

[@stdlib/blas/ext/base/ndarray/slinspace]: https://github.com/stdlib-js/blas-ext-base-ndarray-slinspace/tree/umd

[@stdlib/blas/ext/base/ndarray/snansum]: https://github.com/stdlib-js/blas-ext-base-ndarray-snansum/tree/umd

[@stdlib/blas/ext/base/ndarray/snansumkbn]: https://github.com/stdlib-js/blas-ext-base-ndarray-snansumkbn/tree/umd

[@stdlib/blas/ext/base/ndarray/snansumkbn2]: https://github.com/stdlib-js/blas-ext-base-ndarray-snansumkbn2/tree/umd

[@stdlib/blas/ext/base/ndarray/snansumors]: https://github.com/stdlib-js/blas-ext-base-ndarray-snansumors/tree/umd

[@stdlib/blas/ext/base/ndarray/snansumpw]: https://github.com/stdlib-js/blas-ext-base-ndarray-snansumpw/tree/umd

[@stdlib/blas/ext/base/ndarray/sone-to]: https://github.com/stdlib-js/blas-ext-base-ndarray-sone-to/tree/umd

[@stdlib/blas/ext/base/ndarray/ssort]: https://github.com/stdlib-js/blas-ext-base-ndarray-ssort/tree/umd

[@stdlib/blas/ext/base/ndarray/ssorthp]: https://github.com/stdlib-js/blas-ext-base-ndarray-ssorthp/tree/umd

[@stdlib/blas/ext/base/ndarray/ssum]: https://github.com/stdlib-js/blas-ext-base-ndarray-ssum/tree/umd

[@stdlib/blas/ext/base/ndarray/ssumkbn]: https://github.com/stdlib-js/blas-ext-base-ndarray-ssumkbn/tree/umd

[@stdlib/blas/ext/base/ndarray/ssumkbn2]: https://github.com/stdlib-js/blas-ext-base-ndarray-ssumkbn2/tree/umd

[@stdlib/blas/ext/base/ndarray/ssumors]: https://github.com/stdlib-js/blas-ext-base-ndarray-ssumors/tree/umd

[@stdlib/blas/ext/base/ndarray/ssumpw]: https://github.com/stdlib-js/blas-ext-base-ndarray-ssumpw/tree/umd

[@stdlib/blas/ext/base/ndarray/sunitspace]: https://github.com/stdlib-js/blas-ext-base-ndarray-sunitspace/tree/umd

[@stdlib/blas/ext/base/ndarray/sxpy]: https://github.com/stdlib-js/blas-ext-base-ndarray-sxpy/tree/umd

[@stdlib/blas/ext/base/ndarray/sxsa]: https://github.com/stdlib-js/blas-ext-base-ndarray-sxsa/tree/umd

[@stdlib/blas/ext/base/ndarray/sxsy]: https://github.com/stdlib-js/blas-ext-base-ndarray-sxsy/tree/umd

[@stdlib/blas/ext/base/ndarray/szero-to]: https://github.com/stdlib-js/blas-ext-base-ndarray-szero-to/tree/umd

[@stdlib/blas/ext/base/ndarray/zaxpb]: https://github.com/stdlib-js/blas-ext-base-ndarray-zaxpb/tree/umd

[@stdlib/blas/ext/base/ndarray/zaxpby]: https://github.com/stdlib-js/blas-ext-base-ndarray-zaxpby/tree/umd

[@stdlib/blas/ext/base/ndarray/zindex-of]: https://github.com/stdlib-js/blas-ext-base-ndarray-zindex-of/tree/umd

[@stdlib/blas/ext/base/ndarray/zone-to]: https://github.com/stdlib-js/blas-ext-base-ndarray-zone-to/tree/umd

[@stdlib/blas/ext/base/ndarray/zsum]: https://github.com/stdlib-js/blas-ext-base-ndarray-zsum/tree/umd

[@stdlib/blas/ext/base/ndarray/zsumkbn]: https://github.com/stdlib-js/blas-ext-base-ndarray-zsumkbn/tree/umd

[@stdlib/blas/ext/base/ndarray/zunitspace]: https://github.com/stdlib-js/blas-ext-base-ndarray-zunitspace/tree/umd

[@stdlib/blas/ext/base/ndarray/zxpy]: https://github.com/stdlib-js/blas-ext-base-ndarray-zxpy/tree/umd

[@stdlib/blas/ext/base/ndarray/zxsa]: https://github.com/stdlib-js/blas-ext-base-ndarray-zxsa/tree/umd

[@stdlib/blas/ext/base/ndarray/zxsy]: https://github.com/stdlib-js/blas-ext-base-ndarray-zxsy/tree/umd

[@stdlib/blas/ext/base/ndarray/zzero-to]: https://github.com/stdlib-js/blas-ext-base-ndarray-zzero-to/tree/umd

<!-- </toc-links> -->

</section>

<!-- /.links -->
