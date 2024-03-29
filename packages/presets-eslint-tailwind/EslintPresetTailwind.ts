import { type EslintPresetsStandardRuleset } from "@rainstormy/presets-eslint"
import { type EslintPreset } from "@rainstormy/presets-eslint/dist/EslintConfig.js"
import tailwindPlugin from "eslint-plugin-tailwindcss"
import { type EslintPluginTailwindRuleset } from "./rulesets/EslintPluginTailwindRuleset.js"

export type EslintPresetTailwind = EslintPreset<
	EslintPresetsStandardRuleset,
	EslintPluginTailwindRuleset
>

/**
 * A predefined, opinionated ESLint configuration for JSX components with Tailwind CSS classes.
 *
 * ```javascript
 * eslintPresetTailwind()
 * ```
 *
 * is equivalent to
 *
 * ```javascript
 * eslintPresetTailwind({
 *     targetFilePatterns: ["**\/*.@(jsx|tsx)"],
 *     overrideRules: {},
 * })
 * ```
 *
 * @see https://github.com/francoismassart/eslint-plugin-tailwindcss#supported-rules tailwind/*
 */
export function eslintPresetTailwind(
	options: {
		readonly additionalClassNames?: ReadonlyArray<string>
		readonly classNameFunctions?: ReadonlyArray<string>
		readonly overrideRules?: Partial<EslintPresetTailwind["rules"]>
		readonly tailwindConfigPath?: string
		readonly targetFilePatterns?: ReadonlyArray<string>
	} = {},
): EslintPresetTailwind {
	const {
		additionalClassNames,
		classNameFunctions,
		overrideRules,
		tailwindConfigPath,
		targetFilePatterns = ["**/*.@(jsx|tsx)"],
	} = options

	return {
		files: targetFilePatterns,
		plugins: {
			tailwind: tailwindPlugin,
		},
		rules: {
			/**
			 * Prettier supersedes this rule.
			 * @see https://github.com/francoismassart/eslint-plugin-tailwindcss/blob/master/docs/rules/classnames-order.md
			 */
			"tailwind/classnames-order": "off",

			/**
			 * @see https://github.com/francoismassart/eslint-plugin-tailwindcss/blob/master/docs/rules/enforces-negative-arbitrary-values.md
			 */
			"tailwind/enforces-negative-arbitrary-values": "error",

			/**
			 * @see https://github.com/francoismassart/eslint-plugin-tailwindcss/blob/master/docs/rules/enforces-shorthand.md
			 */
			"tailwind/enforces-shorthand": "error",

			/**
			 * Detects obsolete code snippets borrowed from the Internet.
			 * @see https://github.com/francoismassart/eslint-plugin-tailwindcss/blob/master/docs/rules/migration-from-tailwind-2.md
			 */
			"tailwind/migration-from-tailwind-2": "error",

			/**
			 * Arbitrary values are allowed.
			 * @see https://github.com/francoismassart/eslint-plugin-tailwindcss/blob/master/docs/rules/no-arbitrary-value.md
			 */
			"tailwind/no-arbitrary-value": "off",

			/**
			 * @see https://github.com/francoismassart/eslint-plugin-tailwindcss/blob/master/docs/rules/no-contradicting-classname.md
			 */
			"tailwind/no-contradicting-classname": "error",

			/**
			 * Catches typos in class names.
			 * @see https://github.com/francoismassart/eslint-plugin-tailwindcss/blob/master/docs/rules/no-custom-classname.md
			 */
			"tailwind/no-custom-classname": "error",

			...overrideRules,
		},
		settings: {
			tailwindcss: {
				callees: classNameFunctions ?? [],
				config: tailwindConfigPath,
				tags: classNameFunctions ?? [],
				cssFiles: [],
				whitelist:
					additionalClassNames?.map(convertClassNameToRegex).join("|") ?? [],
			},
		},
	}
}

function convertClassNameToRegex(className: string): string {
	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions#escaping
	return className.replaceAll(/[$()*+.?[\\\]^{|}]/gu, "\\$&")
}
