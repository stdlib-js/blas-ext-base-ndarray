/** @license Apache-2.0 */

'use strict';

/*
* When adding modules to the namespace, ensure that they are added in alphabetical order according to module name.
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils-define-read-only-property/dist' );


// MAIN //

/**
* Top-level namespace.
*
* @namespace ns
*/
var ns = {};

/**
* @name caxpb
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/caxpb}
*/
setReadOnly( ns, 'caxpb', require( '@stdlib/blas-ext-base-ndarray-caxpb/dist' ) );

/**
* @name caxpby
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/caxpby}
*/
setReadOnly( ns, 'caxpby', require( '@stdlib/blas-ext-base-ndarray-caxpby/dist' ) );

/**
* @name ccopyWithin
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/ccopy-within}
*/
setReadOnly( ns, 'ccopyWithin', require( '@stdlib/blas-ext-base-ndarray-ccopy-within/dist' ) );

/**
* @name cfillEqual
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/cfill-equal}
*/
setReadOnly( ns, 'cfillEqual', require( '@stdlib/blas-ext-base-ndarray-cfill-equal/dist' ) );

/**
* @name cindexOf
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/cindex-of}
*/
setReadOnly( ns, 'cindexOf', require( '@stdlib/blas-ext-base-ndarray-cindex-of/dist' ) );

/**
* @name cindexOfTruthy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/cindex-of-truthy}
*/
setReadOnly( ns, 'cindexOfTruthy', require( '@stdlib/blas-ext-base-ndarray-cindex-of-truthy/dist' ) );

/**
* @name coneTo
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/cone-to}
*/
setReadOnly( ns, 'coneTo', require( '@stdlib/blas-ext-base-ndarray-cone-to/dist' ) );

/**
* @name csum
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/csum}
*/
setReadOnly( ns, 'csum', require( '@stdlib/blas-ext-base-ndarray-csum/dist' ) );

/**
* @name csumkbn
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/csumkbn}
*/
setReadOnly( ns, 'csumkbn', require( '@stdlib/blas-ext-base-ndarray-csumkbn/dist' ) );

/**
* @name ctril
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/ctril}
*/
setReadOnly( ns, 'ctril', require( '@stdlib/blas-ext-base-ndarray-ctril/dist' ) );

/**
* @name ctriu
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/ctriu}
*/
setReadOnly( ns, 'ctriu', require( '@stdlib/blas-ext-base-ndarray-ctriu/dist' ) );

/**
* @name cunitspace
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/cunitspace}
*/
setReadOnly( ns, 'cunitspace', require( '@stdlib/blas-ext-base-ndarray-cunitspace/dist' ) );

/**
* @name cwxsa
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/cwxsa}
*/
setReadOnly( ns, 'cwxsa', require( '@stdlib/blas-ext-base-ndarray-cwxsa/dist' ) );

/**
* @name cxmy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/cxmy}
*/
setReadOnly( ns, 'cxmy', require( '@stdlib/blas-ext-base-ndarray-cxmy/dist' ) );

/**
* @name cxpy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/cxpy}
*/
setReadOnly( ns, 'cxpy', require( '@stdlib/blas-ext-base-ndarray-cxpy/dist' ) );

/**
* @name cxsa
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/cxsa}
*/
setReadOnly( ns, 'cxsa', require( '@stdlib/blas-ext-base-ndarray-cxsa/dist' ) );

/**
* @name cxsy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/cxsy}
*/
setReadOnly( ns, 'cxsy', require( '@stdlib/blas-ext-base-ndarray-cxsy/dist' ) );

/**
* @name czeroTo
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/czero-to}
*/
setReadOnly( ns, 'czeroTo', require( '@stdlib/blas-ext-base-ndarray-czero-to/dist' ) );

/**
* @name dany
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/dany}
*/
setReadOnly( ns, 'dany', require( '@stdlib/blas-ext-base-ndarray-dany/dist' ) );

/**
* @name daxpb
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/daxpb}
*/
setReadOnly( ns, 'daxpb', require( '@stdlib/blas-ext-base-ndarray-daxpb/dist' ) );

/**
* @name daxpby
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/daxpby}
*/
setReadOnly( ns, 'daxpby', require( '@stdlib/blas-ext-base-ndarray-daxpby/dist' ) );

/**
* @name dcircshift
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/dcircshift}
*/
setReadOnly( ns, 'dcircshift', require( '@stdlib/blas-ext-base-ndarray-dcircshift/dist' ) );

