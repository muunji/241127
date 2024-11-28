const Handlebars = require('handlebars');

let HTMLBasic = `
<div class="entry">
  <h1>{{title}}</h1>
  <div class="body">
    {{#noop}}{{body}}{{/noop}}
  </div>
</div>
`;

// let intoData = {
//   title : 'minji',
//   h1: 'testTitle'
// }
Handlebars.registerHelper("noop", function(options) {
  return options.fn(this);
});

const template = Handlebars.compile(HTMLBasic);
let header = template(intoData);

console.log(header);
