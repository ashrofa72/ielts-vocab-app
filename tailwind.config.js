/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6366F1', // Vibrant indigo
        secondary: '#EC4899', // Soft pink
        accent: '#FBBF24', // Bright yellow
        success: '#22C55E', // Green for success
        danger: '#EF4444', // Red for errors
        background: '#F9FAFB', // Light gray background
        customBlue: '#3B82F6', // Custom blue color
      },
    },
  },
  plugins: [],
};