/**
* @name dcopyWithin
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/dcopy-within}
*/
setReadOnly( ns, 'dcopyWithin', require( '@stdlib/blas-ext-base-ndarray-dcopy-within/dist' ) );

/**
* @name dcusum
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/dcusum}
*/
setReadOnly( ns, 'dcusum', require( '@stdlib/blas-ext-base-ndarray-dcusum/dist' ) );

/**
* @name dcusumkbn
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/dcusumkbn}
*/
setReadOnly( ns, 'dcusumkbn', require( '@stdlib/blas-ext-base-ndarray-dcusumkbn/dist' ) );

/**
* @name dcusumkbn2
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/dcusumkbn2}
*/
setReadOnly( ns, 'dcusumkbn2', require( '@stdlib/blas-ext-base-ndarray-dcusumkbn2/dist' ) );

/**
* @name dcusumors
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/dcusumors}
*/
setReadOnly( ns, 'dcusumors', require( '@stdlib/blas-ext-base-ndarray-dcusumors/dist' ) );

/**
* @name dcusumpw
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/dcusumpw}
*/
setReadOnly( ns, 'dcusumpw', require( '@stdlib/blas-ext-base-ndarray-dcusumpw/dist' ) );

/**
* @name ddiff
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/ddiff}
*/
setReadOnly( ns, 'ddiff', require( '@stdlib/blas-ext-base-ndarray-ddiff/dist' ) );

/**
* @name dfillEqual
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/dfill-equal}
*/
setReadOnly( ns, 'dfillEqual', require( '@stdlib/blas-ext-base-ndarray-dfill-equal/dist' ) );

/**
* @name dfillNaN
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/dfill-nan}
*/
setReadOnly( ns, 'dfillNaN', require( '@stdlib/blas-ext-base-ndarray-dfill-nan/dist' ) );

/**
* @name dfillNotEqual
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/dfill-not-equal}
*/
setReadOnly( ns, 'dfillNotEqual', require( '@stdlib/blas-ext-base-ndarray-dfill-not-equal/dist' ) );

/**
* @name dfirstIndexEqual
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/dfirst-index-equal}
*/
setReadOnly( ns, 'dfirstIndexEqual', require( '@stdlib/blas-ext-base-ndarray-dfirst-index-equal/dist' ) );

/**
* @name dfirstIndexGreaterThan
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/dfirst-index-greater-than}
*/
setReadOnly( ns, 'dfirstIndexGreaterThan', require( '@stdlib/blas-ext-base-ndarray-dfirst-index-greater-than/dist' ) );

/**
* @name dfirstIndexLessThan
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/dfirst-index-less-than}
*/
setReadOnly( ns, 'dfirstIndexLessThan', require( '@stdlib/blas-ext-base-ndarray-dfirst-index-less-than/dist' ) );

/**
* @name dindexOf
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/dindex-of}
*/
setReadOnly( ns, 'dindexOf', require( '@stdlib/blas-ext-base-ndarray-dindex-of/dist' ) );

/**
* @name dindexOfFalsy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/dindex-of-falsy}
*/
setReadOnly( ns, 'dindexOfFalsy', require( '@stdlib/blas-ext-base-ndarray-dindex-of-falsy/dist' ) );

/**
* @name dindexOfNotEqual
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/dindex-of-not-equal}
*/
setReadOnly( ns, 'dindexOfNotEqual', require( '@stdlib/blas-ext-base-ndarray-dindex-of-not-equal/dist' ) );

/**
* @name dindexOfTruthy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/dindex-of-truthy}
*/
setReadOnly( ns, 'dindexOfTruthy', require( '@stdlib/blas-ext-base-ndarray-dindex-of-truthy/dist' ) );

/**
* @name dlastIndexEqual
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/dlast-index-equal}
*/
setReadOnly( ns, 'dlastIndexEqual', require( '@stdlib/blas-ext-base-ndarray-dlast-index-equal/dist' ) );

/**
* @name dlastIndexOf
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/dlast-index-of}
*/
setReadOnly( ns, 'dlastIndexOf', require( '@stdlib/blas-ext-base-ndarray-dlast-index-of/dist' ) );

/**
* @name dlastIndexOfFalsy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/dlast-index-of-falsy}
*/
setReadOnly( ns, 'dlastIndexOfFalsy', require( '@stdlib/blas-ext-base-ndarray-dlast-index-of-falsy/dist' ) );

/**
* @name dlinspace
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/dlinspace}
*/
setReadOnly( ns, 'dlinspace', require( '@stdlib/blas-ext-base-ndarray-dlinspace/dist' ) );

