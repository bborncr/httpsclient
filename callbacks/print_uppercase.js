var getHTML = require('../http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
};

function printUpperCase (html) {
  var htmlUpperCase = html.toUpperCase();
  console.log(htmlUpperCase);
}

getHTML(requestOptions, printUpperCase);