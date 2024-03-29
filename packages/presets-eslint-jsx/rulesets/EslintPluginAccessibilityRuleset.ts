import { type EslintPluginRuleset } from "@rainstormy/presets-eslint/dist/EslintConfig.js"

export type EslintPluginAccessibilityRuleset = EslintPluginRuleset<
	"accessibility",
	| "accessibility/alt-text"
	| "accessibility/anchor-ambiguous-text"
	| "accessibility/anchor-has-content"
	| "accessibility/anchor-is-valid"
	| "accessibility/aria-activedescendant-has-tabindex"
	| "accessibility/aria-props"
	| "accessibility/aria-proptypes"
	| "accessibility/aria-role"
	| "accessibility/aria-unsupported-elements"
	| "accessibility/autocomplete-valid"
	| "accessibility/click-events-have-key-events"
	| "accessibility/control-has-associated-label"
	| "accessibility/heading-has-content"
	| "accessibility/html-has-lang"
	| "accessibility/iframe-has-title"
	| "accessibility/img-redundant-alt"
	| "accessibility/interactive-supports-focus"
	| "accessibility/label-has-associated-control"
	| "accessibility/lang"
	| "accessibility/media-has-caption"
	| "accessibility/mouse-events-have-key-events"
	| "accessibility/no-access-key"
	| "accessibility/no-autofocus"
	| "accessibility/no-distracting-elements"
	| "accessibility/no-interactive-element-to-noninteractive-role"
	| "accessibility/no-noninteractive-element-interactions"
	| "accessibility/no-noninteractive-element-to-interactive-role"
	| "accessibility/no-noninteractive-tabindex"
	| "accessibility/no-redundant-roles"
	| "accessibility/no-static-element-interactions"
	| "accessibility/prefer-tag-over-role"
	| "accessibility/role-has-required-aria-props"
	| "accessibility/role-supports-aria-props"
	| "accessibility/scope"
	| "accessibility/tabindex-no-positive"
>