/**
* @name dlogspace
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/dlogspace}
*/
setReadOnly( ns, 'dlogspace', require( '@stdlib/blas-ext-base-ndarray-dlogspace/dist' ) );

/**
* @name dnansum
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/dnansum}
*/
setReadOnly( ns, 'dnansum', require( '@stdlib/blas-ext-base-ndarray-dnansum/dist' ) );

/**
* @name dnansumkbn
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/dnansumkbn}
*/
setReadOnly( ns, 'dnansumkbn', require( '@stdlib/blas-ext-base-ndarray-dnansumkbn/dist' ) );

/**
* @name dnansumkbn2
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/dnansumkbn2}
*/
setReadOnly( ns, 'dnansumkbn2', require( '@stdlib/blas-ext-base-ndarray-dnansumkbn2/dist' ) );

/**
* @name dnansumors
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/dnansumors}
*/
setReadOnly( ns, 'dnansumors', require( '@stdlib/blas-ext-base-ndarray-dnansumors/dist' ) );

/**
* @name dnansumpw
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/dnansumpw}
*/
setReadOnly( ns, 'dnansumpw', require( '@stdlib/blas-ext-base-ndarray-dnansumpw/dist' ) );

/**
* @name doneTo
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/done-to}
*/
setReadOnly( ns, 'doneTo', require( '@stdlib/blas-ext-base-ndarray-done-to/dist' ) );

/**
* @name dsort
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/dsort}
*/
setReadOnly( ns, 'dsort', require( '@stdlib/blas-ext-base-ndarray-dsort/dist' ) );

/**
* @name dsorthp
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/dsorthp}
*/
setReadOnly( ns, 'dsorthp', require( '@stdlib/blas-ext-base-ndarray-dsorthp/dist' ) );

/**
* @name dsortins
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/dsortins}
*/
setReadOnly( ns, 'dsortins', require( '@stdlib/blas-ext-base-ndarray-dsortins/dist' ) );

/**
* @name dsortsh
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/dsortsh}
*/
setReadOnly( ns, 'dsortsh', require( '@stdlib/blas-ext-base-ndarray-dsortsh/dist' ) );

/**
* @name dsum
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/dsum}
*/
setReadOnly( ns, 'dsum', require( '@stdlib/blas-ext-base-ndarray-dsum/dist' ) );

/**
* @name dsumkbn
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/dsumkbn}
*/
setReadOnly( ns, 'dsumkbn', require( '@stdlib/blas-ext-base-ndarray-dsumkbn/dist' ) );

/**
* @name dsumkbn2
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/dsumkbn2}
*/
setReadOnly( ns, 'dsumkbn2', require( '@stdlib/blas-ext-base-ndarray-dsumkbn2/dist' ) );

/**
* @name dsumors
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/dsumors}
*/
setReadOnly( ns, 'dsumors', require( '@stdlib/blas-ext-base-ndarray-dsumors/dist' ) );

/**
* @name dsumpw
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/dsumpw}
*/
setReadOnly( ns, 'dsumpw', require( '@stdlib/blas-ext-base-ndarray-dsumpw/dist' ) );

/**
* @name dtril
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/dtril}
*/
setReadOnly( ns, 'dtril', require( '@stdlib/blas-ext-base-ndarray-dtril/dist' ) );

/**
* @name dtriu
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/dtriu}
*/
setReadOnly( ns, 'dtriu', require( '@stdlib/blas-ext-base-ndarray-dtriu/dist' ) );

/**
* @name dunitspace
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/dunitspace}
*/
setReadOnly( ns, 'dunitspace', require( '@stdlib/blas-ext-base-ndarray-dunitspace/dist' ) );

/**
* @name dwxsa
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/dwxsa}
*/
setReadOnly( ns, 'dwxsa', require( '@stdlib/blas-ext-base-ndarray-dwxsa/dist' ) );

/**
* @name dxdy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/dxdy}
*/
setReadOnly( ns, 'dxdy', require( '@stdlib/blas-ext-base-ndarray-dxdy/dist' ) );

/**
* @name dxmy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/dxmy}
*/
setReadOnly( ns, 'dxmy', require( '@stdlib/blas-ext-base-ndarray-dxmy/dist' ) );

/**
* @name dxpy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/dxpy}
*/
setReadOnly( ns, 'dxpy', require( '@stdlib/blas-ext-base-ndarray-dxpy/dist' ) );

/**
* @name dxsa
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/dxsa}
*/
setReadOnly( ns, 'dxsa', require( '@stdlib/blas-ext-base-ndarray-dxsa/dist' ) );

