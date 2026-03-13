<div align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=0:5A0F1B,50:C9A227,100:F3E9DC&height=200&section=header&text=Sama%20Vintage&fontSize=60&fontColor=FFF8F0&animation=fadeIn&fontAlignY=35&desc=Sitio%20web%20de%20joyer%C3%ADa%20vintage%20%7C%20Portfolio%20Frontend&descAlignY=55&descSize=18" width="100%"/>
</div>

<div align="center">
  <a href="https://evagr11.github.io/sama-vintage/" target="_blank">
    <img src="https://img.shields.io/badge/Ver_Web-C9A227?style=for-the-badge&logo=google-chrome&logoColor=white"/>
  </a>
  <a href="https://github.com/evagr11/sama-vintage" target="_blank">
    <img src="https://img.shields.io/badge/Código-5A0F1B?style=for-the-badge&logo=github&logoColor=white"/>
  </a>
</div>

<br>

<div align="center">
  <img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&size=22&duration=3000&pause=1000&color=C9A227&center=true&vCenter=true&width=600&lines=Ecommerce+est%C3%A1tico+de+joyer%C3%ADa+vintage;100%25+HTML+CSS+JavaScript+Vanilla;Carrito+persistente+con+localStorage;Dise%C3%B1o+minimalista+y+responsive"/>
</div>

---

# 🌸 Sobre el Proyecto

**Sama Vintage** es un **sitio web estático de joyería vintage** creado como proyecto de portfolio frontend.

El objetivo era construir un **ecommerce funcional sin frameworks**, utilizando únicamente tecnologías base de la web.

✨ Características principales:

- Catálogo de productos
- Página de detalle dinámica mediante parámetros en URL
- Carrito persistente con **localStorage**
- Navegación responsive
- Arquitectura simple y mantenible

---

# 🧠 Contexto del Proyecto

Este proyecto surge como parte del módulo **NDT (Nuevas Tecnologías de Desarrollo)** del segundo curso de **DAM**.

El objetivo era realizar el **rebranding completo de una web real existente**:  
**Sama Vintage**, una tienda de joyería vintage.

El proyecto original se desarrolló inicialmente en **WordPress**, pero posteriormente decidí **rehacerlo desde cero como sitio estático**, utilizando únicamente tecnologías web base, para poder:

- Conservar el proyecto en GitHub
- Mostrar el proceso completo de desarrollo
- Tener una versión portable sin dependencias de CMS

Este repositorio representa la **versión reconstruida en HTML, CSS y JavaScript** del proyecto.

---

# 👥 Proyecto Original (WordPress)

La primera versión de **Sama Vintage** se desarrolló como proyecto académico en el módulo **NDT (Nuevas Tecnologías de Desarrollo)** del segundo curso de **DAM**.

El proyecto se realizó en equipo junto a:

<div align="center">
  <a ref="https://github.com/AnaNunezRejon" target="_blank">
    <img src="https://img.shields.io/badge/Ana_Nuñez-5A0F1B?style=for-the-badge&logo=github&logoColor=white"/>
  </a>
  <a ref="https://github.com/Anyeel" target="_blank">
    <img src="https://img.shields.io/badge/Ángel_Millán-C9A227?style=for-the-badge&logo=github&logoColor=white"/>
  </a>
</div>

Trabajamos de forma colaborativa tanto en el **diseño**, el **prototipado** y la **implementación del sitio en WordPress**.

### ⚙️ Plugins utilizados

Para implementar funcionalidades en WordPress se utilizaron varios plugins:

- **Code Snippets**
- **Contact Form 7**
- **Disable Gutenberg**
- **Simple Custom CSS and JS**
- **WooCommerce**

Posteriormente decidí **reconstruir el proyecto desde cero en HTML, CSS y JavaScript**, creando la versión actual de este repositorio para poder:

- conservar el proyecto sin depender de WordPress  
- mostrar la implementación frontend pura  
- mantener el proyecto como parte de mi portfolio en GitHub

---

# 🖼️ Diseño del Proyecto

Los prototipos y la identidad visual se desarrollaron antes de la implementación.

- 🎨 Guía de estilos creada en **Canva**
- 🧩 Prototipos diseñados en **Figma**
- 💻 Implementación final en **HTML/CSS/JavaScript**

> El objetivo fue mantener coherencia visual entre el diseño y la implementación final.

