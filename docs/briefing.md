# IronCore Showcase — Briefing e história de implementação

> **Status:** conceito e direção aprovados; levantamento de capturas e implementação pendentes.  
> **Projeto-alvo sugerido:** `ironcore-showcase` (terceiro repositório independente).  
> **Versão do escopo de referência:** primeira fase funcional do IronCore, frontend e backend `v1.0.0`.  
> **Natureza deste documento:** briefing e história-mãe de produto; não autoriza alterações nos repositórios existentes.

## 1. História

**Como** visitante do site, seja uma pessoa sem conhecimento técnico, um colega de trabalho, um desenvolvedor ou um recrutador,  
**quero** conhecer o IronCore por meio de uma apresentação clara, visual e acessível, com opção de aprofundamento técnico,  
**para** compreender tanto a experiência proporcionada pelo aplicativo quanto a engenharia empregada em sua construção, sem precisar criar uma conta ou acessar a aplicação.

### Motivação

O IronCore é um projeto pessoal de acompanhamento corporal e planejamento de treinos. Sua primeira fase já tem backend e frontend integrados e implantados. O showcase será uma vitrine do produto **e** de seu processo de engenharia, não um ambiente de demonstração funcional ou um sistema paralelo.

**Princípio orientador:** apresentar bem o que existe, com rigor factual e mínimo custo de manutenção.

## 2. Público e posicionamento

O site terá **uma experiência unificada com duas profundidades**:

1. **Apresentação funcional para todos:** propósito, telas reais, benefícios, exemplos de uso e linguagem acessível.
2. **Seção “Por trás do IronCore” para interessados em tecnologia:** arquitetura, regras de domínio, stack, qualidade, segurança e implantação, explicando decisões e problemas resolvidos em vez de apenas listar logotipos.

A navegação deverá permitir que uma pessoa não técnica compreenda o produto sem atravessar longos textos de backend. Informações técnicas serão fáceis de encontrar para quem as procura, sem dominar a experiência inicial.

## 3. Estrutura de conteúdo proposta

### 3.1. Abertura / Hero

- Nome e identidade visual do IronCore.
- Uma frase de posicionamento curta e fiel ao produto.
- Captura real da Home ou composição visual feita **somente a partir de capturas reais**.
- Chamadas para explorar as funcionalidades e descobrir a engenharia do projeto.

### 3.2. O que o IronCore faz

Apresentação por recursos efetivamente entregues:

- Login e gerenciamento de conta/perfil.
- Registro, histórico e consulta de avaliações corporais.
- Indicadores, gráficos de evolução e comparativos corporais.
- Catálogo consultável de exercícios, busca, filtros e detalhes musculares.
- Objetivos de treinamento e planejamento de ciclos.
- Organização de dias e atividades, seleção de exercícios e prescrição.
- Resumos relevantes na Home.

A narrativa deverá mostrar **jornadas e resultados**, sem apenas despejar screenshots numa galeria.

### 3.3. Jornada visual

Exemplo orientador, a validar pelas telas reais: acessar a Home → consultar evolução corporal → explorar o catálogo de exercícios → ver como um ciclo é organizado em dias e atividades. A sequência não precisa simular cliques ou executar chamadas de API: imagens e textos claros são suficientes.

### 3.4. Por trás do IronCore

**Frontend:** Angular 21, TypeScript, SCSS, componentes reutilizáveis, rotas lazy-loaded, responsividade, integração por API, testes com Vitest.

**Backend:** Java 21, Spring Boot 3.5, organização pragmática inspirada em DDD, regras de domínio, PostgreSQL, Flyway, endpoints REST, OpenAPI, validações e testes automatizados.

**Segurança e qualidade:** autenticação baseada em JWT via cookie, proteção CSRF, autorização/ownership de recursos, testes e pipelines. Explicar em nível apropriado para um portfólio; **não** publicar segredos, detalhes operacionais sensíveis ou credenciais.

**Infraestrutura implantada (conforme documentação dos repositórios em outubro de 2026):**