/**
* @name dxsy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/dxsy}
*/
setReadOnly( ns, 'dxsy', require( '@stdlib/blas-ext-base-ndarray-dxsy/dist' ) );

/**
* @name dzeroTo
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/dzero-to}
*/
setReadOnly( ns, 'dzeroTo', require( '@stdlib/blas-ext-base-ndarray-dzero-to/dist' ) );

/**
* @name gany
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/gany}
*/
setReadOnly( ns, 'gany', require( '@stdlib/blas-ext-base-ndarray-gany/dist' ) );

/**
* @name gaxpb
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/gaxpb}
*/
setReadOnly( ns, 'gaxpb', require( '@stdlib/blas-ext-base-ndarray-gaxpb/dist' ) );

/**
* @name gaxpby
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/gaxpby}
*/
setReadOnly( ns, 'gaxpby', require( '@stdlib/blas-ext-base-ndarray-gaxpby/dist' ) );

/**
* @name gcircshift
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/gcircshift}
*/
setReadOnly( ns, 'gcircshift', require( '@stdlib/blas-ext-base-ndarray-gcircshift/dist' ) );

/**
* @name gcopyWithin
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/gcopy-within}
*/
setReadOnly( ns, 'gcopyWithin', require( '@stdlib/blas-ext-base-ndarray-gcopy-within/dist' ) );

/**
* @name gcusum
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/gcusum}
*/
setReadOnly( ns, 'gcusum', require( '@stdlib/blas-ext-base-ndarray-gcusum/dist' ) );

/**
* @name gcusumkbn
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/gcusumkbn}
*/
setReadOnly( ns, 'gcusumkbn', require( '@stdlib/blas-ext-base-ndarray-gcusumkbn/dist' ) );

/**
* @name gcusumkbn2
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/gcusumkbn2}
*/
setReadOnly( ns, 'gcusumkbn2', require( '@stdlib/blas-ext-base-ndarray-gcusumkbn2/dist' ) );

/**
* @name gcusumors
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/gcusumors}
*/
setReadOnly( ns, 'gcusumors', require( '@stdlib/blas-ext-base-ndarray-gcusumors/dist' ) );

/**
* @name gcusumpw
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/gcusumpw}
*/
setReadOnly( ns, 'gcusumpw', require( '@stdlib/blas-ext-base-ndarray-gcusumpw/dist' ) );

/**
* @name gfillEqual
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/gfill-equal}
*/
setReadOnly( ns, 'gfillEqual', require( '@stdlib/blas-ext-base-ndarray-gfill-equal/dist' ) );

/**
* @name gfillNaN
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/gfill-nan}
*/
setReadOnly( ns, 'gfillNaN', require( '@stdlib/blas-ext-base-ndarray-gfill-nan/dist' ) );

/**
* @name gfillNotEqual
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/gfill-not-equal}
*/
setReadOnly( ns, 'gfillNotEqual', require( '@stdlib/blas-ext-base-ndarray-gfill-not-equal/dist' ) );

/**
* @name gfindIndex
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/gfind-index}
*/
setReadOnly( ns, 'gfindIndex', require( '@stdlib/blas-ext-base-ndarray-gfind-index/dist' ) );

/**
* @name gfindLastIndex
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/gfind-last-index}
*/
setReadOnly( ns, 'gfindLastIndex', require( '@stdlib/blas-ext-base-ndarray-gfind-last-index/dist' ) );

/**
* @name gfirstIndexEqual
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/gfirst-index-equal}
*/
setReadOnly( ns, 'gfirstIndexEqual', require( '@stdlib/blas-ext-base-ndarray-gfirst-index-equal/dist' ) );

/**
* @name gfirstIndexGreaterThan
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/gfirst-index-greater-than}
*/
setReadOnly( ns, 'gfirstIndexGreaterThan', require( '@stdlib/blas-ext-base-ndarray-gfirst-index-greater-than/dist' ) );

/**
* @name gfirstIndexLessThan
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/gfirst-index-less-than}
*/
setReadOnly( ns, 'gfirstIndexLessThan', require( '@stdlib/blas-ext-base-ndarray-gfirst-index-less-than/dist' ) );

/**
* @name gindexOf
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/gindex-of}
*/
setReadOnly( ns, 'gindexOf', require( '@stdlib/blas-ext-base-ndarray-gindex-of/dist' ) );

/**
* @name gindexOfFalsy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/gindex-of-falsy}
*/
setReadOnly( ns, 'gindexOfFalsy', require( '@stdlib/blas-ext-base-ndarray-gindex-of-falsy/dist' ) );

