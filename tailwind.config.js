/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,ts,jsx,tsx}",],
    theme: {
        fontFamily: {
            'kaisei': ['kaisei tokumin'],
            'flex': ['Roboto Flex'],
        },
        extend: {
            colors: {},
            fontSize: {
                '6xl': '56px'
            }
        },
    },
    plugins: [],
}