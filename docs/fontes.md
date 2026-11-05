# Fontes e revisão editorial

Revisão funcional e de autenticação em 05/11/2026, somente leitura, com base nas releases oficiais backend v1.3.0 e frontend v1.2.0 e nos documentos dessas tags. Referências de identidade e infraestrutura da consulta de 22/10/2026 foram preservadas. Não houve acesso à produção nem teste autenticado contra a API.

## Produto e história

- [Release oficial v1.2.0 do frontend](https://github.com/renancvitor/ironcore-frontend/releases/tag/v1.2.0): Workout Session, histórico, força e cardio, Home, navegação e recuperação autenticada.
- [Release oficial v1.3.0 do backend](https://github.com/renancvitor/ironcore-backend/releases/tag/v1.3.0): execução real, snapshots, histórico, indicadores e autenticação persistida.
- [Workout Session no frontend](https://github.com/renancvitor/ironcore-frontend/blob/v1.2.0/docs/workout-session/README.md): início, continuidade, encerramento, registros parciais, histórico e gráficos; navegação de Treinos e acesso pela Home.
- [Workout Session no backend](https://github.com/renancvitor/ironcore-backend/blob/v1.3.0/docs/workout-session/README.md): contratos de execução, preservação histórica e indicadores calculados sobre dados executados.
- A história, as funcionalidades anteriores e a infraestrutura têm como base a revisão de 22/10/2026; as releases antigas permanecem como registros dos respectivos marcos nos repositórios oficiais.

## Engenharia

- [Arquitetura do frontend](https://github.com/renancvitor/ironcore-frontend/blob/v1.2.0/docs/architecture/README.md): core/shared/layout/features, navegação, recuperação coordenada de autenticação, tratamento de 401/429 e CSRF. Tokens não ficam no JavaScript; somente leituras elegíveis são repetidas após recuperação, nunca escritas automaticamente. A renovação automática depende dos recursos compatíveis do navegador.
- [Rotas implementadas](https://github.com/renancvitor/ironcore-frontend/blob/main/src/app/app.routes.ts): conferência de loadComponent e das features atuais.
- [Arquitetura do backend](https://github.com/renancvitor/ironcore-backend/blob/main/docs/architecture/README.md): DDD pragmático, camadas, contratos e separação Person/User.
- [Testes do backend](https://github.com/renancvitor/ironcore-backend/blob/main/docs/testing/README.md): testes por camada, Testcontainers e migrations reais.
- [Banco e migrations](https://github.com/renancvitor/ironcore-backend/blob/v1.3.0/docs/database/README.md): persistência de sessões de treino, atividades, séries e autenticação, com evolução Flyway.
- [Users e Auth](https://github.com/renancvitor/ironcore-backend/blob/v1.3.0/docs/users/README.md): sessão persistida consultada além da assinatura do JWT, cookies Secure/HttpOnly, refresh de uso único com rotação, revogação no logout e das sessões anteriores após alteração de senha, expiração por inatividade e teto absoluto, CSRF e controle persistido de tentativas. A troca normal de senha emite uma nova sessão para a requisição atual.
- [Deploy do frontend](https://github.com/renancvitor/ironcore-frontend/blob/main/docs/deploy/README.md): Cloudflare Pages, cookie, CSRF e independência do CI.
- [Deploy do backend](https://github.com/renancvitor/ironcore-backend/blob/main/docs/deploy/README.md): Java 21, Spring Boot 3.5, OVHcloud no Canadá, Caddy, Supabase em São Paulo e TLS.
- [Workflow CD implementado](https://github.com/renancvitor/ironcore-backend/blob/main/.github/workflows/cd.yml): condições de CI aprovado e nova verificação Maven antes do envio.

## Diferenças de contexto resolvidas

1. Releases antigas e o briefing descrevem etapas anteriores. O escopo entregue é o das releases oficiais consultadas: sessões, histórico e evolução de força e cardio já existem. Geração de treinos por IA, aderência inferida e registro offline não foram apresentados como entregues.
2. Workout Planning define a prescrição; Workout Session registra dados efetivamente informados. Iniciar ou encerrar uma sessão não transforma valores planejados em execução. Indicadores usam dados executados; a preservação histórica independe de mudanças posteriores no planejamento.
3. Os marcos de implantação e identidade da revisão de 22/10/2026 permanecem identificados como tal; não houve nova verificação da infraestrutura de produção.
4. A seleção possui 14 capturas principais: Home substituída e quatro adições (12–15), com PNGs intactos. O registro opcional 11 permanece fora da publicação. O antigo Perfil de número 12 pertence à coleta histórica e não é a nova captura de sessão.
5. O guia foi fornecido originalmente em LEIA-ME.md. O [guia de imagens no repositório](https://github.com/renancvitor/ironcore-showcase/blob/main/docs/guia-imagens.md) mantém a orientação atual; o arquivo da raiz é um encaminhamento. O link absoluto permite consultar o guia sem incluí-lo no pacote estático público.
6. As capturas 04 e 15 são parciais. A 15 mostra exclusivamente gráfico e tabela de volume de força, sem cabeçalho; os demais indicadores documentados não receberam imagens artificiais.
7. Publicação aparece no briefing histórico. Esta atualização é exclusivamente local: nenhum comando Git, branch, commit, PR, instalação ou publicação foi executado; workflow manual preservado.

Não são publicadas contagens de testes, percentuais de cobertura, credenciais ou promessas de disponibilidade. A hospedagem descrita é a da aplicação IronCore; este showcase é um site independente destinado ao GitHub Pages.

## Refinamento editorial e identidade cromática

Consulta direta aos três arquivos oficiais do frontend, sem modificá-los:

- [Paleta](https://github.com/renancvitor/ironcore-frontend/blob/main/src/styles/_palette.scss): verdes principal #25a244, hover #2dc653, active #208b3a e suave #6ede8a; neutros da interface.
- [Temas](https://github.com/renancvitor/ironcore-frontend/blob/main/src/styles/_themes.scss): tema escuro com fundo #212529, superfície #161a1d, superfície elevada #131515, texto principal #f8f9fa e secundário #edf2f4.
- [Tokens](https://github.com/renancvitor/ironcore-frontend/blob/main/src/styles/_tokens.scss): referência de foco com largura e afastamento de 2 px. Tipografia e composição do showcase permanecem próprias.

O showcase reutiliza esses papéis para fundos e textos. Verde principal identifica a borda da ação de navegação; hover e active usam os respectivos verdes oficiais. Verde suave destaca títulos, links e foco, mantendo contraste nos fundos escuros. Divisórias decorativas usam #333533 e bordas dos controles usam #6c757d. A chamada principal usa contorno, sem preenchimento promocional. Não foram importados estilos, fontes ou dependências do frontend.

O hero apresenta o texto superior “PROJETO PESSOAL”, o título “IronCore” e a descrição aprovada: “O IronCore conecta avaliações corporais, exercícios e planejamento de treinos. Um lugar para acompanhar suas medidas e dar estrutura aos seus objetivos.” Não há slogan ou subtítulo entre o título e a descrição. Os metadados seguem essa apresentação; o conteúdo técnico permanece na seção de engenharia.

A página não exibe mais identificadores de versão/release. A autoria de Renan Vitor está explicitada na seção do projeto e aponta para o perfil proprietário dos repositórios; o nome também consta na seção de contato do README oficial do frontend. Documentos históricos mantêm suas referências de versão.

[Índice de documentação no repositório](https://github.com/renancvitor/ironcore-showcase/blob/main/docs/README.md)
