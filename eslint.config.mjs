import globals from "globals";
import base from "@eslint/js";
import stylistic from "@stylistic/eslint-plugin";

export default [
    { languageOptions: { globals: globals.node } },
    base.configs.recommended,
    {
        rules: {
            "prefer-const": ["error"],
            "no-var": ["error"],
        },
    },

    // using recommend stylistic config but override some rules
    stylistic.configs.customize({
        // idk, in document said default is "1tbs" but it's really "stroustrup"
        braceStyle: "1tbs",
        // more readable, and indent 4 is recommend for backend nodejs
        indent: 4,
        // other language prefered double quotes
        quotes: "double",
        // other language prefered semi-colon
        semi: true,
    }),
];
