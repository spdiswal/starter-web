# Starter Template for Web Projects

### Usage
1. Replace occurrences of `spdiswal/starter-web` with the appropriate repository or package name.
	- It occurs in `.github/workflows/*.yml`, `docs/*.md`, and `CHANGELOG.md`.

2. Enable publishing to npm by replacing the `private` field in `package.json` with the following fields:
	- `name`
	- `version`
	- `description`
	- `keywords`
	- `main`
	- `types`
	- `files`

### Quick Start
- [Get started on 🍏 macOS](docs/quick-start/get-started-on-macos.md)
- [Get started on 🟦 Windows + 🐧 WSL](docs/quick-start/get-started-on-wsl.md)

| Task             | Description                                  |
|------------------|----------------------------------------------|
| `pnpm check`     | Checks type safety and format.               |
| `pnpm fmt`       | Reformats the source code.                   |
| `pnpm no-verify` | Disables Git hooks.                          |
| `pnpm ready`     | Installs dependencies and restore Git hooks. |
| `pnpm test`      | Runs all unit tests.                         |
| `pnpm vi`        | Starts a Vitest development server.          |

### Developer Guides
- [Manage third-party dependencies](docs/guides/manage-third-party-dependencies.md)
