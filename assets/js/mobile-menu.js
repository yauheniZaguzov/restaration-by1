(function () {
  function findMenu(toggle) {
    var next = toggle.nextElementSibling;
    if (next && next.classList.contains('elementor-nav-menu__container')) {
      return next;
    }
    return toggle.parentElement ? toggle.parentElement.querySelector('.elementor-nav-menu__container') : null;
  }

  function setMenu(toggle, open) {
    var menu = findMenu(toggle);
    if (!menu) return;

    toggle.classList.toggle('elementor-active', open);
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    menu.setAttribute('aria-hidden', open ? 'false' : 'true');
    menu.style.boxSizing = 'border-box';
    menu.style.left = '0';
    menu.style.right = '0';
    menu.style.width = '100vw';
    menu.style.maxWidth = '100vw';
    menu.style.maxHeight = open ? '100vh' : '0px';
    menu.style.transform = open ? 'scaleY(1)' : 'scaleY(0)';
    menu.style.overflowY = open ? 'auto' : 'hidden';
    menu.style.overflowX = 'hidden';

    menu.querySelectorAll('a').forEach(function (link) {
      link.setAttribute('tabindex', open ? '0' : '-1');
    });
  }

  function toggleMenu(toggle) {
    setMenu(toggle, !toggle.classList.contains('elementor-active'));
  }

  document.addEventListener('click', function (event) {
    if (!event.target.closest) return;
    var toggle = event.target.closest('.elementor-menu-toggle');
    if (toggle) {
      event.preventDefault();
      toggleMenu(toggle);
      return;
    }

    var link = event.target.closest('.elementor-nav-menu__container a');
    if (link) {
      var menu = link.closest('.elementor-nav-menu__container');
      var previous = menu ? menu.previousElementSibling : null;
      if (previous && previous.classList.contains('elementor-menu-toggle')) {
        setMenu(previous, false);
      }
    }
  });

  document.addEventListener('keydown', function (event) {
    if (event.key !== 'Enter' && event.key !== ' ') return;
    if (!event.target.closest) return;
    var toggle = event.target.closest('.elementor-menu-toggle');
    if (!toggle) return;
    event.preventDefault();
    toggleMenu(toggle);
  });
})();
