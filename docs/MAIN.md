Polyloader
-------------

Polyloader is a lazy-load library for Polymer with Webcomponents detection features. You can set elements in order to load at initial load, and a batch of elements by page, and working with [steroids-polyter](https://github.com/bquarks/steroid-polyter), your app import elements by 'page' defined in `steroids-polyter`.

> **Configuration:**

> - *wcLibraryUrl*: path to webcomponents library in order to load polyfills when it may be necessary.
> - *coreComponents*: path to elements imports at initial loading. 
> - *pages* : definition of page bundles loads by `Polyload.loadPage('yourpageName')`



Pages
-----
-----

Definition of pages bundles, you can set priority on load.

Priority works changing import order of pages.


