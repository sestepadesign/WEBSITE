# Visualizador local (sem deploy)

## Um clique — recomendado

**Duplo-clique em:**

`C:\Users\inesg\temp\WEBSITE\VER-SITE-LOCAL.bat`

Ou na Drive:

`G:\Meu Drive\SESTEPA\ANTIGRAVITY\S'ESTEPA DESIGN\3-WEBSITE\VER-SITE-LOCAL.bat`

O script:
1. Sincroniza o código do git → pasta de build
2. Inicia o servidor se ainda não está rodando
3. Abre o browser em http://127.0.0.1:4321/

Para **parar**: fecha a janela do terminal com o título **S'estepa Preview**.

## URLs úteis

| Página | URL |
|--------|-----|
| Home EN | http://127.0.0.1:4321/ |
| Home ES (texto SEO) | http://127.0.0.1:4321/es/ |
| Studio / equipa | http://127.0.0.1:4321/about/ |
| Portfolio | http://127.0.0.1:4321/portfolio/ |

## Manual (se precisares)

```powershell
cd C:\Users\inesg\temp\WEBSITE\site-em-terra-astro
npm run dev -- --host 127.0.0.1 --port 4321
```

Abre http://127.0.0.1:4321/ no browser.

## Onde editar código

| Pasta | Uso |
|-------|-----|
| `C:\Users\inesg\temp\WEBSITE-git\site-em-terra-astro` | Git → deploy |
| `G:\...\3-WEBSITE\site-em-terra-astro` | Backup Drive |

O visualizador lê sempre de `C:\Users\inesg\temp\WEBSITE\site-em-terra-astro` (com sync automático do git).
