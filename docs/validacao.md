# Validação da primeira implementação

Executada em 22/10/2026, na branch feat/showcase-v1.

## Verificações aprovadas

- JavaScript validado por node --check.
- Empacotamento estático: 16 arquivos permitidos, sem originais, extras, capturas descartadas ou ferramentas de QA.
- Microsoft Edge headless: 1440, 768, 390 e 320 px de largura, sem overflow horizontal.
- Inspeção visual das capturas de página inteira em desktop e mobile.
- Duas galerias: sequência, anterior/próximo, volta ao início e setas do teclado.
- Foco preservado ao mudar uma imagem com as setas.
- Ampliação: dez imagens carregadas, navegação circular, foco inicial no botão de fechar, contenção de Tab pelo dialog, fechamento por Esc e retorno ao acionador.
- Links locais, âncoras, CSS, JS e imagens acessíveis sob /ironcore-showcase/.
- Sem JavaScript: dez imagens visíveis, controles inativos ocultos e links diretos para PNGs.
- prefers-reduced-motion desativa rolagem suave.
- Nenhuma requisição externa em execução, cookie ou uso de local/session storage.
- PNGs do artefato com SHA-256 idêntico aos arquivos fornecidos e dimensões iguais às registradas no manifesto.
- Guia copiado para docs/guia-imagens.md com SHA-256 idêntico a LEIA-ME.md.
- Links técnicos consultados pelo conector GitHub e conteúdo revisado contra documentação e código.

## Limites

- Não foi realizada auditoria completa com leitor de tela nem validação em aparelhos físicos, Safari ou Firefox.
- Não houve teste autenticado da aplicação original nem acesso à infraestrutura de produção.
- A URL pública do showcase e a execução do workflow só poderão ser verificadas após publicação autorizada.
- git diff --cached --check aponta cinco quebras Markdown com dois espaços finais no briefing fornecido. O documento foi preservado integralmente conforme solicitado. A verificação excluindo somente docs/briefing.md passa.

O script reproduzível de navegador está em scripts/browser-check.mjs. Dependência temporária e evidências visuais ficam em .qa/, ignorada pelo Git e excluída da publicação.

## Refinamento visual e editorial

- Hero e metadados reposicionados como projeto pessoal de engenharia de software em produção.
- Paleta conferida diretamente em _palette.scss, _themes.scss e _tokens.scss do frontend; mapeamento registrado em docs/fontes.md.
- Reexecutada a verificação de navegador em 1440, 768, 390 e 320 px: sem overflow horizontal, com galerias, ampliação, teclado, foco, links e fallback sem JavaScript aprovados.
- Inspeção visual do hero em desktop e mobile, preservando a composição.
- Contraste calculado para textos principal, secundário e verde suave sobre os três fundos oficiais: mínimo de 9,17:1. Bordas dos controles sobre a superfície: 3,73:1.
- Capturas e JavaScript de interação sem alterações; nenhuma dependência adicionada. git diff --check aprovado para o refinamento.

## Preparação da integração da revisão

- Alterações pendentes recuperadas após o merge do PR #1, preservadas na branch fix/showcase-identidade-editorial, baseada em origin/main no commit cf5444f.
- Reexecutadas as validações de navegador, empacotamento, sintaxe e contraste sobre a revisão final, incluindo a autoria explícita de Renan Vitor.
- Conferida a ausência de identificadores de versão/release no HTML público; documentos históricos preservados.
- Capturas e script.js idênticos à implementação integrada pelo PR #1.
- Registrada a exclusão local preexistente de LICENSE: o arquivo tinha apenas o título do repositório em UTF-16, sem termos de licença. Nenhuma licença substituta foi presumida.
- Merge da revisão e conferência final da main dependem da aprovação e integração do novo PR. Publicação não foi acionada.

## Correções finais na main

Executadas após a sincronização com o merge do PR #2 (9299cef). O diretório de trabalho estava limpo; nenhum trabalho local foi descartado. Esta etapa segue o fluxo aprovado de commits diretamente na main.

- Abertura conferida em quatro larguras: texto superior “PROJETO PESSOAL”, título “IronCore” e descrição aprovada imediatamente após o título, sem slogan intermediário.
- Metadados alinhados à introdução; expressões removidas também do HTML restante.
- Paleta, temas e tokens oficiais consultados novamente. Cores e estados existentes conferidos; não foi necessário alterar o CSS.
- READMEs e índices docs/README.md dos projetos originais usados como referência estrutural. Criado índice próprio, mantido o guia em docs/guia-imagens.md e substituída a cópia duplicada em LEIA-ME.md por encaminhamento.
- Verificados 27 links e âncoras locais na documentação. Briefing histórico preservado integralmente.
- node --check aprovado para script.js, scripts/package.mjs e scripts/serve.mjs; git diff --check aprovado.
- scripts/package.mjs aprovado: 16 arquivos públicos, PNGs sem transformação.
- scripts/browser-check.mjs aprovado em 1440, 768, 390 e 320 px: layout, galerias, ampliação das dez capturas, teclado/foco, caminhos em subdiretório, fallback sem JavaScript, movimento reduzido e ausência de requisições externas/cookies/storage.
- Conferidas a introdução exata, os metadados e a ausência das expressões removidas nessas quatro larguras. Inspeção visual desktop/mobile concluída.
- Capturas, script.js, estilos e briefing idênticos ao estado sincronizado da main. Nenhuma dependência adicionada; publicação não acionada.

