<template>
  <div id="app">
    <ToDo/>
  </div>
</template>

<script>
import ToDo from './components/ToDo.vue'
import { mapActions } from 'vuex'

export default {
  name: 'app',
  components: {
    ToDo
  },
  methods: {
    ...mapActions(['initDb'])
  },
  created() {
    this.initDb()
  }
}
</script>

<style lang="scss">

@import url('https://fonts.googleapis.com/css?family=Poppins:400:600');

*,
*:before,
*:after {
  box-sizing: border-box;
  position: relative;
}

body, html {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #5F7A93;
  background: linear-gradient(to bottom left, #FC9A7D, #F26D9C);
  font-size: 56%;
}

#app {
  font-family: 'Poppins', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 1.8rem;
  text-align: center;
  background-color: #F8FBFF;
  height: 85vh;
  width: 46vh;
  border: 1px solid #CCC;
  border-radius: 3vh;
  box-shadow: 0 2rem 4rem rgba(black, 0.1);
  padding-top: 0.5rem 0 0;

  @media screen and (max-width: 412px) {
    height: 95%;
    width: 95%;
  }
}

ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

li, h1, h2, h3, h4, h5, p, button {
  margin: 0;
  padding: 0;
}

p {
  font-size: 1.7rem;
}

button {
  color: #5F7A93;
  font-weight: bold;
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
  &:focus {
    outline: none;
  }
}

</style>