---

# 🛠️ Tecnologías

<p align="center">

<img src="https://img.shields.io/badge/HTML5-5A0F1B?style=for-the-badge&logo=html5&logoColor=white"/>

<img src="https://img.shields.io/badge/CSS3-C9A227?style=for-the-badge&logo=css3&logoColor=white"/>

<img src="https://img.shields.io/badge/JavaScript-F3E9DC?style=for-the-badge&logo=javascript&logoColor=black"/>

<img src="https://img.shields.io/badge/localStorage-8B1E2D?style=for-the-badge&logo=google-chrome&logoColor=white"/>

<img src="https://img.shields.io/badge/GitHub_Pages-C9A227?style=for-the-badge&logo=github&logoColor=white"/>

<img src="https://img.shields.io/badge/Figma-C9A227?style=for-the-badge&logo=figma&logoColor=white"/>

<img src="https://img.shields.io/badge/Canva-5A0F1B?style=for-the-badge&logo=canva&logoColor=white"/>

<img src="https://img.shields.io/badge/WordPress-8B1E2D?style=for-the-badge&logo=wordpress&logoColor=white"/>

</p>

---

# 🎨 Proceso de Diseño

El proyecto no solo incluye desarrollo web, sino también el **proceso completo de diseño UI/UX**.

### 📖 Guía de estilos

Se diseñó una **guía de estilos completa en Canva**, donde se definieron:

- Paleta de colores (granate, dorado y crema)
- Tipografías
- Estética visual de la marca
- Componentes de interfaz

### 🧩 Prototipado

Los prototipos de la web fueron diseñados en **Figma**, incluyendo:

- Wireframes iniciales
- Prototipos de navegación
- Diseño responsive

Esto permitió definir la experiencia de usuario antes de implementar el código.

### 💻 Implementación

Finalmente, la web fue implementada en dos fases:

1️⃣ **Versión original en WordPress** (proyecto académico)  
2️⃣ **Reconstrucción en HTML/CSS/JS puro** para esta versión del repositorio

---

# 🧩 Arquitectura del Proyecto

```bash
sama-vintage/
│
├── index.html
│
├── assets/
│   ├── css/
│   ├── js/
│   │   ├── data.js
│   │   └── header.js
│   └── images/
│
└── templates/
    ├── producto.html
    ├── carrito.html
    ├── tienda.html
    ├── broches.html
    ├── pendientes.html
    ├── collares.html
    ├── contacto.html
    ├── checkout.html
    ├── terminos.html
    ├── privacidad.html
    └── cuenta/
        └── perfil.html
```

# 🛒 Funcionalidades

### 🛍️ Catálogo de productos
- Visualización de todos los artículos disponibles
- Organización por categorías (broches, pendientes, collares)
- Navegación simple y clara

### 📄 Página de producto
- Cada producto tiene su **vista detallada**
- Los datos se cargan dinámicamente leyendo el parámetro `?id=` de la URL
- Reutilización de la misma plantilla para todos los productos

### 🧺 Carrito persistente
- Añadir y eliminar productos
- Actualización automática del total
- Guardado en **localStorage**
- Persistencia entre páginas y recargas

### 📱 Diseño responsive
- Navegación adaptable
- Menú responsive controlado con JavaScript
- Compatible con móvil, tablet y escritorio

---

# 🚀 Ver el Proyecto

<p align="center">

<a href="https://evagr11.github.io/sama-vintage/">

<img src="https://img.shields.io/badge/🌐_Abrir_Web-C9A227?style=for-the-badge&labelColor=5A0F1B"/>

</a>

</p>

---

# 📚 Lo que aprendí con este proyecto

- Organización de proyectos **frontend sin frameworks**
- Manipulación del **DOM con JavaScript vanilla**
- Persistencia de datos usando **localStorage**
- Arquitectura de páginas reutilizables
- Deploy automático con **GitHub Pages**

---

# 🎯 Mejoras futuras

- 🔎 Sistema de búsqueda de productos  
- 🎨 Animaciones UI y microinteracciones  
- 🛍️ Integración con backend real  
- 💳 Checkout funcional  

---

<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:5A0F1B,50:C9A227,100:F3E9DC&height=100&section=footer"/>

✨ Proyecto creado por **Eva Gallardo** ✨  

</div>
