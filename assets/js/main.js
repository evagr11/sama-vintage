/**
 * SAMA VINTAGE - Main JavaScript
 * Funcionalidad general del sitio
 */

document.addEventListener('DOMContentLoaded', function() {
    
    // ============================================
    // MENÚ ACTIVO EN CUENTA
    // ============================================
    
    const currentPage = window.location.pathname;
    const menuLinks = document.querySelectorAll('.account-menu a');
    
    menuLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href && currentPage.includes(href)) {
            link.classList.add('active');
        }
    });
    
    // ============================================
    // TABS DE PEDIDOS (si existen)
    // ============================================
    
    const tabBtns = document.querySelectorAll('.tab-btn');
    const orderCards = document.querySelectorAll('.order-card');
    
    if (tabBtns.length > 0) {
        tabBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                const filter = this.dataset.filter || 'all';
                
                // Actualizar botones activos
                tabBtns.forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                
                // Filtrar pedidos
                orderCards.forEach(card => {
                    const status = card.dataset.status;
                    if (filter === 'all' || status === filter) {
                        card.style.display = 'block';
                        card.style.animation = 'fadeIn 0.3s ease';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });
    }
    
    // ============================================
    // CANTIDAD EN CARRITO
    // ============================================
    
    const quantityBtns = document.querySelectorAll('.quantity-btn');
    
    quantityBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const input = this.parentElement.querySelector('.quantity-input');
            if (!input) return;
            
            let value = parseInt(input.value) || 1;
            const isPlus = this.classList.contains('plus');
            const isMinus = this.classList.contains('minus');
            
            if (isPlus) {
                value++;
            } else if (isMinus && value > 1) {
                value--;
            }
            
            input.value = value;
            
            // Disparar evento change para otros listeners
            input.dispatchEvent(new Event('change'));
        });
    });
    
    // ============================================
    // ANIMACIONES AL SCROLL
    // ============================================
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target); // Solo una vez
            }
        });
    }, observerOptions);
    
    // Observar elementos animables
    const animatedElements = document.querySelectorAll(
        '.product-card, .collection-card, .testimonial-card, .feature-item, .section-card'
    );
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    // Clase de animación
    document.head.insertAdjacentHTML('beforeend', `
        <style>
            .animate-in {
                opacity: 1 !important;
                transform: translateY(0) !important;
            }
        </style>
    `);
    
    // ============================================
    // TOAST NOTIFICATIONS
    // ============================================
    
    window.showToast = function(message, type = 'success') {
        const toast = document.createElement('div');
        toast.className = `toast toast-${type}`;
        toast.textContent = message;
        
        // Estilos inline para el toast
        toast.style.cssText = `
            position: fixed;
            bottom: 30px;
            right: 30px;
            padding: 16px 24px;
            border-radius: 8px;
            font-size: 14px;
            font-weight: 500;
            z-index: 9999;
            transform: translateX(100%);
            transition: transform 0.3s ease;
            max-width: 400px;
            word-wrap: break-word;
        `;
        
        // Colores según tipo
        const colors = {
            success: 'background: #48bb78; color: white;',
            error: 'background: #f56565; color: white;',
            warning: 'background: #ed8936; color: white;',
            info: 'background: #4299e1; color: white;'
        };
        
        toast.style.cssText += colors[type] || colors.success;
        
        document.body.appendChild(toast);
        
        // Animar entrada
        requestAnimationFrame(() => {
            toast.style.transform = 'translateX(0)';
        });
        
        // Auto-eliminar
        setTimeout(() => {
            toast.style.transform = 'translateX(120%)';
            setTimeout(() => {
                toast.remove();
            }, 300);
        }, 3000);
    };
    
    // ============================================
    // WISHLIST (si existe YITH)
    // ============================================
    
    const wishlistBtns = document.querySelectorAll('.add_to_wishlist');
    
    wishlistBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            // Animación de corazón
            this.style.transform = 'scale(1.2)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 200);
        });
    });
    
    // ============================================
    // FORMULARIOS (Contact Form 7 simulado)
    // ============================================
    
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            // Solo para demo estática (sin backend)
            if (form.classList.contains('contact-form')) {
                e.preventDefault();
                showToast('Mensaje enviado correctamente. Te contactaremos pronto.', 'success');
                form.reset();
            }
        });
    });
    
    // ============================================
    // FUNCIONES GLOBALES ÚTILES
    // ============================================
    
    // Actualizar contador del carrito (simulado para demo)
    window.updateCartCount = function(count) {
        const cartCount = document.querySelector('.cart-count');
        if (cartCount) {
            cartCount.textContent = count;
            cartCount.style.display = count > 0 ? 'flex' : 'none';
            
            // Animación
            cartCount.style.transform = 'scale(1.3)';
            setTimeout(() => {
                cartCount.style.transform = 'scale(1)';
            }, 200);
        }
    };
    
    // Toggle para switches de configuración
    window.initSwitches = function() {
        const switches = document.querySelectorAll('.switch input');
        
        switches.forEach(sw => {
            sw.addEventListener('change', function() {
                const setting = this.dataset.setting;
                const value = this.checked;
                console.log('Preferencia guardada:', setting, value);
                // Aquí iría llamada AJAX en producción
            });
        });
    };
    
    // Inicializar switches si existen
    initSwitches();
    
});