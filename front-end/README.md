# README
## How to create a project

### Create a React app

```bash
$ bun create vite <project-name> --template react-swc-ts
$ cd <project-name>
$ bun install
$ bun run dev
$ bun run build
```

#### Template can choose

- vanilla
- vanilla-ts
- vue
- vue-ts
- react
- react-ts
- react-swc
- react-swc-ts
- preact
- preact-ts
- lit
- lit-ts
- svelte
- svelte-ts
- solid
- solid-ts
- qwik
- qwik-ts

## How to use Tailwind CSS

### Install Tailwind CSS

```bash
$ bun add @headlessui/react @heroicons/react
$ bun add -d tailwindcss postcss autoprefixer
$ bunx tailwindcss init -p
```

### Configure your template paths

In `tailwind.config.js`

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### Add the Tailwind directives to `index.css` file

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Run application

```bash
$ bun run dev
```

## References

- <https://dev.to/ashirbadgudu/create-a-react-app-with-bun-125o>
- <https://tailwindcss.com/docs/guides/vite>
