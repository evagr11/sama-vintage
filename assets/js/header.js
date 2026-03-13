/**
 * SAMA VINTAGE - Header Navigation
 * Maneja el menú hamburguesa, búsqueda y comportamiento responsive
 */

document.addEventListener('DOMContentLoaded', function() {
    
    // Elementos del DOM
    const menuToggle = document.getElementById('menuToggle');
    const menuClose = document.getElementById('menuClose');
    const mainNav = document.getElementById('mainNav');
    const searchOverlay = document.getElementById('searchOverlay');
    const searchInput = document.getElementById('searchInput');
    
    // ============================================
    // MENÚ HAMBURGUESA
    // ============================================
    
    function openMenu() {
        mainNav.classList.add('active');
        menuToggle.classList.add('active');
        menuToggle.setAttribute('aria-expanded', 'true');
        document.body.style.overflow = 'hidden';
        document.body.style.height = '100vh';
    }
    
    function closeMenu() {
        mainNav.classList.remove('active');
        menuToggle.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
        document.body.style.height = '';
    }
    
    function toggleMenu() {
        if (mainNav.classList.contains('active')) {
            closeMenu();
        } else {
            openMenu();
        }
    }
    
    // Event listeners del menú
    if (menuToggle) {
        menuToggle.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            toggleMenu();
        });
    }
    
    if (menuClose) {
        menuClose.addEventListener('click', function(e) {
            e.preventDefault();
            closeMenu();
        });
    }
    
    // Cerrar al hacer click en un enlace (solo móvil)
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 1024) {
                closeMenu();
            }
        });
    });
    
    // Cerrar al hacer click fuera del menú (en el overlay)
    if (mainNav) {
        mainNav.addEventListener('click', function(e) {
            if (e.target === mainNav) {
                closeMenu();
            }
        });
    }
    
    // Prevenir propagación dentro del menú
    const navMenu = document.querySelector('.nav-menu');
    if (navMenu) {
        navMenu.addEventListener('click', function(e) {
            e.stopPropagation();
        });
    }
    
    // ============================================
    // BÚSQUEDA
    // ============================================
    
    window.toggleSearch = function() {
        if (!searchOverlay) return;
        
        const isActive = searchOverlay.classList.contains('active');
        
        if (isActive) {
            searchOverlay.classList.remove('active');
            document.body.style.overflow = '';
        } else {
            searchOverlay.classList.add('active');
            document.body.style.overflow = 'hidden';
            if (searchInput) {
                searchInput.focus();
            }
        }
    };
    
    // Cerrar búsqueda al hacer click fuera
    if (searchOverlay) {
        searchOverlay.addEventListener('click', function(e) {
            if (e.target === searchOverlay) {
                toggleSearch();
            }
        });
    }
    
    // ============================================
    // TECLADO
    // ============================================
    
    document.addEventListener('keydown', function(e) {
        // ESC cierra todo
        if (e.key === 'Escape') {
            closeMenu();
            if (searchOverlay && searchOverlay.classList.contains('active')) {
                toggleSearch();
            }
        }
    });
    
    // ============================================
    // RESIZE
    // ============================================
    
    window.addEventListener('resize', function() {
        // Si pasa a desktop, cerrar menú móvil
        if (window.innerWidth > 1024) {
            closeMenu();
        }
    });
    
    // ============================================
    // SCROLL EFFECT (header sticky)
    // ============================================
    
    const header = document.querySelector('.sama-header');
    let lastScroll = 0;
    
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        lastScroll = currentScroll;
    });
    
});