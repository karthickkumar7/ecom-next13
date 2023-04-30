/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        maxWidth: {
            container: '1520px',
            contentContainer: '1200px',
        },
        extend: {
            screens: {
                xs: '320px',
                sm: '375px',
                sml: '500px',
                md: '667px',
                mdl: '768px',
                lg: '960px',
                lgl: '1024px',
                xl: '1280px',
                '2xl': '1400px',
            },

            colors: {
                tealBlue: '#29475c',
                tealBlueDark: '#1f3442',
            },
        },
    },
    plugins: [],
};
