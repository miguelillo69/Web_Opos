
const isLocal = location.hostname === 'localhost' || location.protocol === 'file:';
const BASE_URL = isLocal ? '' : '/Web_Opos/';

document.addEventListener('DOMContentLoaded', function () {
  const menuItems = document.querySelectorAll('.con-submenu');

  // Para móviles
  if (window.innerWidth < 768) {
    menuItems.forEach(item => {
      item.addEventListener('click', function (e) {
        if (e.target === this.querySelector('a')) {
          e.preventDefault();
          const submenu = this.querySelector('.submenu');
          submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
        }
      });
    });
  }

  // Click en enlaces
  document.querySelectorAll('nav a[data-page]').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const page = this.dataset.page;
      loadPage(page);
    });
  });

  // Cargar página por defecto
  loadPage('home');
});

function loadPage(page) {
  fetch(`${BASE_URL}pages/${page}.html`)
    .then(res => {
      if (!res.ok) throw new Error("Página no encontrada");
      return res.text();
    })
    .then(html => {
      document.getElementById('main-content').innerHTML = html;

      // Marcar enlace activo
      document.querySelectorAll('nav a[data-page]').forEach(link => {
        link.classList.toggle('active', link.dataset.page === page);
      });
    })
    .catch(err => {
      document.getElementById('main-content').innerHTML = `<p>Error al cargar la página.</p>`;
      console.error(err);
    });
}
