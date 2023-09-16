# Bun for Back-end application

## How to create a project

### Create a HTTP server

```bash
$ mkdir <project-name>
$ cd <project-name>
$ bun init
$ bun test         # or `bun --watch test`
$ bun run index.ts # or `bun run --watch index.ts`
```

### Add packages

```bash
$ bun add <pakcage-name>
$ bun add -d <package-name-for-develop>
```

### Install the TypeScript definitions

```bash
$ bun add -d bun-types # dev dependency
```

## How to create an ElysiaJS project

```bash
bun create elysia <project-name>
cd <project-name>
bun run src/index.ts
```

## References

- <https://bun.sh/docs/quickstart>
