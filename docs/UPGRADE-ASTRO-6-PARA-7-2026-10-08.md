# Atualização Astro 6.4.8 para 7.3.7 — procedimento e revisão

- **Autor/agente:** Claude (Sonnet 5.5)
- **Data:** 2026-10-08
- **Escopo:** atualização de versão major do Astro, correção das vulnerabilidades de dependências e verificação de equivalência da saída.
- **Estado:** validado localmente; publicado apenas em branch temporária `feature/astro-7-upgrade` para pré-visualização no Cloudflare. Merge para `master` pendente de aprovação.

## Resultado

| | Antes | Depois |
|---|---|---|
| `astro` | 6.4.8 | 7.3.7 |
| `sharp` | 0.34.x | 0.35.5 |
| `@astrojs/sitemap` | 3.7.x | 3.7.4 |
| Vulnerabilidades (`npm audit`) | 11 (1 crítica, 8 altas, 1 moderada, 1 baixa) | 0 |
| Páginas HTML geradas | 153 | 153 (as mesmas) |
| URLs no sitemap | 128 | 128 (as mesmas) |

`npm audit fix` alterou um único pacote (`http-cache-semantics`) no `package-lock.json`.

## Procedimento usado (repetível)

Nunca executar nada disto em `G:`. Tudo numa cópia local.

1. **Cópia local.** `robocopy codigo <pasta-local> /MIR /XD node_modules .git _backups .astro dist "images tratadas com magnific"`.
2. **Baseline.** `npm ci` e `npm run build` na versão atual. Guardar `dist` como `dist_base`. Registar o número de páginas.
3. **Atualizar.** `npm install astro@<versão> sharp@<versão> @astrojs/sitemap@latest`. Confirmar antes `npm view astro@<versão> engines peerDependencies` (Node mínimo 22.12).
4. **Compilar e corrigir.** O compilador novo é mais estrito. Ler o erro, corrigir o ficheiro apontado, repetir.
5. **Resolver o restante `npm audit`** com `npm audit fix` (sem `--force`).
6. **Comparar as saídas** com `python scripts/compare-builds.py dist_base dist`: ficheiros em falta ou a mais, assinatura SEO por página (título, descrição, canonical, `h1`, JSON-LD, hreflang, nº de imagens), URLs do sitemap, `_redirects`, `_headers`, `robots.txt`, `llms.txt`.
7. **Comparar texto visível e esqueleto do DOM**, ignorando hashes de ficheiros e espaços.
8. **Testar no navegador** (desktop e 375 px): home, serviços, galeria (lightbox, setas, Esc, clique fora), menu móvel, ausência de scroll horizontal.
9. **Publicar em branch temporária** (rota B), validar o URL de preview do Cloudflare, só então fazer merge.

## Erros que o Astro 7 expôs (já existiam no código)

| Ficheiro | Problema | Correção |
|---|---|---|
| `src/components/site/servicesPage.astro` | `<div class="container">` e `<article class="services-page">` nunca fechados. O Astro 6 fechava-os implicitamente. | Acrescentados `</div>` e `</article>` antes de `</Layout>`. O HTML gerado não muda. |
| `src/components/site/galleryPage.astro` | `return` ao nível superior de um `<script define:vars>`. O Astro 7 deixou de envolver estes scripts numa função. | Código do script envolvido em `(() => { ... })();`. |

Verificação de balanço de etiquetas feita em todos os `.astro`: apenas `servicesPage.astro` estava desequilibrado.

## Diferenças na saída (todas verificadas, nenhuma perda de conteúdo)

- Texto visível: `3MIN READ` passa a `3 MIN READ` (o Astro 6 perdia o espaço entre o número e o texto) em 38 páginas; `&#x26;` passa a `&amp;` (mesmo carácter).
- Espaços à volta do texto dos links de menu e rodapé deixam de existir.
- O minificador de CSS reordena propriedades; semântica igual.
- Assinatura SEO idêntica nas 153 páginas; ficheiros `_redirects`, `_headers`, `robots.txt` e `llms.txt` idênticos.

## Regras para a próxima atualização major

- Fazer sempre a comparação de baseline antes de publicar.
- Não usar `--force` em `npm audit fix`.
- Atualizações major só por branch temporária com preview Cloudflare.
- Erros de compilação novos costumam indicar HTML ou JavaScript tolerado pela versão anterior: corrigir a causa, não desligar a verificação.

## Assinatura

- Autor/agente: Claude (Sonnet 5.5), 2026-10-08.
- Disco J: não acedido.
- Rollback: `git revert` do commit da branch, ou repor `package.json` e `package-lock.json` anteriores.
