// widgets.js
window.register = window.register || {};
function registerComponent(name, component) {
    window.register[name] = component;
  
  window[name] = component;
}
//**********
const Card = () => create('div')
  .class(['card'])
  .child({
    header: create('h3').text('Card Header'),
    body: create('p').text('Card Body'),
    footer: create('small').text('Card Footer')
  });

registerComponent("Card", Card);


const Button = () => create('button')
  .class(['btn'])
  .text('Click Me');

registerComponent("Button", Button);