/**
* @name gindexOfNotEqual
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/gindex-of-not-equal}
*/
setReadOnly( ns, 'gindexOfNotEqual', require( '@stdlib/blas-ext-base-ndarray-gindex-of-not-equal/dist' ) );

/**
* @name gindexOfTruthy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/gindex-of-truthy}
*/
setReadOnly( ns, 'gindexOfTruthy', require( '@stdlib/blas-ext-base-ndarray-gindex-of-truthy/dist' ) );

/**
* @name gjoin
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/gjoin}
*/
setReadOnly( ns, 'gjoin', require( '@stdlib/blas-ext-base-ndarray-gjoin/dist' ) );

/**
* @name gjoinBetween
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/gjoin-between}
*/
setReadOnly( ns, 'gjoinBetween', require( '@stdlib/blas-ext-base-ndarray-gjoin-between/dist' ) );

/**
* @name glastIndexEqual
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/glast-index-equal}
*/
setReadOnly( ns, 'glastIndexEqual', require( '@stdlib/blas-ext-base-ndarray-glast-index-equal/dist' ) );

/**
* @name glastIndexOf
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/glast-index-of}
*/
setReadOnly( ns, 'glastIndexOf', require( '@stdlib/blas-ext-base-ndarray-glast-index-of/dist' ) );

/**
* @name glastIndexOfFalsy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/glast-index-of-falsy}
*/
setReadOnly( ns, 'glastIndexOfFalsy', require( '@stdlib/blas-ext-base-ndarray-glast-index-of-falsy/dist' ) );

/**
* @name glinspace
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/glinspace}
*/
setReadOnly( ns, 'glinspace', require( '@stdlib/blas-ext-base-ndarray-glinspace/dist' ) );

/**
* @name gnansum
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/gnansum}
*/
setReadOnly( ns, 'gnansum', require( '@stdlib/blas-ext-base-ndarray-gnansum/dist' ) );

/**
* @name gnansumkbn
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/gnansumkbn}
*/
setReadOnly( ns, 'gnansumkbn', require( '@stdlib/blas-ext-base-ndarray-gnansumkbn/dist' ) );

/**
* @name gnansumkbn2
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/gnansumkbn2}
*/
setReadOnly( ns, 'gnansumkbn2', require( '@stdlib/blas-ext-base-ndarray-gnansumkbn2/dist' ) );

/**
* @name gnansumors
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/gnansumors}
*/
setReadOnly( ns, 'gnansumors', require( '@stdlib/blas-ext-base-ndarray-gnansumors/dist' ) );

/**
* @name gnansumpw
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/gnansumpw}
*/
setReadOnly( ns, 'gnansumpw', require( '@stdlib/blas-ext-base-ndarray-gnansumpw/dist' ) );

/**
* @name goneTo
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/gone-to}
*/
setReadOnly( ns, 'goneTo', require( '@stdlib/blas-ext-base-ndarray-gone-to/dist' ) );

/**
* @name gsort
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/gsort}
*/
setReadOnly( ns, 'gsort', require( '@stdlib/blas-ext-base-ndarray-gsort/dist' ) );

/**
* @name gsorthp
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/gsorthp}
*/
setReadOnly( ns, 'gsorthp', require( '@stdlib/blas-ext-base-ndarray-gsorthp/dist' ) );

/**
* @name gsum
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/gsum}
*/
setReadOnly( ns, 'gsum', require( '@stdlib/blas-ext-base-ndarray-gsum/dist' ) );

/**
* @name gsumkbn
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/gsumkbn}
*/
setReadOnly( ns, 'gsumkbn', require( '@stdlib/blas-ext-base-ndarray-gsumkbn/dist' ) );

/**
* @name gsumkbn2
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/gsumkbn2}
*/
setReadOnly( ns, 'gsumkbn2', require( '@stdlib/blas-ext-base-ndarray-gsumkbn2/dist' ) );

/**
* @name gsumors
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/gsumors}
*/
setReadOnly( ns, 'gsumors', require( '@stdlib/blas-ext-base-ndarray-gsumors/dist' ) );

/**
* @name gsumpw
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/gsumpw}
*/
setReadOnly( ns, 'gsumpw', require( '@stdlib/blas-ext-base-ndarray-gsumpw/dist' ) );

/**
* @name gtril
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/gtril}
*/
setReadOnly( ns, 'gtril', require( '@stdlib/blas-ext-base-ndarray-gtril/dist' ) );

