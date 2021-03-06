/*!
 * Polyloader JavaScript Library v0.0.1
 * http://Polyloader.com/
 *
 *
 * Copyright, 2015 BQ. and other contributors
 * Released under the MIT license
 *
 * Date: 2015-06-26T16:01Z
 */
/* global   window */

(function( global, factory ) {
    "use strict";
    if ( typeof module === "object" && typeof module.exports === "object" ) {
        // For CommonJS and CommonJS-like environments where a proper `window`
        // is present, execute the factory and get Polyloader.
        // For environments that do not have a `window` with a `document`
        // (such as Node.js), expose a factory as module.exports.
        // This accentuates the need for the creation of a real `window`.
        // e.g. var Polyloader = require("Polyloader")(window);
        // See ticket #14549 for more info.
        module.exports = global.document ?
            factory( global, true ) :
            function( w ) {
                if ( !w.document ) {
                    throw new Error( "Polyloader requires a window with a document" );
                }
                return factory( w );
            };
    } else {
        factory( global );
    }

// Pass this if window is not defined yet
}(typeof window !== "undefined" ? window : this, function( window, noGlobal ) {



/* global document */
"use strict";

// Base function.
var bqPolyloader = function(options) {

    this.supportWc = this._wcSupport();
    this.urls = {};
    this.urls.wclibrary = options.wcLibraryUrl || '';
    this.currentPage = 'main';
    this.pages = options.pages || [];
    this._firstLoad = true;
    this.coreComponents = options.coreComponents || [];


    // Sort pages by priority
    this._sortByPriority();

    // load webcomponents if necessary
    if (this.supportWc === false) {
        this._loadWC();
        console.log('%c Oh my heavens! Your browser needs polyfills ', 'background: #222; color: #bada55');
    } else {
        console.log('%c Polyloader || Yeahh running Webcomponents native ', 'background: #444; color: #bada55');
        this._lazyLoadPolymerAndElements();
    }
};

//
// Check WebComponents support method.
//
bqPolyloader.prototype._wcSupport = function() {

    return ('registerElement' in document && 'import' in document.createElement('link') && 'content' in document.createElement('template'));
};
//
// Load WebComponents library if wc is not supported.
//
bqPolyloader.prototype._loadWC = function() {

    if(!this.urls.wclibrary){
        console.log('Polyloader | Error no webcomponents library url');
    }else{
        var wcPoly = document.createElement('script');
        wcPoly.src = this.urls.wclibrary;
        document.getElementsByTagName('head')[0].appendChild(wcPoly);
        this._lazyLoadPolymerAndElements();
    }

    
};
//
// Lazy loader elements
//
bqPolyloader.prototype._lazyLoadPolymerAndElements = function() {
    
    // Let's use Shadow DOM if we have it, because awesome.
    window.Polymer = window.Polymer || {};

    // default shady-dom
    if(this.supportWc){
        window.Polymer.dom = 'shadow';
    }
    
    this.coreComponents.forEach(function(elementURL) {

        var elImport = document.createElement('link');
        elImport.rel = 'import';
        elImport.href = elementURL;

        document.head.appendChild(elImport);

    });
   
};
//
// Load Pages Elements method
//
bqPolyloader.prototype._loadPagesElements = function() {

    for(var kk = 0; kk < this.pagesSortedByPriority.length; kk++){
        for (var i = this.pagesSortedByPriority[kk][1].elements.length - 1; i >= 0; i--) {
            
            var elImport = document.createElement('link');
            elImport.rel = 'import';
            elImport.href = this.pagesSortedByPriority[kk][1].elements[i];

            document.head.appendChild(elImport);
        }
    }
};
//
//  Page changer method.
//
bqPolyloader.prototype.loadPage = function(pageId){
    
    if(typeof pageId === 'string' && this.pages[pageId]) {
        this.pages[pageId].priority = 1;
        this._sortByPriority();
        this._loadPagesElements();
    }
};
//
// Sort By priority method
//
bqPolyloader.prototype._sortByPriority = function(){
    
    var sortable = [];
    //convert pages to array
    for(var ii in this.pages){ sortable.push([ii,this.pages[ii]]);}
    // sort array by priority
    sortable.sort(function(a,b){ return a[1].priority -  b[1].priority;});

    this.pagesSortedByPriority = sortable;
    
};


// Version.
bqPolyloader.VERSION = '0.0.2';


// Expose bqPolyloader and ç identifiers, even in AMD
if ( !noGlobal ) {
    window.bqPolyloader = window.ç = bqPolyloader;
}
// Export to the root, which is probably `window`.

return bqPolyloader;



}));
