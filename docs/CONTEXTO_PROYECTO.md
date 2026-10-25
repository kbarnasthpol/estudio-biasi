# Contexto del proyecto

## Propósito
Sitio web del Estudio Biasi & Asociados, en español y dirigido a personas que buscan orientación jurídica. La comunicación debe ser profesional, clara y cercana.

## Identidad visual
- Paleta definida en `src/app/globals.css`: principal, secundario, detalles y colores de texto.
- Tipografías: `font-titulo` para títulos y `font-comun` para texto general.
- Las secciones principales deben respetar el lenguaje visual de Hero, TrustSection, About y Footer.
- Reutilizar `Container` y `SectionFrame` cuando corresponda.
- Mantener tamaños tipográficos, espaciados, bordes y botones coherentes y responsivos.
- Respetar el movimiento reducido (`prefers-reduced-motion`).

## Servicios y rutas
- Las áreas y su contenido provienen de `src/data/areas.js`.
- Los detalles usan la ruta dinámica `src/app/servicios/[slug]/page.js`.
- Generar enlaces con el `id` del área; no duplicar servicios ni inventar slugs.
- No afirmar resultados jurídicos, garantías, precios ni especialidades que no estén confirmados en los datos.

## Contenido y confianza
- No inventar testimonios, nombres de clientes ni reseñas.
- No presentar textos de muestra como opiniones reales.
- Usar español rioplatense de forma consistente: “podés”, “tenés”, “escribinos”.
- No modificar datos de contacto o enlaces externos sin indicación explícita.

## Implementación
- Antes de cambiar un componente, revisar sus usos y los estilos globales.
- Mantener accesibilidad: etiquetas semánticas, foco visible, enlaces descriptivos y botones para acciones.
- Probar navegación móvil, rutas internas y enlaces entre páginas.