/**
* @name gtriu
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/gtriu}
*/
setReadOnly( ns, 'gtriu', require( '@stdlib/blas-ext-base-ndarray-gtriu/dist' ) );

/**
* @name gunitspace
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/gunitspace}
*/
setReadOnly( ns, 'gunitspace', require( '@stdlib/blas-ext-base-ndarray-gunitspace/dist' ) );

/**
* @name gwxsa
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/gwxsa}
*/
setReadOnly( ns, 'gwxsa', require( '@stdlib/blas-ext-base-ndarray-gwxsa/dist' ) );

/**
* @name gxdy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/gxdy}
*/
setReadOnly( ns, 'gxdy', require( '@stdlib/blas-ext-base-ndarray-gxdy/dist' ) );

/**
* @name gxmy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/gxmy}
*/
setReadOnly( ns, 'gxmy', require( '@stdlib/blas-ext-base-ndarray-gxmy/dist' ) );

/**
* @name gxpy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/gxpy}
*/
setReadOnly( ns, 'gxpy', require( '@stdlib/blas-ext-base-ndarray-gxpy/dist' ) );

/**
* @name gxsa
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/gxsa}
*/
setReadOnly( ns, 'gxsa', require( '@stdlib/blas-ext-base-ndarray-gxsa/dist' ) );

/**
* @name gxsy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/gxsy}
*/
setReadOnly( ns, 'gxsy', require( '@stdlib/blas-ext-base-ndarray-gxsy/dist' ) );

/**
* @name gzeroTo
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/gzero-to}
*/
setReadOnly( ns, 'gzeroTo', require( '@stdlib/blas-ext-base-ndarray-gzero-to/dist' ) );

/**
* @name sany
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/sany}
*/
setReadOnly( ns, 'sany', require( '@stdlib/blas-ext-base-ndarray-sany/dist' ) );

/**
* @name saxpb
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/saxpb}
*/
setReadOnly( ns, 'saxpb', require( '@stdlib/blas-ext-base-ndarray-saxpb/dist' ) );

/**
* @name saxpby
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/saxpby}
*/
setReadOnly( ns, 'saxpby', require( '@stdlib/blas-ext-base-ndarray-saxpby/dist' ) );

/**
* @name scircshift
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/scircshift}
*/
setReadOnly( ns, 'scircshift', require( '@stdlib/blas-ext-base-ndarray-scircshift/dist' ) );

/**
* @name scopyWithin
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/scopy-within}
*/
setReadOnly( ns, 'scopyWithin', require( '@stdlib/blas-ext-base-ndarray-scopy-within/dist' ) );

/**
* @name scunone
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/scunone}
*/
setReadOnly( ns, 'scunone', require( '@stdlib/blas-ext-base-ndarray-scunone/dist' ) );

/**
* @name scusum
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/scusum}
*/
setReadOnly( ns, 'scusum', require( '@stdlib/blas-ext-base-ndarray-scusum/dist' ) );

/**
* @name scusumkbn
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/scusumkbn}
*/
setReadOnly( ns, 'scusumkbn', require( '@stdlib/blas-ext-base-ndarray-scusumkbn/dist' ) );

/**
* @name scusumkbn2
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/scusumkbn2}
*/
setReadOnly( ns, 'scusumkbn2', require( '@stdlib/blas-ext-base-ndarray-scusumkbn2/dist' ) );

/**
* @name scusumors
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/scusumors}
*/
setReadOnly( ns, 'scusumors', require( '@stdlib/blas-ext-base-ndarray-scusumors/dist' ) );

/**
* @name sfillEqual
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/sfill-equal}
*/
setReadOnly( ns, 'sfillEqual', require( '@stdlib/blas-ext-base-ndarray-sfill-equal/dist' ) );

/**
* @name sfillNaN
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/sfill-nan}
*/
setReadOnly( ns, 'sfillNaN', require( '@stdlib/blas-ext-base-ndarray-sfill-nan/dist' ) );

/**
* @name sfillNotEqual
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/sfill-not-equal}
*/
setReadOnly( ns, 'sfillNotEqual', require( '@stdlib/blas-ext-base-ndarray-sfill-not-equal/dist' ) );

/**
* @name sfirstIndexEqual
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/sfirst-index-equal}
*/
setReadOnly( ns, 'sfirstIndexEqual', require( '@stdlib/blas-ext-base-ndarray-sfirst-index-equal/dist' ) );

/**
* @name sfirstIndexLessThan
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/sfirst-index-less-than}
*/
setReadOnly( ns, 'sfirstIndexLessThan', require( '@stdlib/blas-ext-base-ndarray-sfirst-index-less-than/dist' ) );

