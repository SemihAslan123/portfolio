// js/include.js
function includeHTML() {
    document.querySelectorAll('[data-include]').forEach(el => {
      const file = el.getAttribute('data-include');
      fetch(file)
        .then(res => {
          if (!res.ok) throw new Error(`Erreur: ${res.status}`);
          return res.text();
        })
        .then(html => el.innerHTML = html)
        .catch(err => console.warn('Erreur d’inclusion:', err));
    });
}
  
// Appel automatique
window.addEventListener('DOMContentLoaded', includeHTML);
  