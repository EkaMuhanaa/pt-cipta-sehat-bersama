/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./app.vue",
        "./error.vue"
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                "primary": "#00a2ff",
                "on-primary": "#ffffff",
                "primary-container": "#e0f2fe",
                "on-primary-container": "#004773",
                "primary-fixed": "#bae6fd",
                "on-primary-fixed": "#003b60",
                "primary-fixed-dim": "#7dd3fc",
                "inverse-primary": "#75c7ff",

                "secondary": "#22c55e",
                "on-secondary": "#ffffff",
                "secondary-container": "#dcfce7",
                "on-secondary-container": "#15803d",
                "secondary-fixed": "#86efac",
                "on-secondary-fixed": "#14532d",
                "secondary-fixed-dim": "#4ade80",

                "tertiary": "#f59e0b",
                "on-tertiary": "#ffffff",
                "tertiary-container": "#fef3c7",
                "on-tertiary-container": "#b45309",
                "tertiary-fixed": "#fde68a",
                "on-tertiary-fixed": "#78350f",
                "tertiary-fixed-dim": "#818cf8",

                "background": "#f8fafc",
                "on-background": "#0f172a",
                "surface": "#f8fafc",
                "on-surface": "#0f172a",
                "surface-variant": "#e2e8f0",
                "on-surface-variant": "#334155",

                "surface-container-lowest": "#ffffff",
                "surface-container-low": "#f1f5f9",
                "surface-container": "#e2e8f0",
                "surface-container-highest": "#ffffffff",
                "surface-container-high": "#94a3b8",

                "surface-bright": "#f8fafc",
                "surface-dim": "#cbd5e1",
                "surface-tint": "#0369a1",
                "inverse-surface": "#1e293b",
                "inverse-on-surface": "#f8fafc",

                "outline": "#94a3b8",
                "outline-variant": "#cbd5e1",

                "error": "#dc2626",
                "on-error": "#ffffff",
                "error-container": "#fee2e2",
                "on-error-container": "#7f1d1d"
            },
            borderRadius: {
                "DEFAULT": "1rem",
                "lg": "2rem",
                "xl": "3rem",
                "full": "9999px"
            },
            spacing: {
                "container-max": "1200px",
                "margin-desktop": "40px",
                "margin-mobile": "16px",
                "gutter": "24px",
                "base": "8px"
            },
            fontFamily: {
                "label-sm": ["Montserrat", "sans-serif"],
                "body-lg": ["Montserrat", "sans-serif"],
                "headline-lg-mobile": ["Montserrat", "sans-serif"],
                "label-md": ["Montserrat", "sans-serif"],
                "display-lg": ["Montserrat", "sans-serif"],
                "headline-lg": ["Montserrat", "sans-serif"],
                "headline-md": ["Montserrat", "sans-serif"],
                "body-md": ["Montserrat", "sans-serif"]
            },
            fontSize: {
                "label-sm": ["12px", { "lineHeight": "16px", "fontWeight": "500" }],
                "body-lg": ["18px", { "lineHeight": "28px", "fontWeight": "400" }],
                "headline-lg-mobile": ["28px", { "lineHeight": "36px", "fontWeight": "700" }],
                "label-md": ["14px", { "lineHeight": "20px", "letterSpacing": "0.01em", "fontWeight": "600" }],
                "display-lg": ["48px", { "lineHeight": "60px", "letterSpacing": "-0.02em", "fontWeight": "700" }],
                "headline-lg": ["32px", { "lineHeight": "40px", "fontWeight": "700" }],
                "headline-md": ["24px", { "lineHeight": "32px", "fontWeight": "600" }],
                "body-md": ["16px", { "lineHeight": "24px", "fontWeight": "400" }]
            }
        },
    },
    plugins: [],
}
