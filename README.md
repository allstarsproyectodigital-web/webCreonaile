# Creonaile Ramos

Web en Next.js, reconstruida a partir de la grabación facilitada (25/08/2026).

## Desarrollo

Instalar con pnpm install --frozen-lockfile. Ejecutar pnpm dev.
Verificar con pnpm build y pnpm typecheck.

## Referencias y contenido

- Diseño, textos, precios, teléfono, colegiación y trayectoria: vídeo aportado por el cliente.
- Retrato: imagen original aportada por el cliente.
- Fotografías de servicios, mar y portada: regiones sin texto de los fotogramas aportados (la portada conserva su marca). Son recursos provisionales de resolución limitada; sustituir por los originales para máxima fidelidad.
- Libro y enlace: https://www.todostuslibros.com/libros/mis-abuelos-se-van-a-la-residencia_978-84-1060-539-8
- Datos editoriales contrastados: https://apuleyoediciones.com/producto/mis-abuelos-se-van-a-la-residencia/

## Contacto

El formulario valida nombre, teléfono, modalidad y consentimiento. Abre un borrador en WhatsApp para +34 658 16 07 26. El visitante debe enviarlo en WhatsApp. No guarda datos ni afirma haber enviado una solicitud.

## Despliegue

Usar únicamente el proyecto de Vercel web-creonaile, entorno preview.
La preview tiene noindex. Para producción, configurar NEXT_PUBLIC_SITE_URL con el dominio definitivo y desplegar explícitamente a production; así se habilitan canonical, sitemap e indexación.
No configurar un dominio inventado como canonical.
La base inicial usaba Next.js 15.5.2; se actualiza al parche 15.5.24: https://nextjs.org/blog
