function activerMenuBurger() {
  const burger = document.getElementById('burger');
  const navLinks = document.getElementById('navLinks');
  if (burger && navLinks) {
    burger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }
}

function includeHTML() {
  const includes = document.querySelectorAll('[data-include]');
  includes.forEach(el => {
    const file = el.getAttribute('data-include');
    fetch(file)
      .then(res => {
        if (!res.ok) throw new Error(`Erreur: ${res.status}`);
        return res.text();
      })
      .then(html => {
        el.innerHTML = html;
        activerMenuBurger(); // <-- ATTACHE LE CLICK ICI, APRÈS INJECTION HTML
      })
      .catch(err => console.warn('Erreur d’inclusion:', err));
  });
}

window.addEventListener('DOMContentLoaded', includeHTML);