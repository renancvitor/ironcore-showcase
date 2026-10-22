# Fontes e revisão editorial

Consulta em 22/10/2026, somente leitura. Este showcase apresenta o escopo funcional v1.0.0 e a implantação documentada posteriormente. Não houve acesso à produção nem teste autenticado contra a API.

## Produto e história

- [README do frontend](https://github.com/renancvitor/ironcore-frontend/blob/main/README.md): funcionalidades entregues, stack, testes e estado atual.
- [Release v1.0.0 do frontend](https://github.com/renancvitor/ironcore-frontend/blob/main/docs/releases/v1.0.0/README.md): avaliações, gráficos, catálogo, planejamento, prescrição e limites.
- [README do backend](https://github.com/renancvitor/ironcore-backend/blob/main/README.md): origem como aplicação prática, evolução incremental e estado atual.
- [Release v1.0.0 do backend](https://github.com/renancvitor/ironcore-backend/blob/main/docs/releases/v1.0.0/README.md): domínio de planejamento, ownership e lifecycle.

## Engenharia

- [Arquitetura do frontend](https://github.com/renancvitor/ironcore-frontend/blob/main/docs/architecture/README.md): core/shared/layout/features, reutilização do catálogo, sessão e responsabilidades.
- [Rotas implementadas](https://github.com/renancvitor/ironcore-frontend/blob/main/src/app/app.routes.ts): conferência de loadComponent e das features atuais.
- [Arquitetura do backend](https://github.com/renancvitor/ironcore-backend/blob/main/docs/architecture/README.md): DDD pragmático, camadas, contratos e separação Person/User.
- [Testes do backend](https://github.com/renancvitor/ironcore-backend/blob/main/docs/testing/README.md): testes por camada, Testcontainers e migrations reais.
- [Banco e migrations](https://github.com/renancvitor/ironcore-backend/blob/main/docs/database/README.md): relações, schema implementado e Flyway.
- [Users e Auth](https://github.com/renancvitor/ironcore-backend/blob/main/docs/users/README.md): cookies, CSRF, usuário único e limites de autenticação.
- [Deploy do frontend](https://github.com/renancvitor/ironcore-frontend/blob/main/docs/deploy/README.md): Cloudflare Pages, cookie, CSRF e independência do CI.
- [Deploy do backend](https://github.com/renancvitor/ironcore-backend/blob/main/docs/deploy/README.md): Java 21, Spring Boot 3.5, OVHcloud no Canadá, Caddy, Supabase em São Paulo e TLS.
- [Workflow CD implementado](https://github.com/renancvitor/ironcore-backend/blob/main/.github/workflows/cd.yml): condições de CI aprovado e nova verificação Maven antes do envio.

## Diferenças de contexto resolvidas

1. A release histórica do backend ainda descreve o frontend como fora do escopo implementado naquele marco. Os READMEs e documentos atuais de deploy registram frontend e backend integrados em produção. A narrativa usa esse estado posterior, preservando a release como registro histórico.
2. O README do backend também contém listas de funcionalidades planejadas e diagramas futuros. Elas não foram usadas como evidência de entrega. Sessões, histórico de execução e IA não são apresentados como recursos disponíveis.
3. A release do frontend exclui deploy das ações daquela entrega; o documento posterior de deploy confirma a implantação. São marcos diferentes.
4. O briefing tinha pendências de coleta já resolvidas em sua seção 11 e no pacote fornecido. A especificação atual fixa dez imagens e proíbe novos recortes ou conversões. Todos os PNGs foram usados sem alteração.
5. O caminho solicitado docs/guia-imagens.md não existia no pacote. LEIA-ME.md contém o guia integral: foi preservado e copiado literalmente para o caminho solicitado.
6. A captura 04 mostra um gráfico parcial. A legenda informa esse limite; a imagem 03 permanece como destaque da avaliação.
7. Publicação aparece como aceite no briefing histórico, mas a especificação atual exige autorização. O workflow é exclusivamente manual; não foi acionado.

Não são publicadas contagens de testes, percentuais de cobertura, credenciais ou promessas de disponibilidade. A hospedagem descrita é a da aplicação IronCore; este showcase é um site independente destinado ao GitHub Pages.
