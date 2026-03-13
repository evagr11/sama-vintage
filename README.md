# Sama Vintage — Portfolio Estático

Sitio web de joyería vintage 100% estático. Funciona en GitHub Pages sin servidor.

## Tecnologías
- HTML5 / CSS3 / JavaScript vanilla
- Carrito con localStorage (persiste entre páginas)
- Sin dependencias externas ni frameworks

## Estructura
```
sama-vintage/
├── index.html              ← Home
├── assets/
│   ├── css/                ← Todos los estilos
│   ├── js/
│   │   ├── data.js         ← Productos + lógica carrito
│   │   └── header.js       ← Navegación responsive
│   └── images/             ← Imágenes de productos (añadir aquí)
└── templates/
    ├── producto.html       ← Detalle (lee ?id= de la URL)
    ├── carrito.html        ← Carrito con localStorage
    ├── tienda.html         ← Todos los productos + filtros
    ├── broches.html
    ├── pendientes.html
    ├── collares.html
    ├── contacto.html
    ├── checkout.html
    ├── terminos.html
    ├── privacidad.html
    └── cuenta/
        └── perfil.html     ← Mi cuenta (demo)
```

## GitHub Pages
1. Sube el repositorio a GitHub
2. Settings → Pages → Branch: main → / (root)
3. Tu sitio estará en: https://tuusuario.github.io/sama-vintage/
