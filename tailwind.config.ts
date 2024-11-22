import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        base: ['16px', '150%'],
      },
      colors: {
        'primary':'#1C2515',
        'sec':'#D7CFBC',
        'surface': '#D9D9D9',
        
        'textdark' : {
          DEFAULT : '#11170D',
            200 : '#596154',
            300 : '#3A3F36',
        }
      },
      fontFamily: {
        im_fell: ['var(--font-im)', 'serif'],
        im_fell_italic: ['var(--font-im-italic)', 'serif']
      }
    },
  },
  plugins: [],
} satisfies Config;
