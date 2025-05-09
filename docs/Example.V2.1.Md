# Example Of Carbon Native V2.1
### 1. **`.class()` and `.style()`**

```javascript
create("div")
  .class(["card", "rounded", "shadow"])
  .style({
    backgroundColor: "#f0f0f0",
    padding: "20px",
    width: "300px",
    border: "1px solid #ccc",
    margin: "10px auto"
  })
  .text("Styled card block")
  .add("#app");
```


### 2. **`.id()` and `.attrs()`**

```javascript
create("input")
  .id(["emailInput"])
  .attrs({ type: "email", placeholder: "Enter your email", required: true })
  .style({
    width: "100%",
    padding: "10px",
    fontSize: "16px",
    border: "1px solid #ddd"
  })
  .add("#formArea");
```

---

### 3. **`.text()` and `.onClick()`**

```javascript
create("button")
  .class(["btn", "btn-primary"])
  .text("Click Me")
  .onClick(() => alert("You clicked the button!"))
  .style({
    padding: "10px 20px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "5px"
  })
  .add("#buttonContainer");
```

---

### 4. **`.child()` with nested children**

```javascript
create("div")
  .class(["card"])
  .child({
    header: create("h3").text("Card Title"),
    body: create("p").text("This is some card content."),
    footer: create("button")
      .text("Close")
      .onClick(() => alert("Card closed"))
  })
  .style({
    padding: "20px",
    border: "1px solid #ccc",
    backgroundColor: "#fff"
  })
  .add("#main");
```

---

### 5. **`.html()` with styled content**

```javascript
create("div")
  .html("<strong>Important:</strong> Please read the instructions carefully.")
  .style({ color: "red", fontSize: "18px", marginBottom: "15px" })
  .add("#notice");
```

---

### 6. **`.EditChild()` usage**

```javascript
let card = create("div").child({
  title: create("h1").text("Welcome"),
  description: create("p").text("This is a description.")
});

card.EditChild("description").text("Updated description text.");
card.add("#container");
```

---

### 7. **`.addObj()` to create and insert named elements**

```javascript
let layout = create("section")
  .addObj("header", "header")
  .text("Site Header")
  .addObj("main", "main")
  .text("Main Content")
  .addObj("footer", "footer")
  .text("Footer Info")
  .add("#root");
```

---

### 8. **`.clone()` to duplicate an element**

```javascript
let box = create("div")
  .class(["box"])
  .text("Original Box")
  .style({ padding: "10px", backgroundColor: "#eee" });

box.clone().add("#clones");
```

---

### 9. **`.CheckExist()` to verify properties**

```javascript
let testEl = create("div")
  .id(["uniqueId"])
  .class(["demo"])
  .attrs({ role: "alert" });

console.log(testEl.CheckExist("id", "uniqueId")); // true
console.log(testEl.CheckExist("class", "demo"));  // true
console.log(testEl.CheckExist("attr", "role"));   // true
```

---

### 10. **`.getAllAttrs()` and `.removeAllAttrs()`**

```javascript
let el = create("img")
  .attrs({ src: "logo.png", alt: "Logo", width: "100" })
  .add("#logoArea");

console.log(el.getAllAttrs());  // { src: "logo.png", alt: "Logo", width: "100" }

el.removeAllAttrs();  // Now it has no attributes
```
