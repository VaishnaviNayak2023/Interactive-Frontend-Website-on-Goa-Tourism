document.addEventListener('DOMContentLoaded', function () {
  const navbarDiv = document.querySelector('.navbar');
  const navbarCollapseDiv = document.getElementById('navbar-collapse');
  const navbarShowBtn = document.getElementById('navbar-show-btn');
  const navbarCloseBtn = document.getElementById('navbar-close-btn');

  // Navbar background change on scroll (all pages)
  window.addEventListener('scroll', () => {
    const scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
    if (scrollTop > 40) {
      navbarDiv.classList.add('navbar-cng');
    } else {
      navbarDiv.classList.remove('navbar-cng');
    }
  });

  // Navbar mobile menu toggle
  if (navbarShowBtn && navbarCollapseDiv && navbarCloseBtn) {
    navbarShowBtn.addEventListener('click', () => {
      navbarCollapseDiv.classList.add('navbar-collapse-rmw');
    });

    navbarCloseBtn.addEventListener('click', () => {
      navbarCollapseDiv.classList.remove('navbar-collapse-rmw');
    });

    // Close menu if click happens outside the navbar area
    document.addEventListener('click', (e) => {
      if (
        !e.target.closest('#navbar-collapse') &&
        !e.target.closest('#navbar-show-btn')
      ) {
        navbarCollapseDiv.classList.remove('navbar-collapse-rmw');
      }
    });
  }

  // Stop CSS animations during window resize
  let resizeTimer;
  window.addEventListener('resize', () => {
    document.body.classList.add('resize-animation-stopper');
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      document.body.classList.remove('resize-animation-stopper');
    }, 400);
  });
});
