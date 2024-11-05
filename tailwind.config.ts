import {join} from "path"
import type {Config} from "tailwindcss"
import typography from "@tailwindcss/typography"

export default {
	darkMode: "class",
	content: ["./src/**/*.{html,js,svelte,ts}"],
	plugins: [typography],
	theme: {
		screens: { // these px values are ranges of "_px AND UP"
			// nothing: phones in portrait
			"phones-only": {"max": "600px"},
			"tablet": "600px", // tablet portrait or phones in landscape
			"laptop": "1000px", // tablets in landscape or small monitors
			"monitor": "1800px", // regular monitors
		},
		extend: {
			colors: {
				"base": "#001225",
				"base-light": "#00203D",
				"base-content": "#FFF7CE",
				"accent": "#FFC300",
				"accent-light": "#FFD60A",
				"accent-content": "#000814",
			},
			fontFamily: {
				title: ["Josefin Sans", "sans-serif"],
			},
			container: {
				center: true,
				padding: "2rem",
			},
		}
	},
} satisfies Config
