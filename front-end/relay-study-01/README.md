# README
## How to create a project

```sh
$ bun create vite relay-study-01 --template react-swc-ts
$ cd relay-study-01
$ bun install
$ bun run dev
$ bun run build
```

## Add dependencies for runtime

```sh
$ bun add react-relay relay-runtime
```

## Add dependencies for development

```sh
$ bun add --dev @types/react-relay @types/relay-runtime
$ bun add --dev relay-compiler
```

## Create `relay.config.json` for `relay-compiler`

```sh
$ touch relay.config.json
```

```json
{
  "src": "./src",
  "schema": "./server/schema.graphql",
  "language": "typescript"
}
```

## Add scripts to `package.json` for `relay-compiler`

```json
{
  "scripts": {
  ...
  "relay": "relay-compiler",
  "watch-relay": "relay-compiler --watch",
  ...
}
```
