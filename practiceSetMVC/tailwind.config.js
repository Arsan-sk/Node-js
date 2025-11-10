/** Tailwind v4 config to ensure all EJS templates are scanned */
module.exports = {
  // Ensure Tailwind scans ALL template + script files where utility classes may appear
  content: [
    './views/**/*.{ejs,html}',
    './controller/**/*.js',
    './routes/**/*.js',
    './models/**/*.js'
  ],
  theme: {
    extend: {}
  },
  plugins: []
};