## Atualização funcional e de segurança — 05/11/2026

Os resultados anteriores são históricos. As verificações desta atualização local estão limitadas ao que segue.

### Verificações executadas

- Leitura do `LEIA-ME-PACOTE.md` e de `checksums.json` do pacote adicional antes da incorporação. Inspeção visual dos cinco PNGs recebidos.
- Consulta somente leitura às releases oficiais backend v1.3.0 e frontend v1.2.0, aos documentos de Workout Session de ambas as tags, Users/Auth e banco do backend e arquitetura/autenticação do frontend. Conteúdo conferido contra essas fontes; nenhum teste autenticado ou acesso ao banco.
- Integridade: SHA-256 dos cinco PNGs incorporados idêntico ao pacote e aos checksums fornecidos. As nove imagens anteriores de 02 a 10 mantêm os hashes obtidos antes da alteração. Não houve recorte, recompressão ou redimensionamento. Os originais upstream não estavam no pacote: seus hashes/dimensões são proveniência declarada pelo fornecedor, sem nova validação de pixels contra os originais.
- Manifesto JSON lido com sucesso; 14 capturas principais. Dimensões verificadas nos cabeçalhos PNG e confrontadas com manifesto e atributos HTML. Registros históricos 02–11 preservados integralmente, incluindo a captura opcional 11 não publicada. A captura 15 está identificada como parcial.
- HTML: 48 referências locais de `href`/`src` conferidas, com arquivos e âncoras existentes, sem IDs duplicados; 14 links de ampliação e três galerias. Avaliação mantém quatro capturas, catálogo duas, planejamento três e sessão acrescenta quatro; Home ocupa a posição restante. Legendas e textos alternativos conferidos.
- Texto superior, título e descrição aprovados do hero conferidos literalmente. Home, nova seção, separação entre prescrição e execução, persistência e card de segurança revisados. Links relativos de arquivos nos quatro documentos afetados conferidos.
- Inspeção da seleção de `scripts/package.mjs`: passa a selecionar 20 arquivos existentes (seis arquivos estáticos/documentais e 14 PNGs) pelo manifesto. Originais, opcionais, ZIP, ferramentas e documentos de preparação não são selecionados. Os links documentais de `docs/fontes.md` para outros documentos usam o repositório oficial, evitando depender de documentos ausentes no pacote público. Esta inspeção não equivale à geração/auditoria de `dist/`.
- Inspeção do JavaScript existente: galerias e ampliação selecionam elementos por atributos, sem contagem fixa. A nova galeria reutiliza a mesma estrutura; fallback com links diretos, controles ocultos antes da melhoria por JavaScript e estilos de movimento reduzido permanecem presentes. Fluxos de teclado, fechamento e retorno de foco foram revisados no código, sem execução de navegador nesta etapa.
- Navegação CSS ajustada para quatro colunas no desktop, duas até 1050 px e uma até 760 px, por inspeção das regras. A identidade visual e os componentes existentes foram preservados.
- `node --check script.js`, `node --check scripts/package.mjs` e `node --check scripts/browser-check.mjs`: aprovados (código de saída 0). A primeira tentativa foi bloqueada pelo sandbox (`EPERM` ao resolver o caminho do usuário); a repetição autorizada fora do sandbox passou. A sintaxe foi verificada com Node.js 18.20.8, sem executar os scripts.
- Script de teste de navegador atualizado para a expectativa de 14 capturas; não executado. `script.js`, `scripts/package.mjs` e workflow de publicação não exigiram alterações.

### Limitações e pendências

- Empacotamento e servidor local não executados. O Node.js disponível é 18.20.8; os scripts existentes utilizam `import.meta.dirname`, ausente nessa versão, e o workflow usa Node.js 24. Não foi instalada ou atualizada ferramenta alguma.
- Testes de navegador e revisão renderizada desktop/mobile não executados. O Edge está disponível, mas o módulo local esperado `.qa/node_modules/playwright-core` não existe; o servidor/empacotador também depende de Node compatível. Não foram confirmados nesta revisão overflow, navegação/foco, ampliação ou fallback em execução.
- Em ambiente já compatível, pendem `node scripts/package.mjs` e, com o servidor `node scripts/serve.mjs` ativo e Playwright previamente disponível, `node scripts/browser-check.mjs`. Não instalar ferramentas neste computador para suprir essas pendências.
- Nenhum comando Git, branch, commit, PR, alteração dos projetos pais, deploy ou acionamento de workflow. Alterações exclusivamente locais, prontas para revisão estática; publicação e validações de execução ficam a cargo do responsável.

[Voltar para o índice de documentação](README.md)
