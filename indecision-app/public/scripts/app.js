'use strict';

var app = {
  title: 'Indecision App',
  subtitle: 'Anything',
  options: ['One', 'Two']
};

var renderOptions = function renderOptions(options) {
  if (options.length > 0) {
    return React.createElement(
      'div',
      null,
      React.createElement(
        'p',
        null,
        'Here are your options'
      ),
      React.createElement(
        'ol',
        null,
        options.map(function (option) {
          return React.createElement(
            'li',
            null,
            option
          );
        })
      )
    );
  } else {
    return React.createElement(
      'p',
      null,
      'No options'
    );
  }
};

var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    app.title
  ),
  app.subtitle && React.createElement(
    'p',
    null,
    app.subtitle
  ),
  renderOptions(app.options)
);

ReactDOM.render(template, document.getElementById('app'));
