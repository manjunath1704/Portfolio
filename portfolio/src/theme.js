// for theming used following blog post: https://dev.to/mikewheaton/theming-with-styled-components-19ce

const theme = {
    fontSource: 'https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap',
    colors: {
        text: '#fff',
        background: '#fff',
        primary: '#0E0C38', // light blue
        secondary: '#040221', // dark blue
        ternary: '#FF0513', //orange 
        accent: '#d396c3',
        muted: '#efefef',
    },
    space: [
        0,
        '0.125rem', // 2px
        '0.25rem', // 4px
        '0.5rem', // 8px
        '1rem', // 16px
        '2rem', // 32px
        '4rem', // 64px
        '8rem', // 128px
        '16rem', // 256px
    ],
    fontFamily: {
        body: 'Poppins, sans-serif',
        heading: 'Poppins, sans-serif',
    },
    fontSizes: {
        xl: '4rem',
        l: '2rem',
        m: '1rem',
        s: '0.9rem',
        xs: '0.75rem',
    },
    fontWeights: {
        light: 200,
        normal: 400,
        bold: 700,
        thin: 100,
        extraLight: 200,
        light: 300,
        regular: 400,
        medium: 500,
        semiBold: 600,
        bold: 700,
        extraBold: 800,
        black: 900,
    },
    lineHeights: {
        body: 1.5,
        heading: 1.1,
    },
    borders: {
        none: 'none',
        thin: '1px solid',
    },
    radii: {
        none: 0,
        base: '0.25em',
        round: 99999,
    },
};
export default theme;