/**
* @name sindexOf
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/sindex-of}
*/
setReadOnly( ns, 'sindexOf', require( '@stdlib/blas-ext-base-ndarray-sindex-of/dist' ) );

/**
* @name sindexOfNotEqual
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/sindex-of-not-equal}
*/
setReadOnly( ns, 'sindexOfNotEqual', require( '@stdlib/blas-ext-base-ndarray-sindex-of-not-equal/dist' ) );

/**
* @name sindexOfTruthy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/sindex-of-truthy}
*/
setReadOnly( ns, 'sindexOfTruthy', require( '@stdlib/blas-ext-base-ndarray-sindex-of-truthy/dist' ) );

/**
* @name slastIndexOf
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/slast-index-of}
*/
setReadOnly( ns, 'slastIndexOf', require( '@stdlib/blas-ext-base-ndarray-slast-index-of/dist' ) );

/**
* @name slastIndexOfFalsy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/slast-index-of-falsy}
*/
setReadOnly( ns, 'slastIndexOfFalsy', require( '@stdlib/blas-ext-base-ndarray-slast-index-of-falsy/dist' ) );

/**
* @name slinspace
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/slinspace}
*/
setReadOnly( ns, 'slinspace', require( '@stdlib/blas-ext-base-ndarray-slinspace/dist' ) );

/**
* @name snansum
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/snansum}
*/
setReadOnly( ns, 'snansum', require( '@stdlib/blas-ext-base-ndarray-snansum/dist' ) );

/**
* @name snansumkbn
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/snansumkbn}
*/
setReadOnly( ns, 'snansumkbn', require( '@stdlib/blas-ext-base-ndarray-snansumkbn/dist' ) );

/**
* @name snansumkbn2
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/snansumkbn2}
*/
setReadOnly( ns, 'snansumkbn2', require( '@stdlib/blas-ext-base-ndarray-snansumkbn2/dist' ) );

/**
* @name snansumors
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/snansumors}
*/
setReadOnly( ns, 'snansumors', require( '@stdlib/blas-ext-base-ndarray-snansumors/dist' ) );

/**
* @name snansumpw
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/snansumpw}
*/
setReadOnly( ns, 'snansumpw', require( '@stdlib/blas-ext-base-ndarray-snansumpw/dist' ) );

/**
* @name soneTo
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/sone-to}
*/
setReadOnly( ns, 'soneTo', require( '@stdlib/blas-ext-base-ndarray-sone-to/dist' ) );

/**
* @name ssort
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/ssort}
*/
setReadOnly( ns, 'ssort', require( '@stdlib/blas-ext-base-ndarray-ssort/dist' ) );

/**
* @name ssorthp
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/ssorthp}
*/
setReadOnly( ns, 'ssorthp', require( '@stdlib/blas-ext-base-ndarray-ssorthp/dist' ) );

/**
* @name ssum
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/ssum}
*/
setReadOnly( ns, 'ssum', require( '@stdlib/blas-ext-base-ndarray-ssum/dist' ) );

/**
* @name ssumkbn
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/ssumkbn}
*/
setReadOnly( ns, 'ssumkbn', require( '@stdlib/blas-ext-base-ndarray-ssumkbn/dist' ) );

/**
* @name ssumkbn2
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/ssumkbn2}
*/
setReadOnly( ns, 'ssumkbn2', require( '@stdlib/blas-ext-base-ndarray-ssumkbn2/dist' ) );

/**
* @name ssumors
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/ssumors}
*/
setReadOnly( ns, 'ssumors', require( '@stdlib/blas-ext-base-ndarray-ssumors/dist' ) );

/**
* @name ssumpw
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/ssumpw}
*/
setReadOnly( ns, 'ssumpw', require( '@stdlib/blas-ext-base-ndarray-ssumpw/dist' ) );

/**
* @name stril
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/stril}
*/
setReadOnly( ns, 'stril', require( '@stdlib/blas-ext-base-ndarray-stril/dist' ) );

/**
* @name striu
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/striu}
*/
setReadOnly( ns, 'striu', require( '@stdlib/blas-ext-base-ndarray-striu/dist' ) );

/**
* @name sunitspace
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/sunitspace}
*/
setReadOnly( ns, 'sunitspace', require( '@stdlib/blas-ext-base-ndarray-sunitspace/dist' ) );

/**
* @name swxsa
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/swxsa}
*/
setReadOnly( ns, 'swxsa', require( '@stdlib/blas-ext-base-ndarray-swxsa/dist' ) );

