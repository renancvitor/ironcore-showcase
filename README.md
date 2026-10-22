# IronCore Showcase

Apresentação estática do IronCore para dois públicos: uma jornada visual pelas funcionalidades e uma seção dedicada às decisões de engenharia. Escopo: primeira fase funcional v1.0.0, com infraestrutura conforme documentação consultada em outubro de 2026.

O showcase não se conecta à aplicação: não possui login, API, banco, analytics, cookies ou persistência local. Não demonstra execução de sessões nem funcionalidades futuras.

## Executar localmente

O site usa HTML, CSS e JavaScript nativos, sem dependências de execução ou compilação. É possível abrir index.html diretamente no navegador.

Para uma prévia HTTP que reproduz o subdiretório do GitHub Pages, com Node.js 24:

```sh
node scripts/serve.mjs
```

Abra http://127.0.0.1:4307/ironcore-showcase/. Encerre com Ctrl+C. O script copia os arquivos públicos para dist/ e serve apenas essa seleção. Não modifica as capturas. Após editar os arquivos, reinicie o servidor para atualizar a cópia.

## Organização

| Caminho | Responsabilidade |
| --- | --- |
| index.html | Conteúdo semântico, metadados, imagens, galerias e modal |
| styles.css | Identidade escura e verde, layout responsivo e foco |
| script.js | Galerias manuais e ampliação com dialog nativo |
| assets/screenshots/ | Dez PNGs autorizados, preservados integralmente |
| assets/favicon.svg | Marca tipográfica decorativa do showcase |
| docs/briefing.md | Briefing histórico preservado |
| docs/guia-imagens.md | Cópia integral do guia fornecido em LEIA-ME.md |
| docs/fontes.md | Fontes técnicas e resolução de diferenças documentais |
| manifesto-imagens.json | Proveniência original das capturas |
| scripts/package.mjs | Cópia por lista explícita dos arquivos publicáveis |
| scripts/serve.mjs | Servidor de prévia local com subdiretório |
| scripts/browser-check.mjs | Verificação opcional de navegador |
| .github/workflows/pages.yml | Publicação manual após autorização |

originais/, extras/, visao-geral.jpg, .qa/ e dist/ são ignorados pelo Git. Originais e capturas opcionais não fazem parte do artefato de publicação.

## Conteúdo e imagens

Ordem editorial: Home (01); avaliação em destaque (03), galeria 02 → 04 → 05; exercícios 06 → 07; ciclo em destaque (09), galeria 08 → 10; engenharia e história.

Todas as capturas usam object-fit: contain, dimensões explícitas e textos alternativos. A Home tem prioridade de carregamento; as demais imagens usam lazy loading. Sem JavaScript, todas ficam visíveis em sequência e os links abrem o PNG. Com JavaScript, as galerias têm anterior/próximo e setas do teclado; a ampliação permite percorrer as dez imagens, fechar com Esc e devolver o foco ao link de origem. Abrir PNG oferece leitura na resolução original com o zoom nativo do navegador.

Não editar o conteúdo visual dos PNGs. Atualizações técnicas devem ser conferidas nos repositórios originais e registradas em docs/fontes.md.

## Validar

```sh
node --check script.js
node scripts/package.mjs
git diff --check
```

Para validação opcional em navegador, instale Playwright Core apenas na pasta ignorada de QA:

```sh
npm install --prefix .qa --no-save --package-lock=false playwright-core
node scripts/serve.mjs
# Em outro terminal, com Microsoft Edge instalado:
node scripts/browser-check.mjs
```

A verificação usa Edge headless, sem instalar outro navegador. PLAYWRIGHT_MODULE e BROWSER_PATH podem indicar instalações alternativas. As evidências ficam em .qa/. Não há dependência de Playwright no site ou no fluxo de publicação.

## Publicar no GitHub Pages

Destino previsto: https://renancvitor.github.io/ironcore-showcase/.

**A publicação exige decisão explícita do responsável. Nada é publicado em push ou pull request.**

1. Revise o PR, as capturas autorizadas e o conteúdo. Após aprovação, faça merge na main.
2. No GitHub, configure Settings → Pages → Source como GitHub Actions.
3. Execute manualmente Actions → Publish showcase (manual) → Run workflow, na main.
4. O workflow copia somente os 16 arquivos permitidos para dist/, envia esse artefato e publica no Pages. Não há npm install ou compilação.
5. Confira a URL retornada, imagens, navegação, galerias e ampliação no subdiretório.

Não configure publicação da raiz inteira do repositório. O pacote utiliza uma lista explícita para excluir documentos internos, originais e arquivos de QA. O empacotador falha se detectar arquivos inesperados em dist/.

Os caminhos de CSS, JS, favicon e PNGs são relativos. Âncoras funcionam sem roteador ou regras de fallback. Canonical e Open Graph usam o endereço final previsto; não representam confirmação de publicação.

## Repositórios oficiais

- [IronCore Frontend](https://github.com/renancvitor/ironcore-frontend)
- [IronCore Backend](https://github.com/renancvitor/ironcore-backend)
- [Fontes e revisão editorial](docs/fontes.md)

Os repositórios originais foram consultados somente em leitura.
