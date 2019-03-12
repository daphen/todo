module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/todo/'
    : '/',
  
  pwa: {
    name: 'Todo',
    background_color: "#F17399",
    theme_color: "#F78E88"
  }
}