# Tareas Pendientes y Backlog

Este documento registra las tareas, implementaciones pendientes y notas técnicas críticas a realizar en el proyecto.

## Infraestructura y Dominios

- [ ] **Configuración DNS para `www.design.sestepa.com` (Proveedor: Abansys)**
  - **Contexto:** El proveedor de DNS (registrador) es **Abansys**. Actualmente `www.design` carece de un registro CNAME.
  - **Acción:** Acceder al panel de Abansys y crear un registro CNAME para `www.design` apuntando a `sestepadesign.pages.dev`.
  - **Acción en Hosting:** Ir al panel de Cloudflare Pages -> proyecto `sestepadesign` -> Custom Domains y añadir `www.design.sestepa.com`.
  - **Recomendación:** Tras su funcionamiento, configurar redirección 301 de `www.design.sestepa.com` hacia `design.sestepa.com` para evitar contenido duplicado y optimizar el SEO.

