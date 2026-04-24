document.addEventListener('DOMContentLoaded', () => {
    const mobileBtn = document.getElementById('mobile-btn');
    const navMenu = document.getElementById('nav-menu');

    // Al hacer click en el menú hamburguesa
    mobileBtn.addEventListener('click', () => {
        navMenu.classList.toggle('open');
        
        // Cambiar el icono de menú a cerrar
        const icon = mobileBtn.querySelector('span');
        if (navMenu.classList.contains('open')) {
            icon.textContent = 'close';
        } else {
            icon.textContent = 'menu';
        }
    });

    // Cerrar menú al hacer click en un link
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('open');
            mobileBtn.querySelector('span').textContent = 'menu';
        });
    });
});


// Control del Slider de Productos
const slider = document.getElementById('product-slider');
const nextBtn = document.getElementById('next-btn');
const prevBtn = document.getElementById('prev-btn');

nextBtn.addEventListener('click', () => {
    slider.scrollLeft += 350; // Desplaza a la derecha
});

prevBtn.addEventListener('click', () => {
    slider.scrollLeft -= 350; // Desplaza a la izquierda
});