# Landing Page | IA, Automação e Sistemas Inteligentes

Landing page pessoal de **Lohan Silva** para apresentar serviços de IA, automação, agentes inteligentes, integrações e sistemas web personalizados.

O projeto foi construído com Angular standalone components e Tailwind CSS, com foco em uma experiência visual moderna, responsiva e voltada à conversão de visitantes em leads por meio de um formulário incorporado.

## Sumário

- [Sobre o projeto](#sobre-o-projeto)
- [Principais recursos](#principais-recursos)
- [Tecnologias](#tecnologias)
- [Estrutura do projeto](#estrutura-do-projeto)
- [Pré-requisitos](#pré-requisitos)
- [Como rodar localmente](#como-rodar-localmente)
- [Scripts disponíveis](#scripts-disponíveis)
- [Build de produção](#build-de-produção)
- [Deploy](#deploy)
- [Personalização](#personalização)
- [Observações](#observações)

## Sobre o projeto

A página apresenta uma proposta profissional para soluções de tecnologia aplicadas a empresas, incluindo:

- automação de processos repetitivos;
- agentes de IA personalizados;
- integrações entre sistemas, ERPs, CRMs, planilhas e APIs;
- dashboards e monitoramento;
- assistentes com RAG;
- processamento inteligente de documentos;
- sistemas web e backends escaláveis.

A landing page possui navegação por seções, tela inicial de carregamento, botão para voltar ao topo, cards de serviços, vitrine de projetos e uma seção de formulário para coleta de demandas.

## Principais recursos

- Interface responsiva para desktop e mobile.
- Componentes Angular standalone.
- Estilização com Tailwind CSS.
- Animações leves e suporte a `prefers-reduced-motion`.
- Dados de navegação, serviços, stack e projetos centralizados em `src/app/app.data.ts`.
- Formulário incorporado via Google Forms.
- Script de build com fallback estático caso o Angular CLI não esteja disponível em `node_modules`.

## Tecnologias

- [Angular](https://angular.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [PostCSS](https://postcss.org/)
- [RxJS](https://rxjs.dev/)

## Estrutura do projeto

```text
.
├── public/
│   └── favicon.svg
├── src/
│   ├── app/
│   │   ├── components/       # Componentes reutilizáveis, como navbar, loading e scroll-top
│   │   ├── sections/         # Seções principais da landing page
│   │   ├── app.component.ts  # Composição da página
│   │   └── app.data.ts       # Conteúdos exibidos nas seções
│   ├── index.html
│   ├── main.ts
│   └── styles.css
├── tools/
│   └── build.mjs             # Build Angular ou fallback estático
├── angular.json
├── package.json
├── tailwind.config.js
└── tsconfig.json
```

## Pré-requisitos

Antes de começar, tenha instalado:

- Node.js em uma versão compatível com Angular 20;
- npm;
- Git, caso queira clonar e versionar o projeto.

> Dica: se estiver usando `nvm`, escolha uma versão LTS recente do Node.js.

## Como rodar localmente

1. Clone o repositório:

   ```bash
   git clone <url-do-repositorio>
   cd landing-page-work
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Inicie o servidor de desenvolvimento:

   ```bash
   npm start
   ```

4. Acesse no navegador:

   ```text
   http://localhost:4200
   ```

O servidor de desenvolvimento recompila a aplicação automaticamente quando os arquivos são alterados.

## Scripts disponíveis

| Script | Descrição |
| --- | --- |
| `npm start` | Inicia o servidor de desenvolvimento do Angular. |
| `npm run build` | Gera a versão de produção em `dist/lohan-ai-automation-landing`. |
| `npm run watch` | Executa build em modo observação para desenvolvimento. |
| `npm test` | Executa os testes configurados pelo Angular/Karma. |
| `npm run deploy:gh-pages` | Executa o deploy para GitHub Pages usando `ng deploy` e `base-href` do repositório. |

## Build de produção

Para gerar os arquivos finais da aplicação:

```bash
npm run build
```

A saída será criada em:

```text
dist/lohan-ai-automation-landing
```

O script `tools/build.mjs` tenta usar o Angular CLI instalado em `node_modules`. Se ele não encontrar o binário local do Angular CLI, gera uma versão HTML estática de fallback em `dist/lohan-ai-automation-landing/browser`.

## Deploy

O projeto inclui um script para GitHub Pages:

```bash
npm run deploy:gh-pages
```

Esse comando utiliza:

```bash
ng deploy --base-href=/landing-page-work/
```

Caso o nome do repositório ou o caminho público seja diferente, atualize o `base-href` no script `deploy:gh-pages` do `package.json`.

## Personalização

Os principais pontos para personalizar o conteúdo são:

- `src/app/app.data.ts`: textos de navegação, serviços, tecnologias, exemplos de problemas e projetos.
- `src/app/sections/hero-section.component.ts`: chamada principal da página.
- `src/app/sections/about-section.component.ts`: seção de apresentação.
- `src/app/sections/lead-form-section.component.ts`: formulário incorporado.
- `src/styles.css`: estilos globais, utilitários e animações.
- `tailwind.config.js`: tema visual, cores, sombras e extensões do Tailwind.

## Observações

- O projeto está configurado como uma aplicação Angular sem módulo raiz tradicional, usando componentes standalone.
- O favicon fica em `public/favicon.svg`.
- A página usa fontes externas do Google Fonts configuradas em `src/index.html`.
- Para alterar dados exibidos em cards e menus, prefira editar `src/app/app.data.ts` em vez de repetir textos nos componentes.
