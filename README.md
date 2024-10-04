# React + TypeScript + Vite

## Proposta do projeto
* Criar um blog pessoal
* Navegar entre a tela de consulta e os detalhes de cada artigo do blog.

## Abaixo, as instruções iniciais do projeto:
* Crie um fork do projeto
* Edite o arquivo settings.ts e informe suas crdenciais de conexão com o supabase.
* No seu projeto no supabase, selecione o editor sql, e execute os scripts initial e data, que encontram-se no diretório migrations. Esta ação é necessária para a criação da tabela e 
  popular com os dados de teste.
* Execute o projeto

## Pontos a melhorar
* Criar um componente para ser utilizado como barra de progbresso.
* Adicionar a biblioteca **tailwindcss**, para melhoria do layout. 

## Instruções originais ao criar um novo projeto utilizando o framework Vite.

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
