// Run only once
if (typeof window.__activitySystemInitialized === 'undefined') {
  let activityHistory = [];

  function buildAPI(el) {
    const api = {
      class(classes = []) {
        el.classList.add(...classes);
        return api;
      },
      removeClass(name) {
        el.classList.remove(name);
        return api;
      },
      removeAllClass() {
        el.className = "";
        return api;
      },
      id(ids = []) {
        if (ids.length > 1) throw new Error("Only one ID allowed");
        el.id = ids[0] || "";
        return api;
      },
      getId() { return el.id; },
      removeId() {
        el.removeAttribute("id");
        return api;
      },
      attrs(attributes = {}) {
        Object.entries(attributes).forEach(([key, value]) => 
          el.setAttribute(key, value)
        );
        return api;
      },
      getAllAttrs() {
        const attrs = {};
        for (let attr of el.attributes) attrs[attr.name] = attr.value;
        return attrs;
      },
      getAttrsValue(name) { return el.getAttribute(name); },
      removeAttrs(name) {
        el.removeAttribute(name);
        return api;
      },
      removeAllAttrs() {
        Array.from(el.attributes).forEach(attr => 
          el.removeAttribute(attr.name)
        );
        return api;
      },
      CheckExist(type, value = "") {
        switch (type) {
          case "id": return el.id === value;
          case "class": return el.classList.contains(value);
          case "attr": return value ? el.getAttribute(value) !== null : el.attributes.length > 0;
          default: return false;
        }
      },
      style(styles = {}) {
        Object.assign(el.style, styles);
        return api;
      },
      getStyle() { return el.style; },
      removeStyle(key) {
        el.style.removeProperty(key);
        return api;
      },
      removeAllStyle() {
        el.removeAttribute("style");
        return api;
      },
      text(txt) {
        el.textContent = txt;
        return api;
      },
      html(htmlCode) {
        el.innerHTML = htmlCode;
        return api;
      },
      innerValue() { return el.innerHTML; },
      event(name, fn) {
        el.addEventListener(name, fn);
        return api;
      },
      onClick(fn) {
        el.addEventListener("click", fn);
        return api;
      },
      child(obj = {}) {
        const parse = (target, container) => {
          Object.entries(container).forEach(([key, val]) => {
            if (!target._children) target._children = {};
            if (val && typeof val === "object" && val._el) {
              target._children[key] = [val];
              target._el.appendChild(val._el);
              target[key] = val;
            } else if (Array.isArray(val)) {
              target._children[key] = val.filter(e => e?._el);
              target._children[key].forEach(e => target._el.appendChild(e._el));
              target[key] = val[0];
            } else if (typeof val === "object") {
              const group = {};
              group._children = {};
              group._el = document.createDocumentFragment();
              parse(group, val);
              target._children[key] = [group];
              target._el.appendChild(group._el);
              target[key] = group;
            }
          });
        };
        parse(api, obj);
        return api;
      },
      EditChild(path) {
        const keys = path.split(".");
        let node = api;
        for (const key of keys) {
          const next = node._children?.[key]?.[0];
          if (!next || !next._el) return null;
          node = next;
        }
        return node;
      },
      add(selector) {
        const parent = selector.startsWith("#")
          ? document.getElementById(selector.slice(1))
          : document.querySelector(selector);
        if (parent) parent.appendChild(el);
        return api;
      },
      // Add inside buildAPI(el)
appendText(txt) {
  el.textContent += txt;
  return api;
},
appendHtml(htmlCode) {
  el.innerHTML += htmlCode;
  return api;
},
      clone() {
        const clonedEl = el.cloneNode(true);
        return buildAPI(clonedEl);
      },
      addObj(name, tag = "div") {
        if (api._children && api._children[name]) {
          throw new Error(`Child "${name}" already exists`);
        }
        const newChild = create(tag);
        if (!api._children) api._children = {};
        api._children[name] = [newChild];
        el.appendChild(newChild._el);
        api[name] = newChild;
        return newChild;
      },
      _el: el,
      _children: {}
    };
    return api;
  }

  function create(tag) {
    const el = document.createElement(tag);
    return buildAPI(el);
  }

  function getUi(selector) {
    const el = document.querySelector(selector);
    if (!el) throw new Error(`Element not found: ${selector}`);
    return buildAPI(el);
  }

  // Root container
  window.AppMain = create("div").id(["app"]).style({
    position: "relative",
    overflow: "hidden",
    width: "100%",
    height: "100vh"
  }).add("body");

  window.AppBody = AppMain.child({});

  window.newActivity = function (activityName) {
    if (AppBody[activityName]) {
      console.error(`Activity "${activityName}" already exists`);
      return AppBody[activityName];
    }

    const activity = create("div")
      .attrs({ name: activityName })
      .style({
        display: "none",
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "white",
        overflow: "auto"
      });

    AppBody.child({ [activityName]: activity });
    return activity;
  };

  // Remove animations
  window.initialLaunchActivity = function (activityName) {
    if (!AppBody[activityName]) return console.error(`Activity "${activityName}" not found`);
    Object.keys(AppBody._children).forEach((key) => {
      AppBody._children[key][0].style({ display: "none" });
    });
    AppBody[activityName].style({
      display: "block",
    });
    activityHistory = [activityName];
  };

  window.launchActivity = function (activityName) {
    if (!AppBody[activityName]) return console.error(`Activity "${activityName}" not found`);

    const current = activityHistory[activityHistory.length - 1];
    if (current && AppBody[current]) {
      AppBody[current].style({ display: "none" });
    }

    AppBody[activityName].style({ display: "block" });
    activityHistory.push(activityName);
  };

  window.activityBack = function () {
    if (activityHistory.length < 2) return;
    const current = activityHistory.pop();
    const previous = activityHistory[activityHistory.length - 1];

    if (AppBody[current]) AppBody[current].style({ display: "none" });
    AppBody[previous].style({ display: "block" });
  };

  window.__activitySystemInitialized = true;
}
