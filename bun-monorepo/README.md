# README
## How to create <monorepo-project-name>

```bash
mkdir <monorepo-project-name>
cd <monorepo-project-name>
bun init -y
```

### Modify `package.json` file for Monorepo

```json
{
    ...

    "private": true,
    "workspaces": [
        "packages/*"
    ]

    ...
}
```

## How to install dependencies

```bash
bun run clean
bun install
```

## How to run

```bash
bun run start:server
bun run start:client
```
