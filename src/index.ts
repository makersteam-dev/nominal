window.Webflow ||= [];
window.Webflow.push(() => {
  // Get references to the elements you want to style
  const navbar = document.querySelector<HTMLElement>('.navbar');
  const navLinks = document.querySelectorAll<HTMLElement>('.nav-link');
  const nominalLogo = document.querySelector<HTMLElement>('.nominal-logo');
  const navDemoButton = document.querySelector<HTMLElement>('.nav-demo-button-text'); // Updated class name
  const navMenuButton = document.querySelector<HTMLElement>('.menu-button');
  const navLinkLine = document.querySelectorAll<HTMLElement>('.nav--link-line');

  // Function to update styles for desktop screens
  function updateDesktopStyles() {
    const { scrollY } = window;

    if (navbar && navDemoButton) {
      if (scrollY <= 300) {
        navbar.style.backgroundColor = 'transparent';
        navbar.style.height = '9.6rem';

        navLinks.forEach((link) => {
          link.style.color = '#F9FAFC';
        });
        navLinkLine.forEach((navLinkLine) => {
          navLinkLine.style.backgroundColor = '#F9FAFC';
        });
        if (nominalLogo) {
          nominalLogo.style.color = '#F9FAFC';
        }
        navDemoButton.style.backgroundImage =
          'url("https://uploads-ssl.webflow.com/65201a824f1d6877e14543bf/6523f4457bde5cea96273b91_Demo.svg")';
        navDemoButton.style.color = '#27274E';
      } else {
        navbar.style.backgroundColor = '#FAFBFD';
        navbar.style.height = '7.2rem';

        navLinkLine.forEach((navLinkLine) => {
          navLinkLine.style.backgroundColor = '#27274E';
        });
        navLinks.forEach((link) => {
          link.style.color = '#27274E';
        });
        if (nominalLogo) {
          nominalLogo.style.color = '#27274E';
        }
        navDemoButton.style.backgroundImage =
          'url("https://uploads-ssl.webflow.com/65201a824f1d6877e14543bf/6523f51d4f2795533e5ad22f_Demo-dark.svg")';
        navDemoButton.style.color = 'white';
      }
    }
  }

  // Ensure elements exist before accessing them
  if (navMenuButton) {
    navMenuButton.addEventListener('click', handleMenuButtonClick);
  }

  // Function to update styles for mobile screens
  function updateMobileStyles() {
    const { scrollY } = window;

    if (navbar && navMenuButton) {
      if (scrollY > 80) {
        // Add your mobile-specific actions here when scrolling
        navbar.style.backgroundColor = '#FAFBFD';
        if (nominalLogo) {
          nominalLogo.style.color = '#27274E';
        }
        navMenuButton.style.color = '#27274E';
      }
      // Reset styles for mobile when scrolling back to the top
      else {
        navbar.style.backgroundColor = 'transparent';
        if (nominalLogo) {
          nominalLogo.style.color = '#F9FAFC';
        }
        if (navDemoButton) {
          navDemoButton.style.color = 'white';
        }
        navMenuButton.style.color = 'white';
      }
    }
  }

  // Function to handle menu button click on mobile
  function handleMenuButtonClick() {
    if (navMenuButton?.classList.contains('w--open')) {
      // needs to get back to the same color as the hamburger
      document.body.classList.remove('disable-scroll');

      if (navMenuButton) {
        if (nominalLogo) {
          nominalLogo.style.color = navMenuButton.style.color;
        }
      }
    } else {
      // needs to be F9FAFC
      if (navMenuButton) {
        if (nominalLogo) {
          nominalLogo.style.color = '#F9FAFC';
        }
      }
      document.body.classList.add('disable-scroll');
    }
  }

  // Function to decide which styles to apply based on screen width
  function updateNavbarStyles() {
    const screenWidth = window.innerWidth;

    if (screenWidth <= 992) {
      // Apply mobile styles for screens smaller than or equal to 992 pixels
      updateMobileStyles();
    } else {
      // Apply desktop styles for screens larger than 992 pixels
      updateDesktopStyles();
    }
  }

  // Attach the scroll event listener to the window
  window.addEventListener('scroll', updateNavbarStyles);
  window.addEventListener('resize', updateNavbarStyles); // Add a resize event listener

  // Initial call to set the initial styles based on the page load
  updateNavbarStyles();

  // Function to check if an element is in view and trigger animation
  function checkAndAnimate(element: HTMLElement) {
    const top_of_element = element.offsetTop;
    const bottom_of_element = top_of_element + element.offsetHeight;
    const bottom_of_screen = window.scrollY + window.innerHeight * 0.8;
    const top_of_screen = window.scrollY;

    if (
      (bottom_of_screen > top_of_element && top_of_screen < bottom_of_element) ||
      element.classList.contains('is-visible')
    ) {
      element.classList.add('is-visible');
      element.style.opacity = '1';
    }
  }

  // Add scroll event listener to check and animate elements on scroll
  window.addEventListener('scroll', function () {
    // Check and animate elements with "fade-in" attribute
    document.querySelectorAll('[fade-in]').forEach(function (element) {
      checkAndAnimate(element as HTMLElement);
    });

    // Check and animate elements with "fade-in|='to-top'" attribute
    document.querySelectorAll("[fade-in|='to-top']").forEach(function (element) {
      checkAndAnimate(element as HTMLElement);
    });
  });

  // Initially check and animate all elements with "fade-in" attribute
  document.querySelectorAll('[fade-in]').forEach(function (element) {
    checkAndAnimate(element as HTMLElement);
  });

  // Initially check and animate all elements with "fade-in|='to-top'" attribute
  document.querySelectorAll("[fade-in|='to-top']").forEach(function (element) {
    checkAndAnimate(element as HTMLElement);
  });
});
