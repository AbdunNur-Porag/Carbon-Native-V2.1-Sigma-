// 1. Write CSS dynamically
/*
const style = document.createElement('style');
style.innerHTML = `
  * { margin: 0; padding: 0; box-sizing: border-box; }
  html, body {
    width: 100%;
    height: 100%;
    overflow: hidden;
    font-family: sans-serif;
    background: #f0f0f0;
  }
  #app {
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
  }
  #homePage {
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    background: white;
    z-index: 1;
    padding: 20px;
  }
  .page {
    position: absolute;
    width: 100vw;
    height: 100vh;
    background: white;
    transition: all 0.5s ease;
    z-index: 2;
    padding: 20px;
    opacity: 0;
  }
  /* Animations 
  .slide-right { top: 0; left: 100%; }
  .slide-right.active { left: 0; opacity: 1; }
  .slide-right.back { left: 100%; opacity: 0; }

  .slide-left { top: 0; left: -100%; }
  .slide-left.active { left: 0; opacity: 1; }
  .slide-left.back { left: -100%; opacity: 0; }

  .slide-bottom { top: 100%; left: 0; }
  .slide-bottom.active { top: 0; opacity: 1; }
  .slide-bottom.back { top: 100%; opacity: 0; }

  .slide-top { top: -100%; left: 0; }
  .slide-top.active { top: 0; opacity: 1; }
  .slide-top.back { top: -100%; opacity: 0; }

  .fade { top: 0; left: 0; opacity: 0; }
  .fade.active { opacity: 1; }
  .fade.back { opacity: 0; }

  button {
    padding: 10px 20px;
    margin-top: 20px;
    margin-right: 10px;
    font-size: 16px;
  }
`;
document.head.appendChild(style);

// 2. Load all <page> templates
const app = document.getElementById('app');
const pages = {};
let historyStack = [];

document.querySelectorAll('page').forEach(pageEl => {
  const name = pageEl.getAttribute('name');
  if (name) {
    pages[name] = pageEl.innerHTML;
  }
});

// 3. Create new page
function createPage(name, animation) {
  const pageDiv = document.createElement('div');
  pageDiv.classList.add('page', animation);
  pageDiv.setAttribute('data-page', name);
  pageDiv.innerHTML = pages[name];
  return pageDiv;
}

// 4. Navigate to page
function navigateTo(name, animation = 'slide-right') {
  const next = createPage(name, animation);
  app.appendChild(next);

  setTimeout(() => {
    next.classList.add('active');
  }, 50);

  historyStack.push({ page: next, animation });
}

// 5. Go back
function goBack() {
  if (historyStack.length > 0) {
    const { page, animation } = historyStack.pop();
    page.classList.add('back');

    setTimeout(() => {
      page.remove();
    }, 500);
  }
}*/
// 1. Write CSS dynamically
const style = document.createElement('style');
style.innerHTML = `
  * { margin: 0; padding: 0; box-sizing: border-box; }
  html, body {
    width: 100%;
    height: 100%;
    overflow: hidden;
    font-family: sans-serif;
    background: #f0f0f0;
  }
  #app {
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
  }
  #homePage {
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    background: white;
    z-index: 1;
    padding: 20px;
  }
  .page {
    position: absolute;
    width: 100vw;
    height: 100vh;
    background: white;
    transition: all 0.5s ease;
    z-index: 2;
    padding: 20px;
    opacity: 0;
  }

  /* Generic Animation Templates */
  .page[data-animation="slide-right"] { top: 0; left: 100%; }
  .page[data-animation="slide-right"].active { left: 0; opacity: 1; }
  .page[data-animation="slide-right"].back { left: 100%; opacity: 0; }

  .page[data-animation="slide-left"] { top: 0; left: -100%; }
  .page[data-animation="slide-left"].active { left: 0; opacity: 1; }
  .page[data-animation="slide-left"].back { left: -100%; opacity: 0; }

  .page[data-animation="slide-bottom"] { top: 100%; left: 0; }
  .page[data-animation="slide-bottom"].active { top: 0; opacity: 1; }
  .page[data-animation="slide-bottom"].back { top: 100%; opacity: 0; }

  .page[data-animation="slide-top"] { top: -100%; left: 0; }
  .page[data-animation="slide-top"].active { top: 0; opacity: 1; }
  .page[data-animation="slide-top"].back { top: -100%; opacity: 0; }

  .page[data-animation="fade"] { top: 0; left: 0; opacity: 0; }
  .page[data-animation="fade"].active { opacity: 1; }
  .page[data-animation="fade"].back { opacity: 0; }

  button {
    padding: 10px 20px;
    margin-top: 20px;
    margin-right: 10px;
    font-size: 16px;
  }
`;
document.head.appendChild(style);

// 2. Load all <page> templates
const app = document.getElementById('app');
const pages = {};
let historyStack = [];

document.querySelectorAll('page').forEach(pageEl => {
  const name = pageEl.getAttribute('name');
  if (name) {
    pages[name] = pageEl.innerHTML;
  }
});

// 3. Create new page
function createPage(name, animation) {
  const pageDiv = document.createElement('div');
  pageDiv.classList.add('page');
  pageDiv.setAttribute('data-page', name);
  pageDiv.setAttribute('data-animation', animation);
  pageDiv.innerHTML = pages[name];
  return pageDiv;
}

// 4. Navigate to page
function navigateTo(name, animation = 'slide-right') {
  if (!pages[name]) return;

  const next = createPage(name, animation);
  app.appendChild(next);

  setTimeout(() => {
    next.classList.add('active');
  }, 50);

  historyStack.push({ page: next, animation });
}

// 5. Go back
function goBack() {
  if (historyStack.length > 0) {
    const { page } = historyStack.pop();
    page.classList.add('back');

    setTimeout(() => {
      page.remove();
    }, 500);
  }
}
