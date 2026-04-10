// script.js - Versión definitiva y funcional

// Esperar a que la página cargue completamente
document.addEventListener('DOMContentLoaded', function() {
    console.log('✅ Script cargado');
    
    // Obtener los elementos
    var menuOpen = document.getElementById('menuOpen');
    var menuClose = document.getElementById('menuClose');
    var overlay = document.getElementById('contactOverlay');
    
    // Verificar que los elementos existen
    if (!menuOpen) {
        console.error('❌ No se encuentra el botón menuOpen');
    }
    if (!menuClose) {
        console.error('❌ No se encuentra el botón menuClose');
    }
    if (!overlay) {
        console.error('❌ No se encuentra el overlay contactOverlay');
    }
    
    // FUNCIÓN PARA ABRIR EL MENÚ
    function abrirMenu() {
        if (overlay) {
            overlay.style.display = 'flex';
            document.body.style.overflow = 'hidden'; // Evita scroll
            console.log('📂 Menú abierto');
        }
    }
    
    // FUNCIÓN PARA CERRAR EL MENÚ
    function cerrarMenu() {
        if (overlay) {
            overlay.style.display = 'none';
            document.body.style.overflow = ''; // Restaura scroll
            console.log('📁 Menú cerrado');
        }
    }
    
    // ASIGNAR EVENTOS
    if (menuOpen) {
        menuOpen.onclick = abrirMenu;
    }
    
    if (menuClose) {
        menuClose.onclick = cerrarMenu;
    }
    
    // Cerrar con tecla ESC
    document.onkeydown = function(e) {
        if (e.key === 'Escape' && overlay && overlay.style.display === 'flex') {
            cerrarMenu();
        }
    };
    
    // Cerrar al hacer clic fuera del contenido (en el fondo negro)
    if (overlay) {
        overlay.onclick = function(e) {
            if (e.target === overlay) {
                cerrarMenu();
            }
        };
    }
});