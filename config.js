// config.js

/**
 * CONFIGURACIÓN AVANZADA DE TAILWIND
 * ------------------------------------------------------
 * Este script personaliza el sistema de diseño de Tailwind.
 * Al modificar el objeto 'tailwind.config', podemos extender
 * las capacidades del framework sin salir de su sintaxis.
 */

tailwind.config = {
    // 'darkMode' se puede activar si quisieras cambiar entre claro/oscuro manualmente
    // darkMode: 'class', 

    theme: {
        // Usamos 'extend' para AGREGAR estilos nuevos sin borrar los que Tailwind ya trae.
        // Si usáramos 'theme' directamente sin 'extend', borraríamos los colores por defecto.
        extend: {
            
            // 1. FUENTES PERSONALIZADAS
            // Definimos 'sans' y 'mono' para que coincidan con las fuentes importadas de Google Fonts.
            // Esto asegura una consistencia tipográfica en todo el sitio.
            fontFamily: {
                sans: ['Inter', 'sans-serif'],      // Para textos generales (lectura fácil)
                mono: ['Fira Code', 'monospace'],   // Para elementos de código (estilo técnico)
            },

            // 2. PALETA DE COLORES "BRAND" (IDENTIDAD VISUAL)
            // Creamos nuestros propios colores semánticos para no depender de los genéricos.
            // Esto facilita el mantenimiento: si cambiamos el color "neon" aquí, cambia en toda la web.
            colors: {
                brand: {
                    dark: '#0f172a',   // Fondo principal (Slate 900 oscuro)
                    neon: '#38bdf8',   // Azul eléctrico para brillos principales
                    accent: '#818cf8'  // Violeta para detalles secundarios
                }
            },

            // 3. ANIMACIONES PERSONALIZADAS 
            // Tailwind trae 'spin', 'pulse', etc., pero aquí creamos las nuestras
            // para lograr ese efecto "flotante" y "vivo" de CodeSandbox.
            animation: {
                // Nombre-clase : nombre-keyframe duración tipo iteración
                'float': 'float 6s ease-in-out infinite',             // Flotar suavemente
                'glow': 'glow 3s ease-in-out infinite alternate',     // Brillo pulsante
                'slide-up': 'slideUp 0.8s ease-out forwards'          // Entrada desde abajo
            },

            // 4. KEYFRAMES (LOS FOTOGRAMAS DE LA ANIMACIÓN)
            // Aquí definimos exactamente qué hace la animación paso a paso.
            keyframes: {
                // Efecto de flotación: Mueve el elemento arriba y abajo
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                // Efecto de neón: Cambia la intensidad y color de la sombra (Box-Shadow)
                glow: {
                    '0%': { boxShadow: '0 0 5px #38bdf8, 0 0 10px #38bdf8' }, // Azul
                    '100%': { boxShadow: '0 0 20px #818cf8, 0 0 30px #818cf8' } // Violeta más intenso
                },
                // Efecto de entrada: Aparece desde abajo cambiando opacidad
                slideUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' }, // Invisible y abajo
                    '100%': { opacity: '1', transform: 'translateY(0)' }   // Visible y en su sitio
                }
            }
        }
    }
}