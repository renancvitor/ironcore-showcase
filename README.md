<h1 align="center">
  IronCore Showcase
</h1>
<p align="center">
  <img src="https://img.shields.io/badge/Status-In%20Progress-yellow" width="150" height="30" alt="Status: em desenvolvimento" />
</p>

---

<h2 align="center">🔗 Repositórios Relacionados</h2>

A aplicação apresentada neste showcase está organizada em dois repositórios independentes:

- 🌐 [IronCore Frontend](https://github.com/renancvitor/ironcore-frontend): interface Angular e experiência de uso.
- ☕ [IronCore Backend](https://github.com/renancvitor/ironcore-backend): API, regras de domínio e persistência.

---

<h2 id="sumario" align="center">Sumário</h2>

- [Visão Geral do Projeto](#visao-geral-do-projeto)
- [Status Atual do Projeto](#status-atual-do-projeto)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Funcionalidades Disponíveis](#funcionalidades-disponiveis)
- [Documentação Técnica](#documentacao-tecnica)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Como Executar o Projeto](#como-executar-o-projeto)
- [Testes e Validações](#testes-e-validacoes)
- [Deploy](#deploy)

---

<h2 id="visao-geral-do-projeto" align="center">Visão Geral do Projeto</h2>

**IronCore Showcase** é a apresentação pública do IronCore, um projeto pessoal voltado ao acompanhamento corporal e ao planejamento de treinos.

O site combina uma jornada visual pelas funcionalidades da aplicação com uma seção sobre arquitetura, tecnologias, segurança, qualidade e infraestrutura. A proposta é tornar o projeto compreensível para visitantes sem conhecimento técnico e oferecer contexto para desenvolvedores e recrutadores.

A apresentação utiliza capturas reais e conteúdo fundamentado nos repositórios originais. Seu funcionamento é inteiramente estático, sem autenticação, chamadas à API, banco de dados, analytics ou persistência no navegador.

<p align="right"><a href="#sumario">⬆️ Voltar ao sumário</a></p>

---

<h2 id="status-atual-do-projeto" align="center">Status Atual do Projeto</h2>

A implementação estática está disponível neste repositório, com layout responsivo, dez capturas autorizadas, galerias manuais, ampliação de imagens e conteúdo técnico documentado.

O site possui validações automatizadas em navegador e preparação para publicação no GitHub Pages. Os resultados e limites das verificações estão registrados em [Validação](docs/validacao.md). A existência do workflow de publicação não confirma um deploy; seu acionamento é manual.

As funcionalidades apresentadas correspondem ao escopo entregue do IronCore. Execução e histórico de sessões de treino, assim como geração de treinos por IA, não são apresentados como recursos disponíveis.

<p align="right"><a href="#sumario">⬆️ Voltar ao sumário</a></p>

---

<h2 id="tecnologias-utilizadas" align="center">Tecnologias Utilizadas</h2>

- **HTML semântico:** estrutura do conteúdo, navegação e metadados.
- **CSS:** identidade visual baseada na paleta oficial, responsividade e estados de foco.
- **JavaScript nativo:** galerias manuais e ampliação com `dialog`.
- **Node.js 24:** scripts de prévia local, empacotamento e validação.
- **Playwright Core e Microsoft Edge:** verificação opcional em navegador, isolada na pasta de QA.
- **GitHub Actions e GitHub Pages:** fluxo manual de publicação dos arquivos estáticos.

O site não exige framework, instalação de dependências ou compilação para funcionar. As ferramentas de validação não integram o artefato publicado.

<p align="right"><a href="#sumario">⬆️ Voltar ao sumário</a></p>

---

<h2 id="funcionalidades-disponiveis" align="center">Funcionalidades Disponíveis</h2>

- Apresentação do IronCore com a captura da Home.
- Jornada visual por avaliação e evolução corporal, catálogo de exercícios e planejamento de treinos.
- Galerias sem autoplay, com controles manuais e navegação por teclado.
- Ampliação das dez capturas, fechamento por Esc e retorno do foco ao acionador.
- Seção de engenharia com decisões técnicas e links para as fontes.
- História do projeto, autoria e acesso aos repositórios oficiais.
- Layout responsivo, textos alternativos, foco visível e respeito à preferência por movimento reduzido.

Os PNGs são preservados integralmente. Sem JavaScript, as imagens continuam visíveis em sequência e seus links abrem os respectivos PNGs. A ordem editorial e os cuidados de apresentação estão no [Guia de imagens](docs/guia-imagens.md).

<p align="right"><a href="#sumario">⬆️ Voltar ao sumário</a></p>

---

<h2 id="documentacao-tecnica" align="center">Documentação Técnica</h2>

O [índice de documentação](docs/README.md) centraliza as referências do showcase:

- [Guia de imagens](docs/guia-imagens.md): sequência editorial e preservação das capturas.
- [Fontes e revisão editorial](docs/fontes.md): fundamentação do conteúdo e identidade cromática.
- [Validação](docs/validacao.md): verificações executadas e limites conhecidos.
- [Briefing histórico](docs/briefing.md): requisitos e decisões originais preservados.

<p align="right"><a href="#sumario">⬆️ Voltar ao sumário</a></p>

---

<h2 id="estrutura-do-projeto" align="center">Estrutura do Projeto</h2>

```plaintext
ironcore-showcase/
 ├── index.html                 # Conteúdo, navegação, capturas e modal
 ├── styles.css                 # Identidade visual e layout responsivo
 ├── script.js                  # Galerias e ampliação
 ├── assets/                    # Favicon e capturas autorizadas
 ├── docs/                      # Índice, guias, fontes e validações
 ├── scripts/                   # Prévia local, empacotamento e teste de navegador
 ├── .github/workflows/pages.yml # Publicação manual no GitHub Pages
 ├── manifesto-imagens.json     # Proveniência e dimensões das capturas
 ├── LEIA-ME.md                 # Encaminhamento para o guia do pacote
 └── README.md                  # Apresentação e instruções principais
```

O diretório `dist/` é gerado pelo empacotador e ignorado pelo Git. Originais, imagens opcionais e arquivos de QA ficam fora do artefato de publicação.

<p align="right"><a href="#sumario">⬆️ Voltar ao sumário</a></p>

---

<h2 id="como-executar-o-projeto" align="center">Como Executar o Projeto</h2>

### Pré-requisitos

- Git para clonar o repositório.
- Node.js 24 para a prévia HTTP local.

### Passos

```bash
git clone https://github.com/renancvitor/ironcore-showcase.git
cd ironcore-showcase
node scripts/serve.mjs
```

Abra [http://127.0.0.1:4307/ironcore-showcase/](http://127.0.0.1:4307/ironcore-showcase/). O servidor reproduz o subdiretório usado no GitHub Pages e serve a seleção de arquivos copiada para `dist/`.

Encerre com `Ctrl+C`. Após editar arquivos, reinicie o servidor e atualize a página. Também é possível abrir `index.html` diretamente no navegador.

<p align="right"><a href="#sumario">⬆️ Voltar ao sumário</a></p>

---

<h2 id="testes-e-validacoes" align="center">Testes e Validações</h2>

As verificações básicas de sintaxe, empacotamento e formatação são:

```bash
node --check script.js
node scripts/package.mjs
git diff --check
```

A verificação opcional em navegador usa Playwright Core e Microsoft Edge. Com o servidor local em execução, utilize outro terminal:

```bash
npm install --prefix .qa --no-save --package-lock=false playwright-core
node scripts/browser-check.mjs
```

O script verifica quatro larguras de tela, galerias, ampliação, teclado e foco, caminhos em subdiretório, funcionamento sem JavaScript e integridade dos PNGs. `PLAYWRIGHT_MODULE` e `BROWSER_PATH` permitem indicar instalações alternativas; evidências ficam em `.qa/`, ignorada pelo Git.

Consulte [Validação](docs/validacao.md) para os resultados registrados e os limites de cobertura.

<p align="right"><a href="#sumario">⬆️ Voltar ao sumário</a></p>

---

<h2 id="deploy" align="center">Deploy</h2>

O destino previsto é [IronCore Showcase no GitHub Pages](https://renancvitor.github.io/ironcore-showcase/). O site usa caminhos relativos compatíveis com esse subdiretório.

O [workflow de publicação](.github/workflows/pages.yml) é exclusivamente manual. Após autorização do responsável:

1. Configure **Settings → Pages → Source** como **GitHub Actions**.
2. Execute **Actions → Publish showcase (manual) → Run workflow**, selecionando a `main`.
3. Confira a URL retornada e a navegação do site publicado.

O workflow empacota os arquivos permitidos em `dist/` e publica somente esse diretório. Não publique a raiz inteira do repositório: originais, documentos internos e ferramentas de QA não pertencem ao artefato.

As alterações são realizadas diretamente na `main`, com sincronização, validação, commit e envio para `origin/main`. O envio de commits não aciona a publicação.

<p align="right"><a href="#sumario">⬆️ Voltar ao sumário</a></p>
