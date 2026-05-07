(function () {
  var endpoint = '/api/telegram';
  var successText = 'Спасибо! Заявка отправлена. Мы скоро свяжемся с вами.';
  var errorText = 'Не получилось отправить заявку. Позвоните нам или попробуйте ещё раз.';

  function normalizeName(name) {
    return String(name || '').replace(/\[\]$/, '');
  }

  function collectFields(form) {
    var fields = {};
    Array.prototype.forEach.call(form.elements, function (field) {
      if (!field.name || field.disabled) return;
      if ((field.type === 'checkbox' || field.type === 'radio') && !field.checked) return;
      fields[normalizeName(field.name)] = field.value || '';
    });
    return fields;
  }

  function findButton(form) {
    return form.querySelector('button[type="submit"], input[type="submit"], button');
  }

  function showMessage(form, message, isError) {
    var box = form.querySelector('.static-form-message');
    if (!box) {
      box = document.createElement('div');
      box.className = 'static-form-message';
      box.style.marginTop = '12px';
      box.style.fontSize = '15px';
      box.style.lineHeight = '1.4';
      form.appendChild(box);
    }
    box.textContent = message;
    box.style.color = isError ? '#b00020' : '#16703a';
  }

  function shouldHandle(form) {
    return form.classList.contains('elementor-form') || form.querySelector('[name^="form_fields"]');
  }

  document.addEventListener('submit', function (event) {
    var form = event.target;
    if (!form || !shouldHandle(form)) return;

    event.preventDefault();

    var button = findButton(form);
    var originalText = button ? button.textContent : '';
    if (button) {
      button.disabled = true;
      button.textContent = 'Отправляем...';
    }

    fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        pageTitle: document.title,
        pageUrl: window.location.href,
        fields: collectFields(form),
      }),
    })
      .then(function (response) {
        if (!response.ok) throw new Error('Request failed');
        return response.json();
      })
      .then(function () {
        form.reset();
        showMessage(form, successText, false);
      })
      .catch(function () {
        showMessage(form, errorText, true);
      })
      .finally(function () {
        if (button) {
          button.disabled = false;
          button.textContent = originalText || 'Отправить';
        }
      });
  }, true);
})();
