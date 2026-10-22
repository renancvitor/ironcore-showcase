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
