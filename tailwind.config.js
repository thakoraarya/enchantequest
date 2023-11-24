/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,ts,jsx,tsx}",],
    theme: {
        fontFamily: {
            'kaisei': ['kaisei tokumin'],
            'flex': ['Roboto Flex'],
        },
        extend: {
            colors: {
                "gray100": '#E1E1E1',
                "gray200": '#e5e5e5',
                "gray300": '#ccc',
                "gray400": '#b3b3b3',
                "gray500": '#919191',
                "gray600": '#5A5A5A',
                "gray700": '#1A1A1A',
                "gray800": '#18181b',
                "gray900": '#151515',
                "green": '#4caf50',
                "eqred": '#9E0101',
            },
            backgroundImage: {
                "bgblob": "url('https://cloud.appwrite.io/v1/storage/buckets/655f53e08a4bdbbd88fb/files/6560791da287aa5194e1/view?project=655e0bdd11e79ff324ed&mode=admin')",
                "spiderbg": "url('https://cloud.appwrite.io/v1/storage/buckets/655f53e08a4bdbbd88fb/files/655f5413966aa6e7cbe0/view?project=655e0bdd11e79ff324ed&mode=admin')",
            },
            fontSize: {
                '6xl': '56px'
            }
        },
    },
    plugins: [],
}