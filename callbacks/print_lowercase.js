var getHTML = require('../http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/lowercase.html'
};

function printLowerCase (html) {
  var htmlLowerCase = html.toLowerCase();
  console.log(htmlLowerCase);
}

getHTML(requestOptions, printLowerCase);