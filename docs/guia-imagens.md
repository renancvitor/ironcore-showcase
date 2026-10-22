# IronCore Showcase — Pacote de capturas e orientação visual

Data: 22/10/2026 · Escopo: frontend/backend v1.0.0

## Finalidade

Este pacote contém **10 imagens principais**, **1 captura complementar opcional**, originais correspondentes, um manifesto de proveniência e um briefing atualizado. Deve ser enviado para uma nova sessão de ChatGPT ou Codex junto com o contexto do projeto.

**Nenhum dado, texto, número, componente, cor ou estado da interface foi editado.** As versões de publicação foram produzidas exclusivamente com recorte retangular sem redimensionamento nem preenchimento. Os originais são preservados em `originais/` para comparação. Os trechos de tooltip “Abrir menu” ficam fora dos recortes. As barras de rolagem continuam nos originais; nas versões enquadradas, em geral estão fora do foco do recorte. Não afirmar que é uma captura de tela completa quando ela for apenas uma região da interface.

**A imagem do perfil foi deliberadamente excluída**, incluindo o original, porque contém nome completo e data de nascimento reais. Não usar esse print. Para incluir o módulo futuramente, solicitar nova captura sem esses dados.

## Arquitetura da apresentação

### Abertura / Hero (imagem fixa)
- `01-home.png`: imagem principal única (não carrossel). Apresentar o IronCore como aplicativo de acompanhamento corporal e planejamento de treinos.
- Usar em moldura leve, com proporção original e sem cortar novamente elementos funcionais. O hero deve ter texto próprio do site, nunca escrever textos sobre a captura.

### Avaliação corporal (destaque + galeria de 3 telas)
- **Destaque:** `03-avaliacao-detalhes.png` — indicadores e circunferências.
- **Galeria em ordem manual:** `02-avaliacoes-historico.png` → `04-evolucao-graficos.png` → `05-evolucao-comparativo.png`.
- Legendas orientadas ao público geral: "Consulte avaliações anteriores"; "Acompanhe tendências no período"; "Compare mudanças nas medidas".
- Observação: a captura de gráficos foi feita durante a rolagem e mostra só a parte superior do gráfico; caso vá ser o destaque principal da seção, solicitar uma recaptura que inclua o gráfico completo. Não recompor partes não capturadas.

### Catálogo de exercícios (duas telas em sequência)
- `06-exercicios-catalogo.png` → `07-exercicio-detalhes.png`.
- No desktop, preferir duas visualizações empilhadas com texto lateral ou uma galeria manual simples de 2 itens; no mobile, sequência vertical ou galeria manual.
- Legendas: "Encontre exercícios com filtros" e "Entenda os grupos musculares envolvidos".

### Planejamento de treinos (destaque + galeria de 2 telas)
- **Destaque:** `09-treino-detalhes.png` — mostra composição de ciclo e atividades.
- **Galeria manual:** `08-treinos-catalogo.png` → `10-treino-selecao-exercicios.png`.
- Legendas: "Organize ciclos por objetivo" e "Escolha exercícios dentro do planejamento".
- `extras/11-treino-atividades-complemento.png` fica **fora do roteiro principal**: usar apenas se a seção técnica precisar evidenciar prescrições mais detalhadas. É uma continuação do detalhe de ciclo, **não** um formulário de criação/edição.

### Engenharia / Por trás do IronCore
- Nenhum screenshot novo obrigatório. Apresentar a arquitetura por texto e, caso necessário, diagrama desenhado em HTML/SVG com fatos documentados. Nunca representar telas inexistentes nem fluxos futuros como implementados.
- Infraestrutura atual documentada: frontend Cloudflare Pages; API na VPS OVHcloud no Canadá atrás de Caddy; PostgreSQL Supabase em São Paulo com TLS.

## Regras de componentes visuais

1. **Não usar carrossel global com todas as telas.** A sequência deve contar uma história, separada por recurso.
2. As galerias são **manuais**, sem autoplay, com controles anterior/próximo, rótulos, indicadores de posição e navegação acessível por teclado. Em touch, suporte a gesto é opcional.
3. Preferir apresentação do screenshot inteiro, com `object-fit: contain`, evitando novos cortes de elementos ou texto. **Não usar `cover` para crop automático em screenshots com texto.**
4. Oferecer ampliação (lightbox) com navegação, fechamento por Esc e foco controlado. Em celular, largura fluida; em desktop, largura adequada para leitura e sem esticar além do original.
5. Hero carregado com prioridade. Imagens posteriores com lazy loading e dimensões/reserva de espaço para evitar layout shift.
6. O foco é mostrar funcionalidades reais. **Nenhum mockup falso, overlay de textos sobre a UI, GIF, vídeo ou “modo demo” na primeira versão.**
7. Respeitar `prefers-reduced-motion` em transições; não exigir nenhum tipo de animação.
8. Elementos puramente decorativos criados para o próprio site são permitidos, desde que não se façam passar por interface real do IronCore.

## Ordem linear recomendada para leitura

1. Hero: Home (`01`).
2. Avaliação corporal: detalhe (`03`), histórico (`02`), gráfico (`04`) e comparativo (`05`).
3. Exercícios: catálogo (`06`) e detalhe (`07`).
4. Planejamento: detalhe (`09`), catálogo (`08`) e seleção (`10`).
5. Engenharia: decisões técnicas, stack, deploy e links de repositórios.

A numeração dos arquivos segue a coleta original; **a ordem editorial é a lista acima**.

## Limites e cuidados de privacidade

- A captura de Perfil original (#12) não faz parte do pacote; não requisitar/exibir sem nova versão segura.
- Outras imagens mostram dados de corpo e treino do proprietário. Ele autorizou manter esses conteúdos reais, mas uma revisão final de privacidade antes de deixar o site público continua recomendada.
- Nenhuma captura deve ser apresentada como dados fictícios se ela representa dados reais; o site pode dizer "capturas reais da aplicação".
- Prints cortados são recortes autênticos da UI, não páginas inteiras.
- Não tocar nos repositórios originais para fazer o showcase.

## Arquivos de apoio

- [Briefing](briefing.md): briefing da história e requisitos, atualizado com a decisão de imagens.
- [Manifesto das imagens](../manifesto-imagens.json): descrição dos crops, localização dos originais e usos editoriais.
- `visao-geral.jpg`: contato visual para revisão humana (não publicar como uma tela da aplicação).

[Voltar para o índice de documentação](README.md)
