import path from "node:path"
import url from "node:url"
import { defineConfig } from "vitest/config"
import tsconfigJson from "./tsconfig.json"

const projectDirectory = path.join(url.fileURLToPath(import.meta.url), "..")

export default defineConfig(() => ({
	resolve: {
		alias: getAliasesFromTsconfig(),
	},
	test: {
		cache: {
			dir: inProjectDirectory("node_modules/.cache/vitest/"),
		},
		coverage: {
			include: ["app/**/*.{ts,tsx}"],
			exclude: [
				"app/**/*.stories.{ts,tsx}",
				"app/**/*.testdata.{ts,tsx}",
				"app/**/*.tests.{ts,tsx}",
			],
			provider: "v8" as const,
			reportsDirectory: inProjectDirectory(
				"node_modules/.cache/vitest/coverage/",
			),
		},
		include: ["app/**/*.tests.{ts,tsx}"],
	},
}))

function getAliasesFromTsconfig(): Record<string, string> {
	return Object.fromEntries(
		Object.entries(tsconfigJson.compilerOptions.paths).map(
			([alias, [path]]) => [
				alias.slice(0, -"/*".length),
				inProjectDirectory(path.slice(0, -"/*".length)),
			],
		),
	)
}

function inProjectDirectory(relativePath: string): string {
	return path.resolve(projectDirectory, relativePath)
}
