# Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

### Requirements

- Node.js `>=18`
- Yarn `1.x`
  
Translations rely on Google Gemini. Set `GEMINI_API_KEY` in your environment when using the translation script.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

Run `yarn generate` after building to refresh blog snippets used on the homepage.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

### Translations

Translate the interface using the included script. Example:

```sh
GEMINI_API_KEY=... yarn translate i18n/es/code.json es
```
