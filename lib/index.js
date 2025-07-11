/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

/*
* When adding modules to the namespace, ensure that they are added in alphabetical order according to module name.
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils-define-read-only-property' );


// MAIN //

/**
* Top-level namespace.
*
* @namespace ns
*/
var ns = {};

/**
* @name csum
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/csum}
*/
setReadOnly( ns, 'csum', require( '@stdlib/blas-ext-base-ndarray-csum' ) );

/**
* @name dcusum
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/dcusum}
*/
setReadOnly( ns, 'dcusum', require( '@stdlib/blas-ext-base-ndarray-dcusum' ) );

/**
* @name dsum
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/dsum}
*/
setReadOnly( ns, 'dsum', require( '@stdlib/blas-ext-base-ndarray-dsum' ) );

/**
* @name gcusum
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/gcusum}
*/
setReadOnly( ns, 'gcusum', require( '@stdlib/blas-ext-base-ndarray-gcusum' ) );

/**
* @name gsum
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/gsum}
*/
setReadOnly( ns, 'gsum', require( '@stdlib/blas-ext-base-ndarray-gsum' ) );

/**
* @name scusum
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/scusum}
*/
setReadOnly( ns, 'scusum', require( '@stdlib/blas-ext-base-ndarray-scusum' ) );

/**
* @name ssum
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/ssum}
*/
setReadOnly( ns, 'ssum', require( '@stdlib/blas-ext-base-ndarray-ssum' ) );

/**
* @name zsum
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/zsum}
*/
setReadOnly( ns, 'zsum', require( '@stdlib/blas-ext-base-ndarray-zsum' ) );


// EXPORTS //

module.exports = ns;
