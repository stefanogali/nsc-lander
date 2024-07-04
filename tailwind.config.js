/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
	theme: {
		fontSize: {
			sm: "0.8rem",
			base: "1rem",
			xl: "1.25rem",
			"2xl": "1.563rem",
			"3xl": "1.953rem",
			"4xl": "2.441rem",
			"5xl": "3.052rem",
			"header-2": "2.5rem",
			"header-3": "1.5rem",
			"header-4": "1.3rem",
		},
		extend: {
			backgroundImage: {
				hero: "url('/images/Cisco_Banner.png')",
				strengthOne: "url('/images/Driving_Differentiation.png')",
				strength2: "url('/images/Customer_Journey.png')",
				strength3: "url('/images/Distribution.png')",
				strength4: "url('/images/Transforming_Retail.png')",
				dots: "url('/images/dots.png')",
			},
			fontFamily: {
				montserrat: "var(--font-montserrat)",
			},
			colors: {
				"light-grey": "#ececee",
				blue: "#0e163b",
				"light-blue": "#299bd9",
				turquoise: "#26ab98",
				"dark-turquoise": "#1b6c7d",
			},
		},
	},
	plugins: [],
};
