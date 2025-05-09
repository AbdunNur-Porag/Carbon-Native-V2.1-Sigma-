
function createAnimation(type) {
const config = {
direction: null,
effect: null,
applyTo(selector) {
const elements = document.querySelectorAll(selector);


  elements.forEach(element => {
    element.style.transition = 'all 0.5s ease';
    element.style.transformOrigin = 'center center';

    // Initial styles
    switch (config.effect) {
      case 'slide':
        setInitialSlide(element, config.direction, type);
        break;
      case 'fade':
        element.style.opacity = type === 'open' ? '0' : '1';
        break;
      case 'scale':
        element.style.transform = type === 'open' ? 'scale(0.8)' : 'scale(1)';
        element.style.opacity = type === 'open' ? '0' : '1';
        break;
      case 'flip':
        element.style.transform = type === 'open' ? 'rotateY(90deg)' : 'rotateY(0)';
        element.style.opacity = type === 'open' ? '0' : '1';
        break;
      case 'push':
        setInitialSlide(element, config.direction, type);
        break;
    }

    // Trigger animation
    requestAnimationFrame(() => {
      switch (config.effect) {
        case 'slide':
          element.style.transform = type === 'open' ? 'translate(0, 0)' : getOffscreen(config.direction);
          break;
        case 'fade':
          element.style.opacity = type === 'open' ? '1' : '0';
          break;
        case 'scale':
          element.style.transform = type === 'open' ? 'scale(1)' : 'scale(0.8)';
          element.style.opacity = type === 'open' ? '1' : '0';
          break;
        case 'flip':
          element.style.transform = type === 'open' ? 'rotateY(0)' : 'rotateY(90deg)';
          element.style.opacity = type === 'open' ? '1' : '0';
          break;
        case 'push':
          element.style.transform = type === 'open' ? 'translate(0, 0)' : getOffscreen(config.direction);
          break;
      }
    });
  });

  function setInitialSlide(el, dir, type) {
    el.style.transform = type === 'open' ? getOffscreen(dir) : 'translate(0, 0)';
  }

  function getOffscreen(dir) {
    switch (dir) {
      case 'fromLeft': return 'translateX(-100%)';
      case 'fromRight': return 'translateX(100%)';
      case 'fromTop': return 'translateY(-100%)';
      case 'fromBottom': return 'translateY(100%)';
      default: return 'translate(0, 0)';
    }
  }
}

};

return {
fromLeft() { config.direction = 'fromLeft'; return this; },
fromRight() { config.direction = 'fromRight'; return this; },
fromTop() { config.direction = 'fromTop'; return this; },
fromBottom() { config.direction = 'fromBottom'; return this; },


slide() { config.effect = 'slide'; return this; },
fade() { config.effect = 'fade'; return this; },
scale() { config.effect = 'scale'; return this; },
flip() { config.effect = 'flip'; return this; },
push() { config.effect = 'push'; return this; },

applyTo(selector) { config.applyTo(selector); }

};
}

function openAnimation() {
return createAnimation('open');
}

function closeAnimation() {
return createAnimation('close');
}
