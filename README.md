# README
## Setup environment

### Install Bun for macOS or Linux

```bash
$ curl -fsSL https://bun.sh/install | bash
```

### Upgrade Bun

```bash
$ bun upgrade
```

### Uninstall Bun for macOs or Linux

```bash
$ rm -rf ~/.bun
```

## Create Porject

### Initialize a project

```bash
$ mkdir <project-name>
$ cd <project-name>
$ bun init
```

### Install packages

```bash
$ bun add <package-name>
$ bun add -d <package-name-for-develop>
```

### Create a file

`index.ts`

```javascript
const server = Bun.serve({
  port: 3000,
  fetch(req) {
    return new Response("Bun!");
  },
});

console.log(`Listening on http://localhost:${server.port} ...`);
```

### Run project

```bash
$ bun index.ts
```


## References

- <https://bun.sh/docs/quickstart>