- Interface Angular no **Cloudflare Pages**, servida em `https://ironcore.dev.br`.
- API Spring Boot em **VPS OVHcloud no Canadá**, atrás do proxy reverso **Caddy**, servida em `https://api.ironcore.dev.br`.
- **PostgreSQL no Supabase**, região de São Paulo, conexão TLS.
- CI/CD independente: GitHub Actions para backend, com publicação após CI; frontend publicado pela integração do Cloudflare Pages com GitHub.

**Atenção:** estas informações devem ser reconferidas imediatamente antes da publicação do showcase. **Não** citar OCI como hospedagem atual.

O conteúdo técnico deve enfatizar problemas, compromissos e decisões: por exemplo, distinção entre planejamento e execução, separação entre lógica de frontend e regras de backend, validações de domínio e forma de publicação.

### 3.5. Sobre o projeto e autoria

Descrever a origem do IronCore como projeto pessoal de estudo e aplicação prática de engenharia, sua evolução até a primeira fase funcional e o papel de seu desenvolvedor. Evitar narrativas de produto comercial, promessas de recursos futuros e métricas inventadas.

### 3.6. Repositórios e contatos

- [IronCore Backend](https://github.com/renancvitor/ironcore-backend)
- [IronCore Frontend](https://github.com/renancvitor/ironcore-frontend)
- Links profissionais/contato somente após confirmação do proprietário.

O link público da aplicação existente **não deverá ser apresentado como uma demonstração com acesso livre** sem que essa intenção seja confirmada, já que o aplicativo usa um fluxo de autenticação próprio.

## 4. Inventário de capturas de tela

A primeira versão usará **imagens estáticas**. Vídeos, GIFs, reconstituições interativas, autenticação de visitantes e simulação de cadastros estão fora de escopo.

### 4.1. Capturas principais solicitadas ao proprietário

| # | Arquivo sugerido | Tela/estado desejado | Finalidade |
|---|---|---|---|
| 01 | `01-home.png` | Home com cards preenchidos | Abertura, visão geral |
| 02 | `02-body-metrics-history.png` | Histórico de avaliações com registros | Organização e acompanhamento |
| 03 | `03-body-metrics-detail.png` | Detalhe: composição e circunferências | Profundidade de dados corporais |
| 04 | `04-body-metrics-progress.png` | Evolução com gráficos visíveis | Acompanhamento longitudinal |
| 05 | `05-body-metrics-comparison.png` | Visão comparativa em período válido | Comparação de medidas |
| 06 | `06-exercise-catalog.png` | Catálogo com resultados e filtros | Navegação e consulta |
| 07 | `07-exercise-detail.png` | Detalhe com músculos-alvo e papéis | Modelagem do exercício |
| 08 | `08-workout-cycles.png` | Catálogo de ciclos com dados e status | Organização do planejamento |
| 09 | `09-workout-cycle-detail.png` | Ciclo composto com dias e atividades | Principal destaque do planejamento |
| 10 | `10-workout-exercise-selection.png` | Seleção contextual de exercícios | Integração com catálogo |
| 11 | `11-workout-prescription.png` | Planejado originalmente como formulário; a captura recebida representa continuação do detalhe do ciclo, NÃO um formulário | Captura complementar opcional |
| 12 | `12-profile.png` | Captura recebida contém dados pessoais reais; DESCARTADA | Solicitar nova captura segura apenas se necessário |

**Começar por:** `01-home.png`, `03-body-metrics-detail.png` e `09-workout-cycle-detail.png`. A validação dessas três imagens ajudará a decidir layout, estilo e espaço para legendas.

### 4.2. Capturas opcionais / fase de refinamento

- Login, preferencialmente sem credenciais digitadas.
- Cadastro de avaliação corporal preenchido, **sem salvar**.
- Criação de ciclo de treinamento preenchida, **sem salvar**.
- Uma vista mobile da Home e outra de planejamento de treino.
- Variação de tema, apenas se acrescentar valor real à apresentação.

Não solicitar prints de fluxos destrutivos, telas de erro artificiais, troca de senha ou primeiro acesso apenas para compor o showcase.

### 4.3. Procedimento de captura

- Preferir desktop, resolução de referência **aproximada de 1440 × 900**, zoom do navegador em 100% e tema consistente.
- Capturar inicialmente em **PNG**, preservando o original. O responsável pela implementação poderá gerar **WebP/AVIF** otimizado para publicação, com tamanhos responsivos e carregamento sob demanda.
- Exibir conteúdo significativo, com dados suficientes para gráficos e cartões; priorizar clareza visual em vez de quantidade.
- Remover ou anonimizar nomes, e-mails, observações íntimas, identificadores e quaisquer dados pessoais; não expor senhas, tokens, credenciais ou informações administrativas.
- Utilizar dados existentes autorizados, capturas tratadas ou dados fictícios preparados **sem alterar indevidamente o ambiente de produção**.
- Não alterar o código do frontend para obter capturas; não criar cadastros reais desnecessários.
- Respeitar a proporção original da imagem; usar legendas acessíveis e textos alternativos.

O número final de imagens exibidas no site poderá ser inferior ao número coletado: o Codex deverá selecionar e compor somente as necessárias.

## 5. Diretrizes visuais e de experiência

- Apresentação moderna, sóbria e consistente com a identidade visual real do IronCore.
- Priorizar leitura clara e navegação fluida em celular e desktop.
- Imagens reais como evidência; vedada a criação de falsas telas funcionais.
- Usar animações discretas, somente quando agregarem compreensão; respeitar `prefers-reduced-motion`.
- Informações técnicas organizadas em uma seção própria com leitura progressiva.
- Acessibilidade básica: contraste, foco visível, navegação por teclado, texto alternativo e hierarquia semântica.
- Otimizar imagens, adiar mídia fora da viewport e evitar bibliotecas pesadas sem necessidade.
- Não adicionar analytics, cookies de rastreamento ou formulários coletando dados sem decisão posterior explícita.
- Evitar transformar o showcase em um segundo app Angular só por familiaridade com a stack; HTML, CSS e JS podem ser suficientes. O Codex deve justificar dependências relevantes.

## 6. Regras de isolamento, fontes e rigor

**Isolamento obrigatório**

- Desenvolver exclusivamente no terceiro repositório.
- Tratar `ironcore-backend` e `ironcore-frontend` como **somente leitura**, inclusive documentos, workflows e assets.
- Não adicionar conta demo, persistência no navegador, simulações de gravação, chamadas de API ou backend próprio.
- O site deve funcionar como um conjunto de arquivos estáticos hospedáveis no GitHub Pages.

**Fontes prioritárias**

1. Código e [documentação do frontend](https://github.com/renancvitor/ironcore-frontend/tree/main/docs), inclusive [release v1.0.0](https://github.com/renancvitor/ironcore-frontend/blob/main/docs/releases/v1.0.0/README.md) e [deploy](https://github.com/renancvitor/ironcore-frontend/blob/main/docs/deploy/README.md).
2. Código e [documentação do backend](https://github.com/renancvitor/ironcore-backend/tree/main/docs), inclusive [release v1.0.0](https://github.com/renancvitor/ironcore-backend/blob/main/docs/releases/v1.0.0/README.md) e [deploy](https://github.com/renancvitor/ironcore-backend/blob/main/docs/deploy/README.md).
3. Capturas fornecidas e informações expressamente confirmadas pelo proprietário.

**Não prometer como implementados:** execução e histórico de sessões reais de treino, progresso de execução de ciclos, geração automática de treino por IA, acesso multiusuário ou catálogo de exercícios editável pelo usuário. Essas capacidades não compõem o escopo atual do frontend v1.0.0.

As informações técnicas e métricas de testes devem ser verificadas no momento de redigir o conteúdo. Não publicar contagens ou percentuais sem fonte e contexto temporal.

## 7. Estratégia de implementação

Etapas sugeridas, com pontos de validação claros:

1. **Levantamento** — ler a documentação vigente, confirmar o inventário funcional e listar dúvidas reais (ChatGPT + repositórios).
2. **Conteúdo e imagens** — receber os prints, conferir consistência, anonimização e seleção do conjunto final.
3. **Design / protótipo** — definir estrutura, identidade, layout mobile/desktop e conteúdo das seções para aprovação antes de implementar detalhes.
4. **Implementação isolada** — construir site estático, otimizar imagens, garantir acessibilidade, responsividade e navegação (Codex, apenas terceiro repositório).
5. **Revisão e publicação** — verificar conteúdo factual, links, imagens, performance, SEO básico, build se houver, e publicar no GitHub Pages.

**Escopo mínimo viável:** uma landing page navegável com abertura, funcionalidades ilustradas, seção técnica, sobre e links do GitHub. Não criar CMS, painel administrativo, contas, mecanismos de edição, servidor nem persistência.

## 8. Critérios de aceite (Definition of Done)

- [ ] Site hospedável e publicado pelo GitHub Pages, com URL validada.
- [ ] Nenhuma modificação nos repositórios `ironcore-backend` e `ironcore-frontend`.
- [ ] Abertura compreensível para público não técnico.
- [ ] Funcionalidades apresentadas somente com base no escopo realmente entregue.
- [ ] Capturas reais otimizadas, com legendas e sem informações sensíveis.
- [ ] Seção técnica navegável, com stack e decisões arquiteturais justificadas.
- [ ] Infraestrutura atual representada corretamente (Cloudflare Pages, OVHcloud/Caddy, Supabase).
- [ ] Distinção explícita entre planejamento de treinos e execução de sessões.
- [ ] Navegação e layout validados em desktop e mobile.
- [ ] Acessibilidade básica e desempenho revisados.
- [ ] Links para repositórios e canais aprovados verificados.
- [ ] Documentação mínima de manutenção e publicação no terceiro repositório.
- [ ] Nenhuma dependência de login, API, banco de dados, cookies ou armazenamento local para o funcionamento do showcase.

## 9. Decisões em aberto — não bloquear as capturas por causa delas

- Nome final do repositório e endereço do showcase.
- Identidade visual final: cores, tipografia, logotipo e título de apresentação, observando a marca existente no aplicativo.
- Textos finais da abertura, da história do projeto e das chamadas para navegação.
- Quais das imagens opcionais deverão ser incluídas.
- Contato profissional e eventual link para o aplicativo de produção (sem prometer acesso demo).
- Necessidade real de qualquer ferramenta de build; preferir uma solução enxuta.

## 10. Regra de sucesso

**Uma pessoa que não conhece tecnologia deve compreender o IronCore; uma pessoa que avalia software deve reconhecer a engenharia por trás dele — sem precisar acessar o sistema e sem criar um terceiro produto.**


## 11. Decisão após revisão de capturas — 22/10/2026

As 12 capturas foram recebidas e avaliadas. **Foram aprovadas 10 imagens principais** (`01` a `10`) e **1 imagem opcional** (`11`) como evidência complementar de prescrição no detalhe do ciclo. A imagem `12` de perfil foi descartada por conter nome completo e data de nascimento. Nenhum print do perfil é entregue no pacote.

As capturas usadas para o showcase foram preparadas apenas com recortes retangulares, sem edição ou reconstrução de conteúdo visual. Consulte `LEIA-ME.md` e `manifesto-imagens.json` para a sequência editorial definitiva, contexto da captura, coordenadas de corte e planos de apresentação.

**Forma de exibição aprovada como recomendação:** Home no hero sem carrossel; detalhe de avaliação como destaque + galeria manual de histórico, evolução e comparativo; catálogo e detalhe de exercícios em sequência; detalhe do ciclo em destaque + galeria manual de catálogo e seleção; seção técnica separada. Não usar autoplay. Disponibilizar ampliação da captura quando necessário.

**Ressalva:** o print de evolução corporal mostra apenas parte do gráfico, por causa da rolagem da página; é autenticamente parcial. Caso ele seja promovido a destaque principal, obter uma nova captura completa, sem recompor ou inventar dados.
