# My React Vite Template

## React + Vite

This template provides a minimal setup to get React working in Vite.

- For example it is configured for HMR and some ESLint rules.

## How To Clone

In desired directory run:

```sh
npx tiged https://github.com/ScottFeichter/my-react-vite-template.git react-vite-template
```

- Clones the repo main branch in the directory where it is run.

## How To Track

From root run:

```sh
git init
git add .
git commit -m "initial"
```

- The .gitignore is already provided in the clone.

## How To Install

From root run:

```sh
npm install
```

## How To Run

From root run:

```sh
npm run dev
```

- This runs the `dev` script from your __package.json__ file.

- You will run this command whenever you want to start your app.

- To end the app press ctr + c in running shell.

## Running App

When it runs, you should see something like this in the shell:

```bash
VITE v4.5.0  ready in 592 ms

  ➜  Local:   http://127.0.0.1:5173/
  ➜  Network: use --host to expose
  ➜  press h to show help
```
- You might see `Local: http://localhost:5173/` instead.

- This resolves to http://127.0.0.1:5173/ no problem.

## Open Running App In Browser

Navigate to: [http://localhost:5173](http://localhost:5173)

- Or type `o` in the running shell

  - You should see `Hello from App`


## Change Some Details

__react-vite-template__

- change the name of the parent directory

__index.html__

- change `title`

__package.json__

- change `"name"`

__README.md__

- customize to your project


## Commit Changes

From root run:

```sh
git add .
git commit -m "completed setup"
```

## Plugins

As of writing two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
