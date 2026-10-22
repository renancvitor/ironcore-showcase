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

[Voltar para o índice de documentação](README.md)
