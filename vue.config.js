module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/todo/' : '/',
  pwa: {
    name: 'Todo',
    themeColor: "#F78E88",
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black'
  }
}