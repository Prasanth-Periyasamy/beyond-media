import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    // Break points
    screens: {
      '4xl': { min: '2560px' },
      '3xl': { max: '2560px' },
      '2xl': { max: '1536px' },
      xl: { max: '1280px' },
      lg: { max: '1024px' },
      md: { max: '768px' },
      sm: { max: '640px' },
      xs: { max: '480px' },
    },
    extend: {
      boxShadow: {
        'header-blue': '0px 4px 23.5px 0px rgba(26, 129, 243, 1)',
        'custom-blue': '0px 4px 40px 0px rgba(26, 129, 243, 0.5)',
      },
      order: {
        '1': '1',
        '2': '2',
        '3': '3',
        '4': '4',
        // Add more if needed
      },
      colors: {
        primary: 'var(--crayola)',
        secondary: '#FFFFFF33',
        tertiary: 'var(--header-bg)',
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(186.01deg, #1A81F3 -13.79%, #000000 98%)',
      },
    },
  },
  plugins: [],
};
export default config;
