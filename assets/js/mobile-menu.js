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
    var header = toggle.closest ? toggle.closest('header') : null;
    var rect = (header || toggle).getBoundingClientRect();
    var top = Math.max(0, Math.round(rect.bottom));

    toggle.classList.toggle('elementor-active', open);
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    menu.setAttribute('aria-hidden', open ? 'false' : 'true');
    menu.style.setProperty('box-sizing', 'border-box', 'important');
    menu.style.setProperty('position', open ? 'fixed' : 'absolute', 'important');
    menu.style.setProperty('top', open ? top + 'px' : '', 'important');
    menu.style.setProperty('left', '0', 'important');
    menu.style.setProperty('right', '0', 'important');
    menu.style.setProperty('width', '100vw', 'important');
    menu.style.setProperty('max-width', '100vw', 'important');
    menu.style.setProperty('max-height', open ? 'calc(100vh - ' + top + 'px)' : '0px', 'important');
    menu.style.setProperty('transform', open ? 'scaleY(1)' : 'scaleY(0)', 'important');
    menu.style.setProperty('overflow-y', open ? 'auto' : 'hidden', 'important');
    menu.style.setProperty('overflow-x', 'hidden', 'important');
    menu.style.setProperty('z-index', '99999', 'important');

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
