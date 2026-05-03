document.addEventListener("DOMContentLoaded", () => {// Control del menú hamburguesa 
  const mobileBtn = document.getElementById("mobile-btn");// El menú de navegación que se muestra/oculta
  const navMenu = document.getElementById("nav-menu");// El icono dentro del botón de menú (para cambiar entre "menu" y "close")

  // Al hacer click en el menú hamburguesa se alterna la clase "open" en el menú de navegación y se cambia el icono entre "menu" y "close" para indicar si el menú está abierto o cerrado
  mobileBtn.addEventListener("click", () => {// escucha el evento de click en el botón de menú móvil
    navMenu.classList.toggle("open");// alterna la clase "open" en el menú de navegación para mostrar u ocultar el menú

    // Cambiar el icono de menú a cerrar o viceversa dependiendo del estado del menú
    const icon = mobileBtn.querySelector("span");// selecciona el elemento span dentro del botón de menú para cambiar su contenido
    if (navMenu.classList.contains("open")) {// si el menú tiene la clase "open", significa que está abierto, por lo que se cambia el icono a "close" para indicar que el menú se puede cerrar
      icon.textContent = "close";// cambia el texto del icono a "close" para indicar que el menú está abierto y se puede cerrar
    } else {// si el menú no tiene la clase "open", significa que está cerrado, por lo que se cambia el icono a "menu" para indicar que el menú se puede abrir
      icon.textContent = "menu";// cambia el texto del icono a "menu" para indicar que el menú está cerrado y se puede abrir 
    }
  });

  // Cerrar menú al hacer click en un link del menú de navegación cuando el menú está abierto, para mejorar la experiencia del usuario en dispositivos móviles. Al hacer click en cualquier enlace dentro del menú de navegación, se cierra el menú y se cambia el icono de nuevo a "menu" para indicar que el menú está cerrado y listo para ser abierto nuevamente si el usuario lo desea
  document.querySelectorAll(".nav-menu a").forEach((link) => {// selecciona todos los enlaces dentro del menú de navegación y agrega un evento de click a cada uno 
    link.addEventListener("click", () => {// escucha el evento de click en cada enlace del menú de navegación 
      navMenu.classList.remove("open");// elimina la clase "open" del menú de navegación para cerrarlo cuando se hace click en un enlace 
      mobileBtn.querySelector("span").textContent = "menu";// cambia el texto del icono a "menu" para indicar que el menú está cerrado después de hacer click en un enlace del menú de navegación
    });
  });
});

// Control del Slider de Productos 
const slider = document.getElementById("product-slider");// El contenedor del slider de productos que se desplazará horizontalmente al hacer click en los botones de navegación del slider
const nextBtn = document.getElementById("next-btn");// El botón de navegación para ir al siguiente producto o grupo de productos en el slider, al hacer click en este botón se desplazará el slider hacia la derecha para mostrar los siguientes productos disponibles en el slider.
const prevBtn = document.getElementById("prev-btn");// El botón de navegación para ir al producto o grupo de productos anterior en el slider, al hacer click en este botón se desplazará el slider hacia la izquierda para mostrar los productos anteriores disponibles en el slider.

nextBtn.addEventListener("click", () => {// Agrega un evento de click al botón "next" para desplazar el slider hacia la derecha cuando se hace click en el botón "next", el slider se desplazará horizontalmente hacia la derecha para mostrar los siguientes productos disponibles en el slider, permitiendo al usuario navegar a través de los productos de manera fácil y rápida 
  slider.scrollLeft += 350; // Desplaza a la derecha 
});

prevBtn.addEventListener("click", () => {// Agrega un evento de click al botón "prev" para desplazar el slider hacia la izquierda cuando se hace click en el botón "prev", el slider se desplazará horizontalmente hacia la izquierda para mostrar los productos anteriores disponibles en el slider, permitiendo al usuario navegar a través de los productos de manera fácil y rápida 
  slider.scrollLeft -= 350; // Desplaza a la izquierda 
});
