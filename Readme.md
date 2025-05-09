

# Carbon Native 2.1V

This is the latest release of **Carbon Native 2.1V**.
Here included some core and updated features.

---

### Installing

```html
<link rel="stylesheet" href="/css/beer.min.css">
<script type="module" src="/css/beer.min.js"></script>
<script src="/js/carbon.dom.js"></script>
<script src="/js/widgets.js"></script>
```

---

### Basic Usage

```javascript
var name = create("div")
  .class(["box"])
  .text("Hello World");
```

---

### What is a Block?

A **Block** is a chainable method used to modify or interact with the element created using the main `BuildAPI` system.
The main function is `buildAPI()`, and all blocks like `.class([])`, `.attrs({})` etc. are part of its API.

---

### All Blocks (with Examples)

#### `.class([])`

```javascript
create("div").class(["box", "shadow"]);
```

#### `.removeClass(name)`

```javascript
element.removeClass("shadow");
```

#### `.removeAllClass()`

```javascript
element.removeAllClass();
```

#### `.id(["myId"])`

```javascript
create("p").id(["unique-id"]);
```

#### `.getId()`

```javascript
let id = element.getId();
```

#### `.removeId()`

```javascript
element.removeId();
```

#### `.attrs({})`

```javascript
create("button").attrs({ type: "submit", disabled: true });
```

#### `.getAllAttrs()`

```javascript
let allAttributes = element.getAllAttrs();
```

#### `.getAttrsValue(name)`

```javascript
let value = element.getAttrsValue("type");
```

#### `.removeAttrs(name)`

```javascript
element.removeAttrs("disabled");
```

#### `.removeAllAttrs()`

```javascript
element.removeAllAttrs();
```

#### `.CheckExist(type, value)`

```javascript
element.CheckExist("class", "active"); // true/false
```

#### `.style({})`

```javascript
element.style({ color: "red", background: "yellow" });
```

#### `.getStyle()`

```javascript
let styles = element.getStyle();
```

#### `.removeStyle(key)`

```javascript
element.removeStyle("color");
```

#### `.removeAllStyle()`

```javascript
element.removeAllStyle();
```

#### `.text("your text")`

```javascript
element.text("Welcome");
```

#### `.html("<b>Bold</b>")`

```javascript
element.html("<span>Inner HTML</span>");
```

#### `.innerValue()`

```javascript
let html = element.innerValue();
```

#### `.event("type", function)`

```javascript
element.event("mouseover", () => console.log("Hovered"));
```

#### `.onClick(function)`

```javascript
element.onClick(() => alert("Clicked"));
```

#### `.child({})`

```javascript
create("div").child({
  title: create("h1").text("Header"),
  body: create("p").text("Content goes here")
});
```

#### `.EditChild("body")`

```javascript
let bodyChild = element.EditChild("body");
```

#### `.add("#id" or ".class")`

```javascript
element.add("#app");
```

#### `.clone()`

```javascript
let copy = element.clone();
```

#### `.addObj(name, tag)`

```javascript
element.addObj("footer", "footer").text("Footer Text");

```

#### Component Usage
For use componet or declear component.
##### Declear Component
```javascript

const Card = () => create('div')
  .class(['card'])
  .child({
    header: create('h3').text('Card Header'),
    body: create('p').text('Card Body'),
    footer: create('small').text('Card Footer')
  });

registerComponent("Card", Card);



````

##### USE COMPONET
```javascript

Card().add("#app")

Edit Component:
Card().header.text("This is new header")
//when edit componentt not need call add() again.It call single time in main componet.
Like

Correct:
const myCard=Card().add("#app")
myCard.header.text("New Header")

Wrong:
const myCard=Card().add("#app")
myCard.header.text("New Header").add("#app")


```

# [Learn Basic 1](/docs/Example.V2.1.Md)