/**
* @name sxdy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/sxdy}
*/
setReadOnly( ns, 'sxdy', require( '@stdlib/blas-ext-base-ndarray-sxdy/dist' ) );

/**
* @name sxmy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/sxmy}
*/
setReadOnly( ns, 'sxmy', require( '@stdlib/blas-ext-base-ndarray-sxmy/dist' ) );

/**
* @name sxpy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/sxpy}
*/
setReadOnly( ns, 'sxpy', require( '@stdlib/blas-ext-base-ndarray-sxpy/dist' ) );

/**
* @name sxsa
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/sxsa}
*/
setReadOnly( ns, 'sxsa', require( '@stdlib/blas-ext-base-ndarray-sxsa/dist' ) );

/**
* @name sxsy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/sxsy}
*/
setReadOnly( ns, 'sxsy', require( '@stdlib/blas-ext-base-ndarray-sxsy/dist' ) );

/**
* @name szeroTo
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/szero-to}
*/
setReadOnly( ns, 'szeroTo', require( '@stdlib/blas-ext-base-ndarray-szero-to/dist' ) );

/**
* @name zaxpb
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/zaxpb}
*/
setReadOnly( ns, 'zaxpb', require( '@stdlib/blas-ext-base-ndarray-zaxpb/dist' ) );

/**
* @name zaxpby
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/zaxpby}
*/
setReadOnly( ns, 'zaxpby', require( '@stdlib/blas-ext-base-ndarray-zaxpby/dist' ) );

/**
* @name zcopyWithin
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/zcopy-within}
*/
setReadOnly( ns, 'zcopyWithin', require( '@stdlib/blas-ext-base-ndarray-zcopy-within/dist' ) );

/**
* @name zindexOf
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/zindex-of}
*/
setReadOnly( ns, 'zindexOf', require( '@stdlib/blas-ext-base-ndarray-zindex-of/dist' ) );

/**
* @name zindexOfTruthy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/zindex-of-truthy}
*/
setReadOnly( ns, 'zindexOfTruthy', require( '@stdlib/blas-ext-base-ndarray-zindex-of-truthy/dist' ) );

/**
* @name zoneTo
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/zone-to}
*/
setReadOnly( ns, 'zoneTo', require( '@stdlib/blas-ext-base-ndarray-zone-to/dist' ) );

/**
* @name zsum
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/zsum}
*/
setReadOnly( ns, 'zsum', require( '@stdlib/blas-ext-base-ndarray-zsum/dist' ) );

/**
* @name zsumkbn
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/zsumkbn}
*/
setReadOnly( ns, 'zsumkbn', require( '@stdlib/blas-ext-base-ndarray-zsumkbn/dist' ) );

/**
* @name ztril
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/ztril}
*/
setReadOnly( ns, 'ztril', require( '@stdlib/blas-ext-base-ndarray-ztril/dist' ) );

/**
* @name ztriu
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/ztriu}
*/
setReadOnly( ns, 'ztriu', require( '@stdlib/blas-ext-base-ndarray-ztriu/dist' ) );

/**
* @name zunitspace
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/zunitspace}
*/
setReadOnly( ns, 'zunitspace', require( '@stdlib/blas-ext-base-ndarray-zunitspace/dist' ) );

/**
* @name zwxsa
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/zwxsa}
*/
setReadOnly( ns, 'zwxsa', require( '@stdlib/blas-ext-base-ndarray-zwxsa/dist' ) );

/**
* @name zxdy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/zxdy}
*/
setReadOnly( ns, 'zxdy', require( '@stdlib/blas-ext-base-ndarray-zxdy/dist' ) );

/**
* @name zxmy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/zxmy}
*/
setReadOnly( ns, 'zxmy', require( '@stdlib/blas-ext-base-ndarray-zxmy/dist' ) );

/**
* @name zxpy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/zxpy}
*/
setReadOnly( ns, 'zxpy', require( '@stdlib/blas-ext-base-ndarray-zxpy/dist' ) );

/**
* @name zxsa
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/zxsa}
*/
setReadOnly( ns, 'zxsa', require( '@stdlib/blas-ext-base-ndarray-zxsa/dist' ) );

/**
* @name zxsy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/zxsy}
*/
setReadOnly( ns, 'zxsy', require( '@stdlib/blas-ext-base-ndarray-zxsy/dist' ) );

/**
* @name zzeroTo
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/zzero-to}
*/
setReadOnly( ns, 'zzeroTo', require( '@stdlib/blas-ext-base-ndarray-zzero-to/dist' ) );


// EXPORTS //

module.exports = ns;
