<h1 align="center">
  IronCore Showcase
</h1>
<p align="center">
  <img src="https://img.shields.io/badge/Status-In%20Progress-yellow" width="150" height="30" alt="Status: em desenvolvimento" />
</p>

---

<h2 align="center">🔗 Repositórios Relacionados</h2>

- 🌐 [IronCore Frontend](https://github.com/renancvitor/ironcore-frontend)
- ☕ [IronCore Backend](https://github.com/renancvitor/ironcore-backend)

---

<h2 id="sumario" align="center">Sumário</h2>

- [Visão Geral do Projeto](#visao-geral-do-projeto)
- [Status Atual do Projeto](#status-atual-do-projeto)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Funcionalidades Disponíveis](#funcionalidades-disponiveis)
- [Documentação Técnica](#documentacao-tecnica)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Como Executar o Projeto](#como-executar-o-projeto)
- [Deploy](#deploy)

---

<h2 id="visao-geral-do-projeto" align="center">Visão Geral do Projeto</h2>

**IronCore Showcase** é a apresentação pública do IronCore, um projeto pessoal de acompanhamento corporal e planejamento de treinos. O site reúne capturas reais da aplicação e uma seção dedicada à engenharia do projeto.

<p align="right"><a href="#sumario">⬆️ Voltar ao sumário</a></p>

---

<h2 id="status-atual-do-projeto" align="center">Status Atual do Projeto</h2>

O site estático está implementado, com apresentação das funcionalidades, galerias de imagens e conteúdo técnico. A estrutura está preparada para publicação manual no GitHub Pages.

<p align="right"><a href="#sumario">⬆️ Voltar ao sumário</a></p>

---

<h2 id="tecnologias-utilizadas" align="center">Tecnologias Utilizadas</h2>

- **HTML:** estrutura e conteúdo.
- **CSS:** identidade visual e responsividade.
- **JavaScript:** interações das galerias e ampliação de imagens.
- **GitHub Pages:** hospedagem estática prevista.

<p align="right"><a href="#sumario">⬆️ Voltar ao sumário</a></p>

---

<h2 id="funcionalidades-disponiveis" align="center">Funcionalidades Disponíveis</h2>

- Apresentação de avaliações corporais, exercícios e planejamento de treinos.
- Galerias manuais e ampliação de capturas reais.
- Seção sobre arquitetura, tecnologias e infraestrutura do IronCore.
- História, autoria e links para os repositórios oficiais.
- Layout responsivo e navegação acessível.

<p align="right"><a href="#sumario">⬆️ Voltar ao sumário</a></p>

---

<h2 id="documentacao-tecnica" align="center">Documentação Técnica</h2>

Consulte o [índice de documentação](docs/README.md) para o guia de imagens, fontes do conteúdo, registros de validação e briefing histórico.

<p align="right"><a href="#sumario">⬆️ Voltar ao sumário</a></p>

---

<h2 id="estrutura-do-projeto" align="center">Estrutura do Projeto</h2>

```plaintext
index.html   # Conteúdo da página
styles.css   # Estilos e layout
script.js    # Interações
assets/      # Imagens e favicon
docs/        # Documentação
scripts/     # Ferramentas locais
```

<p align="right"><a href="#sumario">⬆️ Voltar ao sumário</a></p>

---

<h2 id="como-executar-o-projeto" align="center">Como Executar o Projeto</h2>

Com Git e Node.js 24 instalados:

```bash
git clone https://github.com/renancvitor/ironcore-showcase.git
cd ironcore-showcase
node scripts/serve.mjs
```

Abra [http://127.0.0.1:4307/ironcore-showcase/](http://127.0.0.1:4307/ironcore-showcase/). Para encerrar, pressione `Ctrl+C`.

<p align="right"><a href="#sumario">⬆️ Voltar ao sumário</a></p>

---

<h2 id="deploy" align="center">Deploy</h2>

A publicação é manual pelo GitHub Actions, usando o [workflow Publish showcase (manual)](.github/workflows/pages.yml) na `main`. O envio de commits não aciona o deploy.

Destino previsto: [IronCore Showcase no GitHub Pages](https://renancvitor.github.io/ironcore-showcase/).

<p align="right"><a href="#sumario">⬆️ Voltar ao sumário</a></p>
