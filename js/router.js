const router = {
  routes: {},
  currentPath: '/',
  
  // Configures the routes
  config: function (routes) {
    this.routes = routes;
    this.setRoute();
  },

  // Sets the current route based on the URL or default
  setRoute: function() {
    const path = window.location.pathname;
    this.currentPath = path === '/' ? this.routes.default : path;

    // Call to update the page view
    this.updatePage(this.currentPath);
  },

  // Updates the page view based on the activity
  updatePage: function(activity) {
    // Hide all pages first
    const pages = document.querySelectorAll('[id="page"]');
    pages.forEach(page => page.classList.remove('active'));

    // Show the page based on the activity attribute
    const activePage = document.querySelector(`[activity="${activity}"]`);
    if (activePage) {
      activePage.classList.add('active');
    }
  },

  // Navigate programmatically to a different activity/page
  navigate: function(activity) {
    window.history.pushState({}, '', activity);
    this.setRoute();
  }
};

// Listen for popstate event (for browser back/forward navigation)
window.onpopstate = function() {
  router.setRoute();
};

// Function to inject CSS dynamically into the document
function injectCSS() {
  const style = document.createElement('style');
  style.innerHTML = `
    #page {
      display: none;
    }
    #page.active {
      display: block;
    }
  `;
  document.head.appendChild(style);
}

// Initialize the router and inject CSS
function initializeRouter() {
  injectCSS();

  // Configure the router with default route and possible routes
  router.config({
    default: 'home',  // Default activity
    home: 'home',     // Home activity
    about: 'about'    // About activity
  });
}

// Call the initialize function when the script loads
initializeRouter();
