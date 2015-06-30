# bq-polyloader

Polymer elements lazy loader and Webcomponents support detection.

## About

A JavaScript library by Jorge Serrano.

See the [project homepage](https://github.com/bquarks/Polyloader).

## Installation

Using Bower:

    bower install bq-polyloader

Or grab the [source](https://github.com/bquarks/Polyloader/dist/bq-polyloader.js) ([minified](https://github.com/bquarks/Polyloader/dist/bq-polyloader.min.js)).

## Usage

Basic usage is as follows:

 `index.html`:

```javascript 
<script type="text/javascript" src="scripts/polyloader.js"></script>
<script type="text/javascript">
window.Polyloader = new bqPolyloader({
  wcLibraryUrl : 'bower_components/webcomponentsjs/webcomponents.min.js',
  coreComponents : [
    'bower_components/paper-styles/paper-styles-classes.html',
    'bower_components/iron-flex-layout/classes/iron-flex-layout.html',
    'bower_components/paper-drawer-panel/paper-drawer-panel.html',
    'bower_components/paper-header-panel/paper-header-panel.html',
    'bower_components/iron-icons/iron-icons.html',
    'bower_components/paper-toolbar/paper-toolbar.html',
    'bower_components/paper-icon-button/paper-icon-button.html',
    'bower_components/paper-menu/paper-menu.html',
    'bower_components/paper-material/paper-material.html',
    'bower_components/paper-item/paper-item.html',
    'bower_components/iron-selector/iron-selector.html',
    'bower_components/iron-pages/iron-pages.html',
    'bower_components/platinum-sw/platinum-sw-register.html',
    'bower_components/platinum-sw/platinum-sw-cache.html',
    'bower_components/paper-toast/paper-toast.html',
    'elements/app-theme.html',
  ],
  pages : {
    main : {
      priority: 1,
      elements : [
        'elements/my-list/my-list.html',
        'elements/my-greeting/my-greeting.html',
        'elements/login/login.html',
        'elements/pizza/pizza-toppings.html',
        'elements/routing.html'
        ]      
      },
      login : {
        priority: 2,
        elements : [
          'bower_components/paper-styles/paper-styles-classes.html',
          'bower_components/iron-flex-layout/classes/iron-flex-layout.html',
          'bower_components/paper-drawer-panel/paper-drawer-panel.html'
          ]      
        }
    }
});

</script>
```

For advanced usage, see the documentation.

## Documentation

Start with `docs/MAIN.md`. [go](https://github.com/bquarks/Polyloader/docs/MAIN.md)

## Contributing

We'll check out your contribution if you:

* Provide a comprehensive suite of tests for your fork.
* Have a clear and documented rationale for your changes.
* Package these up in a pull request.

We'll do our best to help you out with any contribution issues you may have.

## License

MIT. See `LICENSE.txt` in this directory.
