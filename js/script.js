 document.addEventListener('DOMContentLoaded', function () {
        const menuItems = document.querySelectorAll('.con-submenu');

        // Para dispositivos móviles
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
    });